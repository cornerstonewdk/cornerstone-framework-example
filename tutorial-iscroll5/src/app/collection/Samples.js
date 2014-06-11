/**
 * JSONP 기능 제공 Backbone Plugin 제작 필요
 */

define([ 'backbone' ], function (Backbone) {
  var Collection = Backbone.Collection.extend({
    url: 'https://apis.sktelecom.com/v1/baas/data/Sample?limit=&skip=',
    parse: function (response) {
      console.log(response);
      console.log(response.results);
      return response.results;
    }
  });

  return new Collection();
});