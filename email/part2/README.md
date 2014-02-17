# Part 2. 화면 상단과 하단에 고정된 영역이 필요하세요?

[Cornerstone Framework](https://github.com/cornerstonewdk/cornerstone-framework/tree/dev-2.0)에서는 아래와 같은 상/하단 고정 메뉴를 만들 수 있는 Component를 제공합니다. 

<table cellspacing="0" cellpadding="0" border="0" style="border: none;">
    <tbody><tr>
        <td style="border-top: none; text-align: center;">
            <a href="http://cornerstonewdk.github.io/cornerstone-framework-example/email/part1/html/index.html">
                <img alt="" width="320"
                 src="https://dl.dropboxusercontent.com/u/47146499/Blogs/Cornerstone/images/email/part2/part2.png"> 
            </a>
        </td>
    </tr></tbody>
</table>


## 상/하단 고정 메뉴 만들기
아래 예제를 시작하기 위한 샘플 파일을 아래 링크를 통해 다운받을 수 있습니다. 다운로드 받은 소스를 통해 아래 등장하는 코드를 추가하면서 예제를 점진적으로 완성해 나갈 수 있습니다.

- [예제 소스](https://github.com/cornerstonewdk/cornerstone-framework-example/archive/email-part1-incomplete.zip)

### 1. 기본 HTML 준비
상/하단 메뉴 구성을 위한 HTML를 준비합니다.

***코드 1-1*** | [기본 HTML]()
```
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <title>Cornerstone Framework Part2</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- START 필요 스타일 -->
    <link rel="stylesheet" href="cornerstone/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="cornerstone/theme-white/cornerstone.css"/>
    <!-- //END 필요 스타일 -->
</head>
<body>

<div id="pages" class="container"></div>

</body>
</html>
```

### 2. 상/하단 메뉴 HTML 추가하기
상/하단 메뉴 구성을 위해 Cornerstone Framework의 Component 중 [**네비게이션 바**]()와 [**모바일 Navbar**]()를 활용해서 만들 수 있습니다.

<table cellspacing="0" cellpadding="0" border="0" style="border: none;">
    <tbody>
    <tr>
        <td style="border-top: none; text-align: center;">
            <p><strong><em>코드 1-2</em></strong> <a 
                                                   href="https://raw.github.com/cornerstonewdk/cornerstone-framework-example/email-part1/email/part1/mvc/app/views/list.template">상단 메뉴</a></span>
            </p>
            <img alt="" width="320"
                 src="https://dl.dropboxusercontent.com/u/47146499/Blogs/Cornerstone/images/email/part2/header.png">            
        </td>
        <td style="border-top: none; text-align: center;">
            <p><strong><em>코드 1-3</em></strong> <a 
                                                   href="https://raw.github.com/cornerstonewdk/cornerstone-framework-example/email-part1/email/part1/mvc/app/views/list.template">상단 메뉴</a></span>
            </p>
            <img alt="" width="320"
                 src="https://dl.dropboxusercontent.com/u/47146499/Blogs/Cornerstone/images/email/part2/footer.png">            
        </td>
    </tr>
    </tbodydy>
</table>


## 상/하단 고정 영역 사이 ScrollView 적용하기
아래 예제를 시작하기 위한 샘플 파일을 아래 링크를 통해 다운받을 수 있습니다. 다운로드 받은 소스를 통해 아래 등장하는 코드를 추가하면서 화면 전환 예제를 점진적으로
완성해 나갈 수 있습니다.







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
                                                   href="https://raw.github.com/cornerstonewdk/cornerstone-framework-example/email-part1/email/part1/mvc/app/views/list.template">목록
                페이지</a></span>
            </p>
            <img alt="" width="170"
                 src="https://31.media.tumblr.com/74936e77231a356f82ed3d9a7e118c5a/tumblr_inline_n0thskkS8e1rc9vvo.png">
        </td>
        <td style="border-top: none; text-align: center;">

            <p><strong><em>코드 1-3</em></strong> <a   
                                                   href="https://raw.github.com/cornerstonewdk/cornerstone-framework-example/email-part1/email/part1/mvc/app/views/add.template">추가
                페이지</a></span>
            </p>
            <img alt="" width="170"
                 src="https://31.media.tumblr.com/e0d9717c374a8023d7ee2b899f3908f5/tumblr_inline_n0ths9oefA1rc9vvo.png">
        </td>
        <td style="border-top: none; text-align: center;">
            <p><strong><em>코드 1-4</em></strong> <a  
                    href="https://raw.github.com/cornerstonewdk/cornerstone-framework-example/email-part1/email/part1/mvc/app/views/detail.template">상세
                페이지</a></span></div></p>

            <img width="170"
                 src="https://31.media.tumblr.com/26badbbb461bad1f0af6edff778b6bfd/tumblr_inline_n0thsfAcpg1rc9vvo.png"
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

※ **Data-API** 설명

- **data-url**: 화면 전환 시 페이지의 Fragment Identifier를 지정하는 속성
- **data-default-page**: 기본 페이지를 지정하는 속성


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

화면 전환 샘플을 완성해 가면서 막히는 부분은 아래 완성 샘플과 비교해가면서 해결 점을 찾을 수 있습니다.
- [화면 전환 예제 완성 소스](https://github.com/cornerstonewdk/cornerstone-framework-example/archive/email-part1-complete.zip)

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









