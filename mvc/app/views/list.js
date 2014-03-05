// list.js
define([
    'jquery',
    'underscore',
    'backbone',
    'widget-listview',
    'template!./list'
], function ($, _, Backbone, ListView, Template) {
    return Backbone.View.extend({
        el: '#list',
        render: function () {
            this.$el.html(Template());
        }
    });
});