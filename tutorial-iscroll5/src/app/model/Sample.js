define([ 'backbone' ], function (Backbone) {
  return Backbone.Model.extend({
    /**
     * Flickr에서 가져온 정보를 이용해서 Flickr 이미지 URL 형식으로 반환
     * http://farm{farm-id}.static.flickr.com/{server-id}/{id}_{secret}.jpg
     */
    getImageUrl: function () {
      return 'http://farm' + this.get('farm') + '.static.flickr.com/' + this.get('server')
        + '/' + this.get('id') + '_' + this.get('secret') + '_s.jpg'
    }
  });
});