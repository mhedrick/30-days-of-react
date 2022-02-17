"use strict";(self.webpackChunk_30_days_of_react=self.webpackChunk_30_days_of_react||[]).push([[645],{1118:function(e,t,r){r.d(t,{FT:function(){return i}});var n=r(885),a=r(7294),o=r(5893),c=["as","disabled"];function i(e){var t=e.tagName,r=e.disabled,n=e.href,a=e.target,o=e.rel,c=e.onClick,i=e.tabIndex,l=void 0===i?0:i,s=e.type;t||(t=null!=n||null!=a||null!=o?"a":"button");var u={tagName:t};if("button"===t)return[{type:s||"button",disabled:r},u];var f=function(e){(r||"a"===t&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),r?e.stopPropagation():null==c||c(e)};return[{role:"button",disabled:void 0,tabIndex:r?void 0:l,href:"a"===t&&r?void 0:n,target:"a"===t?a:void 0,"aria-disabled":r||void 0,rel:"a"===t?o:void 0,onClick:f,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),f(e))}},u]}var l=a.forwardRef((function(e,t){var r=e.as,a=e.disabled,l=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,c),s=i(Object.assign({tagName:r,disabled:a},l)),u=(0,n.Z)(s,2),f=u[0],p=u[1].tagName;return(0,o.jsx)(p,Object.assign({},l,f,{ref:t}))}));l.displayName="Button",t.ZP=l},6594:function(e,t,r){var n=r(4942),a=r(885),o=r(5987),c=r(5900),i=r.n(c),l=r(7294),s=r(1118),u=r(9541),f=r(5893),p=["as","bsPrefix","variant","size","active","className"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=l.forwardRef((function(e,t){var r=e.as,n=e.bsPrefix,c=e.variant,l=e.size,d=e.active,v=e.className,m=(0,o.Z)(e,p),y=(0,u.vE)(n,"btn"),O=(0,s.FT)(b({tagName:r},m)),j=(0,a.Z)(O,2),g=j[0],x=j[1].tagName;return(0,f.jsx)(x,b(b(b({},m),g),{},{ref:t,className:i()(v,y,d&&"active",c&&"".concat(y,"-").concat(c),l&&"".concat(y,"-").concat(l),m.href&&m.disabled&&"disabled")}))}));v.displayName="Button",v.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=v},2719:function(e,t,r){r.d(t,{Z:function(){return j}});var n=r(5987),a=r(4942),o=r(5900),c=r.n(o),i=r(7294),l=r(8870),s=r(9541),u=r(4709),f=i.createContext(null);f.displayName="InputGroupContext";var p=f,d=r(5893),b=["bsPrefix","size","hasValidation","className","as"];function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=(0,l.Z)("input-group-text",{Component:"span"}),O=i.forwardRef((function(e,t){var r=e.bsPrefix,a=e.size,o=e.hasValidation,l=e.className,u=e.as,f=void 0===u?"div":u,v=(0,n.Z)(e,b);r=(0,s.vE)(r,"input-group");var y=(0,i.useMemo)((function(){return{}}),[]);return(0,d.jsx)(p.Provider,{value:y,children:(0,d.jsx)(f,m(m({ref:t},v),{},{className:c()(l,r,a&&"".concat(r,"-").concat(a),o&&"has-validation")}))})}));O.displayName="InputGroup";var j=Object.assign(O,{Text:y,Radio:function(e){return(0,d.jsx)(y,{children:(0,d.jsx)(u.Z,m({type:"radio"},e))})},Checkbox:function(e){return(0,d.jsx)(y,{children:(0,d.jsx)(u.Z,m({type:"checkbox"},e))})}})},994:function(e,t,r){var n=r(4942),a=r(5987),o=r(5900),c=r.n(o),i=r(7294),l=r(9541),s=r(5893),u=["bsPrefix","className","as"];function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=["xxl","xl","lg","md","sm","xs"],b=i.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,o=e.as,i=void 0===o?"div":o,f=(0,a.Z)(e,u),b=(0,l.vE)(r,"row"),v="".concat(b,"-cols"),m=[];return d.forEach((function(e){var t,r=f[e];delete f[e],t=null!=r&&"object"==typeof r?r.cols:r;var n="xs"!==e?"-".concat(e):"";null!=t&&m.push("".concat(v).concat(n,"-").concat(t))})),(0,s.jsx)(i,p(p({ref:t},f),{},{className:c().apply(void 0,[n,b].concat(m))}))}));b.displayName="Row",t.Z=b},7723:function(e,t,r){r.r(t);var n=r(7294),a=r(7198),o=r(2140),c=r(6594),i=r(994),l=r(7408),s=r(2957),u=r(2719),f=function(){for(var e="0123456789abcdef",t="",r=0;r<6;r++){t+=e[Math.floor(Math.random()*e.length)]}return"#"+t},p=function(e){var t=e.color,r=(0,n.useState)(!1),a=r[0],i=r[1],l=(0,n.useRef)(null);return n.createElement("div",{className:o.Gg+" flex-column",style:{backgroundColor:t}},n.createElement("div",{ref:l},t),n.createElement(c.Z,{variant:"secondary",size:"sm",onClick:function(){var e=l.current.textContent;navigator.clipboard.writeText(e),i(!0),setTimeout((function(){i(!1)}),3e3)}},a?"copied":"copy"))};t.default=function(){for(var e=(0,n.useState)(27),t=e[0],r=e[1],o=(0,n.useState)([]),c=o[0],d=o[1],b=(0,n.useRef)(null),v=0;v<t;v++)c[v]=f();(0,n.useEffect)((function(){for(var e=[],r=0;r<t;r++)e[r]=f();d(e)}),[t]);return n.createElement(a.Z,null,n.createElement(s.Z,null,n.createElement(i.Z,null,n.createElement(l.Z,{md:"3"},n.createElement(u.Z,{className:"mb-3"},n.createElement(u.Z.Text,null,"Generate"),n.createElement(s.Z.Control,{ref:b,placeholder:"27",onChange:function(){var e=b.current.value;console.log(e),r(e)},type:"number",max:"100"}),n.createElement(u.Z.Text,null,1==t?"color":"colors"))))),n.createElement("div",{className:"d-flex flex-wrap mt-2"},c.map((function(e,t){return n.createElement(p,{key:t,color:e})}))))}},2140:function(e,t,r){r.d(t,{Gg:function(){return n},op:function(){return a},FJ:function(){return o}});var n="styles-module--tile--h4-L-",a="styles-module--odd--w6t3a",o="styles-module--prime--Yr6Pr"}}]);
//# sourceMappingURL=component---src-pages-day-27-index-js-d41fa7f99a31efa30857.js.map