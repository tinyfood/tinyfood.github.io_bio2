webpackJsonp([12],{"2mUx":function(t,e,i){"use strict";var a=i("VO7l"),s=i("i5Z5");e.a={components:{AppMastheadtoo2:a.a,AppKbitem:s.a},computed:{mKbitems:function(){return this.$store.getters.kbitems}}}},"4gRi":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".item[data-v-0f063620]{width:100%;min-width:305px;border-radius:5px;padding:20px;background:#fff;position:relative}.item>img[data-v-0f063620]{padding:10px}.equatorialpill[data-v-0f063620],.mountainpill[data-v-0f063620]{background:#e82319;color:#fff;font-family:Barlow,sans-serif;position:absolute;right:30px;top:60px;padding:2px 10px 4px;text-transform:uppercase;font-size:10px;font-weight:700;border-radius:10px}p[data-v-0f063620]{font-size:18px}",""])},"E/bJ":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"h1[data-v-9a42812e]{color:#fff;position:relative;z-index:100;font-size:60px;padding:8px 80px}#titletext[data-v-9a42812e]{font-size:42px}.bk[data-v-9a42812e]{position:absolute;top:0;left:0}.ppl-banner[data-v-9a42812e]{z-index:10;height:355px}.mastheadtoo2[data-v-9a42812e]{background-color:#fff;height:355px;color:#fff}",""])},NXcC:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("2mUx"),s=i("PMLg"),o=!1;var n=function(t){o||i("yL0G")},r=i("VU/8")(a.a,s.a,!1,n,null,null);r.options.__file="pages/knowledgebase.vue",e.default=r.exports},PMLg:function(t,e,i){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"capsule"},[e("div",{staticClass:"saleimg"},[e("app-mastheadtoo2",{attrs:{img:"banner-ppl_knowledgebase",title:"Tiny Food hyper-local food production, transportation and distribution Knowledgebase by SCD Hub",bkcolor:"#fff"}})],1),e("div",{staticClass:"contain"},[this._m(0),e("div",{staticClass:"sidearea callout"}),e("transition-group",{staticClass:"kbcontent",attrs:{name:"kbitems",tag:"section"}},this._l(this.mKbitems,function(t,i){return e("app-kbitem",{key:"item",attrs:{item:t,index:i}})}),1)],1)])};a._withStripped=!0;var s={render:a,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("h4",{staticStyle:{color:"blue"},attrs:{";":""}},[this._v("March 7, 2019")]),e("h2",[this._v("Welcome to the Tiny Food knowledgebase")]),e("p",[this._v("Please "),e("a",{attrs:{href:"mailto:greg@scdhub.org"}},[this._v("share comments & resources")]),this._v(" on organic/natural farming, nutrition, food distribution or other resources you have found useful.\n    ")])])}]};e.a=s},VO7l:function(t,e,i){"use strict";var a=i("bhMY"),s=i("fM3o"),o=!1;var n=function(t){o||i("gf4U")},r=i("VU/8")(a.a,s.a,!1,n,"data-v-9a42812e",null);r.options.__file="components/AppMastheadtoo2.vue",e.a=r.exports},bhMY:function(t,e,i){"use strict";e.a={props:{bkcolor:{type:String,default:"white"},title:{type:String,default:"Tiny Food"},img:{type:String,default:"banner-ppl"}}}},fM3o:function(t,e,i){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mastheadtoo2",style:"background:"+this.bkcolor},[e("img",{staticClass:"ppl-banner",attrs:{src:"/"+this.img+".png",alt:"`/${title}` not for profit foundation driven network quality food access network"}})])};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},gf4U:function(t,e,i){var a=i("E/bJ");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("0222af7e",a,!1,{sourceMap:!1})},i5Z5:function(t,e,i){"use strict";var a=i("tyqu"),s=i("pYWh"),o=!1;var n=function(t){o||i("tGNe")},r=i("VU/8")(a.a,s.a,!1,n,"data-v-0f063620",null);r.options.__file="components/AppKbitem.vue",e.a=r.exports},pYWh:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item"},[i("img",{attrs:{src:"/"+t.item.img,alt:"Image of "+t.item.name,width:"140",align:"left"}}),i("p",[i("BR"),i("b",[t._v(t._s(t.item.name))])],1),i("p",[t._v(t._s(t.item.short)+" \n  ")]),i("button",{staticClass:"add",on:{click:function(e){t.visitLink()}}},[t._v("More")])])};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},rU6I:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".saleimg .ppl-banner{height:105%}.kbcontent{width:92%;display:grid;grid-template-columns:repeat(2,1fr);grid-gap:10px;padding:0!important}",""])},tGNe:function(t,e,i){var a=i("4gRi");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("65a1240c",a,!1,{sourceMap:!1})},tyqu:function(t,e,i){"use strict";e.a={props:{item:{type:Object,required:!0},index:{type:Number,required:!0}},filters:{usdollar:function(t){return"$"+t}},methods:{visitKbitem:function(){this.$store.commit("addKbitem",this.kbitem)},visitLink:function(){this.$store.commit("addKbitem",this.kbitem)}}}},yL0G:function(t,e,i){var a=i("rU6I");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("4359d6ef",a,!1,{sourceMap:!1})}});