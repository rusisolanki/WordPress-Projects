(window.webpackJsonp=window.webpackJsonp||[]).push([[396],{1538:function(e,n,t){"use strict";t.r(n);var o=t(20),c=(t(32),t(302),t(34),t(23),t(33),t(26),t(127)),d=t(161),l=function(e){return e?e.toLowerCase().trim():""},r=function(e){var n=e.map(l);return Object(o.a)(new Set(n))};d.a.$on(c.a.EnhancedFlowIndustrySelected,(function(e){var param=l(e.id||e.name);param&&(d.a.$emit(c.a.AnalyticsGA4Event,{event:"enhanced_flow",industry_id:param}),d.a.$emit(c.a.EcommerceSelectContent,{type:"industry",id:param}))})),d.a.$on(c.a.EnhancedFlowColorThemesSelected,(function(e){r(e).forEach((function(e){d.a.$emit(c.a.AnalyticsGA4Event,{event:"enhanced_flow",color_theme_id:e}),d.a.$emit(c.a.EcommerceSelectContent,{type:"color_theme",id:e})}))})),d.a.$on(c.a.EnhancedFlowFontStylesSelected,(function(e){r(e).forEach((function(style){d.a.$emit(c.a.AnalyticsGA4Event,{event:"enhanced_flow",font_style_id:style}),d.a.$emit(c.a.EcommerceSelectContent,{type:"font_style",id:style})}))})),d.a.$on(c.a.EnhancedFlowLogoTypeSelected,(function(e){d.a.$emit(c.a.EcommerceSelectContent,{type:"logo_type",id:e}),d.a.$emit(c.a.AnalyticsGA4Event,{event:"enhanced_flow",logo_type:e})})),d.a.$on(c.a.EnhancedFlowKeywordsSelected,(function(e){r(e).forEach((function(e){d.a.$emit(c.a.EcommerceSelectContent,{type:"keyword",id:e}),d.a.$emit(c.a.AnalyticsGA4Event,{event:"enhanced_flow",keyword_id:e})}))}))}}]);