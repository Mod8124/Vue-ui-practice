(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,a={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(t){try{return o(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==a.call(t)?i(t):o(n(t))}},"0b42":function(t,e,r){var n=r("e8b5"),o=r("68ee"),a=r("861d"),c=r("b622"),i=c("species");t.exports=function(t){var e;return n(t)&&(e=t.constructor,o(e)&&(e===Array||n(e.prototype))?e=void 0:a(e)&&(e=e[i],null===e&&(e=void 0))),void 0===e?Array:e}},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),a=r("785a"),c=r("17c2"),i=r("9112"),u=function(t){if(t&&t.forEach!==c)try{i(t,"forEach",c)}catch(e){t.forEach=c}};for(var s in o)o[s]&&u(n[s]&&n[s].prototype);u(a)},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),a=o("forEach");t.exports=a?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),a=r("2d00"),c=o("species");t.exports=function(t){return a>=51||!n((function(){var e=[],r=e.constructor={};return r[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3a1b":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("This is my fotographie pagee")]),t._l(t.fotosAreglos,(function(e,n){return r("router-link",{key:n,attrs:{to:{name:"fotos",params:{id:e}}}},[r("button",[t._v("foto "+t._s(e))])])})),r("Foto"),r("button",{on:{click:t.home}},[t._v("home")]),r("button",{on:{click:t.before}},[t._v("before")]),r("button",{on:{click:t.after}},[t._v("after")])],2)},o=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Foto : "+t._s(t.$route.params.id))])])},c=[],i={name:"Foto"},u=i,s=r("2877"),f=Object(s["a"])(u,a,c,!1,null,null,null),l=f.exports,v={name:"Fotos",components:{Foto:l},data:function(){return{fotosAreglos:[1,2,4,5]}},methods:{home:function(){this.$router.push("/")},before:function(){this.$router.go(-1)},after:function(){this.$router.go(1)}}},b=v,p=Object(s["a"])(b,n,o,!1,null,null,null);e["default"]=p.exports},"428f":function(t,e,r){var n=r("da84");t.exports=n},"4de4":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").filter,a=r("1dde"),c=a("filter");n({target:"Array",proto:!0,forced:!c},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(t,e,r){var n=r("0b42");t.exports=function(t,e){return new(n(t))(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),a=r("e538"),c=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||c(e,t,{value:a.f(t)})}},"7def":function(t,e,r){"use strict";r("8e33")},8418:function(t,e,r){"use strict";var n=r("a04b"),o=r("9bf2"),a=r("5c6c");t.exports=function(t,e,r){var c=n(e);c in t?o.f(t,c,a(0,r)):t[c]=r}},"8e33":function(t,e,r){},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),a=r("d066"),c=r("c430"),i=r("83ab"),u=r("4930"),s=r("d039"),f=r("5135"),l=r("e8b5"),v=r("1626"),b=r("861d"),p=r("d9b5"),h=r("825a"),d=r("7b0b"),g=r("fc6a"),m=r("a04b"),_=r("577e"),y=r("5c6c"),j=r("7c73"),O=r("df75"),w=r("241c"),k=r("057f"),E=r("7418"),x=r("06cf"),P=r("9bf2"),S=r("d1e7"),$=r("6eeb"),A=r("5692"),C=r("f772"),F=r("d012"),D=r("90e3"),N=r("b622"),T=r("e538"),W=r("746f"),H=r("d44e"),I=r("69f3"),J=r("b727").forEach,L=C("hidden"),V="Symbol",z="prototype",B=N("toPrimitive"),Q=I.set,R=I.getterFor(V),Y=Object[z],q=o.Symbol,G=a("JSON","stringify"),K=x.f,M=P.f,U=k.f,X=S.f,Z=A("symbols"),tt=A("op-symbols"),et=A("string-to-symbol-registry"),rt=A("symbol-to-string-registry"),nt=A("wks"),ot=o.QObject,at=!ot||!ot[z]||!ot[z].findChild,ct=i&&s((function(){return 7!=j(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=K(Y,e);n&&delete Y[e],M(t,e,r),n&&t!==Y&&M(Y,e,n)}:M,it=function(t,e){var r=Z[t]=j(q[z]);return Q(r,{type:V,tag:t,description:e}),i||(r.description=e),r},ut=function(t,e,r){t===Y&&ut(tt,e,r),h(t);var n=m(e);return h(r),f(Z,n)?(r.enumerable?(f(t,L)&&t[L][n]&&(t[L][n]=!1),r=j(r,{enumerable:y(0,!1)})):(f(t,L)||M(t,L,y(1,{})),t[L][n]=!0),ct(t,n,r)):M(t,n,r)},st=function(t,e){h(t);var r=g(e),n=O(r).concat(pt(r));return J(n,(function(e){i&&!lt.call(r,e)||ut(t,e,r[e])})),t},ft=function(t,e){return void 0===e?j(t):st(j(t),e)},lt=function(t){var e=m(t),r=X.call(this,e);return!(this===Y&&f(Z,e)&&!f(tt,e))&&(!(r||!f(this,e)||!f(Z,e)||f(this,L)&&this[L][e])||r)},vt=function(t,e){var r=g(t),n=m(e);if(r!==Y||!f(Z,n)||f(tt,n)){var o=K(r,n);return!o||!f(Z,n)||f(r,L)&&r[L][n]||(o.enumerable=!0),o}},bt=function(t){var e=U(g(t)),r=[];return J(e,(function(t){f(Z,t)||f(F,t)||r.push(t)})),r},pt=function(t){var e=t===Y,r=U(e?tt:g(t)),n=[];return J(r,(function(t){!f(Z,t)||e&&!f(Y,t)||n.push(Z[t])})),n};if(u||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?_(arguments[0]):void 0,e=D(t),r=function(t){this===Y&&r.call(tt,t),f(this,L)&&f(this[L],e)&&(this[L][e]=!1),ct(this,e,y(1,t))};return i&&at&&ct(Y,e,{configurable:!0,set:r}),it(e,t)},$(q[z],"toString",(function(){return R(this).tag})),$(q,"withoutSetter",(function(t){return it(D(t),t)})),S.f=lt,P.f=ut,x.f=vt,w.f=k.f=bt,E.f=pt,T.f=function(t){return it(N(t),t)},i&&(M(q[z],"description",{configurable:!0,get:function(){return R(this).description}}),c||$(Y,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:q}),J(O(nt),(function(t){W(t)})),n({target:V,stat:!0,forced:!u},{for:function(t){var e=_(t);if(f(et,e))return et[e];var r=q(e);return et[e]=r,rt[r]=e,r},keyFor:function(t){if(!p(t))throw TypeError(t+" is not a symbol");if(f(rt,t))return rt[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),n({target:"Object",stat:!0,forced:!u,sham:!i},{create:ft,defineProperty:ut,defineProperties:st,getOwnPropertyDescriptor:vt}),n({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:s((function(){E.f(1)}))},{getOwnPropertySymbols:function(t){return E.f(d(t))}}),G){var ht=!u||s((function(){var t=q();return"[null]"!=G([t])||"{}"!=G({a:t})||"{}"!=G(Object(t))}));n({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,r){var n,o=[t],a=1;while(arguments.length>a)o.push(arguments[a++]);if(n=e,(b(e)||void 0!==t)&&!p(t))return l(e)||(e=function(t,e){if(v(n)&&(e=n.call(this,t,e)),!p(e))return e}),o[1]=e,G.apply(null,o)}})}if(!q[z][B]){var dt=q[z].valueOf;$(q[z],B,(function(){return dt.apply(this,arguments)}))}H(q,V),F[L]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,r){var n=r("23e7"),o=r("7b0b"),a=r("df75"),c=r("d039"),i=c((function(){a(1)}));n({target:"Object",stat:!0,forced:i},{keys:function(t){return a(o(t))}})},b727:function(t,e,r){var n=r("0366"),o=r("44ad"),a=r("7b0b"),c=r("50c4"),i=r("65f0"),u=[].push,s=function(t){var e=1==t,r=2==t,s=3==t,f=4==t,l=6==t,v=7==t,b=5==t||l;return function(p,h,d,g){for(var m,_,y=a(p),j=o(y),O=n(h,d,3),w=c(j.length),k=0,E=g||i,x=e?E(p,w):r||v?E(p,0):void 0;w>k;k++)if((b||k in j)&&(m=j[k],_=O(m,k,y),t))if(e)x[k]=_;else if(_)switch(t){case 3:return!0;case 5:return m;case 6:return k;case 2:u.call(x,m)}else switch(t){case 4:return!1;case 7:u.call(x,m)}return l?-1:s||f?f:x}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterReject:s(7)}},bb51:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},o=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))]),t._m(0),r("h3",[t._v("Installed CLI Plugins")]),t._m(1),r("h3",[t._v("Essential Links")]),t._m(2),r("h3",[t._v("Ecosystem")]),t._m(3)])},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),t._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[t._v("vuex")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],i={name:"HelloWorld",props:{msg:String}},u=i,s=(r("7def"),r("2877")),f=Object(s["a"])(u,a,c,!1,null,"1935ec24",null),l=f.exports,v={name:"Home",components:{HelloWorld:l}},b=v,p=Object(s["a"])(b,n,o,!1,null,null,null);e["default"]=p.exports},cf05:function(t,e,r){t.exports=r.p+"img/logo.82b9c7a5.png"},dbb4:function(t,e,r){var n=r("23e7"),o=r("83ab"),a=r("56ef"),c=r("fc6a"),i=r("06cf"),u=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,n=c(t),o=i.f,s=a(n),f={},l=0;while(s.length>l)r=o(n,e=s[l++]),void 0!==r&&u(f,e,r);return f}})},e439:function(t,e,r){var n=r("23e7"),o=r("d039"),a=r("fc6a"),c=r("06cf").f,i=r("83ab"),u=o((function(){c(1)})),s=!i||u;n({target:"Object",stat:!0,forced:s,sham:!i},{getOwnPropertyDescriptor:function(t,e){return c(a(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},f23e:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"services"},[r("h2",[t._v("hello is me services")])])}],a=r("2877"),c={},i=Object(a["a"])(c,n,o,!1,null,null,null);e["default"]=i.exports},f820:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("h1",[t._v("This is an about page")]),t._l(t.tareaState,(function(e,n){return r("h2",{key:n},[t._v(" "+t._s(e)+" ")])})),r("h3",[t._v(t._s(t.saludo))]),r("h3",[t._v(t._s(t.buenas))]),r("h5",[t._v(t._s(t.contador))]),r("button",{on:{click:function(e){return t.sum(1)}}},[t._v("+")])],2)},o=[];r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u=r("2f62"),s={computed:i(i(i({},Object(u["c"])("tareas",["tareaState","saludo"])),Object(u["c"])("contador",["contador"])),Object(u["c"])(["buenas"])),methods:i({},Object(u["b"])("contador",["sum"]))},f=s,l=r("2877"),v=Object(l["a"])(f,n,o,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=about.ff10a361.js.map