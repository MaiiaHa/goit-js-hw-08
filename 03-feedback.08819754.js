!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return s.Date.now()};function b(e,t,n){var o,i,a,u,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,f=setTimeout(h,t),d?b(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function h(){var e=g();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return s?p(n,a-(e-c)):n}(e))}function w(e){return f=void 0,v&&o?b(e):(o=i=void 0,u)}function T(){var e=g(),n=O(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(s)return f=setTimeout(h,t),b(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=S(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},T.flush=function(){return void 0===f?u:w(g())},T}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:o,maxWait:t,trailing:i})};var j=document.querySelector(".feedback-form"),O=document.querySelector("input"),h=document.querySelector("textarea");j.addEventListener("input",e(t)((function(e){e.preventDefault(),localStorage.setItem("feedback-form-state",JSON.stringify({email:O.value,message:h.value}));var t=JSON.parse(localStorage.getItem("feedback-form-state"));console.log(t)}),500)),j.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.clear("feedback-form-state")})),localStorage?(console.log(O.value),O.value=data.email,h.value=data.message):(O.value="",h.value="")}();
//# sourceMappingURL=03-feedback.08819754.js.map
