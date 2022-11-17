"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1704],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>m,MDXProvider:()=>c,mdx:()=>g,useMDXComponents:()=>s,withMDXComponents:()=>p});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=r.createContext({}),p=function(e){return function(n){var t=s(n.components);return r.createElement(e,l({},n,{components:t}))}},s=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(t),c=a,b=p["".concat(o,".").concat(c)]||p[c]||u[c]||l;return t?r.createElement(b,d(d({ref:n},m),{},{components:t})):r.createElement(b,d({ref:n},m))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=b;var d={};for(var i in n)hasOwnProperty.call(n,i)&&(d[i]=n[i]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var m=2;m<l;m++)o[m]=t[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},75832:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var r=t(83117),a=(t(67294),t(3905));const l={sidebar_position:47},o=void 0,d={unversionedId:"commands/web",id:"commands/web",title:"web",description:"web | isl",source:"@site/docs/commands/web.md",sourceDirName:"commands",slug:"/commands/web",permalink:"/docs/commands/web",draft:!1,editUrl:"https://github.com/facebookexperimental/eden/tree/main/website/docs/commands/web.md",tags:[],version:"current",sidebarPosition:47,frontMatter:{sidebar_position:47},sidebar:"tutorialSidebar",previous:{title:"unshelve",permalink:"/docs/commands/unshelve"},next:{title:"Add-ons",permalink:"/docs/category/add-ons"}},i={},m=[{value:"web | isl",id:"web--isl",level:2},{value:"arguments",id:"arguments",level:2}],p={toc:m};function s(e){let{components:n,...t}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h2",{id:"web--isl"},"web | isl"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"launch Sapling Web GUI on localhost")),(0,a.mdx)("p",null,"Sapling Web is a collection of web-based tools including Interactive Smartlog,\nwhich is a GUI that facilitates source control operations such as creating,\nreordering, or rebasing commits.\nRunning this command launches a web server that makes Sapling Web and\nInteractive Smartlog available in a local web browser."),(0,a.mdx)("p",null,"Examples:"),(0,a.mdx)("p",null,"Launch Sapling Web locally on port 8081:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"$ sl web --port 8081\nListening on http://localhost:8081/?token=bbe168b7b4af1614dd5b9ddc48e7d30e&cwd=%2Fhome%2Falice%2Fsapling\nServer logs will be written to /dev/shm/tmp/isl-server-logrkrmxp/isl-server.log\n")),(0,a.mdx)("p",null,"Using the ",(0,a.mdx)("inlineCode",{parentName:"p"},"--json")," option to get the current status of Sapling Web:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'$ sl web --port 8081 --json | jq\n{\n    "url": "http://localhost:8081/?token=bbe168b7b4af1614dd5b9ddc48e7d30e&cwd=%2Fhome%2Falice%2Fsapling",\n    "port": 8081,\n    "token": "bbe168b7b4af1614dd5b9ddc48e7d30e",\n    "pid": 1521158,\n    "wasServerReused": true,\n    "logFileLocation": "/dev/shm/tmp/isl-server-logrkrmxp/isl-server.log",\n    "cwd": "/home/alice/sapling"\n}\n')),(0,a.mdx)("p",null,"Using the ",(0,a.mdx)("inlineCode",{parentName:"p"},"--kill")," option to shut down the server:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"$ sl web --port 8081 --kill\nkilled ISL server process 1521158\n")),(0,a.mdx)("h2",{id:"arguments"},"arguments"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"shortname"),(0,a.mdx)("th",{parentName:"tr",align:null},"fullname"),(0,a.mdx)("th",{parentName:"tr",align:null},"default"),(0,a.mdx)("th",{parentName:"tr",align:null},"description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"-p")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"--port")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"3011")),(0,a.mdx)("td",{parentName:"tr",align:null},"port for Sapling Web")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null}),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"--json")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"false")),(0,a.mdx)("td",{parentName:"tr",align:null},"output machine-readable JSON")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null}),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"--open")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"true")),(0,a.mdx)("td",{parentName:"tr",align:null},"open Sapling Web in a local browser")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"-f")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"--foreground")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"false")),(0,a.mdx)("td",{parentName:"tr",align:null},"keep the server process in the foreground")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null}),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"--kill")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"false")),(0,a.mdx)("td",{parentName:"tr",align:null},"kill any running server process, but do not start a new server")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null}),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"--force")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"false")),(0,a.mdx)("td",{parentName:"tr",align:null},"kill any running server process, then start a new server")))))}s.isMDXComponent=!0}}]);