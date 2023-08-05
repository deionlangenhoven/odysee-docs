"use strict";(self.webpackChunkodysee_docs=self.webpackChunkodysee_docs||[]).push([[5262],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=u(n),p=a,m=g["".concat(s,".").concat(p)]||g[p]||d[p]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),o=n(6010),i=n(2466),l=n(6775),s=n(1980),u=n(7392),c=n(12);function d(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function g(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=g(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=m({queryString:n,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=s??d;return p({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var b=n(2389);const y="tabList__CuJ",h="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),g=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==l&&(d(t),s(r))},p=e=>{var t;let n=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:g},i,{className:(0,o.Z)("tabs__item",h,null==i?void 0:i.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function _(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",y)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return a.createElement(_,(0,r.Z)({key:String(t)},e))}},6184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),i=n(5162);const l={sidebar_position:1,description:"So kannst du dich auf Odysee einloggen.",sidebar_custom_props:{faIcon:"fa-right-to-bracket",cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:12,thumbnailLocation:"left",tileColor:"blue"},keywords:["odysee","einloggen","wie logge ich mich auf odysee ein"],tags:["Odysee","Konto","Login"]},s="Auf Odysee einloggen",u={unversionedId:"category-basics/category-loggingin/login",id:"category-basics/category-loggingin/login",title:"Auf Odysee einloggen",description:"So kannst du dich auf Odysee einloggen.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/category-basics/category-loggingin/login.mdx",sourceDirName:"category-basics/category-loggingin",slug:"/category-basics/category-loggingin/login",permalink:"/de/category-basics/category-loggingin/login",draft:!1,editUrl:"https://github.com/OdyseeTeam/odysee-docs/edit/main/i18n/de/docusaurus-plugin-content-docs/current/category-basics/category-loggingin/login.mdx",tags:[{label:"Odysee",permalink:"/de/tags/odysee"},{label:"Konto",permalink:"/de/tags/konto"},{label:"Login",permalink:"/de/tags/login"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"So kannst du dich auf Odysee einloggen.",sidebar_custom_props:{faIcon:"fa-right-to-bracket",cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:12,thumbnailLocation:"left",tileColor:"blue"},keywords:["odysee","einloggen","wie logge ich mich auf odysee ein"],tags:["Odysee","Konto","Login"]},sidebar:"helphub",previous:{title:"Logging In",permalink:"/de/category-basics/category-loggingin/"},next:{title:"Zur\xfccksetzen des Passworts",permalink:"/de/category-basics/category-loggingin/passwordreset"}},c={},d=[],g=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},p=g("Image"),m=g("OdyseeButtonRound"),f=g("OdyseeIcon"),b={toc:d};function y(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"auf-odysee-einloggen"},"Auf Odysee einloggen"),(0,a.kt)(o.Z,{groupId:"device",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"web",label:"Web",default:!0,mdxType:"TabItem"},"Du hast bereits ein Konto und m\xf6chtest dich bei Odysee einloggen? Klicke oben rechts auf die Schaltfl\xe4che ",(0,a.kt)("a",{href:"https://odysee.com/$/signin"},(0,a.kt)("b",null,"Anmelden")),".",(0,a.kt)(p,{img:"/img/de/front_page_logged_out_arrow_login_desktop_dark.png#dark",mdxType:"Image"}),(0,a.kt)(p,{img:"/img/de/front_page_logged_out_arrow_login_desktop_light.png#light",mdxType:"Image"})),(0,a.kt)(i.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},"Auf dem Handy dr\xfcckst du auf das Personensymbol ",(0,a.kt)(m,{mdxType:"OdyseeButtonRound"},(0,a.kt)(f,{type:"person",mdxType:"OdyseeIcon"})),", das im Dropdown-Men\xfc ",(0,a.kt)("a",{href:"https://odysee.com/$/signin"},(0,a.kt)("b",null,"Anmelden"))," anzeigt.",(0,a.kt)(p,{img:"/img/de/front_page_logged_out_arrow_login_mobile_dark.png",class:"dark-image",mdxType:"Image"}),(0,a.kt)(p,{img:"/img/de/front_page_logged_out_arrow_login_mobile_light.png",class:"light-image",mdxType:"Image"}))),(0,a.kt)("p",null,"Gib deine E-Mail-Adresse und danach dein Passwort ein."),(0,a.kt)(p,{src:"/img/de//login_screen_desktop_dark.png#dark",mdxType:"Image"}),(0,a.kt)(p,{src:"/img/de//login_screen_desktop_light.png#light",mdxType:"Image"}),(0,a.kt)("p",null,"Wenn du dein Passwort kennst und dich anmelden m\xf6chtest, gib es einfach ein und klicke auf ",(0,a.kt)("strong",{parentName:"p"},"Weiter"),". Alternativ kannst du dir auch einen ",(0,a.kt)("a",{parentName:"p",href:"/category-basics/category-loggingin/loginlinks"},"Magic-Link")," \xfcber deine E-Mail-Adresse zuschicken lassen oder dein ",(0,a.kt)("a",{parentName:"p",href:"/category-basics/category-loggingin/passwordreset"},"Passwort zur\xfccksetzen"),"."))}y.isMDXComponent=!0}}]);