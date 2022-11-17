"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[633],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>s,MDXProvider:()=>p,mdx:()=>y,useMDXComponents:()=>l,withMDXComponents:()=>d});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r.apply(this,arguments)}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),d=function(e){return function(n){var t=l(n.components);return o.createElement(e,r({},n,{components:t}))}},l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(t),p=a,u=d["".concat(c,".").concat(p)]||d[p]||f[p]||r;return t?o.createElement(u,m(m({ref:n},s),{},{components:t})):o.createElement(u,m({ref:n},s))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=u;var m={};for(var i in n)hasOwnProperty.call(n,i)&&(m[i]=n[i]);m.originalType=e,m.mdxType="string"==typeof e?e:a,c[1]=m;for(var s=2;s<r;s++)c[s]=t[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},920:(e,n,t)=>{t.d(n,{RJ:()=>s,Xj:()=>m,bv:()=>i,mY:()=>c,nk:()=>d});var o=t(67294),a=t(44996),r=t(50941);function c(e){let{name:n,linkText:t}=e;const r=function(e){switch(e){case"go":return"goto";case"isl":return"web"}return e}(n),c=null!=t?t:n;return o.createElement("a",{href:(0,a.default)("/docs/commands/"+r)},o.createElement("code",null,c))}function m(e){let{name:n}=e;return o.createElement(c,{name:n,linkText:"sl "+n})}function i(){return o.createElement("p",{style:{textAlign:"center"}},o.createElement("img",{src:(0,a.default)("/img/reviewstack-demo.gif"),width:800,align:"center"}))}function s(e){let{alt:n,light:t,dark:c}=e;return o.createElement(r.Z,{alt:n,sources:{light:(0,a.default)(t),dark:(0,a.default)(c)}})}function d(e){let{src:n}=e;return o.createElement("video",{controls:!0},o.createElement("source",{src:(0,a.default)(n)}))}},69413:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>m,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var o=t(83117),a=(t(67294),t(3905)),r=t(920);const c={sidebar_position:60},m="Stacks of commits",i={unversionedId:"overview/stacks",id:"overview/stacks",title:"Stacks of commits",description:"Sapling provides first-class support for editing and manipulating stacks of commits.",source:"@site/docs/overview/stacks.md",sourceDirName:"overview",slug:"/overview/stacks",permalink:"/docs/overview/stacks",draft:!1,editUrl:"https://github.com/facebookexperimental/eden/tree/main/website/docs/overview/stacks.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"Bookmarks",permalink:"/docs/overview/bookmarks"},next:{title:"Rebase",permalink:"/docs/overview/rebase"}},s={},d=[{value:"Amend",id:"amend",level:3},{value:"Fold",id:"fold",level:3},{value:"Split",id:"split",level:3},{value:"Absorb",id:"absorb",level:3},{value:"Amend --to",id:"amend---to",level:3}],l={toc:d};function p(e){let{components:n,...t}=e;return(0,a.mdx)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"stacks-of-commits"},"Stacks of commits"),(0,a.mdx)("p",null,"Sapling provides first-class support for editing and manipulating stacks of commits."),(0,a.mdx)("h3",{id:"amend"},"Amend"),(0,a.mdx)("p",null,"You can edit any commit in your stack by going to that commit (via ",(0,a.mdx)(r.mY,{name:"goto",mdxType:"Command"}),"), making the desired modifications, and then running ",(0,a.mdx)(r.mY,{name:"amend",mdxType:"Command"})," to edit the commit. Keep in mind that if you make a mistake, you can always ",(0,a.mdx)("a",{parentName:"p",href:"/docs/overview/undo"},"Undo")," your changes!"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},'$ sl\n  o  d9a5aa3c7  3 seconds ago  mary\n  \u2502  feature two\n  \u2502\n  @  8a644a0fd  30 seconds ago  mary\n\u256d\u2500\u256f  feature one\n\u2502\no  ea609e1ef  7 minutes ago  remote/main\n\u2577\n~\n\n$ echo "Add feature to myproject" >> myproject.cpp\n\n# Apply changes to the current commit\n$ sl amend\n$ sl show .\n...\ndiff --git a/myproject.cpp b/myproject.cpp\nnew file mode 100644\n--- /dev/null\n+++ b/myproject.cpp\n@@ -0,0 +1,1 @@\n+<amended feature one impl>\n\n')),(0,a.mdx)("h3",{id:"fold"},"Fold"),(0,a.mdx)("p",null,"If you have a stack of commits, you can fold commits down into a single commit with the ",(0,a.mdx)(r.mY,{name:"fold",mdxType:"Command"})," command. You can either specify ",(0,a.mdx)("inlineCode",{parentName:"p"},"--from <commit id>")," to specify a range of commits from your current commit to fold together or specify ",(0,a.mdx)("inlineCode",{parentName:"p"},"--exact <list of commit ids>")," to specify exact adjacent commits to fold together."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},'$ sl\n  o 5dbd8043f 82 seconds ago mary\n  \u2502 commit five\n  \u2502\n  @ bd057eb7f 93 seconds ago mary\n  \u2502 commit four\n  \u2502\n  o b65a4efb1 113 seconds ago mary\n  \u2502 commit three\n  \u2502\n  o ef7915cd2 2 minutes ago mary\n  \u2502 commit two\n  \u2502\n  o 398748c95 2 minutes ago mary\n\u256d\u2500\u256f commit one\n\u2502\no ea609e1ef Today at 14:34 remote/main\n\n$ sl fold --from ef7915cd2\n# (equivalent to sl fold --exact ef7915cd2 b65a4efb1 bd057eb7f)\n 3 changesets folded\n update complete\n rebasing 5dbd8043fd7e "commit five"\n merging myproject.cpp\n 5dbd8043fd7e -> debf0c562f6e "commit five"\n\n$ sl\n  o debf0c562 9 minutes ago mary\n  \u2502 commit five\n  \u2502\n  @ 3cf9adf66 2 minutes ago mary\n  \u2502 commit two+three+four\n  \u2502\n  o 398748c95 10 minutes ago mary\n\u256d\u2500\u256f commit one\n\u2502\no ea609e1ef Today at 14:34 remote/main\n')),(0,a.mdx)("h3",{id:"split"},"Split"),(0,a.mdx)("p",null,"Use Sapling\u2019s interactive editor interface to split the changes in one commit into two or more smaller commits."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},"$ sl\n  @ b86c5cb40 2 seconds ago mary\n\u256d\u2500\u256f feature one + two\n\u2502\no ea609e1ef Today at 14:34 remote/main\n\n# we want to split apart feature one and feature two\n$ sl split\nSelect hunks to record - [x]=selected **=collapsed c: confirm q: abort\narrow keys: move/expand/collapse space: deselect ?: help\n[~] diff --git a/myproject.cpp b/myproject.cpp\n new file mode 100644\n\n [~] @@ -0,0 +1,3 @@\n [x] +<feature one>\n [ ] +\n [ ] +<feature two>\n\n # <press c>\n # <enter new commit message for first commit>\nDone splitting? [yN] y\n# remaining unselected changes go into second commit\n# <enter new commit message for second commit>\n\n$ sl\n  @ a305c853a 41 seconds ago mary\n  \u2502 feature two\n  \u2502\n  o 619efe410 2 minutes ago mary\n\u256d\u2500\u256f feature one\n\u2502\no ea609e1ef Today at 14:34 remote/main\n")),(0,a.mdx)("h3",{id:"absorb"},"Absorb"),(0,a.mdx)("p",null,"If you make changes while working at the top of a stack, the ",(0,a.mdx)(r.mY,{name:"absorb",mdxType:"Command"})," command allows you to automatically amend those changes to commits lower in the stack. If there is an unambiguous commit which introduced the edited lines, the absorb command will prompt to apply those changes to that commit."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},'$ sl\n  @ a305c853a 41 seconds ago mary\n  \u2502 feature two\n  \u2502\n  o 619efe410 2 minutes ago mary\n\u256d\u2500\u256f feature one\n\u2502\no ea609e1ef Today at 14:34 remote/main\n\n# Edit part of "feature one", while we are on top of "feature two".\n$ vim myproject.cpp\n$ sl diff\ndiff --git a/myproject.cpp b/myproject.cpp\n--- a/myproject.cpp\n+++ b/myproject.cpp\n@@ -1,3 +1,3 @@\n-<feature one>\n+<modified feature one>\n\n <feature two>\n\n# Absorb knows that commit 619efe4 introduced the edited lines.\n$ sl absorb\nshowing changes for myproject.cpp\n        @@ -0,1 +0,1 @@\n619efe4 -<feature one>\n619efe4 +<modified feature one>\n\n1 commit affected\n619efe4 feature one\napply changes (yn)?  **y**\n\n619efe41024d -> cbf60a27cae4 "feature one"\na305c853a7b5 -> f656ac8c60c8 "feature two"\n1 of 1 chunk applied\n\n# Feature one commit now contains the modifications.\n$ sl\n  @ f656ac8c60c8 11 seconds ago mary\n  \u2502 feature two\n  \u2502\n  o cbf60a27cae4 11 seconds ago mary\n\u256d\u2500\u256f feature one\n\u2502\no ea609e1ef Today at 14:34 remote/main\n')),(0,a.mdx)("h3",{id:"amend---to"},"Amend --to"),(0,a.mdx)("p",null,"Sometimes absorb cannot predict an appropriate commit to apply changes to. In this case you can try the command ",(0,a.mdx)("inlineCode",{parentName:"p"},"sl amend --to")," to specify exactly which commit to apply pending changes to."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},'$ sl\n  @  f656ac8c6  30 minutes ago  mary\n  \u2502  feature two\n  \u2502\n  o  cbf60a27c  30 minutes ago  mary\n\u256d\u2500\u256f  feature one\n\u2502\no  ea609e1ef  Yesterday at 14:34  remote/main\n\n# Add new file for feature one.\n$ vim myproject2.cpp\n$ sl addremove\nadding myproject2.cpp\n\n$ sl diff\ndiff --git a/myproject2.cpp b/myproject2.cpp\nnew file mode 100644\n--- /dev/null\n+++ b/myproject2.cpp\n@@ -0,0 +1,1 @@\n+<more pieces of feature one>\n\n# Since the changes are in a new file, absorb can\'t predict\n# which commit to apply any changes to.\n$ sl absorb\nnothing to absorb\n\n# Use \'amend --to\' to specify which commit to amend.\n$ sl amend --to cbf60a27c\ncbf60a27cae4 -> 768f3b26abc3 "feature one"\nf656ac8c60c8 -> fe792a25079d "feature two"\n')))}p.isMDXComponent=!0}}]);