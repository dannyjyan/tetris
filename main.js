!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=5)}([function(t,e,r){var n=r(1);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(3)(n,o);n.locals&&(t.exports=n.locals)},function(t,e,r){(t.exports=r(2)(!1)).push([t.i,"canvas{position:absolute;left:0px;top:0px}.canvases{position:relative;width:360px;height:600px}#background{background:red;z-index:-1}body{background:#505050}.center{display:flex;align-content:center;justify-content:center}\n",""])},function(t,e,r){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var o=(s=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[r].concat(i).concat([o]).join("\n")}var s;return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(n[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];null!=s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),e.push(s))}},e}},function(t,e,r){var n,o,i={},s=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),a=function(t){var e={};return function(t,r){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),l=null,c=0,u=[],f=r(4);function p(t,e){for(var r=0;r<t.length;r++){var n=t[r],o=i[n.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](n.parts[s]);for(;s<n.parts.length;s++)o.parts.push(m(n.parts[s],e))}else{var a=[];for(s=0;s<n.parts.length;s++)a.push(m(n.parts[s],e));i[n.id]={id:n.id,refs:1,parts:a}}}}function h(t,e){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],s=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};n[s]?n[s].parts.push(a):r.push(n[s]={id:s,parts:[a]})}return r}function d(t,e){var r=a(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=u[u.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),u.push(e);else if("bottom"===t.insertAt)r.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(t.insertAt.before,r);r.insertBefore(e,o)}}function y(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function v(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return r.nc}();n&&(t.attrs.nonce=n)}return b(e,t.attrs),d(t,e),e}function b(t,e){Object.keys(e).forEach(function(r){t.setAttribute(r,e[r])})}function m(t,e){var r,n,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var s=c++;r=l||(l=v(e)),n=w.bind(null,r,s,!1),o=w.bind(null,r,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),d(t,e),e}(e),n=function(t,e,r){var n=r.css,o=r.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(n=f(n));o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([n],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,r,e),o=function(){y(r),r.href&&URL.revokeObjectURL(r.href)}):(r=v(e),n=function(t,e){var r=e.css,n=e.media;n&&t.setAttribute("media",n);if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,r),o=function(){y(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=h(t,e);return p(r,e),function(t){for(var n=[],o=0;o<r.length;o++){var s=r[o];(a=i[s.id]).refs--,n.push(a)}t&&p(h(t,e),e);for(o=0;o<n.length;o++){var a;if(0===(a=n[o]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete i[a.id]}}}};var g,x=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function w(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,n=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,r){"use strict";r.r(e);r(0);var n=class{constructor(t,e){this.canvas=t,this.context=e,this.dim=[12,20],this.colors=["","#f0f002","#00f1f0","#00f000","#f00001","#f0a000","#0000f0","#a001f0"],this.prevTime=0,this.dropCounter=0,this.dropInterval=1e3,this.player={pos:{x:0,y:0},matrix:[[0,0,0],[1,1,1],[0,1,0]]},this.update=this.update.bind(this),this.start=this.start.bind(this),this.boardClear=this.boardClear.bind(this),e.scale(30,30)}bindKeyHandlers(){document.addEventListener("keydown",t=>{37===t.keyCode?this.playerMove(-1):40===t.keyCode?this.playerDrop():39===t.keyCode?this.playerMove(1):90===t.keyCode?this.playerRotate(-1):38===t.keyCode?this.playerRotate(1):32===t.keyCode&&this.playerHardDrop()})}boardClear(){t:for(let t=this.board.length-1;t>0;--t){for(let e=0;e<12;e++)if(0===this.board[t][e])continue t;const e=this.board.splice(t,1)[0].fill(0);this.board.unshift(e),++t}}collide(t,e){const[r,n]=[e.matrix,e.pos];for(let e=0;e<r.length;++e)for(let o=0;o<r[e].length;++o)if(0!==r[e][o]&&0!==(t[e+n.y]&&t[e+n.y][o+n.x]))return!0;return!1}createMatrix(t,e){const r=[];for(;e>0;)r.push(new Array(t).fill(0)),e--;return r}createPiece(t){switch(t){case"O":return[[1,1],[1,1]];case"I":return[[0,0,0,0],[2,2,2,2],[0,0,0,0],[0,0,0,0]];case"S":return[[0,3,3],[3,3,0],[0,0,0]];case"Z":return[[4,4,0],[0,4,4],[0,0,0]];case"L":return[[5,5,5],[5,0,0],[0,0,0]];case"J":return[[6,6,6],[0,0,6],[0,0,0]];case"T":return[[7,7,7],[0,7,0],[0,0,0]]}}drawMatrix(t,e){t.forEach((t,r)=>{t.forEach((t,n)=>{0!==t&&(this.context.fillStyle=this.colors[t],this.context.fillRect(n+e.x,r+e.y,1,1))})})}draw(){this.context.fillStyle="#8282e1",this.context.fillRect(0,0,this.canvas.width,this.canvas.height),this.drawMatrix(this.board,{x:0,y:0}),this.drawMatrix(this.player.matrix,this.player.pos)}gameOver(){this.board.forEach(t=>t.fill(0))}merge(t,e){this.player.matrix.forEach((r,n)=>{r.forEach((r,o)=>{0!==r&&(t[n+e.pos.y][o+e.pos.x]=r)})})}playerDrop(){let t=!1;return this.player.pos.y++,this.collide(this.board,this.player)&&(t=!0,this.player.pos.y--,this.merge(this.board,this.player),this.playerReset(),this.boardClear()),this.dropCounter=0,t}playerHardDrop(){let t=this.playerDrop();for(;!t;)t=this.playerDrop()}playerMove(t){this.player.pos.x+=t,this.collide(this.board,this.player)&&(this.player.pos.x-=t)}playerRotate(t){const e=this.player.pos.x;let r=1;for(this.rotate(this.player.matrix,t);this.collide(this.board,this.player);)if(this.player.pos.x+=r,(r=-(r+(r>0?1:-1)))>this.player.matrix[0].length)return this.rotate(this.player.matrix,-t),void(this.player.pos.x=e)}playerReset(){this.player.matrix=this.createPiece("OISZLJT"["OISZLJT".length*Math.random()|0]),this.player.pos.y=0,this.player.pos.x=(this.board[0].length/2|0)-(this.player.matrix[0].length/2|0),this.collide(this.board,this.player)&&this.gameOver()}rotate(t,e){for(let e=0;e<t.length;++e)for(let r=0;r<e;++r)[t[r][e],t[e][r]]=[t[e][r],t[r][e]];e>0?t.forEach(t=>t.reverse()):t.reverse()}start(){this.bindKeyHandlers(),this.board=this.createMatrix(...this.dim),this.playerReset(),this.update()}update(t=0){let e=t-this.prevTime;this.prevTime=t,this.dropCounter+=e,this.dropCounter>this.dropInterval&&this.playerDrop(),this.draw(),requestAnimationFrame(this.update)}};document.addEventListener("DOMContentLoaded",()=>{let t=document.getElementById("game"),e=document.getElementById("background");t.width=360,t.height=600,e.width=360,e.height=600;const r=t.getContext("2d");new n(t,r).start()})}]);