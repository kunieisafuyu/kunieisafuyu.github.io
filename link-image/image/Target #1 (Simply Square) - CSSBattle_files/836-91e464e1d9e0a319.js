(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[836],{3029:function(e,t,n){"use strict";n.d(t,{k:function(){return h}});var r,s=n(2322),a=n(7500);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i,o,c=(l(r={},a.BattleStatuses.UPCOMING,"#feda44"),l(r,a.BattleStatuses.ONGOING,"#46d158"),l(r,a.BattleStatuses.FINISHED,"#a3483d"),r),d=(l(i={},a.BattleStatuses.UPCOMING,"#000"),l(i,a.BattleStatuses.ONGOING,"#000"),l(i,a.BattleStatuses.FINISHED,"#fff"),i),u=(l(o={},a.BattleStatuses.UPCOMING,"Upcoming"),l(o,a.BattleStatuses.ONGOING,"In Progress"),l(o,a.BattleStatuses.FINISHED,"Finished"),o);function h(e){var t=e.status,n=e.minimal;return(0,s.jsx)("div",{className:"battle-status ".concat(n?"battle-status--minimal hint--right":""),style:{backgroundColor:c[t],color:d[t]},"aria-label":n?u[t]:"",children:n?"":u[t]})}},1251:function(e,t,n){"use strict";n.d(t,{qE:function(){return m},xu:function(){return v},hE:function(){return j},XZ:function(){return x},e9:function(){return g},dy:function(){return C},II:function(){return p},bN:function(){return b},Rj:function(){return f}});var r=n(2322),s=n(2784),a=n(9097),l=n(3552),i=n(8329),o=n(9241);function c(e){var t=e.gap,n=void 0===t?"1rem":t,s=e.align,a=void 0===s?"center":s,l=e.justify,i=void 0===l?"flex-start":l,o=e.children;return(0,r.jsx)("div",{style:{display:"flex",gap:n,alignItems:a,justifyContent:i},children:o})}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}function h(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}function m(e){var t,n=e.url,s=e.userId,l=e.username,i=e.size,o=void 0===i?24:i,c=e.small,d=h(e,["url","userId","username","size","small"]),m=n;return n?(c&&(m=n),t=(0,r.jsx)("img",u({src:m,alt:l?"".concat(l," avatar"):""},d,{style:{borderRadius:"50%"},width:o,height:o}))):t=(0,r.jsx)("svg",u({style:{width:"".concat(o,"px"),height:"".concat(o,"px")},viewBox:"0 0 24 24"},d,{children:(0,r.jsx)("path",{fill:"currentColor",d:"M12 19.2c-2.5 0-4.71-1.28-6-3.2.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10c0-5.53-4.5-10-10-10z"})})),s?(0,r.jsx)(a.default,{href:"/player/".concat(l||s),children:(0,r.jsx)("a",{className:"avatar-link link hint--top","aria-label":l?"@".concat(l):"",children:t})}):t}function f(e){var t=e.name,n=e.userId,o=e.username,c=e.className,d=void 0===c?"":c,u=e.isPro,h=e.ellipsis,m=(0,s.useContext)(l.S),f=(0,r.jsx)("span",{className:"".concat(d," ").concat(m&&n===m.uid?"append-star":""),children:t});return!u&&Math.random(),(0,r.jsxs)("div",{style:{display:h?"flex":"inline-block"},children:[(0,r.jsx)(a.default,{href:"/player/".concat(o||n),children:(0,r.jsx)("a",{className:"name-link",children:f})}),u&&(0,r.jsx)(a.default,{href:"/pro",children:(0,r.jsx)("a",{style:{margin:"0 0.4rem"},children:(0,r.jsx)(i.Z,{height:"15"})})})]})}function p(e){var t=e.label,n=e.help,s=h(e,["label","help"]),a="input-".concat(~~(1e3*Math.random()));return(0,r.jsxs)("div",{className:"input-container",children:[(0,r.jsx)("label",{htmlFor:a,children:t}),(0,r.jsx)("input",u({id:a},s)),n?(0,r.jsx)("p",{className:"input-hint",children:n}):null]})}function x(e){var t=e.label,n=e.value,s=e.help,a=h(e,["label","value","help"]);return(0,r.jsxs)("div",{className:"input-container",children:[(0,r.jsxs)("label",{children:[(0,r.jsx)("input",u({type:"checkbox",checked:n},a))," ",t]}),s?(0,r.jsx)("p",{className:"input-hint",children:s}):null]})}function j(e){var t=e.children,n=e.center;return(0,r.jsx)("div",{className:"btn-group ".concat(n?"btn-group--center":""),children:t})}function g(){return(0,r.jsx)("div",{style:{padding:"1rem"},children:(0,r.jsxs)(c,{gap:"5px",children:[(0,r.jsx)(o.a,{}),(0,r.jsx)("span",{children:"Loading..."})]})})}function v(e){var t=e.tag,n=void 0===t?"div":t,s=e.inline,a=e.style,l=e.children,i=n;return s&&(a.display="inline-block"),(0,r.jsx)(i,{style:a,children:l})}function b(e){var t=e.id;return t?t.length>5?"":"#".concat(t):""}function C(e){var t=e.label,n=e.children;return(0,r.jsx)("span",{role:"img","aria-label":t,children:n})}},8724:function(e,t,n){"use strict";n.d(t,{L:function(){return a}});var r=n(2322),s=n(2784),a=function(e){var t=e.dropdownBtnClasses,n=void 0===t?"":t,a=e.dropdownMenuClasses,l=void 0===a?"":a,i=e.dropdownBtnContent,o=e.onOpen,c=e.children,d=function(e){u.current&&(u.current.contains(e.target)||u.current.removeAttribute("open"))},u=(0,s.useRef)();return(0,s.useEffect)((function(){return document.addEventListener("click",d,!1),function(){document.removeEventListener("click",d)}}),[]),(0,r.jsxs)("details",{ref:u,className:"dropdown-container",onToggle:function(){o&&u.current.hasAttribute("open")&&o()},children:[(0,r.jsx)("summary",{className:"dropdown-btn ".concat(n),children:i}),(0,r.jsx)("div",{className:"dropdown-menu  ".concat(l),children:c})]})}},7171:function(e,t,n){"use strict";n.d(t,{$:function(){return u}});var r=n(2322),s=n(2784),a=n(9097),l=n(8329),i=n(1893),o=n(9604);function c(){return(0,r.jsx)("span",{"aria-hidden":"true",style:{margin:"0 1em"},children:"\xb7"})}function d(){var e=(new Date).getFullYear(),t=(0,i.a)();return(0,r.jsxs)("div",{className:"footer",children:[(0,r.jsxs)("p",{children:["\xa9 ",e," CSSBattle"]}),(0,r.jsxs)("p",{className:"footer__links",children:[t&&t.isPro?null:(0,r.jsxs)("div",{style:{display:"inline-block"},children:[(0,r.jsx)(a.default,{href:"/pro",children:(0,r.jsxs)("a",{style:{display:"inline-flex"},children:["Upgrade to ",(0,r.jsx)(l.Z,{style:{marginLeft:"0.5rem"}})]})}),(0,r.jsx)(c,{})]}),(0,r.jsx)(a.default,{href:"/tips",children:(0,r.jsx)("a",{children:"Tips & Tricks"})}),(0,r.jsx)(c,{}),(0,r.jsx)("a",{href:"/blog/",children:"Blog"}),(0,r.jsx)(c,{}),(0,r.jsx)(a.default,{href:"/faqs",children:(0,r.jsx)("a",{children:"FAQs"})}),(0,r.jsx)(c,{}),(0,r.jsx)("a",{href:"https://community.cssbattle.dev",target:"_blank",rel:"external noopener noreferrer",children:"Community"}),(0,r.jsx)(c,{}),(0,r.jsx)(a.default,{href:"/about",children:(0,r.jsx)("a",{children:"About"})}),(0,r.jsx)(c,{}),(0,r.jsx)(a.default,{href:"/become-a-sponsor",children:(0,r.jsx)("a",{children:"Become a Sponsor"})}),(0,r.jsx)(c,{}),(0,r.jsx)(a.default,{href:"/privacy-and-terms",children:(0,r.jsx)("a",{children:"Privacy & Terms"})}),(0,r.jsx)(c,{}),(0,r.jsx)("a",{href:"https://twitter.com/css_battle",target:"_blank",rel:"external noopener noreferrer",children:(0,r.jsx)(o.J,{name:"twitter",size:"18"})})]})]})}var u=s.memo(d)},4697:function(e,t,n){"use strict";n.d(t,{h:function(){return w}});var r=n(2322),s=n(2784),a=n(5632),l=n(9097),i=n(9604),o=n(8724),c=n(3552),d=n(8329),u=n(7500),h=n(3029),m=n(3290),f=n(7037),p=n(6578),x=n.n(p),j=n(1251);function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var b=n(475);n(9899);var C=function(e){var t=e.to,n=v(e,["to"]);return(0,r.jsx)("a",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){g(e,t,n[t])}))}return e}({href:t},n))};function y(e){var t=e.battleId;e.battleName;return(0,r.jsx)(o.L,{onOpen:function(){(0,m.q)({name:t?"switchBattleDropdownOpen":"chooseBattleDropdownOpen"})},dropdownBtnContent:t?(0,r.jsxs)(r.Fragment,{children:["Battle ",(0,r.jsx)(j.bN,{id:t})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.J,{name:"battle",size:"20"}),(0,r.jsx)("span",{className:"desktop-only",children:"Choose Battle"})]}),children:u.battles.slice(0).reverse().map((function(e,t){return(0,r.jsx)(l.default,{href:"/battle/".concat(e.id),children:(0,r.jsxs)("a",{className:"dropdown-menu__item",children:["#",e.id," - ",e.name," ",(0,r.jsx)(h.k,{status:(0,u.getBattleStatus)(e)})]})},e.id)}))})}function w(e){var t=e.levelId,n=e.level,u=e.battleId,h=e.battleName,p=function(e){var t=e.target.value;if("dark"===t)document.querySelector("#lightThemeLink")&&document.querySelector("#lightThemeLink").remove();else{var n=document.createElement("link");n.href="/light-theme.css",n.rel="stylesheet",n.id="lightThemeLink",document.head.append(n)}(0,f.Ii)(g.uid,{"settings.theme":t}).then((function(){(0,m.q)({name:"themeChanged",label:t})}))},g=(0,s.useContext)(c.S),v=g?(g.displayName||"User").split(" ")[0]:"",w=(0,s.useState)(),L=w[0],N=w[1],S=(0,s.useState)(),k=S[0],O=S[1];(0,a.useRouter)().pathname.match(/learn/);(0,s.useEffect)((function(){n&&(0,f.Ws)(n).then((function(e){return N(e),e})).then((function(e){(0,f.TU)(e.levelIds).then(O)}))}),[n]);var M=(0,s.useState)(g&&g.settings?g.settings.theme:"dark"),_=M[0],V=M[1];return(0,s.useEffect)((function(){g&&g.settings&&g.settings.theme&&V(g.settings.theme)}),[g]),(0,r.jsxs)("div",{className:"header",children:[(0,r.jsxs)("div",{className:"header__left",children:[(0,r.jsxs)("h1",{className:"logo",title:"CSSBattle",children:[(0,r.jsx)("span",{className:"visually-hidden",children:"CSSBattle"}),(0,r.jsx)("a",{href:"/"})]}),(0,r.jsxs)("div",{className:x().breadcrumbs,children:[L?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{className:"level",children:(0,r.jsx)(l.default,{href:"/battle/".concat(L.id),children:(0,r.jsxs)("a",{children:["Battle ",(0,r.jsx)(j.bN,{id:L.id})]})},L.id)}),k?(0,r.jsx)(o.L,{onOpen:function(){(0,m.q)({name:"switchTargetDropdownOpen"})},dropdownBtnContent:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j.bN,{id:t})," - ",n.name]}),children:k.map((function(e){var t=e.id,n=e.name;return 0!==t?(0,r.jsx)(l.default,{href:"/play/".concat(t),children:(0,r.jsxs)("a",{className:"dropdown-menu__item",children:[(0,r.jsx)(j.bN,{id:t})," - ",n]})},t):""}))}):null]}):null,u?(0,r.jsx)(y,{battleId:u,battleName:h}):null,t||u?null:(0,r.jsx)(y,{})]})]}),(0,r.jsxs)("div",{className:"header__right",children:[!(null===g||void 0===g?void 0:g.isPro)&&(0,r.jsx)(l.default,{href:"/pro",children:(0,r.jsxs)("a",{className:"button--cssbattle desktop-only",children:["Be a ",(0,r.jsx)(d.Z,{})]})}),(0,r.jsx)("div",{style:{display:"inline-block"},className:"desktop-only",children:(0,r.jsxs)(o.L,{dropdownMenuClasses:"dropdown-menu--right dropdown-menu--text",dropdownBtnContent:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.J,{name:"help",size:"20",marginRight:g?"0":"10"}),(0,r.jsx)("span",{className:"".concat(g?"visually-hidden":""),children:"How to play"})]}),children:[(0,r.jsx)("p",{className:"para",children:"The objective of the game is to write HTML/CSS to replicate the given target image in the least code possible."}),(0,r.jsxs)("p",{className:"para",children:["In the target page, start coding in the editor area on the left. As you start typing, the output area in the middle will start rendering your code. When you're confident that the output matches the target image, hit the ",(0,r.jsx)("strong",{children:"Submit"})," button to see your score."]}),(0,r.jsx)("h4",{children:"Important points to Note:"}),(0,r.jsxs)("ul",{className:"unordered-list",children:[(0,r.jsxs)("li",{children:["What you write in the editor, renders as it is. We make no change. This means you don't even get the"," ",(0,r.jsx)("a",{href:"https://www.w3.org/wiki/Doctypes_and_markup_styles",rel:"external noopener noreferrer",children:(0,r.jsx)("code",{children:"DOCTYPE"})})]}),(0,r.jsxs)("li",{children:['Since this is "CSS" battle, you are'," ",(0,r.jsx)("strong",{children:"not allowed to use JavaScript or images in your code. In fact any external asset is not allowed."})," ","All code required to generate the target image has to be written in the given editor only."]})]}),(0,r.jsx)("p",{className:"para",children:" Now go and climb the leaderboards!"})]})}),g?(0,r.jsx)("div",{className:"user-info",children:(0,r.jsxs)(o.L,{dropdownBtnClasses:"dropdown-btn--user",dropdownMenuClasses:"dropdown-menu--right",dropdownBtnContent:(0,r.jsxs)(r.Fragment,{children:[g.photoURL?(0,r.jsx)("img",{src:g.photoURL,className:"user-info__avatar",alt:"User profile"}):(0,r.jsx)(i.J,{name:"user",size:"28"}),v,g.isPro&&(0,r.jsx)(d.Z,{})]}),children:[g.isPro?(0,r.jsxs)("div",{className:"filter generic-filter",style:{minWidth:"22rem"},children:[(0,r.jsxs)("span",{className:"filter__button",children:[(0,r.jsx)("input",{type:"radio",name:"theme-filter",id:"dark",value:"dark",defaultChecked:"dark"===_,onChange:p}),(0,r.jsx)("label",{htmlFor:"dark",children:"Dark Theme"})]}),(0,r.jsxs)("span",{className:"filter__button",children:[(0,r.jsx)("input",{type:"radio",name:"theme-filter",id:"light",value:"light",defaultChecked:"light"===_,onChange:p}),(0,r.jsx)("label",{htmlFor:"light",children:"Light Theme"})]})]}):null,g.isPro?null:(0,r.jsx)(l.default,{href:"/pro/",children:(0,r.jsx)("a",{className:"dropdown-menu__item highlighted-link",children:"Upgrade to Pro"})}),(0,r.jsx)(l.default,{href:"/player/".concat(g.username||g.uid),children:(0,r.jsx)("a",{className:"dropdown-menu__item",children:"View Profile"})}),!g.username&&(0,r.jsx)(l.default,{href:"/settings",children:(0,r.jsx)("a",{className:"dropdown-menu__item",children:"Claim a username"})}),(0,r.jsx)(C,{className:"dropdown-menu__item",to:"/my-battles",children:"My Battles"}),g.isPro?(0,r.jsx)(l.default,{href:"/me",children:(0,r.jsx)("a",{className:"dropdown-menu__item",children:"My Analytics"})}):null,(0,r.jsx)(l.default,{href:"/settings",children:(0,r.jsx)("a",{className:"dropdown-menu__item",children:"Settings"})}),(0,r.jsx)("button",{type:"button",className:"dropdown-menu__item",onClick:function(){window.confirm("Are you sure you want to logout?")&&(window.localStorage.removeItem("lastUser"),b.auth().signOut().then((function(){window.location.reload()})))},children:"Logout"})]})}):(0,r.jsxs)("a",{href:"/login",className:"button",children:[(0,r.jsx)("div",{className:"desktop-only",children:"Sign In / Sign Up"}),(0,r.jsx)("span",{className:"mobile-only",children:"Login"})]})]})]})}},9604:function(e,t,n){"use strict";n.d(t,{J:function(){return s}});var r=n(2322),s=(n(2784),function(e){var t,n=e.name,s=e.color,a=e.size,l=void 0===a?20:a,i=e.marginRight,o=e.marginLeft;return"tick"===n&&(t=(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM16.1947 7.19467C16.7876 6.60178 17.7124 6.60178 18.3053 7.19467C18.8982 7.78756 18.8982 8.71244 18.3053 9.30533L10.8053 16.8053C10.6861 16.9246 10.537 17.0439 10.3452 17.1291C10.1502 17.2158 9.95001 17.25 9.75 17.25C9.54999 17.25 9.34978 17.2158 9.15477 17.1291C8.96302 17.0439 8.81395 16.9246 8.69467 16.8053L5.69467 13.8053C5.10178 13.2124 5.10178 12.2876 5.69467 11.6947C6.28756 11.1018 7.21244 11.1018 7.80533 11.6947L9.75 13.6393L16.1947 7.19467Z",fill:"#48BB79"})),"error"===n&&(t=(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6V12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12V6ZM12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16Z",fill:"#F83C3B"})),"user"===n&&(t=(0,r.jsx)("path",{fill:"currentColor",d:"M12 19.2c-2.5 0-4.71-1.28-6-3.2.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10c0-5.53-4.5-10-10-10z"})),"help"===n&&(t=(0,r.jsx)("path",{fill:"currentColor",d:"M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"})),"battle"===n&&(t=(0,r.jsx)("path",{fill:"currentColor",d:"M6.2,2.44L18.1,14.34L20.22,12.22L21.63,13.63L19.16,16.1L22.34,19.28C22.73,19.67 22.73,20.3 22.34,20.69L21.63,21.4C21.24,21.79 20.61,21.79 20.22,21.4L17,18.23L14.56,20.7L13.15,19.29L15.27,17.17L3.37,5.27V2.44H6.2M15.89,10L20.63,5.26V2.44H17.8L13.06,7.18L15.89,10M10.94,15L8.11,12.13L5.9,14.34L3.78,12.22L2.37,13.63L4.84,16.1L1.66,19.29C1.27,19.68 1.27,20.31 1.66,20.7L2.37,21.41C2.76,21.8 3.39,21.8 3.78,21.41L7,18.23L9.44,20.7L10.85,19.29L8.73,17.17L10.94,15Z"})),"link"===n&&(t=(0,r.jsx)("path",{fill:"currentColor",d:"M14.6667 0V2.66667H19.4533L6.34667 15.7733L8.22667 17.6533L21.3333 4.54667V9.33333H24V0H14.6667ZM21.3333 21.3333H2.66667V2.66667H12V0H2.66667C1.18667 0 0 1.2 0 2.66667V21.3333C0 22.0406 0.280951 22.7189 0.781048 23.219C1.28115 23.719 1.95942 24 2.66667 24H21.3333C22.0406 24 22.7189 23.719 23.219 23.219C23.719 22.7189 24 22.0406 24 21.3333V12H21.3333V21.3333Z"})),"bell"===n&&(t=(0,r.jsx)("path",{fill:"currentColor",d:"M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21"})),"twitter"===n&&(t=(0,r.jsx)("path",{fill:"currentColor",d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"})),"github"===n&&(t=(0,r.jsx)("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"})),"codepen"===n&&(t=(0,r.jsx)("path",{fill:"currentColor",d:"M15.09,12L12,14.08V14.09L8.91,12L12,9.92V9.92L15.09,12M12,2C11.84,2 11.68,2.06 11.53,2.15L2.5,8.11C2.27,8.22 2.09,8.43 2,8.67V14.92C2,15.33 2,15.33 2.15,15.53L11.53,21.86C11.67,21.96 11.84,22 12,22C12.16,22 12.33,21.95 12.47,21.85L21.85,15.5C22,15.33 22,15.33 22,14.92V8.67C21.91,8.42 21.73,8.22 21.5,8.1L12.47,2.15C12.32,2.05 12.16,2 12,2M16.58,13L19.59,15.04L12.83,19.6V15.53L16.58,13M19.69,8.9L16.58,11L12.83,8.47V4.38L19.69,8.9M20.33,10.47V13.53L18.07,12L20.33,10.47M7.42,13L11.17,15.54V19.6L4.41,15.04L7.42,13M4.31,8.9L11.17,4.39V8.5L7.42,11L4.31,8.9M3.67,10.5L5.93,12L3.67,13.54V10.5Z"})),"earth"===n&&(t=(0,r.jsx)("path",{fill:"currentColor",d:"M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"})),"plus-round"===n&&(t=(0,r.jsx)("path",{fill:"currentColor",d:"M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"})),(0,r.jsx)("svg",{width:l,height:l,viewBox:"0 0 24 24",fill:s||"none",style:{verticalAlign:"middle",marginRight:i||"0.5rem",marginLeft:o||"0"},xmlns:"http://www.w3.org/2000/svg",children:t})})},9241:function(e,t,n){"use strict";n.d(t,{a:function(){return s},R:function(){return a}});var r=n(2322);n(2784);function s(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.jsx)("svg",{viewBox:"0 0 166 166",height:"1.6em",style:{margin:"0 0.8rem"},className:"loader",children:(0,r.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,r.jsx)("path",{d:"M83 166c-45.84 0-83-37.16-83-83S37.16 0 83 0s83 37.16 83 83-37.16 83-83 83zm0-29c29.823 0 54-24.177 54-54s-24.177-54-54-54-54 24.177-54 54 24.177 54 54 54z",fill:"currentColor",style:{opacity:.2}}),(0,r.jsx)("path",{d:"M137.008 83H137c0-29.823-24.177-54-54-54S29 53.177 29 83h-.008c.005.166.008.333.008.5C29 91.508 22.508 98 14.5 98S0 91.508 0 83.5c0-.167.003-.334.008-.5H0C0 37.16 37.16 0 83 0s83 37.16 83 83h-.008c.005.166.008.333.008.5 0 8.008-6.492 14.5-14.5 14.5S137 91.508 137 83.5c0-.167.003-.334.008-.5z",fill:"currentColor"}),(0,r.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 83 83",to:"360 83 83",repeatCount:"indefinite"})]})})}function a(e){var t=e.children;return(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",margin:"2rem 1rem"},children:[(0,r.jsx)(s,{})," ",t]})}},8329:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(2322),s=function(e){var t=e.height,n=void 0===t?18:t,s=e.style;return(0,r.jsx)("img",{height:n,className:"pro-badge",style:s,src:"/images/pro-badge.svg",alt:"Pro badge"})}},3290:function(e,t,n){"use strict";n.d(t,{q:function(){return r}});var r=function(e){var t=e.name,n=e.category,r=e.label;window.gtag&&window.gtag("event",t,{event_category:n,event_label:r})}},1893:function(e,t,n){"use strict";n.d(t,{a:function(){return a}});var r=n(2784),s=n(3552);function a(){return(0,r.useContext)(s.S)}},6578:function(e){e.exports={breadcrumbs:"Header_breadcrumbs__mCYlG"}}}]);
//# sourceMappingURL=836-91e464e1d9e0a319.js.map