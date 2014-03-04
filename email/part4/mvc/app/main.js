// main.js
define([
    'jquery',
    'underscore',
    'backbone',
    'multipage-router',
    'widget-chart',
    'views/list',
    'views/add',
    'views/detail'
], function ($, _, Backbone, MultipageRouter, Chart, ListView, AddView, DetailView) {
    return {
        launch: function () {
            /**
             * View 객체 생성
             */
            var listView = new ListView();
            var addView = new AddView();
            var detailView = new DetailView();

            /**
             * Multipagerouter 정의
             */
            var MainRouter = MultipageRouter.extend({
                pages: {
                    'list-page': {
                        fragment: [ '', 'list' ],
                        el: '#list',
                        render: function () {
                            listView.render();
                        },
                        active: 'active',
                        inactive: 'inactive'
                    },
                    'add-page': {
                        fragment: 'add',
                        el: '#add',
                        render: function () {
                            addView.render();
                        },
                        active: 'active',
                        inactive: 'inactive'
                    },
                    'detail-page': {
                        fragment: 'detail',
                        el: '#detail',
                        render: function () {
                            detailView.render();

                            var Model = Backbone.Model.extend({
                                url: 'data/pie.json'
                            });

                            var chart = new Chart({
                                el: '#pie',
                                model: new Model(),
                                chartOptions: {
                                    chartType: 'pie'
                                }
                            });

                            chart.model.fetch();
                        },
                        active: 'active',
                        inactive: 'inactive'
                    }
                },
                /**
                 * 화면 전환 완료시 이벤트 처리를 위한 함수
                 */
                active: function() {
                    /**
                     * 화면 전환이 완료되면 현재 Fragment Identifier 페이지를 제외하고 모두 Release 시킨다.
                     */
                    $('#pages > section').not(this.currentPage.el).empty();
                },
                /**
                 * 화면 전환 실행 전 이벤트 처리를 위한 함수
                 */
                inactive: function() {
                    console.log(Backbone.history.fragment, 'inactive');
                }
            });

            new MainRouter();

            // Fragment identifier 의 변경을 감지하고 라우팅을 처리한다.
            Backbone.history.start();
        }
    };
});