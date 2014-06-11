/**
 * main.js
 * 애플리케이션 메인
 */
define([
  'backbone',
  'multipage-router',
  'collection/Photos',
  'collection/Samples',
  'model/Photo',
  'model/Sample',
  'view/PhotoView',
  'bootstrap',
  'style!main'
], function (Backbone, MultipageRouter, Photos, Samples, Photo, Sample, PhotoView) {
  return {
    launch: function () {
      // Router
      var MainRouter = MultipageRouter.extend({
        pages: {
          'page1': {
            fragment: [ '', 'photoView' ],
            el: '#photoView',
            render: function () {
              console.log('photo');
              var photoView = new PhotoView({
                collection: Photos,
                model: Photo
              });
              photoView.render();
            }
          },
          'baas': {
            fragment: [ 'baas' ],
            el: '#photoView',
            render: function () {
              console.log('baas');

              // Ajax 헤더 설정
              $.ajaxSetup({
                headers: {
                  'TDCProjectKey': 'f7e574a7-4647-4c4c-b3f0-66c479f1f724'
                }
              });

              var photoView = new PhotoView({
                collection: Samples,
                model: Sample
              });
              photoView.render();
            }
          },
          'default': {
            active: function () {
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
      App.Samples = Samples;
      App.Sample = Sample;
    }
  };
});
