# Part 1. 화면 전환 효과가 필요하신가요?

[Cornerstone Framework](https://github.com/cornerstonewdk/cornerstone-framework/tree/dev-2.0)에서는 화면 전환 기능을 쉽게 사용할 수 있는 기능을 제공합니다.

## 준비하기
### STEP 1. 필요한 라이브러리 다운 받기
이름 | 설명
:-- | :--
[jQuery]() | DOM 핸들링과 유용한 기능을 제공하는 jQuery 라이브러리
[transition]() | 화면 전환 라이브러리
[underscore]() | Functional Programming을 지원해 Collection/Array의 제어를 쉽고, Backbone.js 사용을 위해 필요한 라이브러리
[backbone]() | Backbone MVC 프레임워크 라이브러리
[multipage]() | Backbone Route를 확장해서 Cornerstone Framework의 화면 전환 기능을 추가시킨 Routing 라이브러리
[multipage-starter]() | 자동적으로 multipage를 실행하기 위한 라이브러리

### STEP 2. 조건 갖추기
화면 전환 효과를 사용하기 전에 몇 가지 조건을 갖춰야 합니다.

1. SPA(Single Page Application) 내에 2개 이상의 페이지 영역이 존재해야 합니다.
2. 화면 전환 효과가 완료되면 활성화된 페이지를 제외한 나머지 페이지들은 숨기거나 제거해야 합니다.
3. 페이지마다 매핑되는 Fragment identifier가 존재해야 하며, Fragment identifier가 변경되면 그에 맞는 페이지가 표시돼야 합니다.
4. 페이지가 전환 될 때마다 효과가 필요합니다.

### STEP 3. 샘플 HTML 
화면 전환 효과를 보여주기 위해 필요한 페이지의 HTML Snippet을 준비합니다.

***코드 1-1*** [기본 구조 구성]()

***코드 1-2*** [목록 페이지]()

***코드 1-3*** [추가 페이지]()

***코드 1-4*** [상세 페이지]()


## 2-1. HTML 태그를 이용한 화면 전환 구현 방법

HTML 태그를 이용한 방식은 앞의 *코드 1-1*에서 몇 가지 속성을 추가를 통해 간단히 화면 전환 기능을 사용할 수 있습니다.

> 단, HTML 태그 방식(Data-API)은 사용이 간편하긴 하지만 화면 전환 전후에 대한 이벤트 처리를 별도로 할 수 없어서,
이벤트 처리와 같은 고급 기능이 필요하신 경우에는 2-2에서 다루는 MVC 방식을 사용하시기 바랍니다.

### 1. *코드1-1* 기본 구조에 화면 전환 기능을 사용하기 위한 Data-API 속성 추가

*코드 2-1* 화면 전환 - 기본 구조 Data-API 적용
```
<div class="container">
    <section id="list" data-url="list" data-default-page="true"></section>
    <section id="add" data-url="add" ></section>
    <section id="detail" data-url="detail" ></section>
</div>
```

<Data-API 설명>

- data-url: 화면 전환 시 페이지의 Fragment Identifier를 지정하는 속성
- data-default-page: 기본 페이지를 지정하는 속성


### 2. 필요한 라이브러리를 추가

*코드 2-2* 화면 전환 - 필수 라이브러리
```
<!-- START 화면전환 필요 라이브러리 -->
<script src="cornerstone/jquery/jquery-1.10.2.min.js"></script>
<script src="cornerstone/transition/transition.js"></script>
<script src="cornerstone/underscore/underscore-min.js"></script>
<script src="cornerstone/backbone/backbone-min.js"></script>
<script src="cornerstone/multipage-router/multipage.js"></script>
<script src="cornerstone/multipage-router/multipage-starter.js"></script>
<!-- //END 화면전환 필요 라이브러리 -->
```

<라이브러리 설명>

- jquery-1.10.2.min.js: DOM 핸들링과 유용한 기능을 제공하는 jQuery 라이브러리
- transition.js: 화면 전환 라이브러리
- underscore-min.js: Functional Programming을 지원해 Collection/Array의 제어를 쉽고, Backbone.js 사용을 위해 필요한 라이브러리
- backbone-min.js: Backbone MVC 프레임워크 라이브러리
- multipage.js: Backbone Route를 확장해서 Cornerstone Framework의 화면 전환 기능을 추가시킨 Routing 라이브러리
- multipage-starter.js: 자동적으로 multipage를 실행하기 위한 라이브러리

### 3. *코드1-2~4* 샘플 페이지 HTML을 *코드1-1* 기본 구조에 추가
*코드 1-1*의 각 section에 맞는 샘플 페이지를 아래와 같이 넣는다.

*코드 2-3* 화면 전환 - 샘플 페이지 HTML 추가 예시
```
<section id="list-section" data-url="list" data-default-page="true">
샘플 리스트 HTML 추가 영역
</section>
```

### 4. 추가된 샘플 페이지에서 화면 전환을 사용하기 위한 링크에 Data-API 속성 지정
화면 전환 실행을 위한 링크에는 href 속성에 *코드2-1*에서 지정한 `data-url` 속성의 Fragment Identifier와 일치하도록 매핑해야 합니다.
*코드 2-4* 화면 전환 - 화면 전환을 위해 링크에 Data-API 적용
```
<a href="#add" class="btn btn-default" data-transition="slide">추가</a>
<a href="#detail" class="btn btn-default" data-transition="flip" data-duration="1500">상세</a>
```

<Data-API 설명>

- data-transition: 화면 전환 효과 지정 (slide, flip, spin, fade, pop, turn)
- data-duration: 화면 전환 소요 시간 지정

이제 구현된 HTML 태그를 이용한 화면 전환을 확인해 볼 수 있습니다.
지금까지 가이드 한 예제 소스는 Cornerstone Framework 개발 팀에서 관리하는 Github 저장소에서 확인하실 수 있습니다.

- [Part1-HTML 태그 방식 소스](https://github.com/cornerstonewdk/cornerstone-framework-example/blob/email-part1/email/part1/html/index.html)
- [Part1-HTML 태그 방식 미리 보기](http://cornerstonewdk.github.io/cornerstone-framework-example/email/part1/html/index.html)

> HTML 태그 방식만으로 구현하는 방식은 쉽긴 하지만 아래와 같은 기능을 구현할 순 없다.
>
1. 화면 전환 이벤트 핸들링을 할 수 없다.
2. 비활성화 페이지 영역을 Release 시킬 수 없다.
3. 모든 HTML을 한 파일에서 관리 해야 하므로 유지보수가 용이하지 않다.

위와 같은 문제를 해결하기 위해 Cornerstone Framework에서는 MVC 방식을 제공하고, MVC 방식을 사용하는 것을 지향하고 있습니다.

## 2-2. MVC Framewwork을 이용한 화면 전환 효과 구현 방법

MVC Framework 화면 전환 방식은 HTML 태그를 이용한 방식에서 발견한 문제를 해결할 수 있는 방식이다.

<HTML 태그를 이용한 방식 vs MVC Framework 방식>

HTML | MVC
:-- | :--
화면 전환 이벤트 핸들링을 할 수 없다. | MultipageRouter에서 제공하는 `active`, `inactive` 메소드를 사용해서 이벤트 핸들링이 가능하다.
비활성화 페이지 영역을 Release 시킬 수 없다. | 이벤트 핸들링이 가능하므로 화면 전환 완료 시점에 다른 페이지를 Release 시킬 수 있다.
모든 HTML을 한 파일에서 관리 해야 하므로 유지보수가 용이하지 않다. | View를 분리해서 관리하므로 유지보수에 용이하다.
