(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{233:function(e,t,n){"use strict";n.d(t,"a",function(){return g});var r=n(32),o=n(33),a=n(35),u=n(34),l=n(36),i=n(0),s=n.n(i),c=n(4),f=n(22),p=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var t=function(t){function n(){return Object(r.a)(this,n),Object(a.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(l.a)(n,t),Object(o.a)(n,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(c.a,{to:"/login"})}}]),n}(s.a.Component);return Object(f.b)(p)(t)}},234:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",function(){return r})},240:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var u,l=e[Symbol.iterator]();!(r=(u=l.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(i){o=!0,a=i}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",function(){return r})},297:function(e,t,n){e.exports={paginator:"Paginator_paginator__bEqWT",pageNumber:"Paginator_pageNumber__27PIf",selectedPage:"Paginator_selectedPage__56AsK"}},298:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var u=o.apply(null,r);u&&e.push(u)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var l in r)n.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},299:function(e,t,n){e.exports=n.p+"static/media/user.08e6ccaf.png"},300:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__2y6NQ",selectedPage:"Users_selectedPage__3hpDL"}},306:function(e,t,n){"use strict";n.r(t);var r=n(32),o=n(33),a=n(35),u=n(34),l=n(36),i=n(79),s=n(22),c=n(0),f=n.n(c),p=n(234),g=n(63),h=n(240),d=n(297),m=n.n(d),v=n(298),b=n.n(v),y=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,o=e.onPageChanged,a=e.portionSize,u=void 0===a?10:a,l=Math.ceil(t/n),i=[],s=1;s<=l;s++)i.push(s);var p=Math.ceil(l/u),d=Object(c.useState)(1),v=Object(h.a)(d,2),y=v[0],P=v[1],w=(y-1)*u+1,E=y*u;return f.a.createElement("div",{className:m.a.paginator},y>1&&f.a.createElement("button",{onClick:function(){P(y-1)}},"PREV"),i.filter(function(e){return e>=w&&e<=E}).map(function(e){return f.a.createElement("span",{className:b()(Object(g.a)({},m.a.selectedPage,r===e),m.a.pageNumber),key:e,onClick:function(t){o(e)}},e)}),p>y&&f.a.createElement("button",{onClick:function(){P(y+1)}},"NEXT"))},P=n(299),w=n.n(P),E=n(300),O=n.n(E),j=n(11),C=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,o=e.follow;return f.a.createElement("div",null,f.a.createElement("span",null,f.a.createElement("div",null,f.a.createElement(j.b,{to:"/profile/"+t.id},f.a.createElement("img",{src:null!=t.photos.small?t.photos.small:w.a,className:O.a.userPhoto}))),f.a.createElement("div",null,t.followed?f.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){r(t.id)}},"Unfollow"):f.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){o(t.id)}},"Follow"))),f.a.createElement("span",null,f.a.createElement("span",null,f.a.createElement("div",null,t.name),f.a.createElement("div",null,t.status)),f.a.createElement("span",null,f.a.createElement("div",null,"u.location.city"),f.a.createElement("div",null,"u.location.country"))))},S=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,o=e.onPageChanged,a=e.users,u=Object(p.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return f.a.createElement("div",null,f.a.createElement(y,{currentPage:t,onPageChanged:o,totalItemsCount:n,pageSize:r}),f.a.createElement("div",null,a.map(function(e){return f.a.createElement(C,{user:e,followingInProgress:u.followingInProgress,key:e.id,follow:u.follow,unfollow:u.unfollow})})))},I=n(43),_=n(233),U=n(18);function k(e,t){return e===t}var A=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];var a=0,u=r.pop(),l=function(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(e){return"function"===typeof e})){var n=t.map(function(e){return typeof e}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}(r),i=e.apply(void 0,[function(){return a++,u.apply(null,arguments)}].concat(n)),s=e(function(){for(var e=[],t=l.length,n=0;n<t;n++)e.push(l[n].apply(null,arguments));return i.apply(null,e)});return s.resultFunc=u,s.dependencies=l,s.recomputations=function(){return a},s.resetRecomputations=function(){return a=0},s}}(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:k,n=null,r=null;return function(){return function(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!e(t[o],n[o]))return!1;return!0}(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}});var z=A(function(e){return e.usersPage.users},function(e){return e.filter(function(e){return!0})}),x=function(e){return e.usersPage.pageSize},F=function(e){return e.usersPage.totalUsersCount},N=function(e){return e.usersPage.currentPage},q=function(e){return e.usersPage.isFetching},T=function(e){return e.usersPage.followingInProgress},M=function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,l=new Array(o),i=0;i<o;i++)l[i]=arguments[i];return(n=Object(a.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).onPageChanged=function(e){var t=n.props.pageSize;n.props.requestUsers(e,t)},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return f.a.createElement(f.a.Fragment,null,this.props.isFetching?f.a.createElement(I.a,null):null,f.a.createElement(S,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress,toggleIsFollowing:this.props.toggleIsFollowing}))}}]),t}(f.a.Component);t.default=Object(U.compose)(Object(s.b)(function(e){return{users:z(e),pageSize:x(e),totalUsersCount:F(e),currentPage:N(e),isFetching:q(e),followingInProgress:T(e)}},{follow:i.b,unfollow:i.i,setUsers:i.f,setTotalUsersCount:i.e,setCurrentPage:i.d,toggleIsFetching:i.g,toggleIsFollowing:i.h,requestUsers:i.c}),_.a)(M)}}]);
//# sourceMappingURL=5.7f6368f3.chunk.js.map