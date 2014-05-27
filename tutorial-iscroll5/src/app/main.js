/**
 * main.js
 * 애플리케이션 메인
 */
define([
  'backbone',
  'multipage-router',
  'collection/Photos',
  'model/Photo',
  'view/PhotoView',
  'bootstrap',
  'style!main'
], function (Backbone, MultipageRouter, Photos, Photo, PhotoView) {
  return {
    launch: function () {
      // Router
      var MainRouter = MultipageRouter.extend({
        pages: {
          'page1': {
            fragment: [ '', 'photoView' ],
            el: '#photoView',
            render: function () {
              var photoView = new PhotoView({
                collection: Photos
              });
              photoView.render();
            }
          },
          'default': {
            active: function (path) {
              alert('Page not found');
              history.back();
            }
          }
        }
      });

      new MainRouter();
      Backbone.history.start();

      window.App = {};
      App.Photos = Photos;
      App.Photo = Photo;
    }
  };
});
