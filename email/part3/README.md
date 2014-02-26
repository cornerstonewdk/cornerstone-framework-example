# Part 3. 차트가 필요하신가요?

[Cornerstone Framework](https://github.com/cornerstonewdk/cornerstone-framework/tree/dev-2.0)에서는 아래와 같이 데이터를 차트로 표현할 수 있는 Widget을 제공합니다.

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


## jQuery Plugin 방식으로 차트 만들기
아래 예제를 시작하기 위한 샘플 파일을 아래 링크를 통해 다운받을 수 있습니다. 다운로드 받은 소스를 통해 아래 등장하는 코드를 추가하면서 예제를 점진적으로 완성해 나갈 수 있습니다.

- [예제 소스](https://github.com/cornerstonewdk/cornerstone-framework-example/archive/email-part3-incomplete.zip)

### 1. 기본 HTML, 스타일 및 필수 라이브러리 준비
차트를 표현하기 위한 HTML, CSS, JS를 준비합니다.

***코드 1-1*** | [기본 HTML](https://raw.github.com/cornerstonewdk/cornerstone-framework-example/email-part3-incomplete/html/index.html)
```
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <title>Cornerstone Framework Part2</title>
    <meta name="viewport" 
    	content="width=device-width, initial-scale=1.0">

    <!-- START 필요 스타일 -->
    <link rel="stylesheet" 
    	href="cornerstone/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" 
    	href="cornerstone/theme-white/cornerstone.css"/>
    <!-- //END 필요 스타일 -->
</head>
<body>
<div id="pie" class="container"></div>

<!-- START 화면전환 필요 라이브러리 -->
<script src="cornerstone/jquery/jquery-1.10.2.min.js"></script>
<script src="cornerstone/d3/d3.v3.min.js"></script>
<script src="cornerstone/nv/nv.d3.min.js"></script>
<script src="cornerstone/widget-chart/widget-chart.js"></script>
<!-- //END 화면전환 필요 라이브러리 -->
</body>
</html>
```

### 2. 차트에 나타낼 데이터 샘플 만들기
차트를 만들기 위해 코드 1-2와 같은 `json` 데이터를 만듭니다.

***코드 1-2*** | [샘플 JSON](https://raw.github.com/cornerstonewdk/cornerstone-framework-example/email-part3-incomplete/html/data/pie.json)
```
[
    {
        "x": "One",
        "y": 5
    },
    {
        "x": "Two",
        "y": 2
    },
    {
        "x": "Three",
        "y": 9
    }
]
```

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

#### [차트 종류 (chartType)](http://cornerstone.sktelecom.com/2/livedoc/#4405)

<table class="table table-striped table-hover table-responsive table-bordered">
<thead>
<tr>
<th align="left">옵션명</th>
<th align="left">설명</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">bar</td>
<td align="left">수직 바 차트(스택 + 그룹 토글)</td>
</tr>
<tr>
<td align="left">stackedBar</td>
<td align="left">스택 바 차트</td>
</tr>
<tr>
<td align="left">groupedBar</td>
<td align="left">그룹 바 차트</td>
</tr>
<tr>
<td align="left">line</td>
<td align="left">라인 차트</td>
</tr>
<tr>
<td align="left">pie</td>
<td align="left">파이 차트</td>
</tr>
<tr>
<td align="left">horizontalBar</td>
<td align="left">수평 바 차트(스택 + 그룹 토글)</td>
</tr>
<tr>
<td align="left">stackedHorizontalBar</td>
<td align="left">스택 수평 바 차트</td>
</tr>
<tr>
<td align="left">groupedHorizontalBar</td>
<td align="left">그룹 수평 바 차트</td>
</tr>
<tr>
<td align="left">linePlusBar</td>
<td align="left">라인 + 바 차트</td>
</tr>
<tr>
<td align="left">lineFocus</td>
<td align="left">라인 포커스 차트 (라인 차트 하단에 네비게이션 기능을 하는 라인 차트가 추가된다.)</td>
</tr>
<tr>
<td align="left">bar3d</td>
<td align="left">수직 3D 바 차트</td>
</tr>
<tr>
<td align="left">horizontalBar3d</td>
<td align="left">수평 3D 바 차트</td>
</tr>
</tbody>
</table>

## MVC 방식으로 차트 만들기

### 1. MVC 방식을 위한 라이브러리 추가하기

앞에서 진행한 jQuery Plugin 방식의 `코드 1-1`, `코드 1-2`를 재활용해서 간단히 MVC 방식의 차트로 변경할 수 있습니다.
먼저 MVC를 사용하기 위해 jQuery Plugin 방식에서는 사용하지 않았던 `backbone`, `underscore` 라이브러리를  `코드 1-1`에 추가합니다.

***코드 2-1*** | [기본 HTML](https://raw.github.com/cornerstonewdk/cornerstone-framework-example/email-part3-incomplete/mvc/index.html)
```
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <title>Cornerstone Framework Part3</title>
    <meta name="viewport" 
    	content="width=device-width, initial-scale=1.0">

    <!-- START 필요 스타일 -->
    <link rel="stylesheet" 
    	href="cornerstone/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" 
    	href="cornerstone/theme-white/cornerstone.css"/>
    <!-- //END 필요 스타일 -->
</head>
<body>
<div id="pie" class="container"></div>

<!-- START 화면전환 필요 라이브러리 -->
<script src="cornerstone/jquery/jquery-1.10.2.min.js"></script>

<script src="cornerstone/underscore/underscore-min.js"></script>
<script src="cornerstone/backbone/backbone-min.js"></script>

<script src="cornerstone/d3/d3.v3.min.js"></script>
<script src="cornerstone/nv/nv.d3.min.js"></script>
<script src="cornerstone/widget-chart/widget-chart.js"></script>
<!-- //END 화면전환 필요 라이브러리 -->
</body>
</html>
```

### 2. MVC 방식 위젯 차트 적용하기
`코드 1-3`에서는 jQuery를 이용해서 ajax로 데이터를 가져온 반면 아래 코드에서는 Backbone의 모델을 이용해서
데이터를 가져옵니다. `코드 1-3`과 다르게 데이터는 Backbone Model를 통해서 관리되고, 차트는 Backbone View를 통해 관리됩니다. Model과 View가 분리된 상태이므로 코드를 재활용할 수 있는 이점이 있습니다.

***코드 2-2*** | [차트 적용 코드](https://gist.githubusercontent.com/WoosubKim/f642e6a381bb9b755b11/raw/903de7b54d40bc87bfb2bcaf85f8f1572f8a2480/chart-for-mvc)
```
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
```

이제 구현된 차트 예제를 확인해 볼 수 있습니다.
지금까지 가이드 한 예제 소스는 Cornerstone Framework 개발 팀에서 관리하는 Github 저장소에서 확인하실 수 있습니다.

- [Part3 소스](https://github.com/cornerstonewdk/cornerstone-framework-example/blob/email-part3-complete/html/index.html)
- [Part3 미리 보기](http://cornerstonewdk.github.io/cornerstone-framework-example/email/part3/html/)

예제를 완성해 가면서 막히는 부분은 아래 완성 샘플과 비교해가면서 해결 점을 찾을 수 있습니다.

- [예제 완성 소스](https://github.com/cornerstonewdk/cornerstone-framework-example/archive/email-part3-complete.zip)


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









