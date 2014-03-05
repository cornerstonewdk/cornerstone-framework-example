# Part 4. 반응이 빠른 모바일 웹을 만들려면 ?

Part 4에서는 [Cornerstone Framework](https://github.com/cornerstonewdk/cornerstone-framework/tree/dev-2.0)를 이용해서 이전에 구현한 화면전환, 고정메뉴, 차트등을 활용해서 간단한 웹앱을 만들고, 추가적으로 ListView를 활용한 대용량 데이터 Scrolling 및 CSS 하드웨어 가속을 적용한 Carousel을 통해 성능 향상까지 적용된 웹앱을 구현할 것입니다. 

<table cellspacing="0" cellpadding="0" border="0" style="border: none; width: 100%;">
    <tbody>
        <tr>
            <td style="border-top: none; text-align: center;">
                <a href="http://cornerstonewdk.github.io/cornerstone-framework-example/email/part2/html/index.html">
                    <img alt="" width="320"
                    src="https://31.media.tumblr.com/1eb1c096f98c62d446c13e5e8aa5e846/tumblr_inline_n1y44vfd0h1rc9vvo.png"> 
                </a>
            </td>
        </tr>
    </tbody>
</table>

## 기존 예제를 이용해 간단한 웹앱 만들기
- [Part 1. 화면 전환 효과가 필요하신가요? ](http://blog.cornerstone.sktelecom.com/post/76303411884/part-1)
- [Part 2. 화면 상단과 하단에 고정된 영역이 필요하세요? ](http://blog.cornerstone.sktelecom.com/post/77151976915/part-2)
- [Part 3. 차트가 필요하신가요?](http://blog.cornerstone.sktelecom.com/post/77809257661/part-3)

아래 예제를 시작하기 위한 샘플 파일을 아래 링크를 통해 다운받을 수 있습니다. 다운로드 받은 소스를 통해 아래 등장하는 코드를 추가하면서 예제를 점진적으로 완성해 나갈 수 있습니다.

- [예제 소스](https://github.com/cornerstonewdk/cornerstone-framework-example/archive/email-part4-incomplete.zip)

### 1. 페이지간 이동 제어를 위한 라우팅 및 화면전환 만들기
[Part 1. 화면 전환 효과가 필요하신가요? ](http://blog.cornerstone.sktelecom.com/post/76303411884/part-1)에서 다뤘던 예제 완성 소스를 그대로 가져옵니다.

Part 1 예제 완성 소스 [다운로드](https://github.com/cornerstonewdk/cornerstone-framework-example/archive/email-part1-complete.zip) 

이 소스 중 페이지간 이동 제어를 위해 라우팅 기능이 있는 MVC방식을 이용합니다.

### 2. 고정 메뉴 만들기
가져온 Part 1 MVC 소스 중  `index.html`에 Header와 Footer에 고정 메뉴를 추가합니다. 고정 메뉴를 추가한 후 Part 1에서 템플릿 페이지에 있던 페이지 이동을 위한 링크를 
Footer 메뉴로 옮겨야 하므로 Footer 메뉴에 적용 후 기존 템플릿의 페이지 이동을 위한 `a`태그를 삭제해야합니다.

***코드 1-1*** | [고정 Header / Footer 추가 index.html ] (https://raw.github.com/cornerstonewdk/cornerstone-framework-example/email-part4/email/part4/mvc/index.html)
```
<!-- Start 고정 Header -->
<header>
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">Cornerstone</a>
        </div>
    </nav>
</header>
<!-- //End 고정 Header -->

<!-- Start Pages -->
<div id="pages" class="container">
    <section id="list"></section>
    <section id="add"></section>
    <section id="detail"></section>
</div>
<!-- //End Pages -->

<!-- Start 고정 Footer -->
<footer>
    <div class="navbar-mobile btn-group btn-group-justified navbar-fixed-bottom">
        <a href="#list" class="btn btn-default" data-transition="slide">
            <span class="glyphicon glyphicon-info-sign"></span>
            <span class="text">목록</span>
        </a>
        <a href="#detail" class="btn btn-default" data-transition="slide" data-duration="1500">
            <span class="glyphicon glyphicon-star"></span>
            <span class="text">상세</span>
        </a>
        <a href="#add" class="btn btn-default" data-transition="slide">
            <span class="glyphicon glyphicon-download-alt"></span>
            <span class="text">등록</span>
        </a>
    </div>
</footer>
<!-- //End 고정 Footer -->
```

위 코드를 반영하면 Part 1의 컨텐츠가 Part 2의 Header 고정 메뉴에 겹치는 문제가 생깁니다. 이 문제는 Part 2의 스타일 파일을 가져오면 해결할 수 있습니다. 하지만 기존 Part 1의 스타일명은 `part1.css`이고, Part 2의 스타일명은  `main.css`입니다. 스타일 명이 상이하므로
`main.css`와 같이 원하는 스타일명을 정하고 두 스타일을 `main.css` 파일에 합치면 겹치는 문제를 해결할 수 있습니다.

<table cellspacing="0" cellpadding="0" border="0" style="border: none; width: 100%;">
    <tbody>
        <tr>
            <td style="border-top: none; text-align: center;">
                <a href="http://cornerstonewdk.github.io/cornerstone-framework-example/email/part2/html/index.html">
                    <img alt="" width="320"
                    src="https://31.media.tumblr.com/a1ea5e411703e32a5b8b7429eb4d5350/tumblr_inline_n1xe08v03k1rc9vvo.png"> 
                </a>
            </td>
        </tr>
    </tbody>
</table>

### 3. 상세페이지에 차트 위젯 추가하기
템플릿 중 detail.template 파일을 아래 소스로 변경합니다.

***코드 3-1*** | [detail.template](https://raw.github.com/cornerstonewdk/cornerstone-framework-example/email-part4/email/part4/mvc/app/views/detail.template)
```
<!-- START 샘플 상세 페이지 -->
<div class="page-header">
    <h1>Media
        <small>heading</small>
    </h1>

    <div id="pie" class="container"></div>
</div>
<!-- //END 샘플 상세 페이지 -->
```
그리고 Part 3에서 사용한 샘플 데이터를 Part 4에 추가한 후, detail 라우팅에 차트 위젯을 적용할 코드를 추가합니다.

***코드 3-2*** | [main.js](https://raw.github.com/cornerstonewdk/cornerstone-framework-example/email-part4/email/part4/mvc/app/main.js)
```
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
			...
			'detail-page': {
                        fragment: 'detail',
                        el: '#detail',
                        render: function () {
                            detailView.render();

                            var Model =
                            Backbone.Model.extend({
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
			...
        }
    };
});
```

마지막으로 파이 차트의 크기를 정하기 위한 스타일을 main.css에 적용합니다.

***코드 3-3*** | [main.css](https://raw.github.com/cornerstonewdk/cornerstone-framework-example/email-part4/email/part4/stylesheets/main.css)
```
body {
    padding-top: 60px;
    padding-bottom: 70px;
}

...

#pie {
    width: 300px;
    height: 300px;
}
...
```

<table cellspacing="0" cellpadding="0" border="0" style="border: none; width: 100%;">
    <tbody>
        <tr>
            <td style="border-top: none; text-align: center;">
                <a href="http://cornerstonewdk.github.io/cornerstone-framework-example/email/part2/html/index.html">
                    <img alt="" width="320"
                    src="https://31.media.tumblr.com/1c76d1686774f5c80afad99dc7dd89bb/tumblr_inline_n1xew7ex3r1rc9vvo.png"> 
                </a>
            </td>
        </tr>
    </tbody>
</table>

### 4. ListView 적용하기
3번까지 기존 예제들을 통합하는 작업을 수행했습니다. 이번 단계에서는 목록 페이지에 
ListView를 적용할 예정입니다. ListView는 대용량 스크롤이 필요한 목록 등에 활용하기 좋은 위젯 입니다. [자세히 보기](http://cornerstone.sktelecom.com/2/livedoc/#4402)

기존 list.template을 ListView 적용을 위해 아래 코드 4-1로 변경하고, list-item.template을 만듭니다.

***코드 4-1*** | [list.template]()
```
<!-- START 샘플 리스트 -->
<div id="listView" class="list-view list-group"></div>
<!-- //END 샘플 리스트 -->
```

***코드 4-2*** | [list-item.template](https://github.com/cornerstonewdk/cornerstone-framework-example/raw/email-part4/email/part4/mvc/app/views/list-item.template)
```
{{_id}}. {{this.title}}
<div class="pull-right">
    <span class="badge">{{this.published}}</span>
    <span class="glyphicon glyphicon-chevron-right"></span>
</div>
```

그리고 아래 샘플 데이터를 `pie.json`이 있는 `data/` 디렉토리에 추가합니다.

***코드 4-3*** | [sample-list.json](https://raw.github.com/cornerstonewdk/cornerstone-framework-example/email-part4/email/part4/mvc/data/sample-list.json)
```
[
    {
        "_id": 1,
        "title": "Lompoc",
        "published": "VA"
    },
    ...
    {
        "_id": 100,
        "title": "Calabasas",
        "published": "WY"
    }
]
```

마지막으로 `list.js` 뷰를 아래 코드 4-4과 같이 변경합니다.

***코드 4-4*** | [list.js](https://raw.github.com/cornerstonewdk/cornerstone-framework-example/email-part4/email/part4/mvc/app/views/list.js)
```
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
```

<table cellspacing="0" cellpadding="0" border="0" style="border: none; width: 100%;">
    <tbody>
        <tr>
            <td style="border-top: none; text-align: center;">
                <a href="http://cornerstonewdk.github.io/cornerstone-framework-example/email/part2/html/index.html">
                    <img alt="" width="320"
                    src="https://31.media.tumblr.com/1eb1c096f98c62d446c13e5e8aa5e846/tumblr_inline_n1y44vfd0h1rc9vvo.png"> 
                </a>
            </td>
        </tr>
    </tbody>
</table>

### 5. CSS 가속을 이용한 Carousel 적용하기
CSS 가속을 적용하기 위해 추가 페이지에 Carousel 위젯을 추가합니다.
[자세히 보기](http://cornerstone.sktelecom.com/2/livedoc/#4310)

***코드 5-1*** | [add.template](https://raw.github.com/cornerstonewdk/cornerstone-framework-example/email-part4/email/part4/mvc/app/views/add.template)
```
<!-- START 캐로셀 -->
<div id="carousel-example-generic" class="carousel slide bs-docs-carousel-example">
    <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1" class=""></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
       ...
    </div>
    <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
        <span class="icon-prev"></span>
    </a>
    <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
        <span class="icon-next"></span>
    </a>
</div>
<!-- //END 캐로셀 -->
```

그리고 Carousel 기능이 작동할 수 있도록 `add.js`뷰의 define에 `widget-carousel`을 추가합니다.

***코드 5-2*** | [add.js](https://raw.github.com/cornerstonewdk/cornerstone-framework-example/email-part4/email/part4/mvc/app/views/add.js)
```
// add.js
define([
    'jquery',
    'underscore',
    'backbone',
    'template!./add',
    'widget-carousel'
], function ($, _, Backbone, Template) {
...  
```

마지막으로  그 위젯의 스타일에 CSS 가속이 적용될 수 있도록 코드 5-3을 main.css에 스타일 코드를 추가합니다.
아래 스타일 속성 중 `-webkit-transform` 속성은 특히 모바일에서 하드웨어 가속을 이용하여 성능이 뛰어나므로 모바일에서 사용하는 것을 적극 권장합니다. 

***코드 5-3*** | [main.css](https://raw.github.com/cornerstonewdk/cornerstone-framework-example/email-part4/email/part4/stylesheets/main.css)

```
/* 하드웨어 가속 속성을 적용한.carousel .carousel-inner  스타일 */
.carousel .carousel-inner .item {
    -webkit-transition: 0.6s ease-in-out -webkit-transform;
    -webkit-backface-visibility: hidden;
}

.carousel .carousel-inner .active {
    -webkit-transform: translate(0%, 0%);
}

.carousel .carousel-inner .next {
    -webkit-transform: translate(100%, 0%);
    left: 0;
}

.carousel .carousel-inner .prev {
    -webkit-transform: translate(-100%, 0%);
    left: 0;
}

.carousel .carousel-inner .next.left, .carousel .carousel-inner.prev.right {
    -webkit-transform: translate(0%, 0%);
    left: 0;
}

.carousel .carousel-inner .active.left {
    -webkit-transform: translate(-100%, 0%);
    left: 0;
}

.carousel .carousel-inner .active.right {
    -webkit-transform: translate(100%, 0%);
    left: 0;
}
```

갤럭시 S3와 같은 모바일 디바이스로 코드 5-1 적용 전/후의 Carousel 애니메이션 부드러움을 직접 체험해보시길 바랍니다.


이제 구현된 예제를 확인해 볼 수 있습니다. 지금까지 가이드 한 예제 소스는 Cornerstone Framework 개발 팀에서 관리하는 Github 저장소에서 확인하실 수 있습니다.

- [Part4 소스](https://github.com/cornerstonewdk/cornerstone-framework-example/blob/email-part4-complete/html/index.html)
- [Part4 미리 보기](http://cornerstonewdk.github.io/cornerstone-framework-example/email/part4/mvc/)

예제를 완성해 가면서 막히는 부분은 아래 완성 샘플과 비교해가면서 해결 점을 찾을 수 있습니다.

- [예제 완성 소스](https://github.com/cornerstonewdk/cornerstone-framework-example/archive/email-part4-complete.zip)


### 문의하기
> HTML5 웹앱 개발의 Best Practice에 관해 코너스톤 개발팀에 문의해주세요. 

> 적극 지원하겠습니다

<table cellspacing="0" cellpadding="0" border="0" style="border: none;">
    <tbody><tr>
        <td style="border-top: none; text-align: center;">
            <p><strong>Github Cornerstone Framework</strong></p>
            <a href="https://github.com/cornerstonewdk/cornerstone-framework/issues?state=open">
                <img alt="" width="100"
                     src="https://31.media.tumblr.com/2a20d1e0d0d8d3f175bbd16e09e823e9/tumblr_inline_n0thrltYIu1rc9vvo.png">
            </a>
        </td>
        <td style="border-top: none; text-align: center;">
            <p><strong>Facebook CornerstoneWDK</strong></p>
            <a href="https://www.facebook.com/groups/cornerstonewdk/">
                <img alt="" width="70"
                     src="https://31.media.tumblr.com/299b61ea20104ceedd5517740298dc46/tumblr_inline_n0thriaGJp1rc9vvo.png" >
            </a>
        </td>
    </tr></tbody>
</table>









