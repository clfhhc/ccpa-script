(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"33yf":function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var o=t[r];"."===o?t.splice(r,1):".."===o?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var c=i>=0?arguments[i]:t.cwd();if("string"!==typeof c)throw new TypeError("Arguments to path.resolve must be strings");c&&(e=c+"/"+e,o="/"===c.charAt(0))}return(o?"/":"")+(e=n(r(e.split("/"),(function(t){return!!t})),!o).join("/"))||"."},e.normalize=function(t){var i=e.isAbsolute(t),c="/"===o(t,-1);return(t=n(r(t.split("/"),(function(t){return!!t})),!i).join("/"))||i||(t="."),t&&c&&(t+="/"),(i?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(r(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length&&""===t[e];e++);for(var n=t.length-1;n>=0&&""===t[n];n--);return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var o=r(t.split("/")),i=r(n.split("/")),c=Math.min(o.length,i.length),s=c,a=0;a<c;a++)if(o[a]!==i[a]){s=a;break}var u=[];for(a=s;a<o.length;a++)u.push("..");return(u=u.concat(i.slice(s))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,o=!0,i=t.length-1;i>=1;--i)if(47===(e=t.charCodeAt(i))){if(!o){r=i;break}}else o=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=function(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,o=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!o){n=e+1;break}}else-1===r&&(o=!1,r=e+1);return-1===r?"":t.slice(n,r)}(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,o=!0,i=0,c=t.length-1;c>=0;--c){var s=t.charCodeAt(c);if(47!==s)-1===r&&(o=!1,r=c+1),46===s?-1===e?e=c:1!==i&&(i=1):-1!==e&&(i=-1);else if(!o){n=c+1;break}}return-1===e||-1===r||0===i||1===i&&e===r-1&&e===n+1?"":t.slice(e,r)};var o="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("8oxB"))},SEF9:function(t,e,n){"use strict";var r=n("wx14"),o=n("Ff2n"),i=n("q1tI"),c=n.n(i),s=n("YFqc"),a=n.n(s),u=n("33yf"),f=n("qKvR");c.a.createElement;e.a=function(t){var e=t.href,n=t.as,i=void 0===n?e:n,c=t.linkPrefix,s=void 0===c?"/nextjs_redux_toolkit":c,l=Object(o.a)(t,["href","as","linkPrefix"]);return Object(f.b)(a.a,Object(r.a)({href:e,as:Object(u.join)(s,i.toString())},l))}},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("7W2i"),c=n("a1gu"),s=n("Nsbk");function a(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}var u=n("TqRt"),f=n("284h");e.__esModule=!0,e.default=void 0;var l,p=f(n("q1tI")),h=n("QmWs"),v=n("g/15"),b=u(n("nOHt")),d=n("elyg");function g(t){return t&&"object"===typeof t?(0,v.formatWithValidation)(t):t}var y=new Map,m=window.IntersectionObserver,j={};function w(){return l||(m?l=new m((function(t){t.forEach((function(t){if(y.has(t.target)){var e=y.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(l.unobserve(t.target),y.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var O=function(t){i(n,t);var e=a(n);function n(t){var o;return r(this,n),(o=e.call(this,t)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var c=t(o,i);return e=o,n=i,r=c,c}}((function(t,e){return{href:(0,d.addBasePath)(g(t)),as:e?(0,d.addBasePath)(g(e)):e}})),o.linkClicked=function(t){var e=t.currentTarget,n=e.nodeName,r=e.target;if("A"!==n||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=o.formatUrls(o.props.href,o.props.as),c=i.href,s=i.as;if(function(t){var e=(0,h.parse)(t,!1,!0),n=(0,h.parse)((0,v.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(c)){var a=window.location.pathname;c=(0,h.resolve)(a,c),s=s?(0,h.resolve)(a,s):c,t.preventDefault();var u=o.props.scroll;null==u&&(u=s.indexOf("#")<0),b.default[o.props.replace?"replace":"push"](c,s,{shallow:o.props.shallow}).then((function(t){t&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==t.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,h.resolve)(t,n);return[o,r?(0,h.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&m&&t&&t.tagName&&(this.cleanUpListeners(),j[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=w();return n?(n.observe(t),y.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}y.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();b.default.prefetch(e[0],e[1],t).catch((function(t){0})),j[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var i=p.Children.only(e),c={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(c.href=o||r),p.default.cloneElement(i,c)}}]),n}(p.Component);e.default=O},dZPe:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("/MKj"),c=n("qKvR"),s=n("rhY5"),a=function(t){return t.count[0]},u=function(t){return t.count[1]},f=function(t){return"".concat(t/16,"rem")},l=(o.a.createElement,Object(c.a)("display:flex;align-items:center;margin:",f(5),";& > *{margin:0 ",f(5),";}& > input{max-width:",f(50),";width:100%;height:",f(15),";}"));e.a=function(){var t=Object(r.useState)(0),e=t[0],n=t[1],o=Object(r.useState)(0),f=o[0],p=o[1],h=Object(i.b)(),v=Object(i.c)(a),b=Object(i.c)(u);return Object(c.b)("div",null,Object(c.b)("div",{css:l},Object(c.b)("input",{type:"number",onChange:function(t){n(parseInt(t.target.value,10))},value:e}),Object(c.b)("button",{type:"button",onClick:function(){return h(Object(s.b)(e))}},"add first number"),Object(c.b)("p",null,v)),Object(c.b)("div",{css:l},Object(c.b)("input",{type:"number",onChange:function(t){p(parseInt(t.target.value,10))},value:f}),Object(c.b)("button",{type:"button",onClick:function(){return h(Object(s.c)(f))}},"add second number"),Object(c.b)("p",null,b)))}}}]);