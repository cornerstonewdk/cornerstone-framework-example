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

  var collection = new Collection();

  collection.requestData = function (start, count) {
    var self = this;
    collection.defaults.data.page = Math.ceil(start / count) + 1;
    /**
     * 가져온 데이터를 collection 계속 유지하기 위해 update, remove 옵션을 추가한다.
     */
    collection.fetch({
      update: true,
      remove: false,
      success: function (data) {
        data = data.toJSON();
        self.updateCache(start, data);
      }
    });
  };

  return collection;
});