// list.js
define([
    'jquery',
    'underscore',
    'backbone',
    'template!./list'
], function ($, _, Backbone, Template) {
    return Backbone.View.extend({
        el: '#list',
        render: function() {
            this.$el.html(Template());
        }
    });
});