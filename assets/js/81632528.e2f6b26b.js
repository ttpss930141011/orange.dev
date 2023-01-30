"use strict";(self.webpackChunkorange_website=self.webpackChunkorange_website||[]).push([[4905],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var A=a.createContext({}),p=function(e){var t=a.useContext(A),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=p(e.components);return a.createElement(A.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,A=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,c=u["".concat(A,".").concat(m)]||u[m]||s[m]||l;return n?a.createElement(c,o(o({ref:t},f),{},{components:n})):a.createElement(c,o({ref:t},f))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var A in t)hasOwnProperty.call(t,A)&&(i[A]=t[A]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},o="\u6700\u5e38\u7528\u7684\u958b\u767c\u6d41\u7a0b \u2014 Git flow",i={unversionedId:"Before-coding/git-flow/git-flow",id:"Before-coding/git-flow/git-flow",title:"\u6700\u5e38\u7528\u7684\u958b\u767c\u6d41\u7a0b \u2014 Git flow",description:"\u5e38\u898b\u7684\u958b\u767c\u6d41\u7a0b\uff1a",source:"@site/docs/Before-coding/git-flow/git-flow.md",sourceDirName:"Before-coding/git-flow",slug:"/Before-coding/git-flow/",permalink:"/orange.dev.github.io/docs/Before-coding/git-flow/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Before-coding/git-flow/git-flow.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u521d\u63a2 Github actions",permalink:"/orange.dev.github.io/docs/Before-coding/github-action/Github-actions"},next:{title:"\u6e2c\u8a66\u6709\u6642\u9593\u518d\u5beb\uff1f\u4f60\u5c31\u662f\u4e0d\u5beb\u624d\u6703\u6c92\u6642\u9593\uff01 \u2014 2022/12/03",permalink:"/orange.dev.github.io/docs/Lecture/unit-test/"}},A={},p=[{value:"<strong>Master \u5206\u652f</strong>",id:"master-\u5206\u652f",level:3},{value:"<strong>Develop \u5206\u652f</strong>",id:"develop-\u5206\u652f",level:3},{value:"<strong>Hotfix \u5206\u652f</strong>",id:"hotfix-\u5206\u652f",level:3},{value:"<strong>Release \u5206\u652f</strong>",id:"release-\u5206\u652f",level:3},{value:"<strong>Feature \u5206\u652f</strong>",id:"feature-\u5206\u652f",level:3},{value:"\u8001\u95c6\u53eb\u4f60\u958b\u767c\u4e00\u500b\u7db2\u7ad9",id:"\u8001\u95c6\u53eb\u4f60\u958b\u767c\u4e00\u500b\u7db2\u7ad9",level:3},{value:"\u8001\u95c6\u53eb\u4f60\u958b\u767c\u4e00\u500b\u65b0\u529f\u80fd",id:"\u8001\u95c6\u53eb\u4f60\u958b\u767c\u4e00\u500b\u65b0\u529f\u80fd",level:3},{value:"\u7cdf\u7cd5\uff01\u9047\u5230\u885d\u7a81\u4e86\uff01\uff1f",id:"\u7cdf\u7cd5\u9047\u5230\u885d\u7a81\u4e86",level:2}],f={toc:p};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6700\u5e38\u7528\u7684\u958b\u767c\u6d41\u7a0b--git-flow"},"\u6700\u5e38\u7528\u7684\u958b\u767c\u6d41\u7a0b \u2014 Git flow"),(0,r.kt)("h1",{id:"\u958b\u767c\u6d41\u7a0b"},"\u958b\u767c\u6d41\u7a0b"),(0,r.kt)("p",null,"\u5e38\u898b\u7684\u958b\u767c\u6d41\u7a0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1. **Git flow**\n2. GitHub Flow\n3. Gitlab Flow\n")),(0,r.kt)("p",null,"\u4e0a\u8ff0\u4e09\u5957\u6d41\u7a0b\uff0c\u5927\u81f4\u4e0a\u90fd\u6709\u4e00\u500b\u5171\u540c\u9ede\uff0c\u5c31\u662f\u4ed6\u5011\u90fd\u662f\u4ee5",(0,r.kt)("strong",{parentName:"p"},"\u7279\u6027\u9a45\u52d5\u958b\u767c"),"\xa0(",(0,r.kt)("strong",{parentName:"p"},"Feature-driven development\uff0c\u7c21\u7a31 FDD"),")\uff0c\u662f\u4e00\u500b\u6a21\u578b\u9a45\u52d5(model-driven)\u3001\u77ed\u671f\u8fed\u4ee3(short-iteration)\u7684\u904e\u7a0b\uff0c\u904e\u7a0b\u4e2d\u6703\u6709\u8d77\u9ede\u8207\u7d42\u9ede\u3002"),(0,r.kt)("p",null,"\u8d77\u9ede\u662f\u9700\u6c42\uff0c\u5148\u6709\u4e86\u9700\u6c42\u5f8c\uff0c\u518d\u958b\u555f Feature branch \u6216 Hotfix branch \uff0c\u7576\u5b8c\u6210\u5c08\u6848\u4ee5\u5f8c\uff0c\u5c07\u5206\u652f\u7684\u66f4\u65b0\u5408\u4f75\u5230\u539f\u5148\u7684\u5206\u652f\u4e0a\uff08\u4e3b\u5206\u652f\uff09\uff0c\u51fa\u4f86\u7684\u5206\u652f\u518d\u88ab\u522a\u9664\u3002"),(0,r.kt)("p",null,"\u56e0\u70ba\u4e00\u958b\u59cb\u63a5\u89f8\u5230\u7684\u8207\u6bd4\u8f03\u719f\u6089\u7684\u6d41\u7a0b\u70baGit flow\uff0c\u6240\u4ee5\u672c\u7bc7\u5c31\u4e3b\u8981\u8b1b\u89e3Git flow\u57fa\u790e\u6982\u5ff5\u8207\u5be6\u4f5c\u3002"),(0,r.kt)("h1",{id:"what-is-git-flow"},"What is Git flow?"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"`master`\u3001`develop` \u9019\u5169\u500b\u5206\u652f\u53c8\u88ab\u7a31\u505a\u9577\u671f\u5206\u652f\uff0c\u56e0\u70ba\u4ed6\u5011\u6703\u4e00\u76f4\u5b58\u6d3b\u5728\u6574\u500b Git Flow \u88e1\uff0c\u800c\u5176\u5b83\u7684\u5206\u652f\u5927\u591a\u6703\u56e0\u4efb\u52d9\u7d50\u675f\u800c\u88ab\u522a\u9664\u3002",src:n(2682).Z,width:"787",height:"364"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"master"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"develop")," \u9019\u5169\u500b\u5206\u652f\u53c8\u88ab\u7a31\u505a\u9577\u671f\u5206\u652f\uff0c\u56e0\u70ba\u4ed6\u5011\u6703\u4e00\u76f4\u5b58\u6d3b\u5728\u6574\u500b Git Flow \u88e1\uff0c\u800c\u5176\u5b83\u7684\u5206\u652f\u5927\u591a\u6703\u56e0\u4efb\u52d9\u7d50\u675f\u800c\u88ab\u522a\u9664\u3002"),(0,r.kt)("h3",{id:"master-\u5206\u652f"},(0,r.kt)("strong",{parentName:"h3"},"Master \u5206\u652f")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e3b\u8981\u662f\u7528\u4f86\u653e\u7a69\u5b9a\u3001\u96a8\u6642\u53ef\u4e0a\u7dda\u7684\u7248\u672c\uff0cProd\u7248\u672c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u958b\u767c\u8005\u4e0d\u6703\u76f4\u63a5 Commit \u5230\u9019\u500b\u5206\u652f\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u56e0\u70ba\u662f\u7a69\u5b9a\u7248\u672c\uff0c\u6240\u4ee5\u901a\u5e38\u4e5f\u6703\u5728\u9019\u500b\u5206\u652f\u4e0a\u7684 Commit \u4e0a\u6253\u4e0a\u7248\u672c\u865f\u6a19\u7c64\u3002")),(0,r.kt)("h3",{id:"develop-\u5206\u652f"},(0,r.kt)("strong",{parentName:"h3"},"Develop \u5206\u652f")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6240\u6709\u958b\u767c\u7684\u57fa\u790e\u5206\u652f\u3002")),(0,r.kt)("h3",{id:"hotfix-\u5206\u652f"},(0,r.kt)("strong",{parentName:"h3"},"Hotfix \u5206\u652f")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7576Master\u5206\u652f\u767c\u751f\u7dca\u6025\u554f\u984c\u7684\u6642\u5019\uff0c\u958b\u51fa\u4f86\u7dca\u6025\u4fee\u5fa9\u7684\u5206\u652f\u3002"),(0,r.kt)("li",{parentName:"ol"},"Hotfix \u5206\u652f\u4fee\u5fa9\u5b8c\u6210\u4e4b\u5f8c\uff0c\u6703\u5408\u4f75\u56de Master \u5206\u652f\uff0c\u4e5f\u540c\u6642\u6703\u5408\u4f75\u4e00\u4efd\u5230 Develop \u5206\u652f\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u70ba\u4ec0\u9ebc\u4e00\u958b\u59cb\u4e0d\u5f9e Develop \u5206\u652f\u5207\u51fa\u4f86\u4fee\uff1f\u56e0\u70ba Develop \u5206\u652f\u7684\u529f\u80fd\u53ef\u80fd\u5c1a\u5728\u958b\u767c\u4e2d\u3002")),(0,r.kt)("h3",{id:"release-\u5206\u652f"},(0,r.kt)("strong",{parentName:"h3"},"Release \u5206\u652f")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Master\u5206\u652f\u7684\u8a66run\u7248\u672c\u3002")),(0,r.kt)("h3",{id:"feature-\u5206\u652f"},(0,r.kt)("strong",{parentName:"h3"},"Feature \u5206\u652f")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7576\u63a5\u5230\u65b0\u9700\u6c42\u8981\u958b\u59cb\u958b\u767c\u7684\u6642\u5019\u5c31\u662f\u4f7f\u7528 Feature \u5206\u652f\u7684\u6642\u5019\u4e86\u3002"),(0,r.kt)("li",{parentName:"ol"},"Feature \u5206\u652f\u90fd\u662f\u5f9e Develop \u5206\u652f\u4f86\u7684\uff0c\u5b8c\u6210\u4e4b\u5f8c\u6703\u518d\u4f75\u56de Develop \u5206\u652f\u3002")),(0,r.kt)("h1",{id:"\u65e5\u5e38\u6703\u9047\u5230\u7684\u60c5\u6cc1"},"\u65e5\u5e38\u6703\u9047\u5230\u7684\u60c5\u6cc1"),(0,r.kt)("h3",{id:"\u8001\u95c6\u53eb\u4f60\u958b\u767c\u4e00\u500b\u7db2\u7ad9"},"\u8001\u95c6\u53eb\u4f60\u958b\u767c\u4e00\u500b\u7db2\u7ad9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f60\u5fc5\u9808\u628a\u4f60\u65b0\u5275\u7684\u5c08\u6848\u5efa\u7acbMaster\u5206\u652f\u4e26\u4e1f\u4e0aGithub\u3002","  ",(0,r.kt)("img",{alt:"master.jpg",src:n(4580).Z,width:"197",height:"94"}))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'git init\ngit add .\ngit commit -m "first commit"\ngit **branch** -M main \ngit remote add origin https://github.com/<username>/<reponame>.git\ngit push -u origin main\n')),(0,r.kt)("h3",{id:"\u8001\u95c6\u53eb\u4f60\u958b\u767c\u4e00\u500b\u65b0\u529f\u80fd"},"\u8001\u95c6\u53eb\u4f60\u958b\u767c\u4e00\u500b\u65b0\u529f\u80fd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f60\u5fc5\u9808\u958b\u4e00\u500bdevelop\u9084\u6709feature\u5206\u652f\uff0c\u7136\u5f8cpush\u4e0aGithub\u3002","  ",(0,r.kt)("img",{alt:"first.jpg",src:n(3614).Z,width:"273",height:"304"}))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"git **branch** develop   #\u5efa\u7acbdevelop\u5206\u652f\ngit branch feature   #\u5efa\u7acbfeature\u5206\u652f\ngit **checkout** feature  #\u5207\u63db\u5230feature\u5206\u652f\n--Switched to branch 'feature'--\n\ngit branch            #\u9019\u500b\u6642\u5019\u53ef\u4ee5\u770b\u4e00\u4e0b\u81ea\u5df1\u4f4d\u65bc\u54ea\u500b\u5206\u652f\uff0c*\u865f\u4ee3\u8868\u7576\u524d\u4f4d\u7f6e\n--***feature** --\n-- develop --\n-- main    --\n\ngit push --set-upstream origin <\u5206\u652f\u540d\u7a31>  #\u5c07\u5206\u652fpush\u4e0a\u53bb\u7684\u65b9\u6cd5\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Push\u5b8c\u5f8c\u5c31\u6703\u770b\u5230\u4f60\u7684Github repo\u5167\u6709\u4e09\u500b\u5206\u652f\uff1amain(master)\u3001develop\u3001feature\u5566\u3002","  ",(0,r.kt)("img",{alt:"branch.jpg",src:n(8106).Z,width:"390",height:"510"}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6700\u5f8c\u5728feature\u5206\u652f\u958b\u767c\u5b8c\u65b0\u529f\u80fd\u5f8c\uff0c\u8981merge\u56de\u53bbdevelop\u5206\u652f\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"second.jpg",src:n(6036).Z,width:"449",height:"118"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"git checkout develop   #\u5207\u63db\u56dedevelop\u5206\u652f\ngit **merge** feature      #\u5408\u4f75feature\u5206\u652f\ngit branch -d feature  #\u522a\u9664feature\u5206\u652f\n")),(0,r.kt)("aside",null,"\ud83d\udca1 \u5176\u5be6\u5728\u5404\u500bbranch\u4e4b\u9593\u5de5\u4f5c\uff0c\u6700\u4e3b\u8981\u7684\u6307\u4ee4\u4e5f\u53ea\u6709checkout\u3001branch\u3001merge\u800c\u5df2\u3002"),(0,r.kt)("h2",{id:"\u7cdf\u7cd5\u9047\u5230\u885d\u7a81\u4e86"},"\u7cdf\u7cd5\uff01\u9047\u5230\u885d\u7a81\u4e86\uff01\uff1f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7576\u4f60\u958b\u958b\u5fc3\u5fc3\u7684\u60f3\u8981merge\u4efb\u4f55\u4f60\u60f3\u8981merge\u7684\u5206\u652f\u6642\uff0ccommit\u4e00\u4e0b\u767c\u73fe\u2026")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"git branch\n-- ***develop** --\n--  feature --\n--  main    --\n\ngit merge feature  #\u7576\u524d\u5206\u652fmerge feature\u5206\u652f\n-- Auto-merging index.html --\n-- CONFLICT (content): Merge conflict in index.html -- \n-- Automatic merge failed; fix conflicts and then commit the result. --\n")),(0,r.kt)("aside",null,"\ud83d\udca1 \u5982\u679c\u5728\u4e0d\u540c\u7684\u5206\u652f\u4e2d\u90fd\u4fee\u6539\u4e86\u540c\u4e00\u500b\u6a94\u6848\u7684\u540c\u4e00\u90e8\u5206\uff0cGit \u5c31\u7121\u6cd5\u5408\u4f75\u5b83\u5011\uff0c\u5b83\u6703\u66ab\u505c\u4e0b\u4f86\u7b49\u4f60\u89e3\u6c7a\u885d\u7a81\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9019\u500b\u6642\u5019\u4f60\u61c9\u8a72\u6703\u770b\u5230\u4f60\u7684\u885d\u7a81\u7684\u6a94\u6848\u8df3\u51fa\u4f86\uff0c\u9019\u500b\u6642\u5019\u8981\u624b\u52d5\u53bb\u89e3\u6c7a\u4f60\u8981\u4fdd\u7559\u54ea\u500b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"//index.html\n<<<<<<< HEAD:index.html\nconsole.log('this is develop branch')\n=======\nconsole.log('this is feature branch')\n>>>>>>> feature:index.html\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c07\u8981\u4fdd\u7559\u7684code\u66ff\u63db\u5f8c\uff0c\u5c31\u53ef\u4ee5\u6210\u529fmerge\u5566\uff01")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"//index.html\nconsole.log('this is feature branch')\n")),(0,r.kt)("h1",{id:"\u5de5\u4f5c\u6d41\u7a0b\u61c9\u7528"},"\u5de5\u4f5c\u6d41\u7a0b\u61c9\u7528"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.figma.com/file/h0jnC4SosHmFFV3onOLRVk/%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B?node-id=0%3A1"},"https://www.figma.com/file/h0jnC4SosHmFFV3onOLRVk/%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B?node-id=0%3A1")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u63a5\u5230\u9700\u6c42\u6587\u6a94\uff0c\u5206\u914d\u500b\u6bcf\u500b\u4eba\u6216\u5c0f\u7d44\u7684\u529f\u80fd\u958b\u767c\u5f8c\uff0c\u5f9emaster \u6aa2\u51fa\u529f\u80fd\u5206\u652f\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u958b\u767c\u7684\u6642\u5019\u9664\u4e86\u6703\u5728\u672c\u5730\u6e2c\u8a66\uff0c\u6709\u9700\u8981\u9084\u6703\u5408\u4f75\u5230dev\u5206\u652f\uff0c\u5728\u516c\u5171\u7684\u958b\u767c\u74b0\u5883\u53bb\u81ea\u5df1\u505a\u6e2c\u8a66\u3002\u4e4b\u6240\u4ee5\u8981pull master\u662f\u56e0\u70ba\u5728\u958b\u767c\u529f\u80fd\u7684\u671f\u9593\uff0c\u53ef\u80fd\u6709hotfix\u5b8c\u6210\u5408\u4f75\u5230master\uff0c\u5408\u4f75\u4ee3\u78bc\u7684\u6642\u5019\u7fd2\u6163merge\u4e00\u4e0bmaster\uff0c\u9632\u6b62\u885d\u7a81\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7b49\u81ea\u6e2c\u5b8c\u6210\u4e4b\u5f8c\uff0c\u7533\u8acb\u5408\u4f75\u5230release\uff0c\u5408\u4f75\u6210\u529f\u5f8c\u90e8\u7f72\u5230\u6e2c\u8a66\u74b0\u5883\u5f8c\u901a\u77e5\u6e2c\u8a66\u4eba\u54e1\u505a\u6e2c\u8a66\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6e2c\u8a66\u901a\u904e\u5f8c\uff0crelease\u7533\u8acb\u5408\u4f75\u5230master\uff0c\u6e96\u5099\u4e0a\u7dda\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u6e2c\u8a66\u4e0d\u901a\u904e\uff0c\u5728\u529f\u80fd\u5206\u652f\u4fee\u6539\u5f8c\u91cd\u65b0merge\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4e0a\u7dda\u6210\u529f\u7a69\u5b9a\u5f8c\u522a\u9664\u5c0d\u61c9\u7684\u529f\u80fd\u5206\u652f\uff0cdev \u5408\u4f75\u6700\u65b0\u7684master\u5206\u652f\u3002")))}u.isMDXComponent=!0},8106:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/branch-293ad55421d21e2413975f2f679eaa80.jpg"},3614:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/first-31dd1a6b201fc78522940cdd07030f4b.jpg"},2682:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/git-flow-6bd95ca5ecb8a2ae72ce01c8556ffc85.png"},4580:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/jpeg;base64,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"},6036:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/second-fa3041ce297840306e94f6527b28803e.jpg"}}]);