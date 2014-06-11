/**
 * JSONP 기능 제공 Backbone Plugin 제작 필요
 */

define([ 'backbone'], function (Backbone) {
  var Collection = Backbone.Collection.extend({
    url: 'https://apis.sktelecom.com/v1/baas/data/Sample?limit=&skip=',
    parse: function (response) {
      console.log(response);
      return response.results;
    }
  });

  var collection = new Collection();

  var cacheData;
  collection.requestData = function (start, count) {
    var self = this;

    // cache된 데이터를 반복적으로 추가한다.
    if(collection.length) {
      console.log(collection.toJSON().length);
      collection.add(cacheData);
      self.updateCache(start, collection.toJSON());

    // 최초 BaaS 서버에서 데이터를 가져온다.
    } else {
      collection.fetch({
        update: true,
        remove: false,
        success: function (data) {
          data = cacheData = data.toJSON();
          self.updateCache(start, data);
        }
      });
    }
  };

  return collection;
});