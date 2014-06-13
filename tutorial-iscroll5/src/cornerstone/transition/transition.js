/*
    Cornerstone Framework v2.0

    COPYRIGHT(C) 2012 BY SKTELECOM CO., LTD. ALL RIGHTS RESERVED.
    Released under the Apache License, Version 2.0
*/
!function(a){function b(a){if(a in l.style)return a;var b=["Moz","Webkit","O","ms"],c=a.charAt(0).toUpperCase()+a.substr(1);if(a in l.style)return a;for(var d=0;d<b.length;++d){var e=b[d]+c;if(e in l.style)return e}}function c(){return l.style[m.transform]="",l.style[m.transform]="rotateY(90deg)",""!==l.style[m.transform]}function d(a){return"string"==typeof a&&this.parse(a),this}function e(a,b,c){b===!0?a.queue(c):b?a.queue(b,c):c()}function f(b){var c=[];return a.each(b,function(b){b=a.camelCase(b),b=a.transit.propertyMap[b]||a.cssProps[b]||b,b=i(b),-1===a.inArray(b,c)&&c.push(b)}),c}function g(b,c,d,e){var g=f(b);a.cssEase[d]&&(d=a.cssEase[d]);var h=""+k(c)+" "+d;parseInt(e,10)>0&&(h+=" "+k(e));var i=[];return a.each(g,function(a,b){i.push(b+" "+h)}),i.join(", ")}function h(b,c){c||(a.cssNumber[b]=!0),a.transit.propertyMap[b]=m.transform,a.cssHooks[b]={get:function(c){var d=a(c).css("transit:transform");return d.get(b)},set:function(c,d){var e=a(c).css("transit:transform");e.setFromString(b,d),a(c).css({"transit:transform":e})}}}function i(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function j(a,b){return"string"!=typeof a||a.match(/^[\-0-9\.]+$/)?""+a+b:a}function k(b){var c=b;return a.fx.speeds[c]&&(c=a.fx.speeds[c]),j(c,"ms")}a.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var l=document.createElement("div"),m={},n=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;m.transition=b("transition"),m.transitionDelay=b("transitionDelay"),m.transform=b("transform"),m.transformOrigin=b("transformOrigin"),m.transform3d=c();var o={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"},p=m.transitionEnd=o[m.transition]||null;for(var q in m)m.hasOwnProperty(q)&&"undefined"==typeof a.support[q]&&(a.support[q]=m[q]);l=null,a.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"},a.cssHooks["transit:transform"]={get:function(b){return a(b).data("transform")||new d},set:function(b,c){var e=c;e instanceof d||(e=new d(e)),b.style[m.transform]="WebkitTransform"!==m.transform||n?e.toString():e.toString(!0),a(b).data("transform",e)}},a.cssHooks.transform={set:a.cssHooks["transit:transform"].set},a.fn.jquery<"1.8"&&(a.cssHooks.transformOrigin={get:function(a){return a.style[m.transformOrigin]},set:function(a,b){a.style[m.transformOrigin]=b}},a.cssHooks.transition={get:function(a){return a.style[m.transition]},set:function(a,b){a.style[m.transition]=b}}),h("scale"),h("translate"),h("rotate"),h("rotateX"),h("rotateY"),h("rotate3d"),h("perspective"),h("skewX"),h("skewY"),h("x",!0),h("y",!0),d.prototype={setFromString:function(a,b){var c="string"==typeof b?b.split(","):b.constructor===Array?b:[b];c.unshift(a),d.prototype.set.apply(this,c)},set:function(a){var b=Array.prototype.slice.apply(arguments,[1]);this.setter[a]?this.setter[a].apply(this,b):this[a]=b.join(",")},get:function(a){return this.getter[a]?this.getter[a].apply(this):this[a]||0},setter:{rotate:function(a){this.rotate=j(a,"deg")},rotateX:function(a){this.rotateX=j(a,"deg")},rotateY:function(a){this.rotateY=j(a,"deg")},scale:function(a,b){void 0===b&&(b=a),this.scale=a+","+b},skewX:function(a){this.skewX=j(a,"deg")},skewY:function(a){this.skewY=j(a,"deg")},perspective:function(a){this.perspective=j(a,"px")},x:function(a){this.set("translate",a,null)},y:function(a){this.set("translate",null,a)},translate:function(a,b){void 0===this._translateX&&(this._translateX=0),void 0===this._translateY&&(this._translateY=0),null!==a&&void 0!==a&&(this._translateX=j(a,"px")),null!==b&&void 0!==b&&(this._translateY=j(b,"px")),this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var a=(this.scale||"1,1").split(",");return a[0]&&(a[0]=parseFloat(a[0])),a[1]&&(a[1]=parseFloat(a[1])),a[0]===a[1]?a[0]:a},rotate3d:function(){for(var a=(this.rotate3d||"0,0,0,0deg").split(","),b=0;3>=b;++b)a[b]&&(a[b]=parseFloat(a[b]));return a[3]&&(a[3]=j(a[3],"deg")),a}},parse:function(a){var b=this;a.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(a,c,d){b.setFromString(c,d)})},toString:function(a){var b=[];for(var c in this)if(this.hasOwnProperty(c)){if(!m.transform3d&&("rotateX"===c||"rotateY"===c||"perspective"===c||"transformOrigin"===c))continue;"_"!==c[0]&&(a&&"scale"===c?b.push(c+"3d("+this[c]+",1)"):a&&"translate"===c?b.push(c+"3d("+this[c]+",0)"):b.push(c+"("+this[c]+")"))}return b.join(" ")}},a.fn.transition=a.fn.transit=function(b,c,d,f){var h=this,i=0,j=!0;"function"==typeof c&&(f=c,c=void 0),"function"==typeof d&&(f=d,d=void 0),"undefined"!=typeof b.easing&&(d=b.easing,delete b.easing),"undefined"!=typeof b.duration&&(c=b.duration,delete b.duration),"undefined"!=typeof b.complete&&(f=b.complete,delete b.complete),"undefined"!=typeof b.queue&&(j=b.queue,delete b.queue),"undefined"!=typeof b.delay&&(i=b.delay,delete b.delay),"undefined"==typeof c&&(c=a.fx.speeds._default),"undefined"==typeof d&&(d=a.cssEase._default),c=k(c);var l=g(b,c,d,i),n=a.transit.enabled&&m.transition,o=n?parseInt(c,10)+parseInt(i,10):0;if(0===o){var q=function(a){h.css(b),f&&f.apply(h),a&&a()};return e(h,j,q),h}var r={},s=function(c){var d=!1,e=function(){d&&h.unbind(p,e),o>0&&h.each(function(){this.style[m.transition]=r[this]||null}),"function"==typeof f&&f.apply(h),"function"==typeof c&&c()};o>0&&p&&a.transit.useTransitionEnd?(d=!0,h.bind(p,e)):window.setTimeout(e,o),h.each(function(){o>0&&(this.style[m.transition]=l),a(this).css(b)})},t=function(a){var b=0;"MozTransition"===m.transition&&25>b&&(b=25),window.setTimeout(function(){s(a)},b)};return e(h,j,t),this},a.transit.getTransitionValue=g}(jQuery),function(a,b){var c=b.Transition={},d=function(a){this.options=a},e=c.effect=function(a){this.options=a};c.launcher=function(a){return new d(a).init()},d.prototype={defaults:{transitionType:"none",fallbackType:"fade",autoDisplay:!0,nested:!1,animationFade:!0,inTarget:{el:void 0,from:void 0,to:void 0,duration:void 0,timing:"ease",done:function(){}},outTarget:{el:void 0,from:void 0,to:void 0,duration:void 0,timing:"ease",done:function(){}},isReverse:!1,done:function(){}},init:function(){return this.options.inTarget=a.extend({},this.defaults.inTarget,this.options.inTarget),this.options.outTarget=a.extend({},this.defaults.outTarget,this.options.outTarget),this.options=a.extend({},this.defaults,this.options),this.run(),this},run:function(){var b=this,c=new e(this.options);this._before();try{a.support.transition||(a.fn.transition=a.fn.animate,this.options.transitionType=this.options.fallbackType,this.options.inTarget.timing="linear",this.options.outTarget.timing="linear"),c.init(b),c[b.options.transitionType](b.options)}catch(d){c.none(this.options)}},_before:function(){var b=a("body");this.$bodyOverflowX=b.css("overflowX"),b.css({overflowX:"hidden"}),a(this.options.inTarget.el).show(),a(this.options.outTarget.el).show(),this.options.isReverse&&void 0!==b.attr("data-transition")&&(this.options.transitionType=b.attr("data-transition"))},_done:function(){a("body").css({overflowX:this.$bodyOverflowX}).attr("data-transition",this.options.transitionType);var b=a(this.options.outTarget.el).attr("style",""),c=a(this.options.inTarget.el).attr("style","");this.options.autoDisplay&&(b.hide(),c.show()),this.options.inTarget.done(),this.options.done()}},e.prototype={inTargetCss:null,outTargetCss:null,init:function(a){this.launcher=a},extend:function(b,c){return c.inTarget=a.extend({},b.inTarget,c.inTarget),c.outTarget=a.extend({},b.outTarget,c.outTarget),c},none:function(b){var c=this;a(b.outTarget.el).hide(function(){b.outTarget.done(),a(b.inTarget.el).show(function(){c.launcher._done()})})},flip:function(c){var d=this,e={inTarget:{from:"90deg",to:0,duration:350},outTarget:{from:0,to:"-90deg",duration:150}};c.isReverse&&(e={inTarget:{from:"-90deg",to:0,duration:350},outTarget:{from:0,to:"90deg",duration:150}}),c=this.extend(e,c),a(c.outTarget.el).height(),this.outTargetCss={position:"absolute",width:a(c.outTarget.el).width(),perspective:2*a(c.outTarget.el).width(),rotate3d:"0, 1, 0, "+c.outTarget.from,height:a(b).height()>a(c.outTarget.el).height()?a(c.outTarget.el).height():a(b).height(),overflow:"hidden",opacity:1},this.inTargetCss={position:"absolute",width:a(c.inTarget.el).width(),perspective:2*a(c.inTarget.el).width(),rotate3d:"0, 1, 0, "+c.inTarget.from,height:a(b).height()>a(c.inTarget.el).height()?a(c.inTarget.el).height():a(b).height(),overflow:"hidden",opacity:c.animationFade?0:1},a(c.inTarget.el).css(this.inTargetCss),a(c.outTarget.el).css(this.outTargetCss).transit({rotate3d:"0, 1, 0, "+c.outTarget.to,opacity:c.animationFade?0:1},c.outTarget.duration,c.outTarget.timing,function(){c.outTarget.done(),a(c.inTarget.el).transit({rotate3d:"0, 1, 0, "+c.inTarget.to,opacity:1},c.inTarget.duration,c.inTarget.timing,function(){d.launcher._done()})})},spin:function(c){var d=this,e={inTarget:{from:"90deg",to:0,duration:550},outTarget:{from:0,to:"-90deg",duration:550}};c.isReverse&&(e={inTarget:{from:"-90deg",to:0,duration:550},outTarget:{from:0,to:"90deg",duration:550}}),c=this.extend(e,c),this.outTargetCss={position:"absolute",width:a(c.outTarget.el).width(),perspective:a(c.outTarget.el).width(),rotate3d:"1, 1, 1, "+c.outTarget.from,height:a(b).height()>a(c.inTarget.el).height()?a(c.inTarget.el).height():a(b).height(),overflow:"hidden",scale:1,opacity:1},this.inTargetCss={position:"absolute",width:a(c.inTarget.el).width(),perspective:a(c.inTarget.el).width(),rotate3d:"1, 1, 1, "+c.inTarget.from,height:a(b).height()>a(c.inTarget.el).height()?a(c.inTarget.el).height():a(b).height(),overflow:"hidden",scale:0,opacity:c.animationFade?0:1},a(c.inTarget.el).css(this.inTargetCss),a(c.outTarget.el).css(this.outTargetCss).transit({rotate3d:"1, 1, 1, "+c.outTarget.to,scale:0,opacity:c.animationFade?0:1},c.outTarget.duration,c.outTarget.timing,function(){a(this).css({scale:1}),c.outTarget.done(),a(c.inTarget.el).transit({rotate3d:"1, 1, 1, "+c.inTarget.to,scale:1,opacity:1},c.inTarget.duration,c.inTarget.timing,function(){d.launcher._done()})})},slide:function(c){var d=this,e={inTarget:{from:"150%",to:"0",duration:550},outTarget:{from:"0",to:"-150%",duration:550}};c.isReverse&&(e={inTarget:{from:"-150%",to:"0",duration:550},outTarget:{from:"0",to:"150%",duration:550}}),b.scrollTo(0,0),c=this.extend(e,c),this.outTargetCss={position:"absolute",width:a(b).width()>a(c.outTarget.el).width()?a(c.outTarget.el).width():a(b).width(),height:a(b).height()>a(c.outTarget.el).height()?a(c.outTarget.el).height():a(b).height(),transform:"translate("+c.outTarget.from+",0)",opacity:1},this.inTargetCss={position:"absolute",width:a(b).width()>a(c.inTarget.el).width()?a(c.inTarget.el).width():a(b).width(),height:a(b).height()>a(c.inTarget.el).height()?a(c.inTarget.el).height():a(b).height(),transform:"translate("+c.inTarget.from+",0)",opacity:1},c.inTarget.top=a(c.inTarget.el).css("top"),a(c.outTarget.el).css(this.outTargetCss).transit({x:c.outTarget.to,opacity:c.animationFade?0:1},c.outTarget.duration,c.outTarget.timing,function(){c.outTarget.done()}),a(c.inTarget.el).css(this.inTargetCss).transit({x:c.inTarget.to},c.inTarget.duration,c.inTarget.timing,function(){a(c.outTarget.el).css({transform:"translate(0,0)"}),d.launcher._done()})},slideup:function(c){var d=this,e={inTarget:{from:"100%",to:"0",duration:550},outTarget:{from:"0",to:"-100%",duration:550}};c.isReverse&&(e={inTarget:{from:"-100%",to:"0",duration:550},outTarget:{from:"0",to:"100%",duration:550}}),c=this.extend(e,c),this.outTargetCss={position:"absolute",width:a(c.outTarget.el).width(),transform:"translate(0, "+c.outTarget.from+")",height:a(b).height()>a(c.outTarget.el).height()?a(c.outTarget.el).height():a(b).height(),opacity:1},this.inTargetCss={position:"absolute",width:a(c.inTarget.el).width(),transform:"translate(0, "+c.inTarget.from+")",height:a(b).height()>a(c.outTarget.el).height()?a(c.outTarget.el).height():a(b).height(),opacity:1},a(c.outTarget.el).css(this.outTargetCss).transit({y:c.outTarget.to,opacity:c.animationFade?0:1},c.outTarget.duration,c.outTarget.timing,function(){a(this).css({transform:"translate(0,0)"}),c.outTarget.done()}),a(c.inTarget.el).css(this.inTargetCss).transit({y:c.inTarget.to},c.inTarget.duration,c.inTarget.timing,function(){d.launcher._done()})},slidedown:function(b){var c=this,d={inTarget:{from:"-100%",to:"0",duration:550},outTarget:{from:"0",to:"100%",duration:550}};b.isReverse&&(d={inTarget:{from:"100%",to:"0",duration:550},outTarget:{from:"0",to:"-100%",duration:550}}),b=this.extend(d,b),this.outTargetCss={position:"absolute",width:a(b.outTarget.el).width(),transform:"translate(0, "+b.outTarget.from+")",opacity:1},this.inTargetCss={position:"absolute",width:a(b.inTarget.el).width(),transform:"translate(0, "+b.inTarget.from+")",opacity:1},a(b.outTarget.el).css(this.outTargetCss).transit({y:b.outTarget.to,opacity:b.animationFade?0:1},b.outTarget.duration,b.outTarget.timing,function(){a(this).css({transform:"translate(0,0)"}),b.outTarget.done()}),a(b.inTarget.el).css(this.inTargetCss).transit({y:b.inTarget.to},b.inTarget.duration,b.inTarget.timing,function(){c.launcher._done()})},fade:function(b){var c=this,d={inTarget:{duration:250},outTarget:{duration:250}};b=this.extend(d,b),this.outTargetCss={position:"absolute",width:a(b.outTarget.el).width(),opacity:1},this.inTargetCss={position:"absolute",width:a(b.inTarget.el).width(),opacity:b.animationFade?0:1},a(b.inTarget.el).css(this.inTargetCss),a(b.outTarget.el).css(this.outTargetCss).transit({opacity:b.animationFade?0:1},b.outTarget.duration,b.outTarget.timing,function(){b.outTarget.done(),a(b.inTarget.el).transit({opacity:1},b.inTarget.duration,b.inTarget.timing,function(){c.launcher._done()})})},pop:function(b){var c=this,d={inTarget:{duration:350},outTarget:{from:0,duration:350}};b=this.extend(d,b),this.outTargetCss={position:"absolute",width:a(b.outTarget.el).width(),scale:1,opacity:1,perspective:a(b.outTarget.el).width(),rotate3d:"0, 0, 0, 0",overflow:"hidden"},this.inTargetCss={position:"absolute",width:a(b.inTarget.el).width(),scale:.5,opacity:b.animationFade?0:1,perspective:a(b.outTarget.el).width(),rotate3d:"0, 0, 0, 0",overflow:"hidden"},a(b.inTarget.el).css(this.inTargetCss),a(b.outTarget.el).css(this.outTargetCss).transit({scale:.5,opacity:b.animationFade?0:1},b.outTarget.duration,b.outTarget.timing,function(){a(this).css({scale:1}),b.outTarget.done(),a(b.inTarget.el).transit({scale:1,opacity:1},b.inTarget.duration,b.inTarget.timing,function(){c.launcher._done()})})},turn:function(c){var d=this,e={inTarget:{from:"90deg",to:0,duration:350},outTarget:{from:0,to:"-90deg",duration:150}};c.isReverse&&(e={inTarget:{from:"-90deg",to:0,duration:350},outTarget:{from:0,to:"90deg",duration:150}}),c=this.extend(e,c),this.outTargetCss={position:"absolute",width:a(c.outTarget.el).width(),perspective:a(c.outTarget.el).width(),rotate3d:"0, 1, 0, "+c.outTarget.from,transformOrigin:"0 0",opacity:1,height:a(b).height()>a(c.outTarget.el).height()?a(c.outTarget.el).height():a(b).height(),overflow:"hidden"},this.inTargetCss={position:"absolute",width:a(c.inTarget.el).width(),perspective:a(c.inTarget.el).width(),rotate3d:"0, 1, 0, "+c.inTarget.from,transformOrigin:"0 0",opacity:c.animationFade?0:1,height:a(b).height()>a(c.outTarget.el).height()?a(c.outTarget.el).height():a(b).height(),overflow:"hidden"},a(c.inTarget.el).css(this.inTargetCss),a(c.outTarget.el).css(this.outTargetCss).transit({rotate3d:"0, 1, 0, "+c.outTarget.to,opacity:c.animationFade?0:1},c.outTarget.duration,c.outTarget.timing,function(){c.outTarget.done(),a(c.inTarget.el).transit({rotate3d:"0, 1, 0, "+c.inTarget.to,opacity:1},c.inTarget.duration,c.inTarget.timing,function(){d.launcher._done()})})}}}(jQuery,window);