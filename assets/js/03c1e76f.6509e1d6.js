/*! For license information please see 03c1e76f.6509e1d6.js.LICENSE.txt */
(self.webpackChunknatuerlich_docs=self.webpackChunknatuerlich_docs||[]).push([[850],{8068:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var r=n(7294),o=n(3011),i="https://platform.twitter.com/widgets.js",l="createTweet",c=function(e){var t=r.useRef(null),o=r.useState(!0),c=o[0],a=o[1];return r.useEffect((function(){var r=!0;return n(5277)(i,"twitter-embed",(function(){if(window.twttr){if(r){if(!window.twttr.widgets[l])return void console.error("Method "+l+" is not present anymore in twttr.widget api");window.twttr.widgets[l](e.tweetId,null==t?void 0:t.current,e.options).then((function(t){a(!1),e.onLoad&&e.onLoad(t)}))}}else console.error("Failure to load window.twttr, aborting load")})),function(){r=!1}}),[]),r.createElement(r.Fragment,null,c&&r.createElement(r.Fragment,null,e.placeholder),r.createElement("div",{ref:t}))};function a(){return r.createElement(o.Z,{title:"Hello",description:"Hello React Page"},r.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontSize:"20px",flexWrap:"wrap"}},r.createElement(u,{tweetId:"1697613919617995254"}),r.createElement(u,{tweetId:"1700170091223031910"}),r.createElement(u,{tweetId:"1695022580120346964"}),r.createElement(u,{tweetId:"1690023371298230272"}),r.createElement(u,{tweetId:"1691813194644246561"})))}function u(e){let{tweetId:t}=e;return r.createElement("div",{className:"tweetEmbed"},r.createElement(c,{tweetId:t}))}},5277:(e,t,n)=>{var r,o,i;i=function(){var e,t,n=document,r=n.getElementsByTagName("head")[0],o=!1,i="push",l="readyState",c="onreadystatechange",a={},u={},f={},d={};function s(e,t){for(var n=0,r=e.length;n<r;++n)if(!t(e[n]))return o;return 1}function w(e,t){s(e,(function(e){return t(e),1}))}function m(t,n,r){t=t[i]?t:[t];var o=n&&n.call,l=o?n:r,c=o?t.join(""):n,h=t.length;function g(e){return e.call?e():a[e]}function v(){if(! --h)for(var e in a[c]=1,l&&l(),f)s(e.split("|"),g)&&!w(f[e],g)&&(f[e]=[])}return setTimeout((function(){w(t,(function t(n,r){return null===n?v():(r||/^https?:\/\//.test(n)||!e||(n=-1===n.indexOf(".js")?e+n+".js":e+n),d[n]?(c&&(u[c]=1),2==d[n]?v():setTimeout((function(){t(n,!0)}),0)):(d[n]=1,c&&(u[c]=1),void p(n,v)))}))}),0),m}function p(e,o){var i,a=n.createElement("script");a.onload=a.onerror=a[c]=function(){a[l]&&!/^c|loade/.test(a[l])||i||(a.onload=a[c]=null,i=1,d[e]=2,o())},a.async=1,a.src=t?e+(-1===e.indexOf("?")?"?":"&")+t:e,r.insertBefore(a,r.lastChild)}return m.get=p,m.order=function(e,t,n){!function r(o){o=e.shift(),e.length?m(o,r):m(o,t,n)}()},m.path=function(t){e=t},m.urlArgs=function(e){t=e},m.ready=function(e,t,n){e=e[i]?e:[e];var r,o=[];return!w(e,(function(e){a[e]||o[i](e)}))&&s(e,(function(e){return a[e]}))?t():(r=e.join("|"),f[r]=f[r]||[],f[r][i](t),n&&n(o)),m},m.done=function(e){m([null],e)},m},e.exports?e.exports=i():void 0===(o="function"==typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=o)}}]);