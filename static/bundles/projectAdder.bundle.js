!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}({2:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.handleSubmit=r.handleSubmit.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,React.Component),n(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t={name:this.refs.projectName.value,category:this.refs.category.value,link:this.refs.projectLink.value,securityKey:this.refs.securityKey.value};fetch("/add_project",{method:"POST",header:new Headers,body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){console.log(e)})}},{key:"render",value:function(){return React.createElement("div",{id:"project-adder-container"},React.createElement("div",{id:"project-adder-inputs"},React.createElement("h1",{id:"project-adder-header"},"Add a new project!"),React.createElement("form",{id:"test-form",onSubmit:this.handleSubmit},React.createElement("input",{className:"project-adder-input",type:"text",placeholder:"Project Name",ref:"projectName"}),React.createElement("input",{className:"project-adder-input",type:"text",placeholder:"Category",ref:"category"}),React.createElement("input",{className:"project-adder-input",type:"text",placeholder:"Link",ref:"projectLink"}),React.createElement("input",{className:"project-adder-input",type:"text",placeholder:"Security Key",ref:"securityKey"}),React.createElement("button",{id:"project-adder-submit"},"Add"))))}}]),t}();t.default=o,ReactDOM.render(React.createElement(o,null),document.getElementById("adder"))}});