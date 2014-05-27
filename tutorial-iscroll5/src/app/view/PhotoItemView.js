define([
  'backbone',
  'model/Photo',
  'template!view/PhotoItemView'
], function (Backbone, Photo, template) {
  return Backbone.View.extend({
    render: function () {
      this.$el.html(template(this.model.toJSON()));
      return this;
    }
  });
});
