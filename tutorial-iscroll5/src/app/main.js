/**
 * main.js
 * 애플리케이션 메인
 */
define([
  'view/page1', 'backbone', 'multipage-router', 'bootstrap', 'style!main',
], function (Page1View, Backbone, MultipageRouter) {
  return {
    launch: function () {

      // Router
      var MainRouter = MultipageRouter.extend({
        pages: {
          'page1': {
            fragment: [ '', 'page1' ],
            el: '#page1',
            render: function () {
              new Page1View().render();
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
    }
  };
});
