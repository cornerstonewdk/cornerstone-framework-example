// list.js
define([
    'jquery',
    'underscore',
    'backbone',
    'widget-listview',
    'template!./list',
    'template!./list-item'
], function ($, _, Backbone, ListView, Template, ItemTemplate) {
    return Backbone.View.extend({
        el: '#list',
        render: function () {
            this.$el.html(Template());

            // 콜렉션에 데이터를 가져올 url를 설정한다.
            var ItemList = Backbone.Collection.extend({
                url: "data/sample-list.json",
                model: Backbone.Model.extend({
                    idAttribute: "_id" // 기본 id 속성은 id이다. id 명칭을 변경하고 싶을 때 설정
                })
            });
            var itemList = new ItemList();

            // 리스트 아이템 뷰 정의
            var ItemView = Backbone.View.extend({
                tagName: "a",
                className: "list-group-item",
                render: function () {
                    this.$el.html(ItemTemplate(this.model.attributes));
                }
            });

            // 리스트뷰 뷰 객체를 생성하고 el에 설정된 타겟에 model객체에 담긴 데이터를 통해 리스트뷰를 그린다.
            var listView = new ListView({
                el: "#listView",
                collection: itemList,
                itemView: ItemView, // 사용자가 정의하는 리스트의 한 Row가 되는 SubView
                optimization: true
            });
            listView.render();
            itemList.fetch();

        }
    });
});