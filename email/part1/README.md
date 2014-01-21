# Part 1. 화면 전환 효과가 필요하신가요?

Cornerstone Framework에서는 화면 전환 기능을 쉽게 사용할 수 있는 기능을 제공합니다.

## 준비하기
화면 전환 효과를 사용하기 전에 몇 가지 조건을 갖춰야 합니다.

1. SPA(Single Page Application) 내에 2개 이상의 페이지 영역이 존재해야 합니다.
2. 화면 전환 효과가 완료되면 활성화된 페이지를 제외한 나머지 페이지들은 숨기거나 제거해야 합니다.
3. 페이지마다 매핑되는 Fragment identifier가 존재해야 하며, Fragment identifier가 변경되면 그에 맞는 페이지가 표시돼야 합니다.
4. 페이지가 전환 될 때마다 효과가 필요합니다.

*코드 1-1* 화면 전환 - [기본 구조 구성]()
```
<div class="container">
    <section id="list-section"></section>
    <section id="add-section"></section>
    <section id="detail-section"></section>
</div>
```

*코드 1-2* 화면 전환 - [목록 페이지]()
```
<!-- START 샘플 리스트 -->
<div class="media">
    <a class="pull-left" href="#">
        <img src="../../../images/member-1.jpg" alt="" class="media-object img-circle img-member">
    </a>

    <div class="media-body">
        <h4 class="media-heading">Media heading</h4>
        Lorem ipsum …
    </div>
</div>
…
<!-- //END 샘플 리스트 -->
```

*코드 1-3* 화면 전환 -  [추가 페이지]()
```
<!-- START 샘플 추가 Form -->
<form class="form-horizontal">
    <div class="form-group">
        <label for="inputUsername1" class="col-lg-2 control-label">Username</label>

        <div class="col-lg-10">
            <input type="username" class="form-control" id="inputUsername1" placeholder="Username">
        </div>
    </div>
	…
</form>
<!-- //END 샘플 추가 Form -->
```

*코드 1-4* 화면 전환 -  [상세 페이지]()
```
<!-- START 샘플 상세 페이지 -->
<div class="page-header">
    <h1>Media
        <small>heading</small>
    </h1>
    …
    <blockquote class="pull-right">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
    </blockquote>
</div>
<!-- //END 샘플 상세 페이지 -->
```

# 2-1. HTML 태그를 이용한 화면 전환 구현 방법

HTML 태그를 이용한 방식은 앞의 *코드 1-1*에서 몇 가지 속성을 추가를 통해 간단히 화면 전환 기능을 사용할 수 있습니다.

> 단, HTML 태그 방식(Data-API)은 사용이 간편하긴 하지만 화면 전환 전후에 대한 이벤트 처리를 별도로 할 수 없어서,
이벤트 처리와 같은 고급 기능이 필요하신 경우에는 2-2에서 다루는 MVC 방식을 사용하시기 바랍니다.

1. 필요한 라이브러리를 추가한다.

*코드 2-1* 화면 전환 - HTML 페이지 구성
```
<!-- START 화면전환 필요 라이브러리 -->
<script src="../../../cornerstone/jquery/jquery-1.10.2.min.js"></script>
<script src="../../../cornerstone/transition/transition.js"></script>
<script src="../../../cornerstone/underscore/underscore-min.js"></script>
<script src="../../../cornerstone/backbone/backbone-min.js"></script>
<script src="../../../cornerstone/multipage-router/multipage.js"></script>
<script src="../../../cornerstone/multipage-router/multipage-starter.js"></script>
<!-- //END 화면전환 필요 라이브러리 -->
```

<라이브러리 설명>
1. jquery-1.10.2.min.js: DOM 핸들링과 유용한 기능을 제공하는 jQuery 라이브러리
2. transition.js: 화면 전환 라이브러리
3. underscore-min.js: Functional Programming을 지원해 Collection/Array의 제어를 쉽고, Backbone.js 사용을 위해 필요한 라이브러리
4. backbone-min.js: Backbone MVC 프레임워크 라이브러리
5. multipage.js: Backbone Route를 확장해서 Cornerstone Framework의 화면 전환 기능을 추가시킨 Routing 라이브러리
6. multipage-starter.js: 자동적으로 multipage를 실행하기 위한 라이브러리

2. 샘플 페이지를 *코드1-1* 기본 구조에 추가


HTML 태그를 이용한 화면 전환 구현 방법