!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={timeIcon:"light"},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,React.Component),r(t,[{key:"decideIcon",value:function(){var e=(new Date).getHours();e>=18||e<=4?this.setState({timeIcon:"static/icons/Moon.svg"}):this.setState({timeIcon:"static/icons/Sun.svg"})}},{key:"componentWillMount",value:function(){this.decideIcon()}},{key:"render",value:function(){return React.createElement("div",{id:"navbar-container"},React.createElement("nav",null,React.createElement("ul",{id:"nav-ul"},React.createElement("li",{className:"nav-item"},React.createElement("a",{className:"nav-link",href:"/"},"Projects")),React.createElement("li",{className:"nav-item",id:"nav-icon-container"},React.createElement("img",{id:"nav-icon",src:this.state.timeIcon})),React.createElement("li",{className:"nav-item"},React.createElement("a",{className:"nav-link",href:"/essays"},"Essays")))))}}]),t}();t.default=o},function(e,t,n){"use strict";var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=(r=a)&&r.__esModule?r:{default:r};function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(e){function t(e){return c(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return u(t,React.Component),o(t,[{key:"render",value:function(){return React.createElement("div",{className:"essay-item"},React.createElement("img",{className:"essay-image",src:this.props.image}),React.createElement("a",{className:"essay-title",href:this.props.link,target:"_blank"},this.props.title))}}]),t}(),f=function(e){function t(e){c(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={essays:[]},n}return u(t,React.Component),o(t,[{key:"getEssays",value:function(){var e=this;fetch("https://api.tumblr.com/v2/blog/jdraiv.tumblr.com/posts/text?api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4&notes_info=true").then(function(e){return e.json()}).then(function(t){e.setState({essays:t.response.posts})})}},{key:"componentWillMount",value:function(){this.getEssays()}},{key:"render",value:function(){var e=this.state.essays.map(function(e){return React.createElement(l,{title:e.title,link:e.short_url,image:(t=e.reblog.comment,n=t.substring(t.search("src=")+5),n.substring(0,n.search('"')))});var t,n});return[React.createElement(i.default,null),React.createElement("div",{id:"essays-box"},e)]}}]),t}();ReactDOM.render(React.createElement(f,null),document.getElementById("container"))}]);