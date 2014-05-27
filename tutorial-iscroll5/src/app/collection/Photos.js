/**
 * JSONP 기능 제공 Backbone Plugin 제작 필요
 */

define([ 'backbone' ], function (Backbone) {
  var Collection = Backbone.Collection.extend({
    defaults: {
      data: {
        format: 'json',
        per_page: 500,
        page: 1
      },
      dataType: 'jsonp',
      jsonpCallback: 'jsonFlickrApi'
    },
    url: 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=4a2d98f5823095fa3b5c970518bdec8a',
    parse: function (response) {
      return response.photos.photo;
    },
    fetch: function (options) {
      _.extend(this.defaults, options);
      return Backbone.Collection.prototype.fetch.call(this, this.defaults);
    }
  });

  return new Collection();
});