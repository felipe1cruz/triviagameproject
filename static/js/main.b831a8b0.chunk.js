/*! For license information please see main.b831a8b0.chunk.js.LICENSE.txt */
(this["webpackJsonptrivia-react-redux"]=this["webpackJsonptrivia-react-redux"]||[]).push([[0],{36:function(t,e,r){},38:function(t,e,r){t.exports=r.p+"static/media/interrogation.5a554197.png"},39:function(t,e,r){t.exports=r.p+"static/media/check.d8fbb0ea.png"},40:function(t,e,r){t.exports=r.p+"static/media/wrong.b523ea0d.png"},41:function(t,e,r){t.exports=r.p+"static/media/ampulheta.ca41588a.png"},45:function(t,e,r){t.exports=r(86)},53:function(t,e,r){},54:function(t,e,r){},55:function(t,e){},80:function(t,e,r){},86:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),o=r(22),i=r.n(o),c=r(14),s=r(23),u=r(3),l=(r(53),r(24)),h=r(25),f=r(11),p=r(5),d=r(6),m=r(8),v=r(7),y=(r(54),"token"),g=function(){return fetch("https://opentdb.com/api_token.php?command=request").then((function(t){return t.json()})).then((function(t){return localStorage.setItem(y,t.token)}))},b=function(){var t=localStorage.getItem(y);if(t)return fetch("https://opentdb.com/api.php?amount=5&token="+t).then((function(t){return t.json()}))};function E(){E=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(S){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof h?e:h,o=Object.create(a.prototype),i=new j(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=s;var l={};function h(){}function f(){}function p(){}var d={};c(d,a,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(x([])));v&&v!==e&&r.call(v,a)&&(d=v);var y=p.prototype=h.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var s=u(t[a],t,o);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function x(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=p,c(y,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(b.prototype),c(b.prototype,o,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new b(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(y),c(y,i,"Generator"),c(y,a,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=x,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}var w={name:"",gravatarEmail:"",isDisabled:!1},O=function(t){Object(m.a)(r,t);var e=Object(v.a)(r);function r(){var t;Object(p.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state=Object(f.a)({},w),t.handleChange=function(e){var r=e.target,n=r.name,a=r.value;t.setState(Object(h.a)({},n,a))},t.handleClick=Object(l.a)(E().mark((function e(){var r,n,a,o,i,c;return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.state,n=r.name,a=r.gravatarEmail,o=t.props,i=o.setPlayerAction,c=o.history,i(n,a),e.next=5,g();case 5:c.push("/trivia");case 6:case"end":return e.stop()}}),e)}))),t}return Object(d.a)(r,[{key:"render",value:function(){var t=this.props.history,e=this.state,r=e.gravatarEmail,n=e.name,o=this.state.isDisabled;return r.match(/\w+@[a-z]+\.com/g)&&n.length>=3&&(o=!0),a.a.createElement("section",{className:"login__page"},a.a.createElement("form",null,a.a.createElement("span",{className:"text-center"},"login"),a.a.createElement("div",{className:"input-container"},a.a.createElement("input",{placeholder:"nome","data-testid":"input-player-name",type:"text",name:"name",id:"name",onChange:this.handleChange,value:n})),a.a.createElement("div",{className:"input-container"},a.a.createElement("input",{placeholder:"e-mail","data-testid":"input-gravatar-email",type:"email",name:"gravatarEmail",id:"gravatarEmail",onChange:this.handleChange,value:r})),a.a.createElement("button",{type:"button","data-testid":"btn-play",className:o?"btn mt-50":"btn mt-50 disabled",onClick:this.handleClick,disabled:!o},"Play!"),a.a.createElement("button",{type:"button","data-testid":"btn-settings",className:"btn mt-50",onClick:function(){return t.push("/settings")}},"Settings")))}}]),r}(a.a.Component),k=Object(c.b)(null,(function(t){return{setPlayerAction:function(e,r){return t(function(t,e){return{type:"SET_PLAYER",name:t,email:e}}(e,r))}}}))(O),j=function(t){Object(m.a)(r,t);var e=Object(v.a)(r);function r(){return Object(p.a)(this,r),e.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return a.a.createElement("h1",{"data-testid":"settings-title"},"Settings")}}]),r}(a.a.Component),x=r(26),L=(r(36),function(t){Object(m.a)(r,t);var e=Object(v.a)(r);function r(){return Object(p.a)(this,r),e.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){var t=this.props,e=t.name,r=t.gravatarEmail,n=t.score;return a.a.createElement("header",null,a.a.createElement("span",{"data-testid":"header-player-name"},e),a.a.createElement("img",{"data-testid":"header-profile-picture",className:"gravatar-icon",src:"https://www.gravatar.com/avatar/".concat(Object(x.MD5)(r).toString()),alt:"gravatar"}),a.a.createElement("span",{"data-testid":"header-score"},n))}}]),r}(a.a.Component)),S=Object(c.b)((function(t){var e=t.player;return{name:e.name,gravatarEmail:e.gravatarEmail,score:e.score}}),null)(L),C=r(27),_=r(38),N=r.n(_),I=r(39),A=r.n(I),T=r(40),P=r.n(T),q=r(41),G=r.n(q),F=(r(80),function(){return JSON.parse(localStorage.getItem("ranking"))}),Q=function(t){var e=F();if(e){var r=[].concat(Object(C.a)(e),[t]).sort((function(t,e){return e.score-t.score}));localStorage.setItem("ranking",JSON.stringify(r))}else localStorage.setItem("ranking",JSON.stringify([t]))};function R(t){var e=document.createElement("textarea");return e.innerHTML=t,e.value}var D=function(t){for(var e=t.length-1;e>0;e-=1){var r=Math.floor(Math.random()*(e+1)),n=t[e];t[e]=t[r],t[r]=n}},M={hard:3,medium:2,easy:1},Y={isClicked:!1,isCorrectAnswer:!1,counter:30,intervalId:0,isCounting:!0},J=function(t){Object(m.a)(r,t);var e=Object(v.a)(r);function r(){var t;Object(p.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state=Object(f.a)(Object(f.a)({},Y),{},{shuffledQuestions:[]}),t.setShuffledQuestion=function(){var e=t.props.quest,r=e.correct_answer,n=e.incorrect_answers,a=[].concat(Object(C.a)(n),[r]).map((function(t,e){return{answer:t,datatestid:t===r?"correct-answer":"wrong-answer-".concat(e),isCorrect:t===r}}));D(a),t.setState({shuffledQuestions:a})},t.handleClick=function(e){var r=t.props.setScoreAction;t.stopCounting(),t.setState({isClicked:!0}),e?(t.setState({isCorrectAnswer:!0}),r(t.score())):t.setState({isCorrectAnswer:!1})},t.score=function(){var e=t.props.quest.difficulty;return 10+t.state.counter*M[e]},t.timer=function(){var e=t.state,r=e.counter,n=e.intervalId,a=r-1;a>0?t.setState({counter:a}):(clearInterval(n),t.setState({isCounting:!1,isClicked:!0}))},t.next=function(){var e=t.props,r=e.last,n=e.history,a=e.nextQuestion,o=e.name,i=e.score,c=e.picture;if(console.log(r),a(),r)n.push("/feedback"),Q({name:o,score:i,picture:c});else{var s=setInterval(t.timer,1e3);t.setState(Object(f.a)(Object(f.a)({},Y),{},{intervalId:s})),t.setShuffledQuestion()}},t.stopCounting=function(){var e=t.state.intervalId;clearInterval(e),t.setState({isCounting:!1})},t.checkAnswers=function(t){return t?"m5 btn green disabled":"m5 btn red disabled"},t}return Object(d.a)(r,[{key:"componentDidMount",value:function(){this.setShuffledQuestion();var t=setInterval(this.timer,1e3);this.setState({intervalId:t})}},{key:"componentWillUnmount",value:function(){var t=this.state.intervalId;clearInterval(t)}},{key:"render",value:function(){var t=this,e=this.state,r=e.isClicked,n=e.isCorrectAnswer,o=e.shuffledQuestions,i=e.counter,c=e.isCounting,s=this.props.quest,u=s.category,l=s.question;return a.a.createElement("section",{className:"question-container"},a.a.createElement("h4",{"data-testid":"question-category"},u),r?a.a.createElement("img",{src:n?A.a:P.a,alt:n?"check":"wrong",className:"img"}):a.a.createElement("img",{src:N.a,alt:"responda",className:"img"}),a.a.createElement("div",{className:"counter-container"},c?a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{src:G.a,alt:"ampulheta",className:"img rotate-center"}),a.a.createElement("span",null,i)):a.a.createElement("button",{type:"button","data-testid":"btn-next",className:"btn",onClick:this.next},"NEXT")),a.a.createElement("p",{"data-testid":"question-text"},R(l)),a.a.createElement("div",{"data-testid":"answer-options"},o.map((function(e){var n=e.answer,o=e.datatestid,i=e.isCorrect;return a.a.createElement("button",{key:o,"data-testid":o,type:"button",onClick:function(){return t.handleClick(i)},disabled:r,className:r?t.checkAnswers(i):"m5 btn"},R(n))}))))}}]),r}(a.a.Component),W=Object(u.f)(Object(c.b)((function(t){var e=t.player;return{name:e.name,score:e.score,picture:e.gravatarEmail}}),(function(t){return{setScoreAction:function(e){return t(function(t){return{type:"SET_SCORE",score:t}}(e))}}}))(J));function z(){z=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(L){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof h?e:h,o=Object.create(a.prototype),i=new k(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return x()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(L){return{type:"throw",arg:L}}}t.wrap=s;var l={};function h(){}function f(){}function p(){}var d={};c(d,a,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(j([])));v&&v!==e&&r.call(v,a)&&(d=v);var y=p.prototype=h.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var s=u(t[a],t,o);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:x}}function x(){return{value:void 0,done:!0}}return f.prototype=p,c(y,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(b.prototype),c(b.prototype,o,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new b(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(y),c(y,i,"Generator"),c(y,a,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}var B=function(t){Object(m.a)(r,t);var e=Object(v.a)(r);function r(){var t;Object(p.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={questions:[],questNumber:0},t.getQuestionsToState=Object(l.a)(z().mark((function e(){var r,n;return z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.props.history,e.next=3,b();case 3:0===(n=e.sent).response_code?t.setState({questions:n.results}):(localStorage.removeItem(y),r.push("/"));case 5:case"end":return e.stop()}}),e)}))),t.nextQuestion=function(){t.setState((function(t){return{questNumber:t.questNumber+1}}))},t}return Object(d.a)(r,[{key:"componentDidMount",value:function(){this.getQuestionsToState()}},{key:"render",value:function(){var t=this.state,e=t.questions,r=t.questNumber;return a.a.createElement(a.a.Fragment,null,a.a.createElement(S,null),e.length&&a.a.createElement(W,{quest:e[r],last:e.length-1===r,nextQuestion:this.nextQuestion,questNumber:r}))}}]),r}(a.a.Component),H=function(t){Object(m.a)(r,t);var e=Object(v.a)(r);function r(){var t;Object(p.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).onClickPlayAgain=function(){t.props.history.push("/")},t.onClickRanking=function(){t.props.history.push("/ranking")},t}return Object(d.a)(r,[{key:"render",value:function(){var t=this.props,e=t.assertions,r=t.score;return a.a.createElement(a.a.Fragment,null,a.a.createElement(S,null),a.a.createElement("h1",{"data-testid":"feedback-text"},e>=3?"Well Done!":"Could be better..."),a.a.createElement("h2",null,"Total de pontos:"),a.a.createElement("p",{"data-testid":"feedback-total-score"},r),a.a.createElement("h2",null,"Total de acertos:"),a.a.createElement("p",{"data-testid":"feedback-total-question"},e),a.a.createElement("button",{type:"button",onClick:this.onClickPlayAgain,"data-testid":"btn-play-again"},"Play Again"),a.a.createElement("button",{type:"button",onClick:this.onClickRanking,"data-testid":"btn-ranking"},"Ranking"))}}]),r}(a.a.Component),U=Object(c.b)((function(t){var e=t.player;return{assertions:e.assertions,score:e.score}}),null)(H),V=function(t){Object(m.a)(r,t);var e=Object(v.a)(r);function r(){var t;Object(p.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={rankingList:[]},t.onClick=function(){var e=t.props,r=e.history;(0,e.reset)(),r.push("/")},t}return Object(d.a)(r,[{key:"componentDidMount",value:function(){this.setState({rankingList:F()})}},{key:"render",value:function(){var t=this.state.rankingList;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{"data-testid":"ranking-title"},"Ranking"),a.a.createElement("button",{type:"button",onClick:this.onClick,"data-testid":"btn-go-home"},"Voltar ao In\xedcio"),t&&t.map((function(t,e){return a.a.createElement("div",{key:e},a.a.createElement("p",{"data-testid":"player-name-".concat(e)},t.name),a.a.createElement("p",{"data-testid":"player-score-".concat(e)},t.score),a.a.createElement("img",{src:"https://www.gravatar.com/avatar/".concat(Object(x.MD5)(t.picture).toString()),alt:t.name}))})))}}]),r}(a.a.Component),X=Object(c.b)(null,(function(t){return{reset:function(){return t({type:"RESET"})}}}))(V);function K(){return a.a.createElement(u.c,null,a.a.createElement(u.a,{exact:!0,path:"/triviagameproject",render:function(t){return a.a.createElement(k,t)}}),a.a.createElement(u.a,{exact:!0,path:"/trivia",render:function(t){return a.a.createElement(B,t)}}),a.a.createElement(u.a,{exact:!0,path:"/settings",render:function(t){return a.a.createElement(j,t)}}),a.a.createElement(u.a,{exact:!0,path:"/feedback",render:function(t){return a.a.createElement(U,t)}}),a.a.createElement(u.a,{exact:!0,path:"/ranking",render:function(t){return a.a.createElement(X,t)}}))}var Z=r(19),$=r(43),tt=r(44),et={name:"",assertions:0,score:0,gravatarEmail:""},rt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_PLAYER":return Object(f.a)(Object(f.a)({},t),{},{name:e.name,gravatarEmail:e.email});case"SET_SCORE":return Object(f.a)(Object(f.a)({},t),{},{score:t.score+e.score,assertions:t.assertions+1});case"RESET":return Object(f.a)({},et);default:return t}},nt=Object(Z.combineReducers)({player:rt}),at=Object(Z.legacy_createStore)(nt,Object($.composeWithDevTools)(Object(Z.applyMiddleware)(tt.a)));window.Cypress&&(window.store=at);var ot=at;i.a.render(a.a.createElement(c.a,{store:ot},a.a.createElement(s.a,null,a.a.createElement(K,null))),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.b831a8b0.chunk.js.map