(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{80:function(e,a,t){"use strict";t.r(a);var n=t(8),i=t(9),r=t(11),c=t(10),o=t(12),s=t(6),l=t(0),u=t.n(l),m=t(17),d=t(27),f=t(41),g=t.n(f),p=(t(43),t(5)),v=t(3),h=function(e){function a(){var e;return Object(n.a)(this,a),(e=Object(r.a)(this,Object(c.a)(a).call(this))).state={isLoading:!0,funEvents:[],dataSize:3},e.updateCarouselDataSize=e.updateCarouselDataSize.bind(Object(s.a)(Object(s.a)(e))),e}return Object(o.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.updateCarouselDataSize(),fetch("/json/fun-events.json").then(function(e){return 200===e.status?e.json():[]}).then(function(a){e.setState({funEvents:a,isLoading:!1},function(){g.a.attach()})}).catch(function(e){console.log(e)})}},{key:"updateCarouselDataSize",value:function(e){var a=document.documentElement,t=(window.innerWidth||a.clientWidth||a.getElementsByTagName("body")[0].clientWidth)>768?3:1;t!==this.dataSize&&this.setState({dataSize:t},function(){"function"===typeof e&&e()})}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.funEvents,n=e.dataSize;if(a)return u.a.createElement(m.a,null);if(0===t.length)return null;var i=t.map(function(e){return u.a.createElement(E,{data:e,key:e.img_url})});return u.a.createElement(u.a.Fragment,null,u.a.createElement(d.a,{title:"Celebrations:"}),u.a.createElement("div",{className:"carousel carousel-animated carousel-animate-slide","data-size":n,"data-autoplay":"true"},u.a.createElement("div",{className:"carousel-container"},i),u.a.createElement("div",{className:"carousel-navigation is-overlay"},u.a.createElement("div",{className:"carousel-nav-left has-text-grey-darker"},u.a.createElement(v.a,{icon:p.c})),u.a.createElement("div",{className:"carousel-nav-right has-text-grey-darker"},u.a.createElement(v.a,{icon:p.d})))))}}]),a}(u.a.Component),E=function(e){var a=e.data,t=a.img_caption?a.img_caption:"",n=!!a.show_caption&&a.show_caption,i=a.img_caption_link?a.img_caption_link:"";return u.a.createElement("div",{className:"carousel-item has-background"},u.a.createElement("figure",{className:"image is-square"},u.a.createElement("img",{className:"is-background",src:a.img_url,alt:t}),n&&u.a.createElement(b,{captionLink:i,imgCaption:t})))},b=function(e){var a=e.captionLink,t=e.imgCaption;return""!==a?u.a.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener"},u.a.createElement(k,{imgCaption:t})):u.a.createElement(k,{imgCaption:t})},k=function(e){var a=e.imgCaption;return u.a.createElement("div",{className:"title is-size-6"},a)};a.default=h}}]);
//# sourceMappingURL=1.1eb81b3e.chunk.js.map