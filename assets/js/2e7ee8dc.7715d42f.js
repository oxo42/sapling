"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9720],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>m,MDXProvider:()=>c,mdx:()=>g,useMDXComponents:()=>s,withMDXComponents:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),p=function(e){return function(t){var n=s(t.components);return r.createElement(e,o({},t,{components:n}))}},s=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),p=s(n),c=a,f=p["".concat(l,".").concat(c)]||p[c]||u[c]||o;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},32438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=n(83117),a=(n(67294),n(3905));const o={sidebar_position:13},l=void 0,i={unversionedId:"commands/forget",id:"commands/forget",title:"forget",description:"forget",source:"@site/docs/commands/forget.md",sourceDirName:"commands",slug:"/commands/forget",permalink:"/docs/commands/forget",draft:!1,editUrl:"https://github.com/facebookexperimental/eden/tree/main/website/docs/commands/forget.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"fold",permalink:"/docs/commands/fold"},next:{title:"ghstack",permalink:"/docs/commands/ghstack"}},d={},m=[{value:"forget",id:"forget",level:2},{value:"arguments",id:"arguments",level:2}],p={toc:m};function s(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h2",{id:"forget"},"forget"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"stop tracking the specified files")),(0,a.mdx)("p",null,"Mark the specified files so they will no longer be tracked\nafter the next commit."),(0,a.mdx)("p",null,"Forget does not delete the files from the working copy. To delete\nthe file from the working copy, see ",(0,a.mdx)("inlineCode",{parentName:"p"},"sl remove"),"."),(0,a.mdx)("p",null,"Forget does not remove files from the repository history. The files\nwill only be removed in the next commit and its descendants."),(0,a.mdx)("p",null,"To undo a forget before the next commit, see ",(0,a.mdx)("inlineCode",{parentName:"p"},"sl add"),"."),(0,a.mdx)("p",null,"Examples:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"forget newly-added binary files:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'sl forget "set:added() and binary()"\n')),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"forget files that would be excluded by .gitignore:")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'sl forget "set:gitignore()"\n')),(0,a.mdx)("p",null,"Returns 0 on success."),(0,a.mdx)("h2",{id:"arguments"},"arguments"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"shortname"),(0,a.mdx)("th",{parentName:"tr",align:null},"fullname"),(0,a.mdx)("th",{parentName:"tr",align:null},"default"),(0,a.mdx)("th",{parentName:"tr",align:null},"description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"-I")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"--include")),(0,a.mdx)("td",{parentName:"tr",align:null}),(0,a.mdx)("td",{parentName:"tr",align:null},"include files matching the given patterns")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"-X")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"--exclude")),(0,a.mdx)("td",{parentName:"tr",align:null}),(0,a.mdx)("td",{parentName:"tr",align:null},"exclude files matching the given patterns")))))}s.isMDXComponent=!0}}]);