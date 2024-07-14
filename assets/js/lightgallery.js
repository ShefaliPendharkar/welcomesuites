/**!
 * lightgallery.js | 1.4.1-beta.0 | October 29th 2020
 * http://sachinchoolur.github.io/lightgallery.js/
 * Copyright (c) 2016 Sachin N; 
 * @license GPLv3 
 */
/**!
 * lightgallery.js | 1.4.1-beta.0 | October 29th 2020
 * http://sachinchoolur.github.io/lightgallery.js/
 * Copyright (c) 2016 Sachin N; 
 * @license GPLv3 
 */ !function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;(t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Lightgallery=e()}}(function(){var e;return(function(){function e(t,l,s){function i(r,o){if(!l[r]){if(!t[r]){var d="function"==typeof require&&require;if(!o&&d)return d(r,!0);if(a)return a(r,!0);var n=Error("Cannot find module '"+r+"'");throw n.code="MODULE_NOT_FOUND",n}var u=l[r]={exports:{}};t[r][0].call(u.exports,function(e){return i(t[r][1][e]||e)},u,u.exports,e,t,l,s)}return l[r].exports}for(var a="function"==typeof require&&require,r=0;r<s.length;r++)i(s[r]);return i}return e})()({1:[function(t,l,s){!function(t,l){if("function"==typeof e&&e.amd)e(["exports"],l);else if(void 0!==s)l(s);else{var i={exports:{}};l(i.exports),t.lgUtils=i.exports}}(this,function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t={getAttribute:function e(t,l){return t[l]},setAttribute:function e(t,l,s){t[l]=s},wrap:function e(t,l){if(t){var s=document.createElement("div");s.className=l,t.parentNode.insertBefore(s,t),t.parentNode.removeChild(t),s.appendChild(t)}},addClass:function e(t,l){t&&(t.classList?t.classList.add(l):t.className+=" "+l)},removeClass:function e(t,l){t&&(t.classList?t.classList.remove(l):t.className=t.className.replace(RegExp("(^|\\b)"+l.split(" ").join("|")+"(\\b|$)","gi")," "))},hasClass:function e(t,l){return t.classList?t.classList.contains(l):RegExp("(^| )"+l+"( |$)","gi").test(t.className)},setVendor:function e(t,l,s){t&&(t.style[l.charAt(0).toLowerCase()+l.slice(1)]=s,t.style["webkit"+l]=s,t.style["moz"+l]=s,t.style["ms"+l]=s,t.style["o"+l]=s)},trigger:function e(t,l){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(t){var i=new CustomEvent(l,{detail:s});t.dispatchEvent(i)}},Listener:{uid:0},on:function e(l,s,i){var a=this;l&&s.split(" ").forEach(function(e){var s=a.getAttribute(l,"lg-event-uid")||"";t.Listener.uid++,s+="&"+t.Listener.uid,a.setAttribute(l,"lg-event-uid",s),t.Listener[e+t.Listener.uid]=i,l.addEventListener(e.split(".")[0],i,!1)})},off:function e(l,s){if(l){var i=this.getAttribute(l,"lg-event-uid");if(i){i=i.split("&");for(var a=0;a<i.length;a++)if(i[a]){var r=s+i[a];if("."===r.substring(0,1))for(var o in t.Listener)t.Listener.hasOwnProperty(o)&&o.split(".").indexOf(r.split(".")[1])>-1&&(l.removeEventListener(o.split(".")[0],t.Listener[o]),this.setAttribute(l,"lg-event-uid",this.getAttribute(l,"lg-event-uid").replace("&"+i[a],"")),delete t.Listener[o]);else l.removeEventListener(r.split(".")[0],t.Listener[r]),this.setAttribute(l,"lg-event-uid",this.getAttribute(l,"lg-event-uid").replace("&"+i[a],"")),delete t.Listener[r]}}}},param:function e(t){return Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")}};e.default=t})},{}],2:[function(t,l,s){var i,a;i=this,a=function(e){"use strict";var t,l=(t=e,t&&t.__esModule?t:{default:t}),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s])}return e};(function(){if("function"==typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var l=document.createEvent("CustomEvent");return l.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),l}e.prototype=window.Event.prototype,window.CustomEvent=e})(),window.utils=l.default,window.lgData={uid:0},window.lgModules={};var i={mode:"lg-slide",cssEasing:"ease",easing:"linear",speed:600,height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:150,hideBarsDelay:6e3,useLeft:!1,ariaLabelledby:"",ariaDescribedby:"",closable:!0,loop:!0,escKey:!0,keyPress:!0,controls:!0,slideEndAnimatoin:!0,hideControlOnEnd:!1,mousewheel:!1,getCaptionFromTitleOrAlt:!0,appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:!1,preload:1,showAfterLoad:!0,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",index:!1,iframeMaxWidth:"100%",download:!0,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],galleryId:1,supportLegacyBrowser:!0};function a(e,t){if(this.el=e,this.s=s({},i,t),this.s.dynamic&&"undefined"!==this.s.dynamicEl&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length)throw"When using dynamic mode, you must also define dynamicEl as an Array.";return this.modules={},this.lGalleryOn=!1,this.lgBusy=!1,this.hideBartimeout=!1,this.isTouch="ontouchstart"in document.documentElement,this.s.slideEndAnimatoin&&(this.s.hideControlOnEnd=!1),this.items=[],this.s.dynamic?this.items=this.s.dynamicEl:"this"===this.s.selector?this.items.push(this.el):""!==this.s.selector?this.s.selectWithin?this.items=document.querySelector(this.s.selectWithin).querySelectorAll(this.s.selector):this.items=this.el.querySelectorAll(this.s.selector):this.items=this.el.children,this.___slide="",this.outer="",this.init(),this}a.prototype.init=function(){var e=this;e.s.preload>e.items.length&&(e.s.preload=e.items.length);var t=window.location.hash;if(t.indexOf("lg="+this.s.galleryId)>0&&(e.index=parseInt(t.split("&slide=")[1],10),l.default.addClass(document.body,"lg-from-hash"),l.default.hasClass(document.body,"lg-on")||(l.default.addClass(document.body,"lg-on"),setTimeout(function(){e.build(e.index)}))),e.s.dynamic)l.default.trigger(this.el,"onBeforeOpen"),e.index=e.s.index||0,l.default.hasClass(document.body,"lg-on")||(l.default.addClass(document.body,"lg-on"),setTimeout(function(){e.build(e.index)}));else for(var s=0;s<e.items.length;s++)!function(t){l.default.on(e.items[t],"click.lgcustom",function(s){s.preventDefault(),l.default.trigger(e.el,"onBeforeOpen"),e.index=e.s.index||t,l.default.hasClass(document.body,"lg-on")||(e.build(e.index),l.default.addClass(document.body,"lg-on"))})}(s)},a.prototype.build=function(e){var t=this;for(var s in t.structure(),window.lgModules)t.modules[s]=new window.lgModules[s](t.el);if(t.slide(e,!1,!1),t.s.keyPress&&t.keyPress(),t.items.length>1&&(t.arrow(),setTimeout(function(){t.enableDrag(),t.enableSwipe()},50),t.s.mousewheel&&t.mousewheel()),t.counter(),t.closeGallery(),l.default.trigger(t.el,"onAfterOpen"),t.s.hideBarsDelay>0){var i=setTimeout(function(){l.default.addClass(t.outer,"lg-hide-items")},t.s.hideBarsDelay);l.default.on(t.outer,"mousemove.lg click.lg touchstart.lg",function(){clearTimeout(i),l.default.removeClass(t.outer,"lg-hide-items"),clearTimeout(t.hideBartimeout),t.hideBartimeout=setTimeout(function(){l.default.addClass(t.outer,"lg-hide-items")},t.s.hideBarsDelay)})}},a.prototype.structure=function(){var e,t,s="",i="",a=0,r="",o=this;for(document.body.insertAdjacentHTML("beforeend",'<div class="lg-backdrop"></div>'),l.default.setVendor(document.querySelector(".lg-backdrop"),"TransitionDuration",this.s.backdropDuration+"ms"),a=0;a<this.items.length;a++)s+='<div class="lg-item"></div>';if(this.s.controls&&this.items.length>1&&(i='<div class="lg-actions"><button type="button" aria-label="Previous slide" class="lg-prev lg-icon">'+this.s.prevHtml+'</button><button type="button" aria-label="Next slide" class="lg-next lg-icon">'+this.s.nextHtml+"</button></div>"),".lg-sub-html"===this.s.appendSubHtmlTo&&(r='<div role="status" aria-live="polite" class="lg-sub-html"></div>'),t='<div tabindex="-1" aria-modal="true" '+(this.s.ariaLabelledby?'aria-labelledby="'+this.s.ariaLabelledby+'"':"")+" "+(this.s.ariaDescribedby?'aria-describedby="'+this.s.ariaDescribedby+'"':"")+' role="dialog" class="lg-outer '+this.s.addClass+" "+this.s.startClass+'"><div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'"><div class="lg-inner">'+s+'</div><div class="lg-toolbar lg-group"><button type="button" aria-label="Close gallery" class="lg-close lg-icon"></button></div>'+i+r+"</div></div>",document.body.insertAdjacentHTML("beforeend",t),this.outer=document.querySelector(".lg-outer"),this.outer.focus(),this.___slide=this.outer.querySelectorAll(".lg-item"),this.s.useLeft?(l.default.addClass(this.outer,"lg-use-left"),this.s.mode="lg-slide"):l.default.addClass(this.outer,"lg-use-css3"),o.setTop(),l.default.on(window,"resize.lg orientationchange.lg",function(){setTimeout(function(){o.setTop()},100)}),l.default.addClass(this.___slide[this.index],"lg-current"),this.doCss()?l.default.addClass(this.outer,"lg-css3"):(l.default.addClass(this.outer,"lg-css"),this.s.speed=0),l.default.addClass(this.outer,this.s.mode),this.s.enableDrag&&this.items.length>1&&l.default.addClass(this.outer,"lg-grab"),this.s.showAfterLoad&&l.default.addClass(this.outer,"lg-show-after-load"),this.doCss()){var d=this.outer.querySelector(".lg-inner");l.default.setVendor(d,"TransitionTimingFunction",this.s.cssEasing),l.default.setVendor(d,"TransitionDuration",this.s.speed+"ms")}setTimeout(function(){l.default.addClass(document.querySelector(".lg-backdrop"),"in")}),setTimeout(function(){l.default.addClass(o.outer,"lg-visible")},this.s.backdropDuration),this.s.download&&this.outer.querySelector(".lg-toolbar").insertAdjacentHTML("beforeend",'<a id="lg-download" aria-label="Download" target="_blank" download class="lg-download lg-icon"></a>'),this.prevScrollTop=document.documentElement.scrollTop||document.body.scrollTop},a.prototype.setTop=function(){if("100%"!==this.s.height){var e=window.innerHeight,t=(e-parseInt(this.s.height,10))/2,l=this.outer.querySelector(".lg");e>=parseInt(this.s.height,10)?l.style.top=t+"px":l.style.top="0px"}},a.prototype.doCss=function(){return!!function e(){var t=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],l=document.documentElement,s=0;for(s=0;s<t.length;s++)if(t[s]in l.style)return!0}()},a.prototype.isVideo=function(e,t){if(l=this.s.dynamic?this.s.dynamicEl[t].html:this.items[t].getAttribute("data-html"),!e&&l)return{html5:!0};var l,s=e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),i=e.match(/\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)/i),a=e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),r=e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);return s?{youtube:s}:i?{vimeo:i}:a?{dailymotion:a}:r?{vk:r}:void 0},a.prototype.counter=function(){this.s.counter&&this.outer.querySelector(this.s.appendCounterTo).insertAdjacentHTML("beforeend",'<div id="lg-counter" role="status" aria-live="polite"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.items.length+"</span></div>")},a.prototype.addHtml=function(e){var t,s=null;if(this.s.dynamic?s=this.s.dynamicEl[e].subHtml:(s=(t=this.items[e]).getAttribute("data-sub-html"),this.s.getCaptionFromTitleOrAlt&&!s&&(s=t.getAttribute("title"))&&t.querySelector("img")&&(s=t.querySelector("img").getAttribute("alt"))),null!=s){var i=s.substring(0,1);("."===i||"#"===i)&&(s=this.s.subHtmlSelectorRelative&&!this.s.dynamic?t.querySelector(s).innerHTML:document.querySelector(s).innerHTML)}else s="";".lg-sub-html"===this.s.appendSubHtmlTo?this.outer.querySelector(this.s.appendSubHtmlTo).innerHTML=s:this.___slide[e].insertAdjacentHTML("beforeend",s),null!=s&&(""===s?l.default.addClass(this.outer.querySelector(this.s.appendSubHtmlTo),"lg-empty-html"):l.default.removeClass(this.outer.querySelector(this.s.appendSubHtmlTo),"lg-empty-html")),l.default.trigger(this.el,"onAfterAppendSubHtml",{index:e})},a.prototype.preload=function(e){var t=1,l=1;for(t=1;t<=this.s.preload&&!(t>=this.items.length-e);t++)this.loadContent(e+t,!1,0);for(l=1;l<=this.s.preload&&!(e-l<0);l++)this.loadContent(e-l,!1,0)},a.prototype.loadContent=function(e,t,s){var i,a,r,o,d,n,u,g=this,c=!1,f=function e(t){for(var l=[],s=[],i=0;i<t.length;i++){var r=t[i].split(" ");""===r[0]&&r.splice(0,1),s.push(r[0]),l.push(r[1])}for(var o=window.innerWidth,d=0;d<l.length;d++)if(parseInt(l[d],10)>o){a=s[d];break}};g.s.dynamic?(g.s.dynamicEl[e].poster&&(c=!0,r=g.s.dynamicEl[e].poster),n=g.s.dynamicEl[e].html,a=g.s.dynamicEl[e].src,u=g.s.dynamicEl[e].alt,g.s.dynamicEl[e].responsive&&f(g.s.dynamicEl[e].responsive.split(",")),o=g.s.dynamicEl[e].srcset,d=g.s.dynamicEl[e].sizes):(g.items[e].getAttribute("data-poster")&&(c=!0,r=g.items[e].getAttribute("data-poster")),n=g.items[e].getAttribute("data-html"),a=g.items[e].getAttribute("href")||g.items[e].getAttribute("data-src"),u=g.items[e].getAttribute("title"),g.items[e].querySelector("img")&&(u=u||g.items[e].querySelector("img").getAttribute("alt")),g.items[e].getAttribute("data-responsive")&&f(g.items[e].getAttribute("data-responsive").split(",")),o=g.items[e].getAttribute("data-srcset"),d=g.items[e].getAttribute("data-sizes"));var h=!1;g.s.dynamic?g.s.dynamicEl[e].iframe&&(h=!0):"true"===g.items[e].getAttribute("data-iframe")&&(h=!0);var m=g.isVideo(a,e);if(!l.default.hasClass(g.___slide[e],"lg-loaded")){if(h)g.___slide[e].insertAdjacentHTML("afterbegin",'<div class="lg-video-cont" style="max-width:'+g.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+a+'"  allowfullscreen="true"></iframe></div></div>');else if(c){var p="";p=m&&m.youtube?"lg-has-youtube":m&&m.vimeo?"lg-has-vimeo":"lg-has-html5",g.___slide[e].insertAdjacentHTML("beforeend",'<div class="lg-video-cont '+p+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+r+'" /></div></div>')}else m?(g.___slide[e].insertAdjacentHTML("beforeend",'<div class="lg-video-cont "><div class="lg-video"></div></div>'),l.default.trigger(g.el,"hasVideo",{index:e,src:a,html:n})):(u=u?'alt="'+u+'"':"",g.___slide[e].insertAdjacentHTML("beforeend",'<div class="lg-img-wrap"><img class="lg-object lg-image" '+u+' src="'+a+'" /></div>'));if(l.default.trigger(g.el,"onAferAppendSlide",{index:e}),i=g.___slide[e].querySelector(".lg-object"),d&&i.setAttribute("sizes",d),o&&(i.setAttribute("srcset",o),this.s.supportLegacyBrowser))try{picturefill({elements:[i[0]]})}catch(v){console.warn("If you want srcset to be supported for older browsers, please include picturefil javascript library in your document.")}".lg-sub-html"!==this.s.appendSubHtmlTo&&g.addHtml(e),l.default.addClass(g.___slide[e],"lg-loaded")}l.default.on(g.___slide[e].querySelector(".lg-object"),"load.lg error.lg",function(){var t=0;s&&!l.default.hasClass(document.body,"lg-from-hash")&&(t=s),setTimeout(function(){l.default.addClass(g.___slide[e],"lg-complete"),l.default.trigger(g.el,"onSlideItemLoad",{index:e,delay:s||0})},t)}),m&&m.html5&&!c&&l.default.addClass(g.___slide[e],"lg-complete"),!0===t&&(l.default.hasClass(g.___slide[e],"lg-complete")?g.preload(e):l.default.on(g.___slide[e].querySelector(".lg-object"),"load.lg error.lg",function(){g.preload(e)}))},a.prototype.slide=function(e,t,s){for(var i,a=0,r=0;r<this.___slide.length;r++)if(l.default.hasClass(this.___slide[r],"lg-current")){a=r;break}var o=this;if(!o.lGalleryOn||a!==e){var d=this.___slide.length,n=o.lGalleryOn?this.s.speed:0,u=!1,g=!1;if(!o.lgBusy){if(this.s.download&&((i=o.s.dynamic?!1!==o.s.dynamicEl[e].downloadUrl&&(o.s.dynamicEl[e].downloadUrl||o.s.dynamicEl[e].src):"false"!==o.items[e].getAttribute("data-download-url")&&(o.items[e].getAttribute("data-download-url")||o.items[e].getAttribute("href")||o.items[e].getAttribute("data-src")))?(document.getElementById("lg-download").setAttribute("href",i),l.default.removeClass(o.outer,"lg-hide-download")):l.default.addClass(o.outer,"lg-hide-download")),l.default.trigger(o.el,"onBeforeSlide",{prevIndex:a,index:e,fromTouch:t,fromThumb:s}),o.lgBusy=!0,clearTimeout(o.hideBartimeout),".lg-sub-html"===this.s.appendSubHtmlTo&&setTimeout(function(){o.addHtml(e)},n),this.arrowDisable(e),t){var c=e-1,f=e+1;0===e&&a===d-1?(f=0,c=d-1):e===d-1&&0===a&&(f=0,c=d-1),l.default.removeClass(o.outer.querySelector(".lg-prev-slide"),"lg-prev-slide"),l.default.removeClass(o.outer.querySelector(".lg-current"),"lg-current"),l.default.removeClass(o.outer.querySelector(".lg-next-slide"),"lg-next-slide"),l.default.addClass(o.___slide[c],"lg-prev-slide"),l.default.addClass(o.___slide[f],"lg-next-slide"),l.default.addClass(o.___slide[e],"lg-current")}else{l.default.addClass(o.outer,"lg-no-trans");for(var h=0;h<this.___slide.length;h++)l.default.removeClass(this.___slide[h],"lg-prev-slide"),l.default.removeClass(this.___slide[h],"lg-next-slide");e<a?(g=!0,0!==e||a!==d-1||s||(g=!1,u=!0)):e>a&&(u=!0,e!==d-1||0!==a||s||(g=!0,u=!1)),g?(l.default.addClass(this.___slide[e],"lg-prev-slide"),l.default.addClass(this.___slide[a],"lg-next-slide")):u&&(l.default.addClass(this.___slide[e],"lg-next-slide"),l.default.addClass(this.___slide[a],"lg-prev-slide")),setTimeout(function(){l.default.removeClass(o.outer.querySelector(".lg-current"),"lg-current"),l.default.addClass(o.___slide[e],"lg-current"),l.default.removeClass(o.outer,"lg-no-trans")},50)}o.lGalleryOn?(setTimeout(function(){o.loadContent(e,!0,0)},this.s.speed+50),setTimeout(function(){o.lgBusy=!1,l.default.trigger(o.el,"onAfterSlide",{prevIndex:a,index:e,fromTouch:t,fromThumb:s})},this.s.speed)):(o.loadContent(e,!0,o.s.backdropDuration),o.lgBusy=!1,l.default.trigger(o.el,"onAfterSlide",{prevIndex:a,index:e,fromTouch:t,fromThumb:s})),o.lGalleryOn=!0,this.s.counter&&document.getElementById("lg-counter-current")&&(document.getElementById("lg-counter-current").innerHTML=e+1)}}},a.prototype.goToNextSlide=function(e){var t=this;!t.lgBusy&&(t.index+1<t.___slide.length?(t.index++,l.default.trigger(t.el,"onBeforeNextSlide",{index:t.index}),t.slide(t.index,e,!1)):t.s.loop?(t.index=0,l.default.trigger(t.el,"onBeforeNextSlide",{index:t.index}),t.slide(t.index,e,!1)):t.s.slideEndAnimatoin&&(l.default.addClass(t.outer,"lg-right-end"),setTimeout(function(){l.default.removeClass(t.outer,"lg-right-end")},400)))},a.prototype.goToPrevSlide=function(e){var t=this;!t.lgBusy&&(t.index>0?(t.index--,l.default.trigger(t.el,"onBeforePrevSlide",{index:t.index,fromTouch:e}),t.slide(t.index,e,!1)):t.s.loop?(t.index=t.items.length-1,l.default.trigger(t.el,"onBeforePrevSlide",{index:t.index,fromTouch:e}),t.slide(t.index,e,!1)):t.s.slideEndAnimatoin&&(l.default.addClass(t.outer,"lg-left-end"),setTimeout(function(){l.default.removeClass(t.outer,"lg-left-end")},400)))},a.prototype.keyPress=function(){var e=this;this.items.length>1&&l.default.on(window,"keyup.lg",function(t){e.items.length>1&&(37===t.keyCode&&(t.preventDefault(),e.goToPrevSlide()),39===t.keyCode&&(t.preventDefault(),e.goToNextSlide()))}),l.default.on(window,"keydown.lg",function(t){!0===e.s.escKey&&27===t.keyCode&&(t.preventDefault(),l.default.hasClass(e.outer,"lg-thumb-open")?l.default.removeClass(e.outer,"lg-thumb-open"):e.destroy())})},a.prototype.arrow=function(){var e=this;l.default.on(this.outer.querySelector(".lg-prev"),"click.lg",function(){e.goToPrevSlide()}),l.default.on(this.outer.querySelector(".lg-next"),"click.lg",function(){e.goToNextSlide()})},a.prototype.arrowDisable=function(e){if(!this.s.loop&&this.s.hideControlOnEnd){var t=this.outer.querySelector(".lg-next"),s=this.outer.querySelector(".lg-prev");e+1<this.___slide.length?(t.removeAttribute("disabled"),l.default.removeClass(t,"disabled")):(t.setAttribute("disabled","disabled"),l.default.addClass(t,"disabled")),e>0?(s.removeAttribute("disabled"),l.default.removeClass(s,"disabled")):(s.setAttribute("disabled","disabled"),l.default.addClass(s,"disabled"))}},a.prototype.setTranslate=function(e,t,s){this.s.useLeft?e.style.left=t:l.default.setVendor(e,"Transform","translate3d("+t+"px, "+s+"px, 0px)")},a.prototype.touchMove=function(e,t){var s=t-e;Math.abs(s)>15&&(l.default.addClass(this.outer,"lg-dragging"),this.setTranslate(this.___slide[this.index],s,0),this.setTranslate(document.querySelector(".lg-prev-slide"),-this.___slide[this.index].clientWidth+s,0),this.setTranslate(document.querySelector(".lg-next-slide"),this.___slide[this.index].clientWidth+s,0))},a.prototype.touchEnd=function(e){var t=this;"lg-slide"!==t.s.mode&&l.default.addClass(t.outer,"lg-slide");for(var s=0;s<this.___slide.length;s++)l.default.hasClass(this.___slide[s],"lg-current")||l.default.hasClass(this.___slide[s],"lg-prev-slide")||l.default.hasClass(this.___slide[s],"lg-next-slide")||(this.___slide[s].style.opacity="0");setTimeout(function(){l.default.removeClass(t.outer,"lg-dragging"),e<0&&Math.abs(e)>t.s.swipeThreshold?t.goToNextSlide(!0):e>0&&Math.abs(e)>t.s.swipeThreshold?t.goToPrevSlide(!0):5>Math.abs(e)&&l.default.trigger(t.el,"onSlideClick");for(var s=0;s<t.___slide.length;s++)t.___slide[s].removeAttribute("style")}),setTimeout(function(){l.default.hasClass(t.outer,"lg-dragging")||"lg-slide"===t.s.mode||l.default.removeClass(t.outer,"lg-slide")},t.s.speed+100)},a.prototype.enableSwipe=function(){var e=this,t=0,s=0,i=!1;if(e.s.enableSwipe&&e.isTouch&&e.doCss()){for(var a=0;a<e.___slide.length;a++)l.default.on(e.___slide[a],"touchstart.lg",function(s){l.default.hasClass(e.outer,"lg-zoomed")||e.lgBusy||(s.preventDefault(),e.manageSwipeClass(),t=s.targetTouches[0].pageX)});for(var r=0;r<e.___slide.length;r++)l.default.on(e.___slide[r],"touchmove.lg",function(a){l.default.hasClass(e.outer,"lg-zoomed")||(a.preventDefault(),s=a.targetTouches[0].pageX,e.touchMove(t,s),i=!0)});for(var o=0;o<e.___slide.length;o++)l.default.on(e.___slide[o],"touchend.lg",function(){l.default.hasClass(e.outer,"lg-zoomed")||(i?(i=!1,e.touchEnd(s-t)):l.default.trigger(e.el,"onSlideClick"))})}},a.prototype.enableDrag=function(){var e=this,t=0,s=0,i=!1,a=!1;if(e.s.enableDrag&&!e.isTouch&&e.doCss()){for(var r=0;r<e.___slide.length;r++)l.default.on(e.___slide[r],"mousedown.lg",function(s){!l.default.hasClass(e.outer,"lg-zoomed")&&(l.default.hasClass(s.target,"lg-object")||l.default.hasClass(s.target,"lg-video-play"))&&(s.preventDefault(),e.lgBusy||(e.manageSwipeClass(),t=s.pageX,i=!0,e.outer.scrollLeft+=1,e.outer.scrollLeft-=1,l.default.removeClass(e.outer,"lg-grab"),l.default.addClass(e.outer,"lg-grabbing"),l.default.trigger(e.el,"onDragstart")))});l.default.on(window,"mousemove.lg",function(r){i&&(a=!0,s=r.pageX,e.touchMove(t,s),l.default.trigger(e.el,"onDragmove"))}),l.default.on(window,"mouseup.lg",function(r){a?(a=!1,e.touchEnd(s-t),l.default.trigger(e.el,"onDragend")):(l.default.hasClass(r.target,"lg-object")||l.default.hasClass(r.target,"lg-video-play"))&&l.default.trigger(e.el,"onSlideClick"),i&&(i=!1,l.default.removeClass(e.outer,"lg-grabbing"),l.default.addClass(e.outer,"lg-grab"))})}},a.prototype.manageSwipeClass=function(){var e=this.index+1,t=this.index-1,s=this.___slide.length;this.s.loop&&(0===this.index?t=s-1:this.index===s-1&&(e=0));for(var i=0;i<this.___slide.length;i++)l.default.removeClass(this.___slide[i],"lg-next-slide"),l.default.removeClass(this.___slide[i],"lg-prev-slide");t>-1&&l.default.addClass(this.___slide[t],"lg-prev-slide"),l.default.addClass(this.___slide[e],"lg-next-slide")},a.prototype.mousewheel=function(){var e=this;l.default.on(e.outer,"mousewheel.lg",function(t){t.deltaY&&(t.deltaY>0?e.goToPrevSlide():e.goToNextSlide(),t.preventDefault())})},a.prototype.closeGallery=function(){var e=this,t=!1;l.default.on(this.outer.querySelector(".lg-close"),"click.lg",function(){e.destroy()}),e.s.closable&&(l.default.on(e.outer,"mousedown.lg",function(e){t=!!(l.default.hasClass(e.target,"lg-outer")||l.default.hasClass(e.target,"lg-item")||l.default.hasClass(e.target,"lg-img-wrap"))}),l.default.on(e.outer,"mouseup.lg",function(s){(l.default.hasClass(s.target,"lg-outer")||l.default.hasClass(s.target,"lg-item")||l.default.hasClass(s.target,"lg-img-wrap")&&t)&&!l.default.hasClass(e.outer,"lg-dragging")&&e.destroy()}))},a.prototype.destroy=function(e){var t=this;if(e||l.default.trigger(t.el,"onBeforeClose"),document.body.scrollTop=t.prevScrollTop,document.documentElement.scrollTop=t.prevScrollTop,e){if(!t.s.dynamic)for(var s=0;s<this.items.length;s++)l.default.off(this.items[s],".lg"),l.default.off(this.items[s],".lgcustom");var i=t.el.getAttribute("lg-uid");delete window.lgData[i],t.el.removeAttribute("lg-uid")}for(var a in l.default.off(this.el,".lgtm"),window.lgModules)t.modules[a]&&t.modules[a].destroy(e);this.lGalleryOn=!1,clearTimeout(t.hideBartimeout),this.hideBartimeout=!1,l.default.off(window,".lg"),l.default.removeClass(document.body,"lg-on"),l.default.removeClass(document.body,"lg-from-hash"),t.outer&&l.default.removeClass(t.outer,"lg-visible"),l.default.removeClass(document.querySelector(".lg-backdrop"),"in"),setTimeout(function(){try{t.outer&&t.outer.parentNode.removeChild(t.outer),document.querySelector(".lg-backdrop")&&document.querySelector(".lg-backdrop").parentNode.removeChild(document.querySelector(".lg-backdrop")),e||l.default.trigger(t.el,"onCloseAfter"),t.el.focus()}catch(s){}},t.s.backdropDuration+50)},window.lightGallery=function(e,t){if(e)try{if(e.getAttribute("lg-uid"))window.lgData[e.getAttribute("lg-uid")].init();else{var l="lg"+window.lgData.uid++;window.lgData[l]=new a(e,t),e.setAttribute("lg-uid",l)}}catch(s){console.error("lightGallery has not initiated properly",s)}}},"function"==typeof e&&e.amd?e(["./lg-utils"],a):void 0!==s?a(t("./lg-utils")):(a(i.lgUtils),i.lightgallery={})},{"./lg-utils":1}]},{},[2])(2)});