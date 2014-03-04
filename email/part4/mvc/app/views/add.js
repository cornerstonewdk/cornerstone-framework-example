// add.js
define([
    'jquery',
    'underscore',
    'backbone',
    'template!./add'
], function ($, _, Backbone, Template) {
    return Backbone.View.extend({
        el: '#add',
        render: function() {
            this.$el.html(Template());
        }
    });
});