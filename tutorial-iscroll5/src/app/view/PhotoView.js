define([
  'backbone',
  'view/PhotoItemView',
  'template!view/PhotoView',
  'vendor/iscroll-infinite'
], function (Backbone, PhotoItemView, template) {

  return Backbone.View.extend({
    el: '#photoView',

    render: function () {
      var self = this;
      this.$el.html(template());

      // iScroll 5 Infinite Scrolling 적용
      setTimeout(function () {
        new IScroll('#wrapper', {
          mouseWheel: true,
          mouseWheelSpeed: 100, // 휠마우스 속도 증가
          deceleration: 0.01, // flickr 데이터의 한계로 인해 cacheSize을 1000이상 줄 수 없으므로 감속 수치를 증가시킨다.
          infiniteElements: '#scroller .item',
          infiniteLimit: 1000,
          dataset: self.collection.requestData,
          dataFiller: updateContent,
          cacheSize: 200
        });

        function updateContent(el, data) {
          var model = new self.model(data);
          var photoItemView = new PhotoItemView({
            el: el,
            model: model
          });
          photoItemView.render();
        }
      }, 100);
      return this;
    }
  });
});
