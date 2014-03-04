# Part 4. 반응이 빠른 모바일 웹을 만들려면 ?

Part 4에서는 [Cornerstone Framework](https://github.com/cornerstonewdk/cornerstone-framework/tree/dev-2.0)를 이용해서 이전에 구현한 화면전환, 고정메뉴, 차트등을 활용해서 간단한 웹앱을 만들고, 추가적으로 ListView를 활용한 대용량 데이터 Scrolling 및 CSS 하드웨어 가속을 적용한 Carousel를 통해 성능 향상까지 적용된 웹앱을 구현할 것입니다. 

[이미지 변경 예정]
<table cellspacing="0" cellpadding="0" border="0" style="border: none; width: 100%;">
    <tbody>
        <tr>
            <td style="border-top: none; text-align: center;">
                <a href="http://cornerstonewdk.github.io/cornerstone-framework-example/email/part2/html/index.html">
                    <img alt="" width="320"
                    src="https://31.media.tumblr.com/2eeff0bfe15ca5d243d42a027d1974f1/tumblr_inline_n1jskvKxhY1rc9vvo.gif"> 
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

### 1. 페이지간 이동 제어를 위한 라우터 및 화면전환 만들기
[Part 1. 화면 전환 효과가 필요하신가요? ](http://blog.cornerstone.sktelecom.com/post/76303411884/part-1)에서 다뤘던 예제 소스를 그대로 가져옵니다.

Part 1 예제 완성 소스 [다운로드](https://github.com/cornerstonewdk/cornerstone-framework-example/archive/email-part1-complete.zip) 

이 소스 중 페이지간 이동 제어를 위해 라우터 기능이 있는 MVC방식을 이용합니다.

### 2. 고정 메뉴 만들기
가져온 Part 1 MVC 소스에서 각 템플릿의 Header와 Footer에 고정 메뉴를 추가합니다. 고정 메뉴를 추가한 후 Part 1에서 템플릿 페이지에 있던 페이지 이동을 위한 링크를 
Footer 메뉴로 옮겨야 하므로 Footer 메뉴에 적용 후 기존 템플릿의 페이지 이동을 위한 `a`태그를 삭제해야합니다.

***코드 1-1*** | [고정 Header / Footer 추가 index.html ] (https://raw.github.com/cornerstonewdk/cornerstone-framework-example/email-part4-incomplete/mvc/index.html)
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
        <a href="#detail" class="btn btn-default" data-transition="flip" data-duration="1500">
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
                    src="https://31.media.tumblr.com/f1e08aa8d31233dcf47d333545d8ff60/tumblr_inline_n1xdmjKNfn1rc9vvo.png"> 
                </a>
            </td>
        </tr>
    </tbody>
</table>


### 3. 위젯 차트 적용하기
기본 HTML, CSS, JS와 샘플 JSON 데이터가 준비된 상태에서 실제 위젯 차트를 적용하기 위해 아래와 같이
`javascript` 코드를 추가하면 `ajax`를 이용해서 샘플 데이터를 가져온 후 [Cornerstone 위젯 차트](http://cornerstone.sktelecom.com/2/livedoc/#4405)에 가져온 데이터를 옵션에 추가해서 차트를 그릴 수 있습니다.

***코드 1-3*** | [차트 적용 코드](https://gist.githubusercontent.com/WoosubKim/4cd8a7ce9f3563912803/raw/5a263e07934c14b915c3c782e6605c260fb6a05c/chart-for-html)
```
$.ajax({
    url: 'data/pie.json',
    success: function (data) {
        $('#pie').featuredChart({
            chartType: 'pie',
            data: data
        });
    }
});
```

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









