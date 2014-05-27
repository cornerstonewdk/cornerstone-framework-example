define([
  'backbone',
  'model/Photo',
  'view/PhotoItemView',
  'template!view/PhotoView',
  'vendor/iscroll-infinite'
], function (Backbone, Photo, PhotoItemView, template) {

  return Backbone.View.extend({
    el: '#photoView',

    render: function () {
      var view = this;
      this.$el.html(template());

      // iScroll 5 Infinite Scrolling 적용
      setTimeout(function () {
        new IScroll('#wrapper', {
          mouseWheel: true,
          mouseWheelSpeed: 100, // 휠마우스 속도 증가
          deceleration: 0.01, // flickr 데이터의 한계로 인해 cacheSize을 1000이상 줄 수 없으므로 감속 수치를 증가시킨다.
          infiniteElements: '#scroller .item',
          infiniteLimit: 1000,
          dataset: requestData,
          dataFiller: updateContent,
          cacheSize: 500
        });

        function requestData(start, count) {
          var self = this;
          view.collection.defaults.data.page = Math.ceil(start / count) + 1;
          /**
           * 가져온 데이터를 collection 계속 유지하기 위해 update, remove 옵션을 추가한다.
           */
          view.collection.fetch({
            update: true,
            remove: false,
            success: function (data) {
              data = data.toJSON();
              self.updateCache(start, data);
            }
          });
        }

        function updateContent(el, data) {
          var photo = new Photo(data);
          photo.set({
            'imageUrl': photo.getImageUrl()
          });
          var photoItemView = new PhotoItemView({
            el: el,
            model: photo
          });
          photoItemView.render();
        }
      }, 100);
      return this;
    }
  });
});
