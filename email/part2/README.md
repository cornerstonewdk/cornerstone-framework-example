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
상/하단 메뉴 구성을 위해 Cornerstone Framework의 Component 중 [**네비게이션 바**]()와 [**모바일 Navbar**]()를 활용해서 만들 수 있습니다. 기본 HTML의 `<div id="pages" class="container"></div>` 엘리먼트안에 ***코드 1-2***, ***코드 1-3*** 소스를 추가합니다.

<table cellspacing="0" cellpadding="0" border="0" style="border: none;">
    <tbody>
    <tr>
        <td style="border-top: none; text-align: center;">
            <p><strong><em>코드 1-2</em></strong> | 이미지 </span>
            </p>
            <img alt="" width="320"
                 src="https://dl.dropboxusercontent.com/u/47146499/Blogs/Cornerstone/images/email/part2/header.png">            
        </td>
        <td style="border-top: none; text-align: center;">
            <p><strong><em>코드 1-3</em></strong>  | 이미지 </span>
            </p>
            <img alt="" width="320"
                 src="https://dl.dropboxusercontent.com/u/47146499/Blogs/Cornerstone/images/email/part2/footer.png">            
        </td>
    </tr>
    </tbodydy>
</table>

***코드 1-2*** | [상단 메뉴](https://gist.github.com/WoosubKim/d5efdf461a7b4891a15d/raw/ed044386a7cbdab39b822044429d5a4071e082af/header)
```
<header>
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">Cornerstone</a>
        </div>
    </nav>
</header>
```

※ **클래스** 설명

- **navbar-fixed-top**: 메뉴를 상단에 고정시키는 클래스. 상단에 고정시킬 경우 `<body>`에 `padding-top: 60px;` 스타일 속성을 추가해야 한다. `60px`은 메뉴의 높이 이상으로 설정해야 합니다.

***코드 1-3*** | [상단 메뉴](https://gist.github.com/WoosubKim/cd142a1eabd37a19be45/raw/4a5d8173d7b2cd8d5dfc76a1b6a4d72299f4a78e/footer)
```
<footer>
    <div class="navbar-mobile btn-group btn-group-justified navbar-fixed-bottom">
        <a href="#" class="btn btn-default">
            <span class="glyphicon glyphicon-info-sign"></span>
            <span class="text">about</span>
        </a>
        ...
    </div>
</footer>
```

※ **클래스** 설명

- **navbar-fixed-bottom**: 메뉴를 하단에 고정시키는 클래스. 하단에 고정시킬 경우 `<body>`에 `padding-bottom: 70px;` 스타일 속성을 추가해야 한다. `70px`은 메뉴의 높이 이상으로 설정해야 합니다.

### 3. 샘플 콘텐츠 추가
고정 메뉴를 확인을 위해 스크롤이 생길 수 있을 정도의 샘플 콘텐츠를 추가합니다.

***코드 1-4*** | [샘플 콘텐츠](https://gist.github.com/WoosubKim/f4fdd895d8b7bf9320a7/raw/b8c43b3d04dea1205f28514f6043ef105ed97418/long-sample)
```
<div class="content">
    <h1>Typography Headings</h1>

    <div class="well">
        <h1>h1. Bootstrap heading <small>Secondary text</small></h1>
        <h2>h2. Bootstrap heading <small>Secondary text</small></h2>
        <h3>h3. Bootstrap heading <small>Secondary text</small></h3>
        <h4>h4. Bootstrap heading <small>Secondary text</small></h4>
        <h5>h5. Bootstrap heading <small>Secondary text</small></h5>
        <h6>h6. Bootstrap heading <small>Secondary text</small></h6>
    </div>
    
	...
</div>
```

이제 구현된 상/하단 고정 메뉴 예제를 확인해 볼 수 있습니다.
지금까지 가이드 한 예제 소스는 Cornerstone Framework 개발 팀에서 관리하는 Github 저장소에서 확인하실 수 있습니다.

- [Part2 소스](https://github.com/cornerstonewdk/cornerstone-framework-example/blob/email-part2/email/part2/html/index.html)
- [Part2 미리 보기](http://cornerstonewdk.github.io/cornerstone-framework-example/email/part2/html/)

예제를 완성해 가면서 막히는 부분은 아래 완성 샘플과 비교해가면서 해결 점을 찾을 수 있습니다.

- [예제 완성 소스](https://github.com/cornerstonewdk/cornerstone-framework-example/archive/email-part1-complete.zip)

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









