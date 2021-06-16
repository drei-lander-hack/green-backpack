var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,a=(t,n,s)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,r=(e,r)=>{for(var o in r||(r={}))t.call(r,o)&&a(e,o,r[o]);if(n)for(var o of n(r))s.call(r,o)&&a(e,o,r[o]);return e};import{d as o,c as i,r as c,o as l,a as d,w as u,p as m,b as h,e as p,m as g,F as f,f as b,u as v,g as k,h as y,t as w,V as C,i as I,j as M,k as _,l as S,n as z,q as R}from"./vendor.31d3e586.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const s=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,r)=>{const o=new URL(e,s);if(self[t].moduleMap[o])return n(self[t].moduleMap[o]);const i=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){r(new Error(`Failed to import: ${e}`)),a(c)},onload(){n(self[t].moduleMap[o]),a(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/green-backpack/assets/");var $=o({});$.render=function(e,t,n,s,a,r){return l(),i("button",{type:"button",class:"btn btn-outline-secondary",onClick:t[1]||(t[1]=t=>e.$emit("click"))},[c(e.$slots,"default")])};var P=o({components:{Button:$},data:()=>({challenge:"/green-backpack/assets/challenge.d4718706.png",graph:"/green-backpack/assets/graph.ed5194e7.png",company:"/green-backpack/assets/company.bbadc250.png",gruppe:"/green-backpack/assets/gruppe.1a8a2f57.png",rucksack:"/green-backpack/assets/rucksack.a6bf12f2.png",solo:"/green-backpack/assets/solo.8eae7e73.png"}),methods:{behaviour(){this.$router.push("/section/Mittagessen")},challenges(){this.$router.push("/section/Mittagessen/challenges")},buildingsite(){this.$router.push("/buildingsite")}}});const A=u();m("data-v-1daccb2d");const x={class:"btn-group",role:"group","aria-label":"Footer buttons"};h();const B=A(((e,t,n,s,a,r)=>{const o=p("Button");return l(),i("footer",null,[d("div",x,[d(o,{onClick:e.buildingsite},{default:A((()=>[d("img",{src:e.solo},null,8,["src"])])),_:1},8,["onClick"]),d(o,{onClick:e.challenges},{default:A((()=>[d("img",{src:e.challenge},null,8,["src"])])),_:1},8,["onClick"]),d(o,{onClick:e.behaviour},{default:A((()=>[d("img",{src:e.graph},null,8,["src"])])),_:1},8,["onClick"]),d(o,{onClick:e.buildingsite},{default:A((()=>[d("img",{src:e.company},null,8,["src"])])),_:1},8,["onClick"]),d(o,{onClick:e.buildingsite},{default:A((()=>[d("img",{src:e.gruppe},null,8,["src"])])),_:1},8,["onClick"])])])}));P.render=B,P.__scopeId="data-v-1daccb2d";var E=o({components:{Footer:P},data:()=>({splash:!0}),mounted(){setTimeout((()=>this.splash=!1),2e3)},computed:r({},g(["maxMainImg"])),methods:{home(){this.$router.push("/")}}}),O="/green-backpack/assets/splash-screen.25edf7b3.png";const D={key:0,class:"splash"},U=d("img",{src:O},null,-1),j=d("img",{class:"logo",alt:"Der Grüne Rucksack Logo",src:O},null,-1),V=d("h1",null,"Der Grüne Rucksack",-1);E.render=function(e,t,n,s,a,r){const o=p("router-view"),c=p("Footer");return e.splash?(l(),i("div",D,[U])):(l(),i(f,{key:1},[d("header",{class:["container",{hero:e.maxMainImg}],onClick:t[1]||(t[1]=(...t)=>e.home&&e.home(...t))},[j,V],2),d("main",null,[d(o)]),d(c)],64))};localStorage.getItem("app")||localStorage.removeItem("userProfile"),localStorage.setItem("app",JSON.stringify({version:1}));const F=localStorage.getItem("userProfile"),T={sections:["Dienstreisen","Arbeitsweg","Mittagessen"],maxMainImg:!0,userProfile:F?JSON.parse(F):{foodCategory:void 0},plan:""},K={minimizeMainImage:()=>({type:"minimizeMainImage"}),maximizeMainImage:()=>({type:"maximizeMainImage"}),setUserProfile:e=>({type:"setUserProfile",profile:e}),setPlan:e=>({type:"setPlan",plan:e})},N={foodCategorySelected:e=>({type:"foodCategorySelected",id:e})};var W=b({state:T,mutations:{minimizeMainImage(e){e.maxMainImg=!1},maximizeMainImage(e){e.maxMainImg=!0},setUserProfile(e,t){e.userProfile=t.profile},setPlan(e,t){e.plan=t.plan}},actions:{foodCategorySelected(e,t){const n=r(r({},e.state.userProfile),{foodCategory:t.id});localStorage.setItem("userProfile",JSON.stringify(n)),e.commit(K.setUserProfile(n))}}});const G=o({setup:()=>({store:v()}),beforeRouteEnter(e,t,n){n((e=>{e.$store.commit(K.maximizeMainImage())}))},computed:r({},g(["sections"]))});const L=u();m("data-v-039d31d7");const J=d("p",null," Entscheide, an welchen Stellschrauben Du deinen Rucksack verändern willst: ",-1),q={class:"sections"};h();const H=L(((e,t,n,s,a,r)=>{const o=p("router-link");return l(),i(f,null,[J,d("div",q,[(l(!0),i(f,null,k(e.sections,(e=>(l(),i(o,{to:"/section/"+e,class:"btn btn-primary",key:e},{default:L((()=>[y(w(e),1)])),_:2},1032,["to"])))),128))])],64)}));G.render=H,G.__scopeId="data-v-039d31d7";var Z="/green-backpack/assets/baustelle.0e034f11.jpg";const Q=o({data:()=>({section:"",baustelle:Z}),beforeRouteEnter(e,t,n){n((t=>{const n=t;n.section=e.params.section,n.$store.commit(K.minimizeMainImage())}))},beforeRouteUpdate(e){this.section=e.params.section}});const X=u();m("data-v-5c45f71e");const Y=d("h3",null,"Dieser Bereich ist noch nicht ganz fertig.",-1),ee=d("p",null,"Komm' doch einfach später noch mal wieder!",-1);h();const te=X(((e,t,n,s,a,r)=>(l(),i(f,null,[d("h2",null,w(e.section),1),d("img",{src:e.baustelle},null,8,["src"]),Y,ee],64))));Q.render=te,Q.__scopeId="data-v-5c45f71e";var ne={meat:{title:"Ich bin 100% Fleischesser",co2:2.18},halfmeat:{title:"Etwa zu jeder zweiten Mahlzeit esse ich Fleisch",co2:1.41},vegetarian:{title:"Vegetarisch",co2:.64},vegan:{title:"Vegan",co2:.26}},se=o({props:{id:String,name:String,title:String,checked:Boolean}});const ae={class:"form-check"};se.render=function(e,t,n,s,a,r){return l(),i("div",ae,[d("input",{class:"form-check-input",type:"radio",name:e.name,id:e.id,onChange:t[1]||(t[1]=t=>e.$emit("select",e.id)),checked:e.checked},null,40,["name","id","checked"]),d("label",{class:"form-check-label",for:e.id},w(e.title),9,["for"])])};const re=o({components:{VueApexCharts:C},props:{value:Number,reference:Number},data:()=>({options:{chart:{id:"vuechart"},xaxis:{categories:["Du","Durchschnitt"]},yaxis:{title:{text:"CO2 Äquivalente in kg pro Jahr"}},colors:["#348a13"]}}),computed:{series(){return[{name:"series-1",data:[this.value,this.reference]}]}},beforeRouteEnter(e,t,n){n((e=>{e.$store.commit(K.minimizeMainImage())}))}});const oe=u()(((e,t,n,s,a,r)=>{const o=p("VueApexCharts");return l(),i(o,{type:"bar",options:e.options,series:e.series},null,8,["options","series"])}));re.render=oe,re.__scopeId="data-v-5d710e73";var ie={totalAverage:7e3,foodAverage:320,travelAverage:3e3,commuteAverage:2e3};const ce=o({components:{RadioButton:se,Comparison:re},setup:()=>({store:v(),referenceValues:ie}),data:()=>({foodCategories:ne}),computed:{co2value(){const e=this.store.state.userProfile.foodCategory;return e?Math.round(200*ne[e].co2):0}},beforeRouteEnter(e,t,n){n((e=>{e.$store.commit(K.minimizeMainImage())}))},methods:{selected(e){this.store.dispatch(N.foodCategorySelected(e))},isChecked(e){return e===this.store.state.userProfile.foodCategory},behaviour(){this.$router.push("/section/Mittagessen/behaviour")},challenges(){this.$router.push("/section/Mittagessen/challenges")}}});const le=u();m("data-v-c0f2e9c6");const de={class:"container"},ue=d("h2",null,"Mittagessen",-1),me=d("p",null," Was isst du bisher an Arbeitstagen? ",-1),he={class:"btn-list"};h();const pe=le(((e,t,n,s,a,r)=>{const o=p("RadioButton"),c=p("Comparison");return l(),i("div",de,[ue,me,(l(!0),i(f,null,k(e.foodCategories,((t,n)=>(l(),i("div",{key:n},[d(o,{id:n,name:"foodCategory",title:t.title,onSelect:e.selected,checked:e.isChecked(n)},null,8,["id","title","onSelect","checked"])])))),128)),e.co2value?(l(),i(c,{key:0,value:e.co2value,reference:e.referenceValues.foodAverage},null,8,["value","reference"])):I("",!0),d("div",he,[d("button",{type:"button",class:"btn btn-primary",onClick:t[1]||(t[1]=(...t)=>e.behaviour&&e.behaviour(...t))},"Mein Rucksack"),d("button",{type:"button",class:"btn btn-primary",onClick:t[2]||(t[2]=(...t)=>e.challenges&&e.challenges(...t))},"Challenges")])])}));ce.render=pe,ce.__scopeId="data-v-c0f2e9c6";var ge=[{title:"Verzichte auf Fleisch",description:"Bei der Produktion von Fleisch wird sehr viel CO2 erzeugt. Das liegt einerseits daran, dass ein Tier eine große Menge Nahrung aufnehmen muss, bis es geschlachtet werden kann. Zum anderen erzeugen insbesondere Wiederkäuer wie Rinder oder Schafe auch noch weitere klimaschädlichen Gase wie Methan.",moreInfo:"Einen guten Überblick über den Ausstoß klimaschädlicher Gase bei der Tierhaltung kann man bei Our World In Data https://ourworldindata.org/environmental-impacts-of-food#where-do-the-emissions-from-our-food-come-from nachlesen.",who:["meat","halfmeat"]},{title:"Reduziere Milchprodukte",description:"Milchprodukte bedingen, dass in großer Anzahl Rinder oder Schafe gehalten werden müssen. Auch wenn diese Tiere nicht geschlachtet werden, sondern 'nur' Milch geben, entstehen große Mengen klimaschädliches Gas.",moreInfo:"Einen guten Überblick über den Ausstoß klimaschädlicher Gase bei der Tierhaltung kann man bei Our World In Data https://ourworldindata.org/environmental-impacts-of-food#where-do-the-emissions-from-our-food-come-from nachlesen. In der EU tragen innerhalb der Tierhaltung die Kühe, die zur Milchproduktion verwendet werden, den größten Anteil an den Treibhausgasen bei (https://www.mdpi.com/2071-1050/12/5/2053).",who:["meat","halfmeat","vegetarian"]},{title:"Sprich mit deinem Kantinenbetreiber",description:"Wenn dir vielleicht nicht die geeigneten Speisen in deiner Kantine angeboten werden, kannst du den Betreiber darauf ansprechen. Nicht selten trifft man auf interessierte Kolleg:innen.",moreInfo:"",who:["meat","halfmeat","vegetarian","vegan"]}],fe=o({props:{title:String}});const be=u();m("data-v-b731625c");const ve={class:"col-md-4 col-sm-1"},ke={class:"card"},ye={class:"card-body"},we={class:"card-title"};h();const Ce=be(((e,t,n,s,a,r)=>(l(),i("div",ve,[d("div",ke,[d("div",ye,[d("h5",we,w(e.title),1),c(e.$slots,"default",{},void 0,!0)])])]))));fe.render=Ce,fe.__scopeId="data-v-b731625c";const Ie=o({components:{Card:fe},setup:()=>({store:v()}),data:()=>({suggestions:ge}),methods:{mySuggestions(){return this.suggestions.filter((e=>e.who.includes(this.store.state.userProfile.foodCategory)))},accept(e){this.store.commit(K.setPlan(e.title))}},beforeRouteEnter(e,t,n){n((e=>{e.$store.commit(K.minimizeMainImage())}))}});const Me=u();m("data-v-abe12dfc");const _e={class:"container"},Se=d("h2",null,"Mein Verhalten optimieren",-1),ze=d("p",null," Diese Vorschläge haben wir für dich für die nächste Woche: ",-1),Re={class:"row"},$e={class:"card-text"},Pe={key:0},Ae=d("summary",null,"ⓘ",-1),xe={class:"btn-list"};h();const Be=Me(((e,t,n,s,a,r)=>{const o=p("Card");return l(),i("div",_e,[Se,ze,d("div",Re,[(l(!0),i(f,null,k(e.mySuggestions(),(t=>(l(),i(o,{key:t.title,title:t.title},{default:Me((()=>[d("p",$e,w(t.description),1),t.moreInfo?(l(),i("details",Pe,[Ae,d("p",null,w(t.moreInfo),1)])):I("",!0),d("div",xe,[d("a",{href:"#/section/Mittagessen/current",class:"btn btn-primary",onClick:n=>e.accept(t)},"Annehmen",8,["onClick"])])])),_:2},1032,["title"])))),128))])])}));Ie.render=Be,Ie.__scopeId="data-v-abe12dfc";const Ee=o({setup:()=>({store:v()}),beforeRouteEnter(e,t,n){n((e=>{e.$store.commit(K.minimizeMainImage())}))},computed:{plan(){return this.store.state.plan}}});const Oe=u();m("data-v-b4819412");const De={class:"container"},Ue=d("h2",null,"Wie läuft dein Tag?",-1),je=d("p",null," Du hast dir vorgenommen, durch deine Essgewohnheiten CO2 einzusparen. ",-1),Ve=d("div",{class:"btn-list"},[d("a",{href:"#/",class:"btn btn-primary"},"Ja"),d("a",{href:"#/",class:"btn btn-primary"},"Nein")],-1);h();const Fe=Oe(((e,t,n,s,a,r)=>(l(),i("div",De,[Ue,je,d("p",null,' Hast du dein Vorhaben "'+w(e.plan)+'" durchgehalten? ',1),Ve]))));Ee.render=Fe,Ee.__scopeId="data-v-b4819412";var Te=[{title:"Abteilungs-Ausscheid",description:"Die Geschäftsführung hat zum Wettkampf der Abteilungen gerufen! Tritt gemeinsam mit deinen Kolleg:innen an und hol' euch das Teamevent!"},{title:"Das Rennen der Bahnen",description:"SBB, ÖBB und DB liefern sich ein Rennen, wer mit dem wenigsten CO2 pro Mitarbeiter:in während der Arbeit auskommt. Sei dabei und hilf' deinem Unternehmen, das Klimafreundlichste zu werden!"}];const Ke=o({components:{Card:fe},setup:()=>({store:v()}),data:()=>({challenges:Te}),beforeRouteEnter(e,t,n){n((e=>{e.$store.commit(K.minimizeMainImage())}))},methods:{accept(){this.$router.push("/happy")}}}),Ne={class:"container"},We=d("h2",null,"Challenges",-1),Ge=d("p",null," Stelle dich den Herausforderungen: ",-1),Le={class:"row"},Je={class:"card-text"},qe={class:"btn-container"};Ke.render=function(e,t,n,s,a,r){const o=p("Card");return l(),i("div",Ne,[We,Ge,d("div",Le,[(l(!0),i(f,null,k(e.challenges,((n,s)=>(l(),i(o,{key:s,title:n.title},{default:M((()=>[d("p",Je,w(n.description),1),d("div",qe,[d("a",{href:"#",class:"btn btn-primary",onClick:t[1]||(t[1]=_(((...t)=>e.accept&&e.accept(...t)),["prevent"]))},"Annehmen")])])),_:2},1032,["title"])))),128))])])};const He=o({data:()=>({baustelle:Z}),beforeRouteEnter(e,t,n){n((e=>{e.$store.commit(K.minimizeMainImage())}))}});const Ze=u();m("data-v-5ab6813d");const Qe={class:"container"},Xe=d("h2",null,"Baustelle",-1),Ye=d("h3",null,"Dieser Bereich ist noch nicht ganz fertig.",-1),et=d("p",null,"Komm' doch einfach später noch mal wieder!",-1);h();const tt=Ze(((e,t,n,s,a,r)=>(l(),i("div",Qe,[Xe,d("img",{src:e.baustelle},null,8,["src"]),Ye,et]))));He.render=tt,He.__scopeId="data-v-5ab6813d";const nt=o({data:()=>({happy:"/green-backpack/assets/happy.b0cb802d.png"}),beforeRouteEnter(e,t,n){n((e=>{e.$store.commit(K.minimizeMainImage())}))}});const st=u();m("data-v-45caef0c");const at={class:"container"},rt=d("h2",null,"Super!",-1),ot=d("h3",null,"Du hast die Challenge angenommen.",-1),it=d("p",null,"Komm' doch einfach später wieder und sag' Bescheid, wie es dir gelingt!",-1);h();const ct=st(((e,t,n,s,a,r)=>(l(),i("div",at,[rt,d("img",{src:e.happy},null,8,["src"]),ot,it]))));nt.render=ct,nt.__scopeId="data-v-45caef0c";const lt=[{path:"/",component:G},{path:"/section/Mittagessen",component:ce},{path:"/section/:section/current",component:Ee},{path:"/section/:section/behaviour",component:Ie},{path:"/section/:section/challenges",component:Ke},{path:"/section/:section",component:Q},{path:"/buildingsite",component:He},{path:"/happy",component:nt}],dt=S({history:z(),routes:lt}),ut=R(E);ut.use(W),ut.use(dt),ut.mount("#app");
