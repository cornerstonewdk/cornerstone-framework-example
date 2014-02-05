# Part 1. 화면 전환 효과가 필요하신가요?

[Cornerstone Framework](https://github.com/cornerstonewdk/cornerstone-framework/tree/dev-2.0)에서는 아래와 같은 화면 전환 기능을 쉽게 사용할 수 있는 기능을 제공합니다.

<table cellspacing="0" cellpadding="0" border="0" style="border: none;">
    <tbody><tr>
        <td style="border-top: none; text-align: center;">
            <a href="http://cornerstone.sktelecom.com/2/page-transition/index-nested.html">
                <img alt="" width="300"
                     src="https://dl.dropboxusercontent.com/u/47146499/Blogs/Cornerstone/images/email/part1/CornerstoneEmailPart1-1.gif">
            </a>
        </td>
    </tr></tbody>
</table>

## 화면 전환을 직접 만들어 보기
### 1. 샘플 HTML 준비
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
    <tbody>
    <tr>
        <td style="border-top: none; text-align: center;">
            <p><strong><em>코드 1-2</em></strong> <a 
                                                   href="https://gist.github.com/WoosubKim/9f85a6695750223d5051/raw/1c6c3feac60682b4a0a09281b7a5ba78a56692f5/layout.template">목록
                페이지</a></span>
            </p>
            <img alt="" width="170"
                 src="https://dl.dropboxusercontent.com/u/47146499/blogs/cornerstone/images/email/part1/page_list.png">
        </td>
        <td style="border-top: none; text-align: center;">

            <p><strong><em>코드 1-3</em></strong> <a   
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
    </tr>
    </tbody>
</table>


HTML 태그를 이용한 방식은 앞의 ***코드 1-1***에서 몇 가지 속성을 추가를 통해 간단히 화면 전환 기능을 사용할 수 있습니다.

### 2. ***코드 1-1*** 기본 구조에 화면 전환 기능을 사용하기 위한 Data-API 속성 지정

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


### 3. 필요한 라이브러리를 추가

***코드 2-2*** | [필수 라이브러리](https://gist.github.com/WoosubKim/48abfdf0ccc20ecd09f6/raw/15dfed630b62df530aed1924181df51711c0c0de/add-libraries.template)
```
<script src="cornerstone/jquery/jquery-1.10.2.min.js"></script>
...
<script src="cornerstone/multipage-router/multipage-starter.js"></script>
```

### 4. *코드1-2~4* 샘플 페이지 HTML 추가
***코드 2-1***의 각 section에 맞는 샘플 페이지를 아래와 같이 넣는다.

***코드 2-3*** 화면 전환 - 샘플 페이지 HTML 추가 예시
```
<section id="list-section" data-url="list" data-default-page="true">
[Add Sample Page Template]
</section>
```

### 5. 추가된 샘플 페이지에서 화면 전환을 사용하기 위한 링크에 Data-API 속성 지정
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

위와 같은 문제를 해결하기 위해 Cornerstone Framework에서는 MVC 방식을 제공하고, MVC 방식을 사용하는 것을 지향하고 있습니다. [자세히보기](http://cornerstonewdk.github.io/cornerstone-framework-example/email/part1/part1.html)

### 데모

<table cellspacing="0" cellpadding="0" border="0" style="border: none;">
    <tbody><tr>
        <td style="border-top: none; text-align: center;">
            <a href="http://cornerstonewdk.github.io/cornerstone-framework-example/email/part1/html/index.html">
                <img alt="" width="300"
                     src="https://dl.dropboxusercontent.com/u/47146499/Blogs/Cornerstone/images/email/part1/CornerstoneEmailPart1-2.gif">
            </a>
        </td>
    </tr></tbody>
</table>


### 문의하기
> HTML5 웹앱 개발의 Best Practice에 관해 코너스톤 개발팀에 문의해주세요. 

> 적극 지원하겠습니다

<table cellspacing="0" cellpadding="0" border="0" style="border: none;">
    <tbody><tr>
        <td style="border-top: none; text-align: center;">
            <p><strong>Github Cornerstone Framework</strong></p>
            <a href="https://github.com/cornerstonewdk/cornerstone-framework/issues?state=open">
                <img alt="" width="100"
                     src="http://dl.dropboxusercontent.com/u/47146499/blogs/cornerstone/images/email/Octocat.png">
            </a>
        </td>
        <td style="border-top: none; text-align: center;">
            <p><strong>Facebook CornerstoneWDK</strong></p>
            <a href="https://www.facebook.com/groups/cornerstonewdk/">
                <img alt="" width="70"
                     src="http://dl.dropboxusercontent.com/u/47146499/blogs/cornerstone/images/email/FB-f-Logo__blue_100.png" >
            </a>
        </td>
    </tr></tbody>
</table>









