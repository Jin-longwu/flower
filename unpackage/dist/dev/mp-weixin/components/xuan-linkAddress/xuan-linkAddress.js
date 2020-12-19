(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/xuan-linkAddress/xuan-linkAddress"],{

/***/ 106:
/*!***********************************************************************!*\
  !*** E:/微信小程序/购物车测试/components/xuan-linkAddress/xuan-linkAddress.vue ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _xuan_linkAddress_vue_vue_type_template_id_5b71d5e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./xuan-linkAddress.vue?vue&type=template&id=5b71d5e4& */ 107);
/* harmony import */ var _xuan_linkAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xuan-linkAddress.vue?vue&type=script&lang=js& */ 109);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _xuan_linkAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _xuan_linkAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _xuan_linkAddress_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./xuan-linkAddress.vue?vue&type=style&index=0&lang=scss& */ 114);
/* harmony import */ var _16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../前端备课/16.微信小程序/17.微信小程序/02.uni-app资料/素材/HBuilderX.2.4.6.20191210.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _xuan_linkAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _xuan_linkAddress_vue_vue_type_template_id_5b71d5e4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _xuan_linkAddress_vue_vue_type_template_id_5b71d5e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _xuan_linkAddress_vue_vue_type_template_id_5b71d5e4___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/xuan-linkAddress/xuan-linkAddress.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 107:
/*!******************************************************************************************************!*\
  !*** E:/微信小程序/购物车测试/components/xuan-linkAddress/xuan-linkAddress.vue?vue&type=template&id=5b71d5e4& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xuan_linkAddress_vue_vue_type_template_id_5b71d5e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../前端备课/16.微信小程序/17.微信小程序/02.uni-app资料/素材/HBuilderX.2.4.6.20191210.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../前端备课/16.微信小程序/17.微信小程序/02.uni-app资料/素材/HBuilderX.2.4.6.20191210.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../前端备课/16.微信小程序/17.微信小程序/02.uni-app资料/素材/HBuilderX.2.4.6.20191210.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../前端备课/16.微信小程序/17.微信小程序/02.uni-app资料/素材/HBuilderX.2.4.6.20191210.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../前端备课/16.微信小程序/17.微信小程序/02.uni-app资料/素材/HBuilderX.2.4.6.20191210.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../前端备课/16.微信小程序/17.微信小程序/02.uni-app资料/素材/HBuilderX.2.4.6.20191210.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./xuan-linkAddress.vue?vue&type=template&id=5b71d5e4& */ 108);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xuan_linkAddress_vue_vue_type_template_id_5b71d5e4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xuan_linkAddress_vue_vue_type_template_id_5b71d5e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xuan_linkAddress_vue_vue_type_template_id_5b71d5e4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xuan_linkAddress_vue_vue_type_template_id_5b71d5e4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 108:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/微信小程序/购物车测试/components/xuan-linkAddress/xuan-linkAddress.vue?vue&type=template&id=5b71d5e4& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 109:
/*!************************************************************************************************!*\
  !*** E:/微信小程序/购物车测试/components/xuan-linkAddress/xuan-linkAddress.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xuan_linkAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../前端备课/16.微信小程序/17.微信小程序/02.uni-app资料/素材/HBuilderX.2.4.6.20191210.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../前端备课/16.微信小程序/17.微信小程序/02.uni-app资料/素材/HBuilderX.2.4.6.20191210.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../前端备课/16.微信小程序/17.微信小程序/02.uni-app资料/素材/HBuilderX.2.4.6.20191210.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../前端备课/16.微信小程序/17.微信小程序/02.uni-app资料/素材/HBuilderX.2.4.6.20191210.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../前端备课/16.微信小程序/17.微信小程序/02.uni-app资料/素材/HBuilderX.2.4.6.20191210.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./xuan-linkAddress.vue?vue&type=script&lang=js& */ 110);
/* harmony import */ var _16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xuan_linkAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xuan_linkAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xuan_linkAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xuan_linkAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xuan_linkAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 110:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/微信小程序/购物车测试/components/xuan-linkAddress/xuan-linkAddress.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;









































var _get_linkAddress_p = _interopRequireDefault(__webpack_require__(/*! ../../static/xuan-linkAddress/get_linkAddress_p.js */ 111));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default2 = { data: function data() {return { newActive: "", newTransition: true, //省0市1区2
      linkAddress_area: [{ current: null, info: [], clickfun: 'province_txt_click' }, { current: null, info: [], clickfun: 'city_txt_click' }, { current: null, info: [], clickfun: 'district_txt_click' }], /*请求提交的*/submission: { province: '', //省
        city: '', //市
        county: '', //区
        town: '' //镇
      }, /*用户选择的地址*/user_address: { province: '', //省
        city: '', //市
        district: '' //区		
      }, selected_address: '' };}, props: { /*底部弹窗的属性*/active: { type: Boolean, default: false }, height: { type: [String], default: "100%" },
    //遮盖层显示
    maskShow: {
      type: Boolean,
      default: true },

    //遮盖层点击
    maskClick: {
      type: Boolean,
      default: true },

    //回掉
    callback: {
      type: Function,
      default: function _default() {

      } } },


  computed: {
    popuplayoutClass: function popuplayoutClass() {
      var _class = "";
      if (this.newActive) {
        _class += "popup-layout-active";
      }
      _class += " popup-layout-bottom";
      return _class;
    },
    popupContentClass: function popupContentClass() {
      var _class = "";
      if (this.newTransition && this.transition !== 'none') {
        _class += "popup-layout-transition-slider";
      }
      return _class;
    } },

  methods: {
    //显示弹窗
    show: function show() {var _this2 = this;
      //提交的数据置为空
      this.submission = {
        province: '',
        city: '',
        county: '',
        town: '' },

      //请求市数据
      _get_linkAddress_p.default.get_linkAddress(this, "province", this.submission, function (revert) {
        _this2.submission.province = '1';
      });

      this.newActive = true;
      var _this = this;
      setTimeout(function () {
        _this.newTransition = false;
      }, 50);
    },

    //关闭弹窗
    close: function close(v) {
      var close = v || true;
      if (close) {
        this.newTransition = true;
        var _this = this;
        setTimeout(function () {
          _this.newActive = false;

        }, 300);
      }

    },
    //选择点击事件
    choosefun: function choosefun(targetfun, targetid) {
      this[targetfun](targetid);
    },
    //省点击选择
    province_txt_click: function province_txt_click(target) {
      //区数据置为空
      this.linkAddress_area[2].info = [];
      //市、区的选择计数置为null
      this.linkAddress_area[1].current = null;
      this.linkAddress_area[2].current = null;
      var province;
      //得到点击的数据，改变样式
      for (var i = 0; i < this.linkAddress_area[0].info.length; i++) {
        if (this.linkAddress_area[0].info[i].id === target) {
          this.linkAddress_area[0].current = i;
          province = this.linkAddress_area[0].info[i].name;
          break;
        }
      }
      //用户选择
      this.user_address = {
        province: province,
        city: '',
        district: '' };

      //请求提交的数据先置为空
      this.submission = {
        province: '',
        city: '',
        county: '',
        town: '' };

      //再赋值
      this.submission.province = target;
      this.selected_address = this.user_address.province;
      //请求市数据
      _get_linkAddress_p.default.get_linkAddress(this, "city", this.submission, function (revert) {

      });
    },

    //市点击选择
    city_txt_click: function city_txt_click(target) {
      //区的选择计数置为null
      this.linkAddress_area[2].current = null;
      var city;
      //得到点击的数据，改变样式
      for (var i = 0; i < this.linkAddress_area[1].info.length; i++) {
        if (this.linkAddress_area[1].info[i].id === target) {
          this.linkAddress_area[1].current = i;
          city = this.linkAddress_area[1].info[i].name;
          break;
        }
      }
      //得到市
      this.user_address.city = city;
      //把区的信息置为空
      this.user_address.district = '';

      this.submission.city = target;

      this.selected_address = this.user_address.province + "-" + this.user_address.city;
      //请求区数据
      _get_linkAddress_p.default.get_linkAddress(this, "district", this.submission, function (revert) {

      });
    },
    //区点击选择
    district_txt_click: function district_txt_click(target) {
      var district;
      //得到点击的数据，改变样式
      for (var i = 0; i < this.linkAddress_area[2].info.length; i++) {
        if (this.linkAddress_area[2].info[i].id === target) {
          // this.district_current = i;
          this.linkAddress_area[2].current = i;
          district = this.linkAddress_area[2].info[i].name;
          break;
        }
      }
      //得到区信息
      this.user_address.district = district;
      this.selected_address = this.user_address.province + "-" + this.user_address.city + "-" + this.user_address.district;
    },

    //取消按钮
    btn_cancel: function btn_cancel() {
      this.close();

      //全部置为空
      this.submission = {
        province: '',
        city: '',
        county: '',
        town: '' };

      this.linkAddress_area[1].info = [];
      this.linkAddress_area[2].info = [];
      this.linkAddress_area[0].current = null;
      this.linkAddress_area[1].current = null;
      this.linkAddress_area[2].current = null;
      this.selected_address = '';
    },
    //确定按钮
    btn_confirm: function btn_confirm() {
      this.close();
      console.log(this.user_address);
      //可以使用vuex传值
      this.$store.commit('commit_address', this.user_address);
      this.$emit('confirmCallback');
    } } };exports.default = _default2;

/***/ }),

/***/ 114:
/*!*********************************************************************************************************!*\
  !*** E:/微信小程序/购物车测试/components/xuan-linkAddress/xuan-linkAddress.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xuan_linkAddress_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../前端备课/16.微信小程序/17.微信小程序/02.uni-app资料/素材/HBuilderX.2.4.6.20191210.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../前端备课/16.微信小程序/17.微信小程序/02.uni-app资料/素材/HBuilderX.2.4.6.20191210.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../前端备课/16.微信小程序/17.微信小程序/02.uni-app资料/素材/HBuilderX.2.4.6.20191210.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../前端备课/16.微信小程序/17.微信小程序/02.uni-app资料/素材/HBuilderX.2.4.6.20191210.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../前端备课/16.微信小程序/17.微信小程序/02.uni-app资料/素材/HBuilderX.2.4.6.20191210.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../前端备课/16.微信小程序/17.微信小程序/02.uni-app资料/素材/HBuilderX.2.4.6.20191210.full/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../前端备课/16.微信小程序/17.微信小程序/02.uni-app资料/素材/HBuilderX.2.4.6.20191210.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../前端备课/16.微信小程序/17.微信小程序/02.uni-app资料/素材/HBuilderX.2.4.6.20191210.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../前端备课/16.微信小程序/17.微信小程序/02.uni-app资料/素材/HBuilderX.2.4.6.20191210.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./xuan-linkAddress.vue?vue&type=style&index=0&lang=scss& */ 115);
/* harmony import */ var _16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xuan_linkAddress_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xuan_linkAddress_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xuan_linkAddress_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xuan_linkAddress_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_16_17_02_uni_app_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_xuan_linkAddress_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 115:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/微信小程序/购物车测试/components/xuan-linkAddress/xuan-linkAddress.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/xuan-linkAddress/xuan-linkAddress.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/xuan-linkAddress/xuan-linkAddress-create-component',
    {
        'components/xuan-linkAddress/xuan-linkAddress-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(106))
        })
    },
    [['components/xuan-linkAddress/xuan-linkAddress-create-component']]
]);
