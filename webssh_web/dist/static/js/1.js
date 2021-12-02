(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/login.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/login/login.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      customActiveKey: 'tab1',
      loginBtn: false,
      // login type: 0 email, 1 username, 2 telephone
      loginType: 0,
      isLoginError: false,
      requiredTwoStepCaptcha: false,
      stepCaptchaVisible: false,
      form: this.$form.createForm(this),
      state: {
        time: 60,
        loginBtn: false,
        loginType: 0,
        smsSendBtn: false
      }
    };
  },
  created: function created() {},
  mounted: function mounted() {
    document.body.classList.add('userLayout');
  },
  methods: {
    // handler
    handleUsernameOrEmail: function handleUsernameOrEmail(rule, value, callback) {
      var state = this.state;
      var regex = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;

      if (regex.test(value)) {
        state.loginType = 0;
      } else {
        state.loginType = 1;
      }

      callback();
    },
    handleTabClick: function handleTabClick(key) {
      this.customActiveKey = key; // this.form.resetFields()
    },
    handleSubmit: function handleSubmit(e) {
      var _this = this;

      e.preventDefault();
      this.form.validateFields(function (err, fieldsValue) {
        if (err) {
          return;
        } else {
          var data = {
            userName: fieldsValue.username,
            password: fieldsValue.password
          };

          _this.$api.user.login(data).then(function (res) {
            var userInfo = {
              userName: res.data.userName,
              userId: res.data.userId,
              token: res.data.token
            };

            _this.$store.commit('SET_USERINFO', userInfo);

            _this.state.loginBtn = true;

            _this.loginSuccess();
          });
        }
      });
    },
    getCaptcha: function getCaptcha() {},
    stepCaptchaCancel: function stepCaptchaCancel() {
      var _this2 = this;

      this.Logout().then(function () {
        _this2.loginBtn = false;
        _this2.stepCaptchaVisible = false;
      });
    },
    loginSuccess: function loginSuccess() {
      var _this3 = this;

      // 延迟 1 秒显示欢迎信息
      setTimeout(function () {
        _this3.$notification.success({
          message: '欢迎',
          description: '欢迎回来'
        });
      }, 1000);
      this.$router.push({
        path: '/index'
      });
      this.isLoginError = false;
    },
    requestFailed: function requestFailed(err) {
      this.isLoginError = true;
      this.$notification['error']({
        message: '错误',
        description: ((err.response || {}).data || {}).message || '请求出现错误，请稍后再试',
        duration: 4
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    document.body.classList.remove('userLayout');
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"5dcfb1b0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/login.vue?vue&type=template&id=a49090ce&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5dcfb1b0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/login/login.vue?vue&type=template&id=a49090ce&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "user-layout-wrapper", attrs: { id: "userLayout" } },
    [
      _c("div", { staticClass: "container" }, [
        _vm._m(0),
        _c(
          "div",
          { staticClass: "main" },
          [
            _c(
              "a-form",
              {
                ref: "formLogin",
                staticClass: "user-layout-login",
                attrs: { id: "formLogin", form: _vm.form },
                on: { submit: _vm.handleSubmit }
              },
              [
                _c(
                  "a-tabs",
                  {
                    attrs: {
                      activeKey: _vm.customActiveKey,
                      tabBarStyle: {
                        textAlign: "center",
                        borderBottom: "unset"
                      }
                    },
                    on: { change: _vm.handleTabClick }
                  },
                  [
                    _c(
                      "a-tab-pane",
                      { key: "tab1", attrs: { tab: "用户名密码登录" } },
                      [
                        _vm.isLoginError
                          ? _c("a-alert", {
                              staticStyle: { "margin-bottom": "24px" },
                              attrs: {
                                type: "error",
                                showIcon: "",
                                message: "用户名或密码错误（admin/ant.design )"
                              }
                            })
                          : _vm._e(),
                        _c(
                          "a-form-item",
                          [
                            _c(
                              "a-input",
                              {
                                directives: [
                                  {
                                    name: "decorator",
                                    rawName: "v-decorator",
                                    value: [
                                      "username",
                                      {
                                        rules: [
                                          {
                                            required: true,
                                            message: "请输入用户名"
                                          },
                                          {
                                            validator: _vm.handleUsernameOrEmail
                                          }
                                        ],
                                        validateTrigger: "change"
                                      }
                                    ],
                                    expression:
                                      "[\n                  'username',\n                  {\n                    rules: [\n                      { required: true, message: '请输入用户名' },\n                      { validator: handleUsernameOrEmail }\n                    ],\n                    validateTrigger: 'change'\n                  }\n                ]"
                                  }
                                ],
                                attrs: {
                                  size: "large",
                                  type: "text",
                                  placeholder: "用户名"
                                }
                              },
                              [
                                _c("a-icon", {
                                  style: { color: "rgba(0,0,0,.25)" },
                                  attrs: { slot: "prefix", type: "user" },
                                  slot: "prefix"
                                })
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _c(
                          "a-form-item",
                          [
                            _c(
                              "a-input-password",
                              {
                                directives: [
                                  {
                                    name: "decorator",
                                    rawName: "v-decorator",
                                    value: [
                                      "password",
                                      {
                                        rules: [
                                          {
                                            required: true,
                                            message: "请输入密码"
                                          }
                                        ],
                                        validateTrigger: "blur"
                                      }
                                    ],
                                    expression:
                                      "[\n                  'password',\n                  {\n                    rules: [{ required: true, message: '请输入密码' }],\n                    validateTrigger: 'blur'\n                  }\n                ]"
                                  }
                                ],
                                attrs: { size: "large", placeholder: "密码" }
                              },
                              [
                                _c("a-icon", {
                                  style: { color: "rgba(0,0,0,.25)" },
                                  attrs: { slot: "prefix", type: "lock" },
                                  slot: "prefix"
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _c(
                  "a-form-item",
                  { staticStyle: { "margin-top": "24px" } },
                  [
                    _c(
                      "a-button",
                      {
                        staticClass: "login-button",
                        attrs: {
                          size: "large",
                          type: "primary",
                          htmlType: "submit",
                          loading: _vm.state.loginBtn,
                          disabled: _vm.state.loginBtn
                        }
                      },
                      [_vm._v("确定")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "top" }, [
      _c("div", { staticClass: "header" }, [
        _c("a", { attrs: { href: "/" } }, [
          _c("span", { staticClass: "title" }, [_vm._v("WEBSSH")])
        ])
      ]),
      _c("div", { staticClass: "desc" }, [_vm._v("web版主机终端管理器")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/login.vue?vue&type=style&index=0&id=a49090ce&lang=less&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/login/login.vue?vue&type=style&index=0&id=a49090ce&lang=less&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#userLayout.user-layout-wrapper[data-v-a49090ce] {\n  height: 100%;\n}\n#userLayout.user-layout-wrapper .container[data-v-a49090ce] {\n  width: 100%;\n  min-height: 100%;\n  background-size: 100%;\n  padding: 110px 0 144px;\n  position: relative;\n}\n#userLayout.user-layout-wrapper .container a[data-v-a49090ce] {\n  text-decoration: none;\n}\n#userLayout.user-layout-wrapper .container .top[data-v-a49090ce] {\n  text-align: center;\n}\n#userLayout.user-layout-wrapper .container .top .header[data-v-a49090ce] {\n  height: 44px;\n  line-height: 44px;\n}\n#userLayout.user-layout-wrapper .container .top .header .badge[data-v-a49090ce] {\n  position: absolute;\n  display: inline-block;\n  line-height: 1;\n  vertical-align: middle;\n  margin-left: -12px;\n  margin-top: -10px;\n  opacity: 0.8;\n}\n#userLayout.user-layout-wrapper .container .top .header .logo[data-v-a49090ce] {\n  height: 44px;\n  vertical-align: top;\n  margin-right: 16px;\n  border-style: none;\n}\n#userLayout.user-layout-wrapper .container .top .header .title[data-v-a49090ce] {\n  font-size: 33px;\n  color: rgba(0, 0, 0, 0.85);\n  font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;\n  font-weight: 600;\n  position: relative;\n  top: 2px;\n}\n#userLayout.user-layout-wrapper .container .top .desc[data-v-a49090ce] {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.45);\n  margin-top: 12px;\n  margin-bottom: 40px;\n}\n#userLayout.user-layout-wrapper .container .main[data-v-a49090ce] {\n  min-width: 260px;\n  width: 368px;\n  margin: 0 auto;\n}\n#userLayout.user-layout-wrapper .container .main .user-layout-login label[data-v-a49090ce] {\n  font-size: 14px;\n}\n#userLayout.user-layout-wrapper .container .main .user-layout-login .getCaptcha[data-v-a49090ce] {\n  display: block;\n  width: 100%;\n  height: 40px;\n}\n#userLayout.user-layout-wrapper .container .main .user-layout-login .forge-password[data-v-a49090ce] {\n  font-size: 14px;\n}\n#userLayout.user-layout-wrapper .container .main .user-layout-login button.login-button[data-v-a49090ce] {\n  padding: 0 15px;\n  font-size: 16px;\n  height: 40px;\n  width: 100%;\n}\n#userLayout.user-layout-wrapper .container .main .user-layout-login .user-login-other[data-v-a49090ce] {\n  text-align: left;\n  margin-top: 24px;\n  line-height: 22px;\n}\n#userLayout.user-layout-wrapper .container .main .user-layout-login .user-login-other .item-icon[data-v-a49090ce] {\n  font-size: 24px;\n  color: rgba(0, 0, 0, 0.2);\n  margin-left: 16px;\n  vertical-align: middle;\n  cursor: pointer;\n  transition: color 0.3s;\n}\n#userLayout.user-layout-wrapper .container .main .user-layout-login .user-login-other .item-icon[data-v-a49090ce]:hover {\n  color: #1890ff;\n}\n#userLayout.user-layout-wrapper .container .main .user-layout-login .user-login-other .register[data-v-a49090ce] {\n  float: right;\n}\n#userLayout.user-layout-wrapper .container .footer[data-v-a49090ce] {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  padding: 0 16px;\n  margin: 48px 0 24px;\n  text-align: center;\n}\n#userLayout.user-layout-wrapper .container .footer .links[data-v-a49090ce] {\n  margin-bottom: 8px;\n  font-size: 14px;\n}\n#userLayout.user-layout-wrapper .container .footer .links a[data-v-a49090ce] {\n  color: rgba(0, 0, 0, 0.45);\n  transition: all 0.3s;\n}\n#userLayout.user-layout-wrapper .container .footer .links a[data-v-a49090ce]:not(:last-child) {\n  margin-right: 40px;\n}\n#userLayout.user-layout-wrapper .container .footer .copyright[data-v-a49090ce] {\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 14px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/login.vue?vue&type=style&index=0&id=a49090ce&lang=less&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/login/login.vue?vue&type=style&index=0&id=a49090ce&lang=less&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--10-oneOf-1-2!../../../node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=style&index=0&id=a49090ce&lang=less&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/login.vue?vue&type=style&index=0&id=a49090ce&lang=less&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("0ea9f68a", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/views/login/login.vue":
/*!***********************************!*\
  !*** ./src/views/login/login.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_a49090ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=a49090ce&scoped=true& */ "./src/views/login/login.vue?vue&type=template&id=a49090ce&scoped=true&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./src/views/login/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _login_vue_vue_type_style_index_0_id_a49090ce_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&id=a49090ce&lang=less&scoped=true& */ "./src/views/login/login.vue?vue&type=style&index=0&id=a49090ce&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_a49090ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_a49090ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a49090ce",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/login/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/login/login.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/views/login/login.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/login/login.vue?vue&type=style&index=0&id=a49090ce&lang=less&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./src/views/login/login.vue?vue&type=style&index=0&id=a49090ce&lang=less&scoped=true& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_a49090ce_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--10-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--10-oneOf-1-2!../../../node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=style&index=0&id=a49090ce&lang=less&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/login.vue?vue&type=style&index=0&id=a49090ce&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_a49090ce_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_a49090ce_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_a49090ce_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_a49090ce_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_a49090ce_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/views/login/login.vue?vue&type=template&id=a49090ce&scoped=true&":
/*!******************************************************************************!*\
  !*** ./src/views/login/login.vue?vue&type=template&id=a49090ce&scoped=true& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_5dcfb1b0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_a49090ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5dcfb1b0-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=a49090ce&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"5dcfb1b0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/login.vue?vue&type=template&id=a49090ce&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_5dcfb1b0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_a49090ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_5dcfb1b0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_a49090ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2xvZ2luL2xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbG9naW4vbG9naW4udnVlP2UyNWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2xvZ2luL2xvZ2luLnZ1ZT9jMWIxIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9sb2dpbi9sb2dpbi52dWU/YWIxOCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbG9naW4vbG9naW4udnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9sb2dpbi9sb2dpbi52dWU/Y2Q0NCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbG9naW4vbG9naW4udnVlPzExYzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2xvZ2luL2xvZ2luLnZ1ZT9jNDZhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnR0E7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBLHFCQUZBO0FBR0E7QUFDQSxrQkFKQTtBQUtBLHlCQUxBO0FBTUEsbUNBTkE7QUFPQSwrQkFQQTtBQVFBLHVDQVJBO0FBU0E7QUFDQSxnQkFEQTtBQUVBLHVCQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUpBO0FBVEE7QUFnQkEsR0FsQkE7QUFtQkEsU0FuQkEscUJBbUJBLEVBbkJBO0FBb0JBLFNBcEJBLHFCQW9CQTtBQUNBO0FBQ0EsR0F0QkE7QUF1QkE7QUFDQTtBQUNBLHlCQUZBLGlDQUVBLElBRkEsRUFFQSxLQUZBLEVBRUEsUUFGQSxFQUVBO0FBQUEsVUFDQSxLQURBLEdBQ0EsSUFEQSxDQUNBLEtBREE7QUFFQTs7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLEtBWEE7QUFZQSxr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QUFjLG9CQUFvQix3QkFBd0IsdUJBQXVCLEdBQUcsOEVBQThFLHVCQUF1QixvQkFBb0IsR0FBRyxnRkFBZ0YsK0JBQStCLHlCQUF5QixHQUFHLGlHQUFpRyx1QkFBdUIsR0FBRyxrRkFBa0YsK0JBQStCLG9CQUFvQixHQUFHO0FBQy8vRztBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyx5eEJBQTBjO0FBQ2hlLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsNkhBQWdFO0FBQ2xGLDhDQUE4QyxxQ0FBcUM7QUFDbkY7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNWZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUcxRjtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUE4UixDQUFnQixzVUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FsVDtBQUFBO0FBQUE7QUFBQTtBQUE4aEIsQ0FBZ0Isb2lCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL2pzLzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgaWQ9XCJ1c2VyTGF5b3V0XCIgY2xhc3M9XCJ1c2VyLWxheW91dC13cmFwcGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRvcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGVcIj5XRUJTU0g8L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NcIj53ZWLniYjkuLvmnLrnu4jnq6/nrqHnkIblmag8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICAgICAgPGEtZm9ybVxuICAgICAgICAgIGlkPVwiZm9ybUxvZ2luXCJcbiAgICAgICAgICBjbGFzcz1cInVzZXItbGF5b3V0LWxvZ2luXCJcbiAgICAgICAgICByZWY9XCJmb3JtTG9naW5cIlxuICAgICAgICAgIDpmb3JtPVwiZm9ybVwiXG4gICAgICAgICAgQHN1Ym1pdD1cImhhbmRsZVN1Ym1pdFwiXG4gICAgICAgID5cbiAgICAgICAgICA8YS10YWJzXG4gICAgICAgICAgICA6YWN0aXZlS2V5PVwiY3VzdG9tQWN0aXZlS2V5XCJcbiAgICAgICAgICAgIDp0YWJCYXJTdHlsZT1cInsgdGV4dEFsaWduOiAnY2VudGVyJywgYm9yZGVyQm90dG9tOiAndW5zZXQnIH1cIlxuICAgICAgICAgICAgQGNoYW5nZT1cImhhbmRsZVRhYkNsaWNrXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YS10YWItcGFuZSBrZXk9XCJ0YWIxXCIgdGFiPVwi55So5oi35ZCN5a+G56CB55m75b2VXCI+XG4gICAgICAgICAgICAgIDxhLWFsZXJ0XG4gICAgICAgICAgICAgICAgdi1pZj1cImlzTG9naW5FcnJvclwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImVycm9yXCJcbiAgICAgICAgICAgICAgICBzaG93SWNvblxuICAgICAgICAgICAgICAgIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMjRweDtcIlxuICAgICAgICAgICAgICAgIG1lc3NhZ2U9XCLnlKjmiLflkI3miJblr4bnoIHplJnor6/vvIhhZG1pbi9hbnQuZGVzaWduIClcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8YS1mb3JtLWl0ZW0+XG4gICAgICAgICAgICAgICAgPGEtaW5wdXRcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIueUqOaIt+WQjVwiXG4gICAgICAgICAgICAgICAgICB2LWRlY29yYXRvcj1cIltcbiAgICAgICAgICAgICAgICAgICAgJ3VzZXJuYW1lJyxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn6K+36L6T5YWl55So5oi35ZCNJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyB2YWxpZGF0b3I6IGhhbmRsZVVzZXJuYW1lT3JFbWFpbCB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZVRyaWdnZXI6ICdjaGFuZ2UnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxhLWljb25cbiAgICAgICAgICAgICAgICAgICAgc2xvdD1cInByZWZpeFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ1c2VyXCJcbiAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwieyBjb2xvcjogJ3JnYmEoMCwwLDAsLjI1KScgfVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvYS1pbnB1dD5cbiAgICAgICAgICAgICAgPC9hLWZvcm0taXRlbT5cblxuICAgICAgICAgICAgICA8YS1mb3JtLWl0ZW0+XG4gICAgICAgICAgICAgICAgPGEtaW5wdXQtcGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuWvhueggVwiXG4gICAgICAgICAgICAgICAgICB2LWRlY29yYXRvcj1cIltcbiAgICAgICAgICAgICAgICAgICAgJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+ivt+i+k+WFpeWvhueggScgfV0sXG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVUcmlnZ2VyOiAnYmx1cidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGEtaWNvblxuICAgICAgICAgICAgICAgICAgICBzbG90PVwicHJlZml4XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImxvY2tcIlxuICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7IGNvbG9yOiAncmdiYSgwLDAsMCwuMjUpJyB9XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9hLWlucHV0LXBhc3N3b3JkPlxuICAgICAgICAgICAgICA8L2EtZm9ybS1pdGVtPlxuICAgICAgICAgICAgPC9hLXRhYi1wYW5lPlxuICAgICAgICAgIDwvYS10YWJzPlxuXG4gICAgICAgICAgPGEtZm9ybS1pdGVtIHN0eWxlPVwibWFyZ2luLXRvcDoyNHB4XCI+XG4gICAgICAgICAgICA8YS1idXR0b25cbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwibG9naW4tYnV0dG9uXCJcbiAgICAgICAgICAgICAgOmxvYWRpbmc9XCJzdGF0ZS5sb2dpbkJ0blwiXG4gICAgICAgICAgICAgIDpkaXNhYmxlZD1cInN0YXRlLmxvZ2luQnRuXCJcbiAgICAgICAgICAgICAgPuehruWumjwvYS1idXR0b25cbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L2EtZm9ybS1pdGVtPlxuICAgICAgICA8L2EtZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXN0b21BY3RpdmVLZXk6ICd0YWIxJyxcbiAgICAgIGxvZ2luQnRuOiBmYWxzZSxcbiAgICAgIC8vIGxvZ2luIHR5cGU6IDAgZW1haWwsIDEgdXNlcm5hbWUsIDIgdGVsZXBob25lXG4gICAgICBsb2dpblR5cGU6IDAsXG4gICAgICBpc0xvZ2luRXJyb3I6IGZhbHNlLFxuICAgICAgcmVxdWlyZWRUd29TdGVwQ2FwdGNoYTogZmFsc2UsXG4gICAgICBzdGVwQ2FwdGNoYVZpc2libGU6IGZhbHNlLFxuICAgICAgZm9ybTogdGhpcy4kZm9ybS5jcmVhdGVGb3JtKHRoaXMpLFxuICAgICAgc3RhdGU6IHtcbiAgICAgICAgdGltZTogNjAsXG4gICAgICAgIGxvZ2luQnRuOiBmYWxzZSxcbiAgICAgICAgbG9naW5UeXBlOiAwLFxuICAgICAgICBzbXNTZW5kQnRuOiBmYWxzZVxuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZWQgKCkge30sXG4gIG1vdW50ZWQgKCkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgndXNlckxheW91dCcpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLy8gaGFuZGxlclxuICAgIGhhbmRsZVVzZXJuYW1lT3JFbWFpbCAocnVsZSwgdmFsdWUsIGNhbGxiYWNrKSB7XG4gICAgICBjb25zdCB7IHN0YXRlIH0gPSB0aGlzO1xuICAgICAgY29uc3QgcmVnZXggPSAvXihbYS16QS1aMC05Xy1dKStAKFthLXpBLVowLTlfLV0pKygoXFwuW2EtekEtWjAtOV8tXXsyLDN9KXsxLDJ9KSQvO1xuICAgICAgaWYgKHJlZ2V4LnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHN0YXRlLmxvZ2luVHlwZSA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5sb2dpblR5cGUgPSAxO1xuICAgICAgfVxuICAgICAgY2FsbGJhY2soKTtcbiAgICB9LFxuICAgIGhhbmRsZVRhYkNsaWNrIChrZXkpIHtcbiAgICAgIHRoaXMuY3VzdG9tQWN0aXZlS2V5ID0ga2V5O1xuICAgICAgLy8gdGhpcy5mb3JtLnJlc2V0RmllbGRzKClcbiAgICB9LFxuICAgIGhhbmRsZVN1Ym1pdCAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5mb3JtLnZhbGlkYXRlRmllbGRzKChlcnIsIGZpZWxkc1ZhbHVlKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICB1c2VyTmFtZTogZmllbGRzVmFsdWUudXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDogZmllbGRzVmFsdWUucGFzc3dvcmRcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuJGFwaS51c2VyLmxvZ2luKGRhdGEpLnRoZW4ocmVzPT57XG4gICAgICAgICAgICBsZXQgdXNlckluZm8gPSB7XG4gICAgICAgICAgICAgIHVzZXJOYW1lOiByZXMuZGF0YS51c2VyTmFtZSxcbiAgICAgICAgICAgICAgdXNlcklkOiByZXMuZGF0YS51c2VySWQsXG4gICAgICAgICAgICAgIHRva2VuOiByZXMuZGF0YS50b2tlblxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX1VTRVJJTkZPJywgdXNlckluZm8pO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5sb2dpbkJ0biA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxvZ2luU3VjY2VzcygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldENhcHRjaGEgKCkge30sXG4gICAgc3RlcENhcHRjaGFDYW5jZWwgKCkge1xuICAgICAgdGhpcy5Mb2dvdXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2dpbkJ0biA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0ZXBDYXB0Y2hhVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBsb2dpblN1Y2Nlc3MgKCkge1xuICAgICAgLy8g5bu26L+fIDEg56eS5pi+56S65qyi6L+O5L+h5oGvXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy4kbm90aWZpY2F0aW9uLnN1Y2Nlc3Moe1xuICAgICAgICAgIG1lc3NhZ2U6ICfmrKLov44nLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAn5qyi6L+O5Zue5p2lJ1xuICAgICAgICB9KTtcbiAgICAgIH0sIDEwMDApO1xuICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBwYXRoOiAnL2luZGV4JyB9KTtcbiAgICAgIHRoaXMuaXNMb2dpbkVycm9yID0gZmFsc2U7XG4gICAgfSxcbiAgICByZXF1ZXN0RmFpbGVkIChlcnIpIHtcbiAgICAgIHRoaXMuaXNMb2dpbkVycm9yID0gdHJ1ZTtcbiAgICAgIHRoaXMuJG5vdGlmaWNhdGlvblsnZXJyb3InXSh7XG4gICAgICAgIG1lc3NhZ2U6ICfplJnor68nLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAoKGVyci5yZXNwb25zZSB8fCB7fSkuZGF0YSB8fCB7fSkubWVzc2FnZSB8fFxuICAgICAgICAgICfor7fmsYLlh7rnjrDplJnor6/vvIzor7fnqI3lkI7lho3or5UnLFxuICAgICAgICBkdXJhdGlvbjogNFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBiZWZvcmVEZXN0cm95ICgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3VzZXJMYXlvdXQnKTtcbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cImxlc3NcIiBzY29wZWQ+XG4jdXNlckxheW91dC51c2VyLWxheW91dC13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIHBhZGRpbmc6IDExMHB4IDAgMTQ0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuXG4gICAgLnRvcCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIC5oZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuXG4gICAgICAgIC5iYWRnZSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTJweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIH1cblxuICAgICAgICAubG9nbyB7XG4gICAgICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAzM3B4O1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBBdmVuaXIsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiAycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5kZXNjIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWFpbiB7XG4gICAgICBtaW4td2lkdGg6IDI2MHB4O1xuICAgICAgd2lkdGg6IDM2OHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAgIC51c2VyLWxheW91dC1sb2dpbiB7XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZ2V0Q2FwdGNoYSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcmdlLXBhc3N3b3JkIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ubG9naW4tYnV0dG9uIHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC51c2VyLWxvZ2luLW90aGVyIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgICAgICAgICAuaXRlbS1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICMxODkwZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlZ2lzdGVyIHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9vdGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgbWFyZ2luOiA0OHB4IDAgMjRweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgLmxpbmtzIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuY29weXJpZ2h0IHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbjwvc3R5bGU+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJ1c2VyLWxheW91dC13cmFwcGVyXCIsIGF0dHJzOiB7IGlkOiBcInVzZXJMYXlvdXRcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1haW5cIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImEtZm9ybVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVmOiBcImZvcm1Mb2dpblwiLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInVzZXItbGF5b3V0LWxvZ2luXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiZm9ybUxvZ2luXCIsIGZvcm06IF92bS5mb3JtIH0sXG4gICAgICAgICAgICAgICAgb246IHsgc3VibWl0OiBfdm0uaGFuZGxlU3VibWl0IH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJhLXRhYnNcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVLZXk6IF92bS5jdXN0b21BY3RpdmVLZXksXG4gICAgICAgICAgICAgICAgICAgICAgdGFiQmFyU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCJ1bnNldFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5oYW5kbGVUYWJDbGljayB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImEtdGFiLXBhbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGtleTogXCJ0YWIxXCIsIGF0dHJzOiB7IHRhYjogXCLnlKjmiLflkI3lr4bnoIHnmbvlvZVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzTG9naW5FcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYS1hbGVydFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1ib3R0b21cIjogXCIyNHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0ljb246IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi55So5oi35ZCN5oiW5a+G56CB6ZSZ6K+v77yIYWRtaW4vYW50LmRlc2lnbiApXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYS1mb3JtLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImRlY29yYXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LWRlY29yYXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2VybmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi6K+36L6T5YWl55So5oi35ZCNXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogX3ZtLmhhbmRsZVVzZXJuYW1lT3JFbWFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVUcmlnZ2VyOiBcImNoYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIltcXG4gICAgICAgICAgICAgICAgICAndXNlcm5hbWUnLFxcbiAgICAgICAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbXFxuICAgICAgICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfor7fovpPlhaXnlKjmiLflkI0nIH0sXFxuICAgICAgICAgICAgICAgICAgICAgIHsgdmFsaWRhdG9yOiBoYW5kbGVVc2VybmFtZU9yRW1haWwgfVxcbiAgICAgICAgICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlVHJpZ2dlcjogJ2NoYW5nZSdcXG4gICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcImxhcmdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi55So5oi35ZCNXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiBcInJnYmEoMCwwLDAsLjI1KVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJwcmVmaXhcIiwgdHlwZTogXCJ1c2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcInByZWZpeFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImEtZm9ybS1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYS1pbnB1dC1wYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJkZWNvcmF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1kZWNvcmF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuivt+i+k+WFpeWvhueggVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZVRyaWdnZXI6IFwiYmx1clwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIltcXG4gICAgICAgICAgICAgICAgICAncGFzc3dvcmQnLFxcbiAgICAgICAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+ivt+i+k+WFpeWvhueggScgfV0sXFxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZVRyaWdnZXI6ICdibHVyJ1xcbiAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzaXplOiBcImxhcmdlXCIsIHBsYWNlaG9sZGVyOiBcIuWvhueggVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogXCJyZ2JhKDAsMCwwLC4yNSlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwicHJlZml4XCIsIHR5cGU6IFwibG9ja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJwcmVmaXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJhLWZvcm0taXRlbVwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi10b3BcIjogXCIyNHB4XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImEtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9naW4tYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcImxhcmdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sVHlwZTogXCJzdWJtaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLnN0YXRlLmxvZ2luQnRuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLnN0YXRlLmxvZ2luQnRuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi56Gu5a6aXCIpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3BcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRlclwiIH0sIFtcbiAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCIvXCIgfSB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbX3ZtLl92KFwiV0VCU1NIXCIpXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkZXNjXCIgfSwgW192bS5fdihcIndlYueJiOS4u+acuue7iOerr+euoeeQhuWZqFwiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI3VzZXJMYXlvdXQudXNlci1sYXlvdXQtd3JhcHBlcltkYXRhLXYtYTQ5MDkwY2VdIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuI3VzZXJMYXlvdXQudXNlci1sYXlvdXQtd3JhcHBlciAuY29udGFpbmVyW2RhdGEtdi1hNDkwOTBjZV0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgcGFkZGluZzogMTEwcHggMCAxNDRweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuI3VzZXJMYXlvdXQudXNlci1sYXlvdXQtd3JhcHBlciAuY29udGFpbmVyIGFbZGF0YS12LWE0OTA5MGNlXSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbiN1c2VyTGF5b3V0LnVzZXItbGF5b3V0LXdyYXBwZXIgLmNvbnRhaW5lciAudG9wW2RhdGEtdi1hNDkwOTBjZV0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jdXNlckxheW91dC51c2VyLWxheW91dC13cmFwcGVyIC5jb250YWluZXIgLnRvcCAuaGVhZGVyW2RhdGEtdi1hNDkwOTBjZV0ge1xcbiAgaGVpZ2h0OiA0NHB4O1xcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XFxufVxcbiN1c2VyTGF5b3V0LnVzZXItbGF5b3V0LXdyYXBwZXIgLmNvbnRhaW5lciAudG9wIC5oZWFkZXIgLmJhZGdlW2RhdGEtdi1hNDkwOTBjZV0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xcbiAgbWFyZ2luLXRvcDogLTEwcHg7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcbiN1c2VyTGF5b3V0LnVzZXItbGF5b3V0LXdyYXBwZXIgLmNvbnRhaW5lciAudG9wIC5oZWFkZXIgLmxvZ29bZGF0YS12LWE0OTA5MGNlXSB7XFxuICBoZWlnaHQ6IDQ0cHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG4jdXNlckxheW91dC51c2VyLWxheW91dC13cmFwcGVyIC5jb250YWluZXIgLnRvcCAuaGVhZGVyIC50aXRsZVtkYXRhLXYtYTQ5MDkwY2VdIHtcXG4gIGZvbnQtc2l6ZTogMzNweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xcbiAgZm9udC1mYW1pbHk6IEF2ZW5pciwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDJweDtcXG59XFxuI3VzZXJMYXlvdXQudXNlci1sYXlvdXQtd3JhcHBlciAuY29udGFpbmVyIC50b3AgLmRlc2NbZGF0YS12LWE0OTA5MGNlXSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG4jdXNlckxheW91dC51c2VyLWxheW91dC13cmFwcGVyIC5jb250YWluZXIgLm1haW5bZGF0YS12LWE0OTA5MGNlXSB7XFxuICBtaW4td2lkdGg6IDI2MHB4O1xcbiAgd2lkdGg6IDM2OHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbiN1c2VyTGF5b3V0LnVzZXItbGF5b3V0LXdyYXBwZXIgLmNvbnRhaW5lciAubWFpbiAudXNlci1sYXlvdXQtbG9naW4gbGFiZWxbZGF0YS12LWE0OTA5MGNlXSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbiN1c2VyTGF5b3V0LnVzZXItbGF5b3V0LXdyYXBwZXIgLmNvbnRhaW5lciAubWFpbiAudXNlci1sYXlvdXQtbG9naW4gLmdldENhcHRjaGFbZGF0YS12LWE0OTA5MGNlXSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG4jdXNlckxheW91dC51c2VyLWxheW91dC13cmFwcGVyIC5jb250YWluZXIgLm1haW4gLnVzZXItbGF5b3V0LWxvZ2luIC5mb3JnZS1wYXNzd29yZFtkYXRhLXYtYTQ5MDkwY2VdIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuI3VzZXJMYXlvdXQudXNlci1sYXlvdXQtd3JhcHBlciAuY29udGFpbmVyIC5tYWluIC51c2VyLWxheW91dC1sb2dpbiBidXR0b24ubG9naW4tYnV0dG9uW2RhdGEtdi1hNDkwOTBjZV0ge1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbiN1c2VyTGF5b3V0LnVzZXItbGF5b3V0LXdyYXBwZXIgLmNvbnRhaW5lciAubWFpbiAudXNlci1sYXlvdXQtbG9naW4gLnVzZXItbG9naW4tb3RoZXJbZGF0YS12LWE0OTA5MGNlXSB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luLXRvcDogMjRweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbn1cXG4jdXNlckxheW91dC51c2VyLWxheW91dC13cmFwcGVyIC5jb250YWluZXIgLm1haW4gLnVzZXItbGF5b3V0LWxvZ2luIC51c2VyLWxvZ2luLW90aGVyIC5pdGVtLWljb25bZGF0YS12LWE0OTA5MGNlXSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcXG59XFxuI3VzZXJMYXlvdXQudXNlci1sYXlvdXQtd3JhcHBlciAuY29udGFpbmVyIC5tYWluIC51c2VyLWxheW91dC1sb2dpbiAudXNlci1sb2dpbi1vdGhlciAuaXRlbS1pY29uW2RhdGEtdi1hNDkwOTBjZV06aG92ZXIge1xcbiAgY29sb3I6ICMxODkwZmY7XFxufVxcbiN1c2VyTGF5b3V0LnVzZXItbGF5b3V0LXdyYXBwZXIgLmNvbnRhaW5lciAubWFpbiAudXNlci1sYXlvdXQtbG9naW4gLnVzZXItbG9naW4tb3RoZXIgLnJlZ2lzdGVyW2RhdGEtdi1hNDkwOTBjZV0ge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG4jdXNlckxheW91dC51c2VyLWxheW91dC13cmFwcGVyIC5jb250YWluZXIgLmZvb3RlcltkYXRhLXYtYTQ5MDkwY2VdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm90dG9tOiAwO1xcbiAgcGFkZGluZzogMCAxNnB4O1xcbiAgbWFyZ2luOiA0OHB4IDAgMjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI3VzZXJMYXlvdXQudXNlci1sYXlvdXQtd3JhcHBlciAuY29udGFpbmVyIC5mb290ZXIgLmxpbmtzW2RhdGEtdi1hNDkwOTBjZV0ge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4jdXNlckxheW91dC51c2VyLWxheW91dC13cmFwcGVyIC5jb250YWluZXIgLmZvb3RlciAubGlua3MgYVtkYXRhLXYtYTQ5MDkwY2VdIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcbiN1c2VyTGF5b3V0LnVzZXItbGF5b3V0LXdyYXBwZXIgLmNvbnRhaW5lciAuZm9vdGVyIC5saW5rcyBhW2RhdGEtdi1hNDkwOTBjZV06bm90KDpsYXN0LWNoaWxkKSB7XFxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxufVxcbiN1c2VyTGF5b3V0LnVzZXItbGF5b3V0LXdyYXBwZXIgLmNvbnRhaW5lciAuZm9vdGVyIC5jb3B5cmlnaHRbZGF0YS12LWE0OTA5MGNlXSB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sb2dpbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hNDkwOTBjZSZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjBlYTlmNjhhXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTAtb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTAtb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9naW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTQ5MDkwY2UmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sb2dpbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hNDkwOTBjZSZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNDkwOTBjZSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9sb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9sb2dpbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hNDkwOTBjZSZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImE0OTA5MGNlXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3ZhbnRlcmMvdGVzdC93ZWJzc2gvd2Vic3NoX3dlYi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdhNDkwOTBjZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdhNDkwOTBjZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdhNDkwOTBjZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE0OTA5MGNlJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2E0OTA5MGNlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvbG9naW4vbG9naW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEyLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMi0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTAtb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTAtb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9naW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTQ5MDkwY2UmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sb2dpbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hNDkwOTBjZSZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI1ZGNmYjFiMC12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNDkwOTBjZSZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=