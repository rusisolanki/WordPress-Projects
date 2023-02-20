(window.webpackJsonp=window.webpackJsonp||[]).push([[258,82],{1127:function(t,e,n){"use strict";var o=n(112),r=n(194),l=n.n(r),c=n(157),f={components:{Skeleton:o.a,InformationCircle:l.a,Tippy:c.a},props:{title:{type:String,default:""},tippy:{type:String,default:null},loading:{type:Boolean,default:!1}}},d=n(12),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return e("div",[t.loading?e("Skeleton",{staticClass:"h-5 w-1/2 mb-1"}):e("h6",{staticClass:"text-gray-600 pb-1 mb-0.5 font-semibold flex justify-between items-center"},[t._v("\n    "+t._s(t.title)+"\n    "),e("Tippy",{attrs:{content:t.tippy}},[e("InformationCircle",{staticClass:"inline-block w-4 h-4"})],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports},1135:function(t,e,n){var content=n(1166);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(92).default)("3939f00e",content,!0,{sourceMap:!1})},1163:function(t,e,n){"use strict";n(193);var o={props:{disabled:{type:Boolean,default:!1},buttons:{type:Array,required:!0},value:{type:[String,Number],default:null}}},r=(n(1165),n(12)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-wrap gap-2"},t._l(t.buttons,(function(button){return e("button",{key:button.label,staticClass:"btn btn-naked btn-min-w flex-shrink-0 text-sm border border-gray-300 hover:border-blue-500 hover:text-blue-500",class:{"border-blue-500 text-blue-500":t.value===button.value,"opacity-25 cursor-not-allowed":t.disabled},style:button.styles,attrs:{type:"button",disabled:t.disabled||t.value===button.value},on:{click:function(e){return t.$emit("select",button.value)}}},[button.icon?e(button.icon,{tag:"component",staticClass:"w-3.5 h-3.5 mr-1",class:button.iconStyle}):t._e(),t._v("\n\n    "+t._s(button.label)+"\n  ")],1)})),0)}),[],!1,null,"79562944",null);e.a=component.exports},1165:function(t,e,n){"use strict";n(1135)},1166:function(t,e,n){var o=n(91)((function(i){return i[1]}));o.push([t.i,".btn-min-w[data-v-79562944]{min-width:2.75rem}",""]),o.locals={},t.exports=o},1221:function(t,e,n){"use strict";n(193);var o=n(1163),r=n(1127),l=n(874),c=n.n(l),content=n(156),f={components:{ButtonGroup:o.a,ControlSub:r.a},mixins:[Object(content.d)(["data/call-to-actions"],!0)],props:{value:{type:[String,Number],default:null},label:{type:String,default:null},tippy:{type:String,default:null},disabled:{type:Boolean},loading:{type:Boolean,default:!1}},computed:{orientation:{get:function(){return this.value},set:function(t){this.$emit("changed",t)}},positions:function(){return[{value:"top",label:this.page.top,icon:c.a,iconStyle:"transform rotate-90"},{value:"right",label:this.page.right,icon:c.a,iconStyle:"transform rotate-180"},{value:"bottom",label:this.page.bottom,icon:c.a,iconStyle:"transform -rotate-90"},{value:"left",label:this.page.left,icon:c.a,iconStyle:""}]}}},d=n(12),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("ControlSub",{attrs:{loading:t.loading,title:t.label,tippy:t.tippy}}),t._v(" "),e("ButtonGroup",{attrs:{disabled:t.disabled,buttons:t.positions,value:t.orientation},on:{select:function(e){t.orientation=e}}})],1)}),[],!1,null,null,null);e.a=component.exports},1324:function(t,e,n){"use strict";n.r(e);n(16),n(15),n(13),n(17),n(18);var o=n(3),r=(n(48),n(42),n(1221)),l=n(28),c=n(14),content=n(156);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={components:{OrientationButtons:r.a},mixins:[Object(content.d)(["editor/inputs/icon-layout"],!0)],computed:d(d({templateAllowsIconOrientation:function(){return!!this.templateOptions.use_icon_orientation},disabled:function(){return!this.editor.features.includes("icons")}},Object(l.c)({templateOptions:"editor/templateOptions"})),Object(l.e)(["editor"])),methods:d(d({setOrientation:function(t){this.SET_ICON_ORIENTATION(t),this.resetIconOffset(),this.fetchNewLogoFromState(),c.a.$emit(c.b.EcommerceSelectContent,{type:"orientation",id:t})}},Object(l.d)({SET_ICON_ORIENTATION:"editor/SET_ICON_ORIENTATION"})),Object(l.b)({fetchNewLogoFromState:"editor/fetchNewLogoFromState",resetIconOffset:"editor/resetIconOffset"}))},y=n(12),v={components:{IconLayout:Object(y.a)(O,(function(){var t=this,e=t._self._c;return e("div",[e("OrientationButtons",{directives:[{name:"show",rawName:"v-show",value:t.templateAllowsIconOrientation,expression:"templateAllowsIconOrientation"}],staticClass:"mb-4",attrs:{value:t.editor.icon_orientation,disabled:!t.templateAllowsIconOrientation||t.disabled,label:t.contentReady?t.page.label:"",tippy:t.contentReady?t.page.tippy:""},on:{changed:t.setOrientation}})],1)}),[],!1,null,null,null).exports},mixins:[n(1133).a]},m=Object(y.a)(v,(function(){var t=this._self._c;return t("div",[t("IconLayout")],1)}),[],!1,null,null,null);e.default=m.exports},874:function(t,e,n){n(16),n(15),n(13),n(17),n(18);var o=n(38),r=n(39),l=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),f=e.children,d=void 0===f?[]:f,O=data.class,y=data.staticClass,style=data.style,v=data.staticStyle,m=data.attrs,h=void 0===m?{}:m,w=r(data,l);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){o(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[O,y],style:[style,v],attrs:Object.assign({fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},h)},w),d.concat([n("path",{attrs:{"fill-rule":"evenodd",d:"M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z","clip-rule":"evenodd"}})]))}}}}]);