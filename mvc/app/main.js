// main.js
define([
    'jquery',
    'underscore',
    'backbone',
], function ($, _, Backbone) {
    return {
        launch: function () {


            // Fragment identifier 의 변경을 감지하고 라우팅을 처리한다.
            Backbone.history.start();
        }
    };
});