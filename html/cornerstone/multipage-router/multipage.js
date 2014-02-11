/*
    Cornerstone Framework v2.0

    COPYRIGHT(C) 2012 BY SKTELECOM CO., LTD. ALL RIGHTS RESERVED.
    Released under the Apache License, Version 2.0
*/
!function(a,b){"function"==typeof define&&define.amd?define([".","underscore","jquery","transition"],b):a.MultipageRouter=b(a.Backbone,a._,a.$,a.Transition)}(window,function(a,b,c,d){return a.Router.extend({constructor:function(){var e=this;if(this.useDataAttributes&&(this.pages={},b.each(c("[data-url],[data-default-page]"),function(a,b){var d=c(a).attr("data-default-page"),f=c(a).attr("data-url"),g=[];"true"==d&&g.push(""),f&&g.push(f),e.pages["page"+b]={fragment:g,el:a}})),!b.isEmpty(this.pages)){var f=this.routes={},g=this.pages["default"];g&&(this.pages=b.omit(this.pages,"default"),this.pages["default"]=g),b.each(this.pages,function(a,g){"default"==g?a&&(f["*path"]=g+"_handler"):a.fragment&&(b.isArray(a.fragment)||(a.fragment=[a.fragment]),b.each(a.fragment,function(a){f[a]=g+"_handler"})),a.el&&c(a.el).hide(),e[g+"_handler"]=function(){var b=arguments;e.runInactive(g);var f=e.currentPageId,h=e.currentPage;e.currentPageId=g,e.currentPage=a,e.runRender.apply(e,arguments);var i=e.findTransition(f,g);if(i){var j={transitionType:i.type,inTarget:{el:a.el},outTarget:{el:h.el},isReverse:i.reverse||!1,done:function(){e.runActive.apply(e,b)}};i.duration&&(j.inTarget.duration=i.duration/2,j.outTarget.duration=i.duration/2),d.launcher(j)}else h&&h.el&&c(h.el).hide(),a.el&&c(a.el).show(),e.runActive.apply(e,arguments)}})}this.dataTransitions={},c(document).on("click",":not(body)[data-transition]",function(a){var b={type:c(this).attr("data-transition")},d=c(this).attr("data-duration");d&&(b.duration=parseInt(d)),e.dataTransitions[e.currentPageId]=b,a.stopPropagation()}),c(document).on("click",":not([data-transition])",function(){delete e.dataTransitions[e.currentPageId]}),a.Router.apply(this,arguments)},_findDataTransitionObject:function(a){var c=this.dataTransitions[a];return b.isString(c)?{type:c}:c},_findTransitionObject:function(a,c){if(!this.transitions)return null;var d=this.transitions[a+":"+c];return b.isString(d)?{type:d}:d},findTransition:function(a,b){var c;return(c=this._findDataTransitionObject(a))?(c.reverse=!1,c):(c=this._findDataTransitionObject(b))?(c.reverse=!0,c):(c=this._findTransitionObject(a,b))?(c.reverse=!1,c):(c=this._findTransitionObject(b,a))?(c.reverse=!0,c):null},runRender:function(){if(this.currentPage&&(c(this.currentPage.el).trigger("render",b.values(arguments)),this.currentPage.render)){var a=b.isFunction(this.currentPage.render)?this.currentPage.render:this[this.currentPage.render];b.isFunction(a)&&a.apply(this,arguments)}},runActive:function(){if(this.currentPage&&(c(this.currentPage.el).trigger("active",b.values(arguments)),this.currentPage.active)){var a=b.isFunction(this.currentPage.active)?this.currentPage.active:this[this.currentPage.active];b.isFunction(a)&&a.apply(this,arguments)}},runInactive:function(a){if(this.currentPage&&(c(this.currentPage.el).trigger("inactive",b.values(arguments)),this.currentPage.inactive)){var d=b.isFunction(this.currentPage.inactive)?this.currentPage.inactive:this[this.currentPage.inactive];b.isFunction(d)&&d(a)}}})});