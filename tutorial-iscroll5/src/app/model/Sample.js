define([ 'backbone' ], function (Backbone) {
  return Backbone.Model.extend({
    initialize: function () {
      this.set({
        'title': this.get('name'),
        'imageUrl': this.get('url')
      });
    }
  });
});