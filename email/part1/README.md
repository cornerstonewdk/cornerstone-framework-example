# Part 1. 화면 전환 효과가 필요하신가요?

[Cornerstone Framework](https://github.com/cornerstonewdk/cornerstone-framework/tree/dev-2.0)에서는 화면 전환 기능을 쉽게 사용할 수 있는 기능을 제공합니다.

## 1. 준비하기
### STEP 1. 필요한 라이브러리 다운 받기
이름 | HTML | MVC | 설명
:-- | :--: | :--: | :--
[jquery](https://raw.github.com/cornerstonewdk/cornerstone-framework/dev-2.0/dist/lib/jquery/jquery-1.10.2.min.js) | O | O | DOM 핸들링과 유용한 기능을 제공하는 jQuery 라이브러리
[transition](https://raw.github.com/cornerstonewdk/cornerstone-framework/dev-2.0/dist/src/util/transition/transition.js) | O | O | 화면 전환 라이브러리
[underscore](https://raw.github.com/cornerstonewdk/cornerstone-framework/dev-2.0/dist/lib/underscore/underscore-min.js) | O | O | Functional Programming을 지원해 Collection/Array의 제어를 쉽고, Backbone.js 사용을 위해 필요한 라이브러리
[backbone](https://raw.github.com/cornerstonewdk/cornerstone-framework/dev-2.0/dist/lib/backbone/backbone-min.js) | O | O | Backbone MVC 프레임워크 라이브러리
[multipage](https://raw.github.com/cornerstonewdk/cornerstone-framework/dev-2.0/dist/src/mvc/router/multipage/multipage.js) | O | O | Backbone Route를 확장해서 Cornerstone Framework의 화면 전환 기능을 추가시킨 Routing 라이브러리
[multipage-starter](https://raw.github.com/cornerstonewdk/cornerstone-framework/dev-2.0/dist/src/mvc/router/multipage/multipage-starter.js) | O | O | 자동적으로 multipage를 실행하기 위한 라이브러리
[handlebars](https://raw.github.com/cornerstonewdk/cornerstone-framework/dev-2.0/dist/lib/jquery/jquery-1.10.2.min.js) | X | O | HTML Template을 데이터와 제어문들을 사용해 렌더링한다.
[template](https://raw.github.com/cornerstonewdk/cornerstone-framework/dev-2.0/dist/lib/jquery/jquery-1.10.2.min.js) | X | O | HTML 코드와 자바스크립트 코드를 분리시켜주는 라이브러리

### STEP 2. 샘플 HTML 
화면 전환 효과를 보여주기 위해 필요한 페이지의 HTML Snippet을 준비합니다.

***코드 1-1*** | [기본 구조 구성](https://gist.github.com/WoosubKim/9f85a6695750223d5051/raw/1c6c3feac60682b4a0a09281b7a5ba78a56692f5/layout.template)


```
<div id="pages" class="container">
    <section id="list"></section>
    <section id="add"></section>
    <section id="detail"></section>
</div>
```


<table cellspacing="0" cellpadding="0" border="0" style="border: none;">
    <td style="border-top: none; text-align: center;">
    <p><strong><em>코드 1-2</em></strong> <a target="_blank"
                                              href="https://gist.github.com/WoosubKim/9f85a6695750223d5051/raw/1c6c3feac60682b4a0a09281b7a5ba78a56692f5/layout.template">목록
        페이지</a></span>
</p>
        <img alt="" width="170"
             src="https://dl.dropboxusercontent.com/u/47146499/blogs/cornerstone/images/email/part1/page_list.png">
    </td>
    <td style="border-top: none; text-align: center;">

        <p><strong><em>코드 1-3</em></strong> <a target="_blank"
                                              href="https://raw.github.com/cornerstonewdk/cornerstone-framework-example/email-part1/email/part1/mvc/app/views/add.template">추가
        페이지</a></span>
</p>
        <img alt="" width="170"
             src="https://dl.dropboxusercontent.com/u/47146499/blogs/cornerstone/images/email/part1/page_add.png">
    </td>
    <td style="border-top: none; text-align: center;">
        <p><strong><em>코드 1-4</em></strong> <a
            href="https://raw.github.com/cornerstonewdk/cornerstone-framework-example/email-part1/email/part1/mvc/app/views/detail.template">상세
        페이지</a></span></div></p>

        <img width="170"
             src="https://dl.dropboxusercontent.com/u/47146499/blogs/cornerstone/images/email/part1/page_detail.png"
             alt="">
    </td>
    </tr></tbody>
</table>


## 2. HTML 태그를 이용한 화면 전환 구현 방법

HTML 태그를 이용한 방식은 앞의 ***코드 1-1***에서 몇 가지 속성을 추가를 통해 간단히 화면 전환 기능을 사용할 수 있습니다.

### STEP 3. ***코드 1-1*** 기본 구조에 화면 전환 기능을 사용하기 위한 Data-API 속성 지정

***코드 2-1*** | [기본 구조 Data-API 적용](https://gist.github.com/WoosubKim/67b67ac9de2dae821cc9/raw/b2ab850aceae9809181bb6746fa2a2ac7ab7acb1/layout-data-api.template)
```
<div id="pages" class="container">
    <section id="list" data-url="list" data-default-page="true"></section>
    ...
</div>
```

※ Data-API 설명

- data-url: 화면 전환 시 페이지의 Fragment Identifier를 지정하는 속성
- data-default-page: 기본 페이지를 지정하는 속성


### STEP 4. 필요한 라이브러리를 추가

***코드 2-2*** | [필수 라이브러리](https://gist.github.com/WoosubKim/48abfdf0ccc20ecd09f6/raw/15dfed630b62df530aed1924181df51711c0c0de/add-libraries.template)
```
<script src="cornerstone/jquery/jquery-1.10.2.min.js"></script>
...
<script src="cornerstone/multipage-router/multipage-starter.js"></script>
```

### STEP 5. *코드1-2~4* 샘플 페이지 HTML 추가
***코드 2-1***의 각 section에 맞는 샘플 페이지를 아래와 같이 넣는다.

***코드 2-3*** 화면 전환 - 샘플 페이지 HTML 추가 예시
```
<section id="list-section" data-url="list" data-default-page="true">
[Add Sample Page Template]
</section>
```

### STEP 6. 추가된 샘플 페이지에서 화면 전환을 사용하기 위한 링크에 Data-API 속성 지정
각 샘플 페이지에 화면 전환 실행을 위한 `a` 태그의 href 속성에 ***코드2-1***에서 지정한 `data-url` 속성의 Fragment Identifier와 일치하도록 매핑해야 합니다.
> data-url = href  일치하도록 설정


***코드 2-4*** | 화면 전환을 위해 링크에 Data-API 적용
```
<a href="#add" class="btn btn-default" data-transition="slide">Add</a>
<a href="#detail" class="btn btn-default" data-transition="flip" data-duration="1500">Detail</a>
```

※ Data-API 설명

- data-transition: 화면 전환 효과 지정 (slide, flip, spin, fade, pop, turn)
- data-duration: 화면 전환 소요 시간 지정

이제 구현된 HTML 태그를 이용한 화면 전환을 확인해 볼 수 있습니다.
지금까지 가이드 한 예제 소스는 Cornerstone Framework 개발 팀에서 관리하는 Github 저장소에서 확인하실 수 있습니다.

- [Part1-HTML 태그 방식 소스](https://github.com/cornerstonewdk/cornerstone-framework-example/blob/email-part1/email/part1/html/index.html)
- [Part1-HTML 태그 방식 미리 보기](http://cornerstonewdk.github.io/cornerstone-framework-example/email/part1/html/index.html)

> HTML 태그 방식만으로 구현하는 방식은 쉽긴 하지만 아래와 같은 기능을 구현할 순 없다.
>
1. 모든 HTML을 한 파일에서 관리 해야 하므로 유지보수가 용이하지 않다.
2. 화면 전환 이벤트 핸들링을 할 수 없다.
3. 비활성화 페이지 영역을 Release 시킬 수 없다.

위와 같은 문제를 해결하기 위해 Cornerstone Framework에서는 MVC 방식을 제공하고, MVC 방식을 사용하는 것을 지향하고 있습니다.

## 3. MVC Framewwork을 이용한 화면 전환 효과 구현 방법

MVC Framework 화면 전환 방식은 HTML 태그를 이용한 방식에서 발견한 문제를 해결할 수 있는 방식입니다.

※ HTML 태그를 이용한 방식 vs MVC Framework 방식>

HTML | MVC
:-- | :--
모든 HTML을 한 파일에서 관리 해야 하므로 유지보수가 용이하지 않다. | View를 분리해서 관리하므로 유지보수에 용이하다.
화면 전환 이벤트 핸들링을 할 수 없다. | MultipageRouter에서 제공하는 `active`, `inactive` 메소드를 사용해서 이벤트 핸들링이 가능하다.
비활성화 페이지 영역을 Release 시킬 수 없다. | 이벤트 핸들링이 가능하므로 화면 전환 완료 시점에 다른 페이지를 Release 시킬 수 있다.


### STEP 7. 페이지별 View 생성 및 HTML를 분리하기
HTML 방식에서 한 파일에 모든 페이지를 넣은 상태를 MVC 방식에서는 한 페이지를 하나의 뷰로 생성해서 개별적으로 관리 할 수 있습니다.

목록 페이지를 View로 생성하기 위해 ***코드 1-2*** 를 다운 받고 `list.template`이라는 파일로 생성합니다.

***코드 3-1*** | [목록 Template 생성](https://raw.github.com/cornerstonewdk/cornerstone-framework-example/email-part1/email/part1/mvc/app/views/list.template)
```
<a href="#add" class="btn btn-default" data-transition="slide">Add</a>
<a href="#detail" class="btn btn-default" data-transition="flip" data-duration="1500">Detail</a>

<div class="media">
    <a class="pull-left" href="#">
        <img src="../images/member-1.jpg" alt="" class="media-object img-circle img-member">
    </a>
    ...
</div>
```

그리고 `list.js`라는 자바스크립트 파일을 생성하고 목록 페이지에 대한 View를 생성합니다. 생성할 때 이 전에 생성한 `list.template`를 AMD 방식을 이용해 모듈화된 객체로 가져올 수 있습니다.

***코드 3-2*** | [목록 View 생성](https://raw.github.com/cornerstonewdk/cornerstone-framework-example/email-part1/email/part1/mvc/app/views/list.js)
```
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
```

위와 같은 방식으로 나머지 추가, 상세 페이지도 View와 Template을 생성할 수 있습니다.

***코드 3-3*** | [추가 Template 생성](https://raw.github.com/cornerstonewdk/cornerstone-framework-example/email-part1/email/part1/mvc/app/views/add.template)

***코드 3-4*** | [추가 View 생성](https://raw.github.com/cornerstonewdk/cornerstone-framework-example/email-part1/email/part1/mvc/app/views/add.js)

***코드 3-5*** | [상세 Template 생성](https://raw.github.com/cornerstonewdk/cornerstone-framework-example/email-part1/email/part1/mvc/app/views/detail.template)

***코드 3-6*** | [상세 View 생성](https://raw.github.com/cornerstonewdk/cornerstone-framework-example/email-part1/email/part1/mvc/app/views/detail.js)


### STEP 8. MultipageRouter 정의하기
화면 전환 효과를 지원하는 Multipagerouter를 이용해서 Router 기능을 구현할 수 있습니다. 

***코드 3-7*** | [MultipageRouter 생성](https://raw.github.com/cornerstonewdk/cornerstone-framework-example/email-part1/email/part1/mvc/app/main.js)
``` 
// main.js
define([
'jquery', 'underscore', 'backbone', 'multipage-router', 
'views/list', 'views/add', 'views/detail'
], 
function ($, _, Backbone, MultipageRouter, ListView, AddView, DetailView) {
    return {
        launch: function () {
            var listView = new ListView();
            var addView = new AddView();
            var detailView = new DetailView();

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
                    ...
                },
                // Event After Transition
                active: function() {
                    ...
                },
                // Event Before Transition
                inactive: function() {
                	...
                }
            });

            new MainRouter();

            Backbone.history.start();
        }
    };
});
```

### STEP 9. 화면 전환 전/후 이벤트 핸들링
STEP 9에서 생성한 `MultipageRouter`에서 화면 전환 전/후 이벤트를 사용할 수 있습니다.

***코드 3-8*** | active, inactive 함수
```
'list-page': {
    fragment: [ '', 'list' ],
    el: '#list',
    render: function () {
        listView.render();
    },
    active: function() { // event after transiton },
    inactive: 'inactive'
},
```
위 코드는 `MultipageRouter` 목록 페이지로 Routing 될 때 적용되는 코드로 목록 페이지 화면 전환이 실행 될 때 전/후 이벤트를 `active`/`inactive`에서 정의할 수 있습니다.

이벤트 구분 | 설명
:--: | :--
render | 해당 페이지가 활성화되고 Transition(화면 전환 애니메이션 효과)이 일어나기 전, 해당 페이지를 다시 렌더링하기 위해서 호출되는 callback 함수 또는 함수의 이름
active | 해당 페이지가 활성화되고 Transition이 완료되고 난 후에 호출되는 callback 함수 또는 함수의 이름
inactive | 다른 페이지가 활성화되면서 해당 페이지가 비활성화되면서 호출되는 callback 함수 또는 함수의 이름

### STEP 10. 비활성화 페이지 제거하기
STEP 9의 이벤트 핸들링 방법을 응용해서 비활성화된 페이지를 제거할 수 있습니다.
모든 페이지의 `active`를 개별적으로 함수로 정의하는 경우 중복 코드가 많이 발생 하므로,
***코드 3-7***와 같이 `active` 함수를 공통적으로 사용할 수 있도록 정의하고 각 페이지 설정에는 문자로 `"active"`를 설정합니다. 그리고 아래와 같이 비활성화 페이지를 제거하는 기능을 구현할 수 있습니다.

***코드 3-9*** | 비활성화 페이지 제거 기능
```
active: function() {
    $('#pages > section').not(this.currentPage.el).empty();
}
```
구현 방식은 `#pages` 엘리먼트의 다음 자식 엘리먼트인 `section` 엘리먼트 중 현재 페이지를 제외한 나머지페이지를 비우는 코드입니다.



이제 구현된 MVC Framework를 이용한 화면 전환을 확인해 볼 수 있습니다.
지금까지 가이드 한 예제 소스는 Cornerstone Framework 개발 팀에서 관리하는 Github 저장소에서 확인하실 수 있습니다.

- [Part1-MVC Framework 방식 소스](https://github.com/cornerstonewdk/cornerstone-framework-example/blob/email-part1/email/part1/mvc/index.html)
- [Part1-MVC Framework 미리 보기](http://cornerstonewdk.github.io/cornerstone-framework-example/email/part1/mvc/index.html)














