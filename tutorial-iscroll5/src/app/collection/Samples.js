define([ 'backbone'], function (Backbone) {
  var Collection = Backbone.Collection.extend({
    url: 'https://apis.sktelecom.com/v1/baas/data/Sample?limit=&skip=',
    parse: function (response) {
      return response.results;
    }
  });

  var collection = new Collection();

  var cacheData;
  // iScroll5 Infinite 기능을 사용해야하므로 BaaS에 등록된 200개의 데이터를 최초에 호출 후 Front level에서 반복적으로 Collection에 데이터를 쌓아 화면에 나타나도록 합니다.
  collection.requestData = function (start, count) {
    var self = this;

    // cache된 데이터를 반복적으로 추가한다.
    if(collection.length) {
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