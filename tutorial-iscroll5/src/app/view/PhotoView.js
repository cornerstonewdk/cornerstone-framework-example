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
        var myScroll = new IScroll('#wrapper', {
          mouseWheel: true,
          infiniteElements: '#scroller .item',
          infiniteLimit: 1000,
          dataset: requestData,
          dataFiller: updateContent,
          cacheSize: view.collection.defaults.data.per_page / 2
        });

        /**
         * 일반 Pagination과 다른 구조
         * @type {number}
         */
        var prevPage = 1;
        function requestData(start, count) {
          var self = this;
          var page = Math.floor(start / count);
          page = page <= 0 ? 1 : page + 1;

          if(prevPage != page) {
            view.collection.defaults.data.page = page;
            /**
             * 대이터를 가져온 후 Cache 업데이트가 될 때 스크롤
             */
            self.disable();
            view.collection.fetch({
              success: function (data) {
                data = data.toJSON();
                self.updateCache((page - 1) * count, data);
                self.enable();
              }
            });
            prevPage = page;
          }
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
