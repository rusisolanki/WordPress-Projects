(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{1280:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1),c=(n(19),n(21)),o=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(data){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.a.debug("Pushing dataLayer event:",data),window.dataLayer.push(data);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},1537:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n(20),o=(n(41),n(32),n(26),n(16),n(15),n(13),n(17),n(18),n(73)),d=n(127),m=n(161),f=n(1280),l=n(21),y=n(30),O=n.n(y),w=n(159);function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}m.a.$on(d.a.PurchaseCompleted,(function(e){var t=e.order,n=t.total/100;window.tap("conversion",t.id,n,{customer_id:t.user}),l.a.debug("Tapfiliate conversion tracked"),O.a.remove("ref")})),m.a.$on(d.a.PurchaseCompleted,(function(e){var t,n=e.order;if(e.enterprise.is_whitelabel)return!1;window.Intercom("trackEvent","purchase-completed",{order_id:n.id,package_id:null===(t=n.items.find((function(e){return"kit"===e.type})))||void 0===t?void 0:t.resource}),n.items.map((function(e){return e.package.products.map((function(t){return{name:"site-free"===t.id?"product-trialed:".concat(t.code):"product-purchased:".concat(t.code),payload:{package_id:e.package.code,package_name:e.package.name,name:t.name,id:t.code,type:t.type}}}))})).reduce((function(a,b){return[].concat(Object(c.a)(a),Object(c.a)(b))})).forEach((function(e){return window.Intercom("trackEvent",e.name,e.payload)})),n.items.map((function(e){return e.package.products.map((function(t){return{name:"site-free"===t.id?"product-type-trialed:".concat(t.type):"product-type-purchased:".concat(t.type),payload:{package_id:e.package.code,package_name:e.package.name,name:t.name,id:t.id,type:t.type}}}))})).reduce((function(a,b){return[].concat(Object(c.a)(a),Object(c.a)(b))})).forEach((function(e){return window.Intercom("trackEvent",e.name,e.payload)})),n.items.map((function(e){return e.package.products.map((function(t){return{name:"site-free"===t.id?"product-trialed:".concat(t.type):"product-purchased:".concat(t.type),payload:{package_id:e.package.code,package_name:e.package.name,name:t.name,id:t.id,type:t.type}}}))})).reduce((function(a,b){return[].concat(Object(c.a)(a),Object(c.a)(b))})).forEach((function(e){return window.Intercom("trackEvent",e.name,e.payload)}))})),m.a.$on(d.a.PurchaseCompleted,(function(e){var t=e.order,n=e.logo,r=Object(o.a)(t);if(0!==t.total){var c=r.reduce((function(e,t){return e+t.price}),0),f=Object(w.b)(t.total,t.items);r=r.map((function(e){return v(v({},e),{},{price:e.price.toFixed()})}));var l=c-f;m.a.$emit(d.a.EcommercePurchase,{coupon:t.coupon?t.coupon.id:void 0,value:l.toFixed(2),transaction_id:t.id,affiliation:null==n?void 0:n.eid,shipping:"0.00",currency:"USD",tax:"0.00",items:r})}})),m.a.$on(d.a.PurchaseCompleted,(function(e){var t=e.order,n={coupon:t.coupon&&0!==Object(w.b)(t.total,t.items)?t.coupon.id:"",items:t.items,discount:Object(w.b)(t.total,t.items),order_id:t.id,total:t.total};0===t.total&&l.a.debug("Skipping analytics.  Reason: Order is free. Data:",n),Object(f.a)(v({event:"purchase_completed"},n))})),m.a.$on(d.a.PurchaseCompleted,(function(e){e.order.items.find((function(e){return"site"===e.package.type}))&&window.$nuxt.$store.dispatch("dashboard/markStepAsComplete","website")}))}}]);