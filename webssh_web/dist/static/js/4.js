(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/hostManage/hostList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/hostManage/hostList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
      modalTitle: '新增主机',
      isEdit: false,
      hostForm: {
        hostName: '',
        hostIP: ''
      },
      form: this.$form.createForm(this, {
        name: 'createForm'
      }),
      createForm: {
        merchants: '',
        hostName: '',
        rootName: '',
        ip: '',
        port: '',
        configure: '',
        remarks: ''
      },
      host_password: '',
      updateRowId: '',
      tableData: [],
      addVisible: false,
      passwordVisible: false,
      addconfirmLoading: false,
      sshVerifyLoading: false,
      tableLoading: false,
      merchantsList: [{
        name: '阿里云',
        code: 'm_001'
      }, {
        name: '腾讯云',
        code: 'm_002'
      }, {
        name: '百度云',
        code: 'm_003'
      }, {
        name: '华为云',
        code: 'm_004'
      }, {
        name: '网易云',
        code: 'm_005'
      }, {
        name: '其他',
        code: 'm_006'
      }],
      selectHostObj: {}
    };
  },
  created: function created() {
    this.searchList();
  },
  methods: {
    linkhost: function linkhost(row) {
      this.host_password = '';
      this.selectHostObj = row;
      this.passwordVisible = true;
    },
    updateHost: function updateHost() {
      var _this2 = this;

      var data = {
        id: this.updateRowId,
        merchants: this.createForm.merchants,
        hostName: this.createForm.hostName,
        rootName: this.createForm.rootName,
        ip: this.createForm.ip,
        port: this.createForm.port,
        configure: this.createForm.configure,
        remarks: this.createForm.remarks,
        password: this.createForm.password
      };
      this.$api.servers.updateHost(data).then(function () {
        _this2.$message.success('编辑成功');

        _this2.addVisible = false;
        _this2.addconfirmLoading = false;

        _this2.searchList();

        _this2.form.resetFields();

        _this2.createForm.password = '';
        _this2.passwordVisible = false;
      }).catch(function () {
        _this2.addconfirmLoading = false;
      });
    },
    editHost: function editHost(row) {
      var _this3 = this;

      this.modalTitle = '编辑主机';
      this.isEdit = true;
      this.addVisible = true;
      this.updateRowId = row.id;
      this.createForm.merchants = row.merchants;
      this.createForm.hostName = row.hostName;
      this.createForm.rootName = row.rootName;
      this.createForm.ip = row.hostIp;
      this.createForm.port = row.port;
      this.createForm.configure = row.configure;
      this.createForm.remarks = row.remarks;
      this.$nextTick(function () {
        _this3.form.setFieldsValue({
          merchants: row.merchants,
          hostName: row.hostName,
          rootName: row.rootName,
          ip: row.hostIp,
          port: row.port,
          configure: row.configure,
          remarks: row.remarks
        });
      });
    },
    deleteHost: function deleteHost(id) {
      var _this = this;

      this.$confirm({
        title: '确定要删除该主机吗?',
        okText: '确认',
        cancelText: '取消',
        onOk: function onOk() {
          var data = {
            id: id
          };

          _this.$api.servers.deleteHost(data).then(function () {
            _this.$message.success('删除成功！');

            _this.searchList();
          });
        },
        onCancel: function onCancel() {
          console.log('Cancel');
        }
      });
    },
    searchList: function searchList() {
      var _this4 = this;

      this.tableLoading = true;
      this.$api.servers.getHostList(this.hostForm).then(function (res) {
        _this4.tableData = res.data;
        _this4.tableLoading = false;
      });
    },
    verifyHost: function verifyHost() {
      var _this5 = this;

      var _this = this;

      var data = {
        sshObj: {
          host: this.selectHostObj.hostIp,
          port: this.selectHostObj.port,
          username: this.selectHostObj.rootName,
          password: this.host_password
        }
      };
      this.$api.servers.SSHVerify(data).then(function (res) {
        if (res.data) {
          _this5.$message.success('验证成功！');

          _this5.sshVerifyLoading = false;
          _this5.passwordVisible = false;
          setTimeout(function () {
            var routeUrl = _this.$router.resolve({
              path: "/webssh/".concat(_this.selectHostObj.id)
            });

            window.open(routeUrl.href, '_blank');
          }, 1000);
        } else {
          _this5.$message.warning('验证失败，请确认密码是否正确！');

          _this5.sshVerifyLoading = false;
        }
      }).catch(function () {
        _this5.sshVerifyLoading = false;
      });
    },
    addHost: function addHost() {
      this.modalTitle = '新增主机';
      this.addVisible = true;
      this.isEdit = false;
    },
    addhandleOk: function addhandleOk() {
      var _this6 = this;

      this.form.validateFields(function (err, fieldsValue) {
        if (!err) {
          _this6.createForm.merchants = fieldsValue.merchants;
          _this6.createForm.hostName = fieldsValue.hostName;
          _this6.createForm.rootName = fieldsValue.rootName;
          _this6.createForm.ip = fieldsValue.ip;
          _this6.createForm.port = fieldsValue.port;
          _this6.createForm.configure = fieldsValue.configure ? fieldsValue.configure : '';
          _this6.createForm.remarks = fieldsValue.remarks ? fieldsValue.remarks : '';
          _this6.addconfirmLoading = true;

          if (_this6.isEdit) {
            _this6.updateHost();
          } else {
            _this6.$api.servers.createHost(_this6.createForm).then(function () {
              _this6.addVisible = false;
              _this6.addconfirmLoading = false;

              _this6.searchList();

              _this6.form.resetFields();
            }).catch(function () {
              _this6.addconfirmLoading = false;
            });
          }
        } else {
          _this6.addconfirmLoading = false;
        }
      });
    },
    pdwVisibleCancel: function pdwVisibleCancel() {
      this.passwordVisible = false;
    },
    addhandleCancel: function addhandleCancel() {
      this.addVisible = false;
      this.form.resetFields();
      this.createForm.password = '';
    },
    pwdVisibleHandleOk: function pwdVisibleHandleOk() {
      if (!this.host_password) {
        this.$message.warning('请输入登录密码！');
      } else {
        this.sshVerifyLoading = true;
        this.verifyHost();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"5dcfb1b0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/hostManage/hostList.vue?vue&type=template&id=a82f7244&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5dcfb1b0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/hostManage/hostList.vue?vue&type=template&id=a82f7244&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "a-card",
        [
          _c(
            "a-form",
            {
              attrs: { "label-col": { span: 5 }, "wrapper-col": { span: 12 } }
            },
            [
              _c(
                "a-row",
                [
                  _c(
                    "a-col",
                    { attrs: { span: 8 } },
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "主机名称" } },
                        [
                          _c("a-input", {
                            model: {
                              value: _vm.hostForm.hostName,
                              callback: function($$v) {
                                _vm.$set(_vm.hostForm, "hostName", $$v)
                              },
                              expression: "hostForm.hostName"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "a-col",
                    { attrs: { span: 8 } },
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "连接IP" } },
                        [
                          _c("a-input", {
                            model: {
                              value: _vm.hostForm.hostIP,
                              callback: function($$v) {
                                _vm.$set(_vm.hostForm, "hostIP", $$v)
                              },
                              expression: "hostForm.hostIP"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "a-col",
                    { attrs: { span: 8 } },
                    [
                      _c(
                        "a-button",
                        {
                          attrs: { type: "primary" },
                          on: { click: _vm.searchList }
                        },
                        [_vm._v("搜索")]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "a-row",
                [
                  _c(
                    "a-col",
                    { attrs: { span: 8 } },
                    [
                      _c(
                        "a-button",
                        {
                          attrs: { type: "primary" },
                          on: { click: _vm.addHost }
                        },
                        [_vm._v("新增")]
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
            "a-table",
            {
              staticStyle: { "margin-top": "20px" },
              attrs: {
                "data-source": _vm.tableData,
                rowKey: "id",
                loading: _vm.tableLoading
              }
            },
            [
              _c("a-table-column", {
                key: "merchants",
                attrs: { title: "主机供应商", "data-index": "merchants" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(text) {
                      return [
                        _c("span", [
                          _vm._v(
                            _vm._s(
                              _vm.merchantsList.filter(function(r) {
                                return r.code === text
                              })[0].name
                            )
                          )
                        ])
                      ]
                    }
                  }
                ])
              }),
              _c("a-table-column", {
                key: "hostName",
                attrs: { title: "主机名称", "data-index": "hostName" }
              }),
              _c("a-table-column", {
                key: "hostIp",
                attrs: { title: "连接IP", "data-index": "hostIp" }
              }),
              _c("a-table-column", {
                key: "port",
                attrs: { title: "端口", "data-index": "port" }
              }),
              _c("a-table-column", {
                key: "configure",
                attrs: { title: "配置", "data-index": "configure" }
              }),
              _c("a-table-column", {
                key: "remarks",
                attrs: { title: "备注", "data-index": "remarks" }
              }),
              _c("a-table-column", {
                key: "options",
                attrs: { title: "操作", "data-index": "options" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(text, record) {
                      return [
                        _c(
                          "a",
                          {
                            on: {
                              click: function($event) {
                                return _vm.editHost(record)
                              }
                            }
                          },
                          [_vm._v("编辑")]
                        ),
                        _c("a-divider", { attrs: { type: "vertical" } }),
                        _c(
                          "a",
                          {
                            staticStyle: { color: "red" },
                            on: {
                              click: function($event) {
                                return _vm.deleteHost(record.id)
                              }
                            }
                          },
                          [_vm._v("删除")]
                        ),
                        _c("a-divider", { attrs: { type: "vertical" } }),
                        _c(
                          "a",
                          {
                            on: {
                              click: function($event) {
                                return _vm.linkhost(record)
                              }
                            }
                          },
                          [_vm._v("console")]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      ),
      _c(
        "a-modal",
        {
          attrs: {
            width: 800,
            title: _vm.modalTitle,
            visible: _vm.addVisible,
            "confirm-loading": _vm.addconfirmLoading,
            okText: "确定",
            cancelText: "取消"
          },
          on: { ok: _vm.addhandleOk, cancel: _vm.addhandleCancel }
        },
        [
          _c(
            "a-form",
            {
              attrs: {
                form: _vm.form,
                "label-col": { span: 4 },
                "wrapper-col": { span: 16 }
              }
            },
            [
              _c(
                "a-form-item",
                { attrs: { label: "主机供应商" } },
                [
                  _c(
                    "a-select",
                    {
                      directives: [
                        {
                          name: "decorator",
                          rawName: "v-decorator",
                          value: [
                            "merchants",
                            {
                              rules: [
                                { required: true, message: "请选择供应商！" }
                              ]
                            }
                          ],
                          expression:
                            "['merchants', { rules: [{ required: true, message: '请选择供应商！' }] }]"
                        }
                      ],
                      staticStyle: { width: "200px" },
                      attrs: { placeholder: "请选择供应商" }
                    },
                    _vm._l(_vm.merchantsList, function(item) {
                      return _c(
                        "a-select-option",
                        { key: item.code, attrs: { value: item.code } },
                        [_vm._v(_vm._s(item.name))]
                      )
                    }),
                    1
                  )
                ],
                1
              ),
              _c(
                "a-form-item",
                { attrs: { label: "主机名称" } },
                [
                  _c("a-input", {
                    directives: [
                      {
                        name: "decorator",
                        rawName: "v-decorator",
                        value: [
                          "hostName",
                          {
                            rules: [
                              { required: true, message: "请输入主机名称！" }
                            ]
                          }
                        ],
                        expression:
                          "['hostName', { rules: [{ required: true, message: '请输入主机名称！' }] }]"
                      }
                    ],
                    attrs: { placeholder: "请输入主机名称" }
                  })
                ],
                1
              ),
              _c("a-form-item", { attrs: { label: "连接IP", required: "" } }, [
                _c("div", { staticStyle: { display: "flex" } }, [
                  _c(
                    "div",
                    [
                      _c(
                        "a-form-item",
                        { staticStyle: { "margin-bottom": "0px" } },
                        [
                          _c("a-input", {
                            directives: [
                              {
                                name: "decorator",
                                rawName: "v-decorator",
                                value: [
                                  "rootName",
                                  {
                                    rules: [
                                      {
                                        required: true,
                                        message: "请输入用户名！"
                                      }
                                    ]
                                  }
                                ],
                                expression:
                                  "['rootName', { rules: [{ required: true, message: '请输入用户名！' }] }]"
                              }
                            ],
                            staticStyle: { "max-width": "180px" },
                            attrs: {
                              "addon-before": "SSH:",
                              placeholder: "用户名"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    [
                      _c(
                        "a-form-item",
                        { staticStyle: { "margin-bottom": "0px" } },
                        [
                          _c("a-input", {
                            directives: [
                              {
                                name: "decorator",
                                rawName: "v-decorator",
                                value: [
                                  "ip",
                                  {
                                    rules: [
                                      {
                                        required: true,
                                        message: "请输入IP地址!"
                                      }
                                    ]
                                  }
                                ],
                                expression:
                                  "['ip', { rules: [{ required: true, message: '请输入IP地址!' }] }]"
                              }
                            ],
                            staticStyle: { "max-width": "200px" },
                            attrs: {
                              "addon-before": "@",
                              placeholder: "IP地址"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    [
                      _c(
                        "a-form-item",
                        { staticStyle: { "margin-bottom": "0px" } },
                        [
                          _c("a-input", {
                            directives: [
                              {
                                name: "decorator",
                                rawName: "v-decorator",
                                value: [
                                  "port",
                                  {
                                    rules: [
                                      { required: true, message: "请输入端口!" }
                                    ]
                                  }
                                ],
                                expression:
                                  "['port', { rules: [{ required: true, message: '请输入端口!' }] }]"
                              }
                            ],
                            staticStyle: { "max-width": "120px" },
                            attrs: {
                              "addon-before": "-p",
                              placeholder: "端口:22"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ])
              ]),
              _c(
                "a-form-item",
                { attrs: { label: "配置" } },
                [
                  _c("a-input", {
                    directives: [
                      {
                        name: "decorator",
                        rawName: "v-decorator",
                        value: ["configure", { rules: [{ required: false }] }],
                        expression:
                          "['configure', { rules: [{ required: false}] }]"
                      }
                    ],
                    attrs: { placeholder: "请输入服务器配置，如：1核2G" }
                  })
                ],
                1
              ),
              _c(
                "a-form-item",
                { attrs: { label: "备注" } },
                [
                  _c("a-textarea", {
                    directives: [
                      {
                        name: "decorator",
                        rawName: "v-decorator",
                        value: ["remarks", { rules: [{ required: false }] }],
                        expression:
                          "['remarks', { rules: [{ required: false}] }]"
                      }
                    ],
                    attrs: { placeholder: "请输入主机备注信息" }
                  })
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
        "a-modal",
        {
          attrs: {
            width: 300,
            title: "请输入登录密码验证连接",
            visible: _vm.passwordVisible
          }
        },
        [
          _c("a-input-password", {
            attrs: { placeholder: "请输入密码" },
            model: {
              value: _vm.host_password,
              callback: function($$v) {
                _vm.host_password = $$v
              },
              expression: "host_password"
            }
          }),
          _c("a-icon", {
            staticStyle: { color: "#ff6400" },
            attrs: { type: "warning" }
          }),
          _vm._v(" "),
          _c(
            "span",
            { staticStyle: { color: "#ff0000", "font-size": "12px" } },
            [_vm._v("注：系统不会保存您的密码")]
          ),
          _c(
            "template",
            { slot: "footer" },
            [
              _c(
                "a-button",
                { key: "back", on: { click: _vm.pdwVisibleCancel } },
                [_vm._v(" 取 消 ")]
              ),
              _c(
                "a-button",
                {
                  key: "submit",
                  attrs: { type: "primary", loading: _vm.sshVerifyLoading },
                  on: { click: _vm.pwdVisibleHandleOk }
                },
                [_vm._v(" 验 证 ")]
              )
            ],
            1
          )
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/views/hostManage/hostList.vue":
/*!*******************************************!*\
  !*** ./src/views/hostManage/hostList.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hostList_vue_vue_type_template_id_a82f7244_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hostList.vue?vue&type=template&id=a82f7244&scoped=true& */ "./src/views/hostManage/hostList.vue?vue&type=template&id=a82f7244&scoped=true&");
/* harmony import */ var _hostList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hostList.vue?vue&type=script&lang=js& */ "./src/views/hostManage/hostList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _hostList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _hostList_vue_vue_type_template_id_a82f7244_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _hostList_vue_vue_type_template_id_a82f7244_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a82f7244",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/hostManage/hostList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/hostManage/hostList.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./src/views/hostManage/hostList.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hostList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./hostList.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/hostManage/hostList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hostList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/hostManage/hostList.vue?vue&type=template&id=a82f7244&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./src/views/hostManage/hostList.vue?vue&type=template&id=a82f7244&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_5dcfb1b0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hostList_vue_vue_type_template_id_a82f7244_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5dcfb1b0-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./hostList.vue?vue&type=template&id=a82f7244&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"5dcfb1b0-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/hostManage/hostList.vue?vue&type=template&id=a82f7244&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_5dcfb1b0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hostList_vue_vue_type_template_id_a82f7244_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_5dcfb1b0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hostList_vue_vue_type_template_id_a82f7244_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2hvc3RNYW5hZ2UvaG9zdExpc3QudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9ob3N0TWFuYWdlL2hvc3RMaXN0LnZ1ZT8zNTc3Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9ob3N0TWFuYWdlL2hvc3RMaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaG9zdE1hbmFnZS9ob3N0TGlzdC52dWU/MzViNCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaG9zdE1hbmFnZS9ob3N0TGlzdC52dWU/MmRhNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJJQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLHdCQURBO0FBRUEsbUJBRkE7QUFHQTtBQUNBLG9CQURBO0FBRUE7QUFGQSxPQUhBO0FBT0E7QUFBQTtBQUFBLFFBUEE7QUFRQTtBQUNBLHFCQURBO0FBRUEsb0JBRkE7QUFHQSxvQkFIQTtBQUlBLGNBSkE7QUFLQSxnQkFMQTtBQU1BLHFCQU5BO0FBT0E7QUFQQSxPQVJBO0FBaUJBLHVCQWpCQTtBQWtCQSxxQkFsQkE7QUFtQkEsbUJBbkJBO0FBb0JBLHVCQXBCQTtBQXFCQSw0QkFyQkE7QUFzQkEsOEJBdEJBO0FBdUJBLDZCQXZCQTtBQXdCQSx5QkF4QkE7QUF5QkEsc0JBQ0E7QUFBQTtBQUFBO0FBQUEsT0FEQSxFQUVBO0FBQUE7QUFBQTtBQUFBLE9BRkEsRUFHQTtBQUFBO0FBQUE7QUFBQSxPQUhBLEVBSUE7QUFBQTtBQUFBO0FBQUEsT0FKQSxFQUtBO0FBQUE7QUFBQTtBQUFBLE9BTEEsRUFNQTtBQUFBO0FBQUE7QUFBQSxPQU5B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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVnQkE7QUFBQTtBQUFBO0FBQUE7QUFBbUc7QUFDdkM7QUFDTDs7O0FBR3ZEO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSwrRkFBTTtBQUNSLEVBQUUsd0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQWlTLENBQWdCLHlVQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXJUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvanMvNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8YS1jYXJkPlxuICAgICAgPGEtZm9ybSA6bGFiZWwtY29sPVwieyBzcGFuOiA1IH1cIiA6d3JhcHBlci1jb2w9XCJ7IHNwYW46IDEyIH1cIj5cbiAgICAgICAgPGEtcm93PlxuICAgICAgICAgIDxhLWNvbCA6c3Bhbj1cIjhcIj5cbiAgICAgICAgICAgIDxhLWZvcm0taXRlbSBsYWJlbD1cIuS4u+acuuWQjeensFwiPlxuICAgICAgICAgICAgICA8YS1pbnB1dCB2LW1vZGVsPVwiaG9zdEZvcm0uaG9zdE5hbWVcIi8+XG4gICAgICAgICAgICA8L2EtZm9ybS1pdGVtPlxuICAgICAgICAgIDwvYS1jb2w+XG4gICAgICAgICAgPGEtY29sIDpzcGFuPVwiOFwiPlxuICAgICAgICAgICAgPGEtZm9ybS1pdGVtIGxhYmVsPVwi6L+e5o6lSVBcIj5cbiAgICAgICAgICAgICAgPGEtaW5wdXQgdi1tb2RlbD1cImhvc3RGb3JtLmhvc3RJUFwiLz5cbiAgICAgICAgICAgIDwvYS1mb3JtLWl0ZW0+XG4gICAgICAgICAgPC9hLWNvbD5cbiAgICAgICAgICA8YS1jb2wgOnNwYW49XCI4XCI+XG4gICAgICAgICAgICA8YS1idXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJzZWFyY2hMaXN0XCI+5pCc57SiPC9hLWJ1dHRvbj5cbiAgICAgICAgICA8L2EtY29sPlxuICAgICAgICA8L2Etcm93PlxuICAgICAgICA8YS1yb3c+XG4gICAgICAgICAgPGEtY29sIDpzcGFuPSc4Jz5cbiAgICAgICAgICAgIDxhLWJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cImFkZEhvc3RcIj7mlrDlop48L2EtYnV0dG9uPlxuICAgICAgICAgIDwvYS1jb2w+XG4gICAgICAgIDwvYS1yb3c+XG4gICAgICA8L2EtZm9ybT5cbiAgICAgIDxhLXRhYmxlIDpkYXRhLXNvdXJjZT1cInRhYmxlRGF0YVwiIHN0eWxlPVwibWFyZ2luLXRvcDoyMHB4O1wiIHJvd0tleT1cImlkXCIgOmxvYWRpbmc9XCJ0YWJsZUxvYWRpbmdcIj5cbiAgICAgICAgPGEtdGFibGUtY29sdW1uIGtleT1cIm1lcmNoYW50c1wiIHRpdGxlPVwi5Li75py65L6b5bqU5ZWGXCIgZGF0YS1pbmRleD1cIm1lcmNoYW50c1wiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90LXNjb3BlPVwidGV4dFwiPlxuICAgICAgICAgICAgPHNwYW4+e3ttZXJjaGFudHNMaXN0LmZpbHRlcihyPT57cmV0dXJuIHIuY29kZSA9PT0gdGV4dH0pWzBdLm5hbWV9fTwvc3Bhbj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2EtdGFibGUtY29sdW1uPlxuICAgICAgICA8YS10YWJsZS1jb2x1bW4ga2V5PVwiaG9zdE5hbWVcIiB0aXRsZT1cIuS4u+acuuWQjeensFwiIGRhdGEtaW5kZXg9XCJob3N0TmFtZVwiIC8+XG4gICAgICAgIDxhLXRhYmxlLWNvbHVtbiBrZXk9XCJob3N0SXBcIiB0aXRsZT1cIui/nuaOpUlQXCIgZGF0YS1pbmRleD1cImhvc3RJcFwiIC8+XG4gICAgICAgIDxhLXRhYmxlLWNvbHVtbiBrZXk9XCJwb3J0XCIgdGl0bGU9XCLnq6/lj6NcIiBkYXRhLWluZGV4PVwicG9ydFwiIC8+XG4gICAgICAgIDxhLXRhYmxlLWNvbHVtbiBrZXk9XCJjb25maWd1cmVcIiB0aXRsZT1cIumFjee9rlwiIGRhdGEtaW5kZXg9XCJjb25maWd1cmVcIiAvPlxuICAgICAgICA8YS10YWJsZS1jb2x1bW4ga2V5PVwicmVtYXJrc1wiIHRpdGxlPVwi5aSH5rOoXCIgZGF0YS1pbmRleD1cInJlbWFya3NcIiAvPlxuICAgICAgICA8YS10YWJsZS1jb2x1bW4ga2V5PVwib3B0aW9uc1wiIHRpdGxlPVwi5pON5L2cXCIgZGF0YS1pbmRleD1cIm9wdGlvbnNcIj5cbiAgICAgICAgICA8dGVtcGxhdGUgc2xvdC1zY29wZT1cInRleHQscmVjb3JkXCI+XG4gICAgICAgICAgICA8YSBAY2xpY2s9XCJlZGl0SG9zdChyZWNvcmQpXCI+57yW6L6RPC9hPlxuICAgICAgICAgICAgPGEtZGl2aWRlciB0eXBlPVwidmVydGljYWxcIiAvPlxuICAgICAgICAgICAgPGEgQGNsaWNrPVwiZGVsZXRlSG9zdChyZWNvcmQuaWQpXCIgc3R5bGU9XCJjb2xvcjpyZWQ7XCI+5Yig6ZmkPC9hPlxuICAgICAgICAgICAgPGEtZGl2aWRlciB0eXBlPVwidmVydGljYWxcIiAvPlxuICAgICAgICAgICAgPGEgQGNsaWNrPVwibGlua2hvc3QocmVjb3JkKVwiPmNvbnNvbGU8L2E+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9hLXRhYmxlLWNvbHVtbj5cbiAgICAgIDwvYS10YWJsZT5cbiAgICA8L2EtY2FyZD5cbiAgICA8YS1tb2RhbFxuICAgICAgOndpZHRoPVwiODAwXCJcbiAgICAgIDp0aXRsZT1cIm1vZGFsVGl0bGVcIlxuICAgICAgOnZpc2libGU9XCJhZGRWaXNpYmxlXCJcbiAgICAgIDpjb25maXJtLWxvYWRpbmc9XCJhZGRjb25maXJtTG9hZGluZ1wiXG4gICAgICBAb2s9XCJhZGRoYW5kbGVPa1wiXG4gICAgICBva1RleHQ9XCLnoa7lrppcIlxuICAgICAgQGNhbmNlbD1cImFkZGhhbmRsZUNhbmNlbFwiXG4gICAgICBjYW5jZWxUZXh0PVwi5Y+W5raIXCJcbiAgICA+XG4gICAgICA8YS1mb3JtIDpmb3JtPVwiZm9ybVwiIDpsYWJlbC1jb2w9XCJ7IHNwYW46IDQgfVwiIDp3cmFwcGVyLWNvbD1cInsgc3BhbjogMTYgfVwiPlxuICAgICAgICA8YS1mb3JtLWl0ZW0gbGFiZWw9XCLkuLvmnLrkvpvlupTllYZcIj5cbiAgICAgICAgICA8YS1zZWxlY3Qgc3R5bGU9XCJ3aWR0aDoyMDBweDtcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLor7fpgInmi6nkvpvlupTllYZcIlxuICAgICAgICAgICAgdi1kZWNvcmF0b3I9XCJbJ21lcmNoYW50cycsIHsgcnVsZXM6IFt7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn6K+36YCJ5oup5L6b5bqU5ZWG77yBJyB9XSB9XVwiPlxuICAgICAgICAgICAgPGEtc2VsZWN0LW9wdGlvbiB2LWZvcj1cIml0ZW0gaW4gbWVyY2hhbnRzTGlzdFwiIDp2YWx1ZT1cIml0ZW0uY29kZVwiIDprZXk9XCJpdGVtLmNvZGVcIj57e2l0ZW0ubmFtZX19PC9hLXNlbGVjdC1vcHRpb24+XG4gICAgICAgICAgPC9hLXNlbGVjdD5cbiAgICAgICAgPC9hLWZvcm0taXRlbT5cbiAgICAgICAgPGEtZm9ybS1pdGVtIGxhYmVsPVwi5Li75py65ZCN56ewXCI+XG4gICAgICAgICAgPGEtaW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5Li75py65ZCN56ewXCJcbiAgICAgICAgICAgIHYtZGVjb3JhdG9yPVwiWydob3N0TmFtZScsIHsgcnVsZXM6IFt7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn6K+36L6T5YWl5Li75py65ZCN56ew77yBJyB9XSB9XVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9hLWZvcm0taXRlbT5cbiAgICAgICAgIDxhLWZvcm0taXRlbSBsYWJlbD1cIui/nuaOpUlQXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6ZmxleDtcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGEtZm9ybS1pdGVtIHN0eWxlPVwibWFyZ2luLWJvdHRvbTowcHg7XCI+XG4gICAgICAgICAgICAgICAgICA8YS1pbnB1dFxuICAgICAgICAgICAgICAgICAgICBhZGRvbi1iZWZvcmU9XCJTU0g6XCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLnlKjmiLflkI1cIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIm1heC13aWR0aDoxODBweFwiXG4gICAgICAgICAgICAgICAgICAgIHYtZGVjb3JhdG9yPVwiWydyb290TmFtZScsIHsgcnVsZXM6IFt7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn6K+36L6T5YWl55So5oi35ZCN77yBJyB9XSB9XVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2EtZm9ybS1pdGVtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8YS1mb3JtLWl0ZW0gc3R5bGU9XCJtYXJnaW4tYm90dG9tOjBweDtcIj5cbiAgICAgICAgICAgICAgICA8YS1pbnB1dFxuICAgICAgICAgICAgICAgICAgYWRkb24tYmVmb3JlPVwiQFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT1cIm1heC13aWR0aDoyMDBweFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIklQ5Zyw5Z2AXCJcbiAgICAgICAgICAgICAgICAgIHYtZGVjb3JhdG9yPVwiWydpcCcsIHsgcnVsZXM6IFt7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn6K+36L6T5YWlSVDlnLDlnYAhJyB9XSB9XVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9hLWZvcm0taXRlbT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGEtZm9ybS1pdGVtIHN0eWxlPVwibWFyZ2luLWJvdHRvbTowcHg7XCI+XG4gICAgICAgICAgICAgICAgPGEtaW5wdXRcbiAgICAgICAgICAgICAgICAgIGFkZG9uLWJlZm9yZT1cIi1wXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwibWF4LXdpZHRoOjEyMHB4XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi56uv5Y+jOjIyXCJcbiAgICAgICAgICAgICAgICAgIHYtZGVjb3JhdG9yPVwiWydwb3J0JywgeyBydWxlczogW3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfor7fovpPlhaXnq6/lj6MhJyB9XSB9XVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9hLWZvcm0taXRlbT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2EtZm9ybS1pdGVtPlxuICAgICAgICA8YS1mb3JtLWl0ZW0gbGFiZWw9XCLphY3nva5cIj5cbiAgICAgICAgICA8YS1pbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXmnI3liqHlmajphY3nva7vvIzlpoLvvJox5qC4MkdcIlxuICAgICAgICAgICAgdi1kZWNvcmF0b3I9XCJbJ2NvbmZpZ3VyZScsIHsgcnVsZXM6IFt7IHJlcXVpcmVkOiBmYWxzZX1dIH1dXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2EtZm9ybS1pdGVtPlxuICAgICAgICA8YS1mb3JtLWl0ZW0gbGFiZWw9XCLlpIfms6hcIj5cbiAgICAgICAgICA8YS10ZXh0YXJlYVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXkuLvmnLrlpIfms6jkv6Hmga9cIlxuICAgICAgICAgICAgdi1kZWNvcmF0b3I9XCJbJ3JlbWFya3MnLCB7IHJ1bGVzOiBbeyByZXF1aXJlZDogZmFsc2V9XSB9XVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9hLWZvcm0taXRlbT5cbiAgICAgIDwvYS1mb3JtPlxuICAgIDwvYS1tb2RhbD5cbiAgICA8YS1tb2RhbFxuICAgICAgOndpZHRoPVwiMzAwXCJcbiAgICAgIHRpdGxlPVwi6K+36L6T5YWl55m75b2V5a+G56CB6aqM6K+B6L+e5o6lXCJcbiAgICAgIDp2aXNpYmxlPVwicGFzc3dvcmRWaXNpYmxlXCJcbiAgICA+XG4gICAgPGEtaW5wdXQtcGFzc3dvcmQgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXlr4bnoIFcIiB2LW1vZGVsPVwiaG9zdF9wYXNzd29yZFwiLz5cbiAgICA8YS1pY29uIHR5cGU9XCJ3YXJuaW5nXCIgc3R5bGU9XCJjb2xvcjojZmY2NDAwO1wiLz4gPHNwYW4gc3R5bGU9XCJjb2xvcjogI2ZmMDAwMDtmb250LXNpemU6IDEycHg7XCI+5rOo77ya57O757uf5LiN5Lya5L+d5a2Y5oKo55qE5a+G56CBPC9zcGFuPlxuICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJmb290ZXJcIj5cbiAgICAgICAgPGEtYnV0dG9uIGtleT1cImJhY2tcIiBAY2xpY2s9XCJwZHdWaXNpYmxlQ2FuY2VsXCI+XG4gICAgICAgICAg5Y+WIOa2iFxuICAgICAgICA8L2EtYnV0dG9uPlxuICAgICAgICA8YS1idXR0b24ga2V5PVwic3VibWl0XCIgdHlwZT1cInByaW1hcnlcIiA6bG9hZGluZz1cInNzaFZlcmlmeUxvYWRpbmdcIiBAY2xpY2s9XCJwd2RWaXNpYmxlSGFuZGxlT2tcIj5cbiAgICAgICAgICDpqowg6K+BXG4gICAgICAgIDwvYS1idXR0b24+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvYS1tb2RhbD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtb2RhbFRpdGxlOiAn5paw5aKe5Li75py6JyxcbiAgICAgICAgaXNFZGl0OiBmYWxzZSxcbiAgICAgICAgaG9zdEZvcm06IHtcbiAgICAgICAgICBob3N0TmFtZTogJycsXG4gICAgICAgICAgaG9zdElQOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBmb3JtOiB0aGlzLiRmb3JtLmNyZWF0ZUZvcm0odGhpcywgeyBuYW1lOiAnY3JlYXRlRm9ybScgfSksXG4gICAgICAgIGNyZWF0ZUZvcm06e1xuICAgICAgICAgIG1lcmNoYW50czogJycsXG4gICAgICAgICAgaG9zdE5hbWU6ICcnLFxuICAgICAgICAgIHJvb3ROYW1lOiAnJyxcbiAgICAgICAgICBpcDogJycsXG4gICAgICAgICAgcG9ydDogJycsXG4gICAgICAgICAgY29uZmlndXJlOiAnJyxcbiAgICAgICAgICByZW1hcmtzOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBob3N0X3Bhc3N3b3JkOiAnJyxcbiAgICAgICAgdXBkYXRlUm93SWQ6ICcnLFxuICAgICAgICB0YWJsZURhdGE6W10sXG4gICAgICAgIGFkZFZpc2libGU6IGZhbHNlLFxuICAgICAgICBwYXNzd29yZFZpc2libGU6IGZhbHNlLFxuICAgICAgICBhZGRjb25maXJtTG9hZGluZzogZmFsc2UsXG4gICAgICAgIHNzaFZlcmlmeUxvYWRpbmc6ZmFsc2UsXG4gICAgICAgIHRhYmxlTG9hZGluZzogZmFsc2UsXG4gICAgICAgIG1lcmNoYW50c0xpc3Q6W1xuICAgICAgICAgIHtuYW1lOiAn6Zi/6YeM5LqRJywgY29kZTogJ21fMDAxJ30sXG4gICAgICAgICAge25hbWU6ICfohb7orq/kupEnLCBjb2RlOiAnbV8wMDInfSxcbiAgICAgICAgICB7bmFtZTogJ+eZvuW6puS6kScsIGNvZGU6ICdtXzAwMyd9LFxuICAgICAgICAgIHtuYW1lOiAn5Y2O5Li65LqRJywgY29kZTogJ21fMDA0J30sXG4gICAgICAgICAge25hbWU6ICfnvZHmmJPkupEnLCBjb2RlOiAnbV8wMDUnfSxcbiAgICAgICAgICB7bmFtZTogJ+WFtuS7licsIGNvZGU6ICdtXzAwNid9XG4gICAgICAgIF0sXG4gICAgICAgIHNlbGVjdEhvc3RPYmo6e31cbiAgICAgIH07XG4gICAgfSxcbiAgICBjcmVhdGVkICgpIHtcbiAgICAgIHRoaXMuc2VhcmNoTGlzdCgpO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgbGlua2hvc3QgKHJvdyl7XG4gICAgICAgIHRoaXMuaG9zdF9wYXNzd29yZCA9ICcnO1xuICAgICAgICB0aGlzLnNlbGVjdEhvc3RPYmogPSByb3c7XG4gICAgICAgIHRoaXMucGFzc3dvcmRWaXNpYmxlID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICB1cGRhdGVIb3N0ICgpe1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICBpZDogdGhpcy51cGRhdGVSb3dJZCxcbiAgICAgICAgICBtZXJjaGFudHM6IHRoaXMuY3JlYXRlRm9ybS5tZXJjaGFudHMsXG4gICAgICAgICAgaG9zdE5hbWU6IHRoaXMuY3JlYXRlRm9ybS5ob3N0TmFtZSxcbiAgICAgICAgICByb290TmFtZTogdGhpcy5jcmVhdGVGb3JtLnJvb3ROYW1lLFxuICAgICAgICAgIGlwOiB0aGlzLmNyZWF0ZUZvcm0uaXAsXG4gICAgICAgICAgcG9ydDogdGhpcy5jcmVhdGVGb3JtLnBvcnQsXG4gICAgICAgICAgY29uZmlndXJlOiB0aGlzLmNyZWF0ZUZvcm0uY29uZmlndXJlLFxuICAgICAgICAgIHJlbWFya3M6IHRoaXMuY3JlYXRlRm9ybS5yZW1hcmtzLFxuICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLmNyZWF0ZUZvcm0ucGFzc3dvcmRcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy4kYXBpLnNlcnZlcnMudXBkYXRlSG9zdChkYXRhKS50aGVuKCgpPT57XG4gICAgICAgICAgdGhpcy4kbWVzc2FnZS5zdWNjZXNzKCfnvJbovpHmiJDlip8nKTtcbiAgICAgICAgICB0aGlzLmFkZFZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmFkZGNvbmZpcm1Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5zZWFyY2hMaXN0KCk7XG4gICAgICAgICAgdGhpcy5mb3JtLnJlc2V0RmllbGRzKCk7XG4gICAgICAgICAgdGhpcy5jcmVhdGVGb3JtLnBhc3N3b3JkID0gJyc7XG4gICAgICAgICAgdGhpcy5wYXNzd29yZFZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfSkuY2F0Y2goKCk9PntcbiAgICAgICAgICB0aGlzLmFkZGNvbmZpcm1Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGVkaXRIb3N0IChyb3cpe1xuICAgICAgICB0aGlzLm1vZGFsVGl0bGUgPSAn57yW6L6R5Li75py6JztcbiAgICAgICAgdGhpcy5pc0VkaXQgPSB0cnVlO1xuICAgICAgICB0aGlzLmFkZFZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVJvd0lkID0gcm93LmlkO1xuICAgICAgICB0aGlzLmNyZWF0ZUZvcm0ubWVyY2hhbnRzID0gcm93Lm1lcmNoYW50cztcbiAgICAgICAgdGhpcy5jcmVhdGVGb3JtLmhvc3ROYW1lID0gcm93Lmhvc3ROYW1lO1xuICAgICAgICB0aGlzLmNyZWF0ZUZvcm0ucm9vdE5hbWUgPSByb3cucm9vdE5hbWU7XG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybS5pcCA9IHJvdy5ob3N0SXA7XG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybS5wb3J0ID0gcm93LnBvcnQ7XG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybS5jb25maWd1cmUgPSByb3cuY29uZmlndXJlO1xuICAgICAgICB0aGlzLmNyZWF0ZUZvcm0ucmVtYXJrcyA9IHJvdy5yZW1hcmtzO1xuICAgICAgICB0aGlzLiRuZXh0VGljaygoKT0+e1xuICAgICAgICAgIHRoaXMuZm9ybS5zZXRGaWVsZHNWYWx1ZSh7XG4gICAgICAgICAgICBtZXJjaGFudHM6IHJvdy5tZXJjaGFudHMsXG4gICAgICAgICAgICBob3N0TmFtZTogcm93Lmhvc3ROYW1lLFxuICAgICAgICAgICAgcm9vdE5hbWU6IHJvdy5yb290TmFtZSxcbiAgICAgICAgICAgIGlwOiByb3cuaG9zdElwLFxuICAgICAgICAgICAgcG9ydDogcm93LnBvcnQsXG4gICAgICAgICAgICBjb25maWd1cmU6IHJvdy5jb25maWd1cmUsXG4gICAgICAgICAgICByZW1hcmtzOiByb3cucmVtYXJrc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBkZWxldGVIb3N0IChpZCl7XG4gICAgICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuJGNvbmZpcm0oe1xuICAgICAgICAgIHRpdGxlOiAn56Gu5a6a6KaB5Yig6Zmk6K+l5Li75py65ZCXPycsXG4gICAgICAgICAgb2tUZXh0OiAn56Gu6K6kJyxcbiAgICAgICAgICBjYW5jZWxUZXh0OiAn5Y+W5raIJyxcbiAgICAgICAgICBvbk9rICgpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfdGhpcy4kYXBpLnNlcnZlcnMuZGVsZXRlSG9zdChkYXRhKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgIF90aGlzLiRtZXNzYWdlLnN1Y2Nlc3MoJ+WIoOmZpOaIkOWKn++8gScpO1xuICAgICAgICAgICAgICBfdGhpcy5zZWFyY2hMaXN0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uQ2FuY2VsICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW5jZWwnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHNlYXJjaExpc3QgKCl7XG4gICAgICAgIHRoaXMudGFibGVMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4kYXBpLnNlcnZlcnMuZ2V0SG9zdExpc3QodGhpcy5ob3N0Rm9ybSkudGhlbihyZXM9PntcbiAgICAgICAgICB0aGlzLnRhYmxlRGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgIHRoaXMudGFibGVMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHZlcmlmeUhvc3QgKCl7XG4gICAgICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgIHNzaE9iajp7XG4gICAgICAgICAgICBob3N0OnRoaXMuc2VsZWN0SG9zdE9iai5ob3N0SXAsXG4gICAgICAgICAgICBwb3J0OnRoaXMuc2VsZWN0SG9zdE9iai5wb3J0LFxuICAgICAgICAgICAgdXNlcm5hbWU6dGhpcy5zZWxlY3RIb3N0T2JqLnJvb3ROYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQ6dGhpcy5ob3N0X3Bhc3N3b3JkXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLiRhcGkuc2VydmVycy5TU0hWZXJpZnkoZGF0YSkudGhlbihyZXM9PntcbiAgICAgICAgICBpZihyZXMuZGF0YSl7XG4gICAgICAgICAgICB0aGlzLiRtZXNzYWdlLnN1Y2Nlc3MoJ+mqjOivgeaIkOWKn++8gScpO1xuICAgICAgICAgICAgdGhpcy5zc2hWZXJpZnlMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGxldCByb3V0ZVVybCA9IF90aGlzLiRyb3V0ZXIucmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICBwYXRoOiBgL3dlYnNzaC8ke190aGlzLnNlbGVjdEhvc3RPYmouaWR9YFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgd2luZG93Lm9wZW4ocm91dGVVcmwgLmhyZWYsICdfYmxhbmsnKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy4kbWVzc2FnZS53YXJuaW5nKCfpqozor4HlpLHotKXvvIzor7fnoa7orqTlr4bnoIHmmK/lkKbmraPnoa7vvIEnKTtcbiAgICAgICAgICAgIHRoaXMuc3NoVmVyaWZ5TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKCgpPT57XG4gICAgICAgICAgdGhpcy5zc2hWZXJpZnlMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pKTtcbiAgICAgIH0sXG4gICAgICBhZGRIb3N0ICgpIHtcbiAgICAgICAgdGhpcy5tb2RhbFRpdGxlID0gJ+aWsOWinuS4u+acuic7XG4gICAgICAgIHRoaXMuYWRkVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNFZGl0ID0gZmFsc2U7XG4gICAgICB9LFxuICAgICAgYWRkaGFuZGxlT2sgKCl7XG4gICAgICAgIHRoaXMuZm9ybS52YWxpZGF0ZUZpZWxkcygoZXJyLGZpZWxkc1ZhbHVlKSA9PiB7XG4gICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybS5tZXJjaGFudHMgPSBmaWVsZHNWYWx1ZS5tZXJjaGFudHM7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm0uaG9zdE5hbWUgPSBmaWVsZHNWYWx1ZS5ob3N0TmFtZTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybS5yb290TmFtZSA9IGZpZWxkc1ZhbHVlLnJvb3ROYW1lO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVGb3JtLmlwID0gZmllbGRzVmFsdWUuaXA7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm0ucG9ydCA9IGZpZWxkc1ZhbHVlLnBvcnQ7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm0uY29uZmlndXJlID0gZmllbGRzVmFsdWUuY29uZmlndXJlID8gZmllbGRzVmFsdWUuY29uZmlndXJlOiAnJztcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybS5yZW1hcmtzID0gZmllbGRzVmFsdWUucmVtYXJrcyA/IGZpZWxkc1ZhbHVlLnJlbWFya3M6Jyc7XG4gICAgICAgICAgICB0aGlzLmFkZGNvbmZpcm1Mb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmKHRoaXMuaXNFZGl0KXtcbiAgICAgICAgICAgICAgdGhpcy51cGRhdGVIb3N0KCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgdGhpcy4kYXBpLnNlcnZlcnMuY3JlYXRlSG9zdCh0aGlzLmNyZWF0ZUZvcm0pLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZGNvbmZpcm1Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hMaXN0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnJlc2V0RmllbGRzKCk7XG4gICAgICAgICAgICAgIH0pLmNhdGNoKCgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRjb25maXJtTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuYWRkY29uZmlybUxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHBkd1Zpc2libGVDYW5jZWwgKCl7XG4gICAgICAgIHRoaXMucGFzc3dvcmRWaXNpYmxlID0gZmFsc2U7XG4gICAgICB9LFxuICAgICAgYWRkaGFuZGxlQ2FuY2VsICgpIHtcbiAgICAgICAgdGhpcy5hZGRWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZm9ybS5yZXNldEZpZWxkcygpO1xuICAgICAgICB0aGlzLmNyZWF0ZUZvcm0ucGFzc3dvcmQgPSAnJztcbiAgICAgIH0sXG4gICAgICBwd2RWaXNpYmxlSGFuZGxlT2sgKCl7XG4gICAgICAgIGlmKCF0aGlzLmhvc3RfcGFzc3dvcmQpe1xuICAgICAgICAgIHRoaXMuJG1lc3NhZ2Uud2FybmluZygn6K+36L6T5YWl55m75b2V5a+G56CB77yBJyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHRoaXMuc3NoVmVyaWZ5TG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgdGhpcy52ZXJpZnlIb3N0KCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cImxlc3NcIiBzY29wZWQ+XG5cbjwvc3R5bGU+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImEtY2FyZFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImEtZm9ybVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczogeyBcImxhYmVsLWNvbFwiOiB7IHNwYW46IDUgfSwgXCJ3cmFwcGVyLWNvbFwiOiB7IHNwYW46IDEyIH0gfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhLXJvd1wiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImEtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc3BhbjogOCB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYS1mb3JtLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbGFiZWw6IFwi5Li75py65ZCN56ewXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImEtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmhvc3RGb3JtLmhvc3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaG9zdEZvcm0sIFwiaG9zdE5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaG9zdEZvcm0uaG9zdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYS1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzcGFuOiA4IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhLWZvcm0taXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBsYWJlbDogXCLov57mjqVJUFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJhLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5ob3N0Rm9ybS5ob3N0SVAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5ob3N0Rm9ybSwgXCJob3N0SVBcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaG9zdEZvcm0uaG9zdElQXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImEtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc3BhbjogOCB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYS1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zZWFyY2hMaXN0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5pCc57SiXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImEtcm93XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYS1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzcGFuOiA4IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmFkZEhvc3QgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLmlrDlop5cIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYS10YWJsZVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi10b3BcIjogXCIyMHB4XCIgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBcImRhdGEtc291cmNlXCI6IF92bS50YWJsZURhdGEsXG4gICAgICAgICAgICAgICAgcm93S2V5OiBcImlkXCIsXG4gICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLnRhYmxlTG9hZGluZ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImEtdGFibGUtY29sdW1uXCIsIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwibWVyY2hhbnRzXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwi5Li75py65L6b5bqU5ZWGXCIsIFwiZGF0YS1pbmRleFwiOiBcIm1lcmNoYW50c1wiIH0sXG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbih0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWVyY2hhbnRzTGlzdC5maWx0ZXIoZnVuY3Rpb24ocikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gci5jb2RlID09PSB0ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVswXS5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcImEtdGFibGUtY29sdW1uXCIsIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiaG9zdE5hbWVcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCLkuLvmnLrlkI3np7BcIiwgXCJkYXRhLWluZGV4XCI6IFwiaG9zdE5hbWVcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcImEtdGFibGUtY29sdW1uXCIsIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiaG9zdElwXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwi6L+e5o6lSVBcIiwgXCJkYXRhLWluZGV4XCI6IFwiaG9zdElwXCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJhLXRhYmxlLWNvbHVtblwiLCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInBvcnRcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCLnq6/lj6NcIiwgXCJkYXRhLWluZGV4XCI6IFwicG9ydFwiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiYS10YWJsZS1jb2x1bW5cIiwge1xuICAgICAgICAgICAgICAgIGtleTogXCJjb25maWd1cmVcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCLphY3nva5cIiwgXCJkYXRhLWluZGV4XCI6IFwiY29uZmlndXJlXCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJhLXRhYmxlLWNvbHVtblwiLCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInJlbWFya3NcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCLlpIfms6hcIiwgXCJkYXRhLWluZGV4XCI6IFwicmVtYXJrc1wiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiYS10YWJsZS1jb2x1bW5cIiwge1xuICAgICAgICAgICAgICAgIGtleTogXCJvcHRpb25zXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwi5pON5L2cXCIsIFwiZGF0YS1pbmRleFwiOiBcIm9wdGlvbnNcIiB9LFxuICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24odGV4dCwgcmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZWRpdEhvc3QocmVjb3JkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIue8lui+kVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImEtZGl2aWRlclwiLCB7IGF0dHJzOiB7IHR5cGU6IFwidmVydGljYWxcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmVkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRlbGV0ZUhvc3QocmVjb3JkLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuWIoOmZpFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImEtZGl2aWRlclwiLCB7IGF0dHJzOiB7IHR5cGU6IFwidmVydGljYWxcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5saW5raG9zdChyZWNvcmQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiY29uc29sZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJhLW1vZGFsXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgd2lkdGg6IDgwMCxcbiAgICAgICAgICAgIHRpdGxlOiBfdm0ubW9kYWxUaXRsZSxcbiAgICAgICAgICAgIHZpc2libGU6IF92bS5hZGRWaXNpYmxlLFxuICAgICAgICAgICAgXCJjb25maXJtLWxvYWRpbmdcIjogX3ZtLmFkZGNvbmZpcm1Mb2FkaW5nLFxuICAgICAgICAgICAgb2tUZXh0OiBcIuehruWumlwiLFxuICAgICAgICAgICAgY2FuY2VsVGV4dDogXCLlj5bmtohcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHsgb2s6IF92bS5hZGRoYW5kbGVPaywgY2FuY2VsOiBfdm0uYWRkaGFuZGxlQ2FuY2VsIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhLWZvcm1cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBmb3JtOiBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgICBcImxhYmVsLWNvbFwiOiB7IHNwYW46IDQgfSxcbiAgICAgICAgICAgICAgICBcIndyYXBwZXItY29sXCI6IHsgc3BhbjogMTYgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImEtZm9ybS1pdGVtXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBsYWJlbDogXCLkuLvmnLrkvpvlupTllYZcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYS1zZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJkZWNvcmF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LWRlY29yYXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWVyY2hhbnRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCLor7fpgInmi6nkvpvlupTllYbvvIFcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWydtZXJjaGFudHMnLCB7IHJ1bGVzOiBbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+ivt+mAieaLqeS+m+W6lOWVhu+8gScgfV0gfV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMjAwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIuivt+mAieaLqeS+m+W6lOWVhlwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5tZXJjaGFudHNMaXN0LCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhLXNlbGVjdC1vcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBpdGVtLmNvZGUsIGF0dHJzOiB7IHZhbHVlOiBpdGVtLmNvZGUgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImEtZm9ybS1pdGVtXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBsYWJlbDogXCLkuLvmnLrlkI3np7BcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJhLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZGVjb3JhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtZGVjb3JhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvc3ROYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCLor7fovpPlhaXkuLvmnLrlkI3np7DvvIFcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJbJ2hvc3ROYW1lJywgeyBydWxlczogW3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfor7fovpPlhaXkuLvmnLrlkI3np7DvvIEnIH1dIH1dXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIuivt+i+k+WFpeS4u+acuuWQjeensFwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiYS1mb3JtLWl0ZW1cIiwgeyBhdHRyczogeyBsYWJlbDogXCLov57mjqVJUFwiLCByZXF1aXJlZDogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY1N0eWxlOiB7IGRpc3BsYXk6IFwiZmxleFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYS1mb3JtLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tYm90dG9tXCI6IFwiMHB4XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImEtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJkZWNvcmF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LWRlY29yYXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm9vdE5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLor7fovpPlhaXnlKjmiLflkI3vvIFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWydyb290TmFtZScsIHsgcnVsZXM6IFt7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn6K+36L6T5YWl55So5oi35ZCN77yBJyB9XSB9XVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1heC13aWR0aFwiOiBcIjE4MHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRvbi1iZWZvcmVcIjogXCJTU0g6XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLnlKjmiLflkI1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYS1mb3JtLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tYm90dG9tXCI6IFwiMHB4XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImEtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJkZWNvcmF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LWRlY29yYXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLor7fovpPlhaVJUOWcsOWdgCFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWydpcCcsIHsgcnVsZXM6IFt7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn6K+36L6T5YWlSVDlnLDlnYAhJyB9XSB9XVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1heC13aWR0aFwiOiBcIjIwMHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRvbi1iZWZvcmVcIjogXCJAXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJJUOWcsOWdgFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhLWZvcm0taXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1ib3R0b21cIjogXCIwcHhcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImRlY29yYXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtZGVjb3JhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwb3J0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCLor7fovpPlhaXnq6/lj6MhXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlsncG9ydCcsIHsgcnVsZXM6IFt7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn6K+36L6T5YWl56uv5Y+jIScgfV0gfV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXgtd2lkdGhcIjogXCIxMjBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkb24tYmVmb3JlXCI6IFwiLXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIuerr+WPozoyMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhLWZvcm0taXRlbVwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbGFiZWw6IFwi6YWN572uXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImRlY29yYXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LWRlY29yYXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtcImNvbmZpZ3VyZVwiLCB7IHJ1bGVzOiBbeyByZXF1aXJlZDogZmFsc2UgfV0gfV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlsnY29uZmlndXJlJywgeyBydWxlczogW3sgcmVxdWlyZWQ6IGZhbHNlfV0gfV1cIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcGxhY2Vob2xkZXI6IFwi6K+36L6T5YWl5pyN5Yqh5Zmo6YWN572u77yM5aaC77yaMeaguDJHXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhLWZvcm0taXRlbVwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbGFiZWw6IFwi5aSH5rOoXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYS10ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImRlY29yYXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LWRlY29yYXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtcInJlbWFya3NcIiwgeyBydWxlczogW3sgcmVxdWlyZWQ6IGZhbHNlIH1dIH1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJbJ3JlbWFya3MnLCB7IHJ1bGVzOiBbeyByZXF1aXJlZDogZmFsc2V9XSB9XVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwbGFjZWhvbGRlcjogXCLor7fovpPlhaXkuLvmnLrlpIfms6jkv6Hmga9cIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcImEtbW9kYWxcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB3aWR0aDogMzAwLFxuICAgICAgICAgICAgdGl0bGU6IFwi6K+36L6T5YWl55m75b2V5a+G56CB6aqM6K+B6L+e5o6lXCIsXG4gICAgICAgICAgICB2aXNpYmxlOiBfdm0ucGFzc3dvcmRWaXNpYmxlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJhLWlucHV0LXBhc3N3b3JkXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIuivt+i+k+WFpeWvhueggVwiIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmhvc3RfcGFzc3dvcmQsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uaG9zdF9wYXNzd29yZCA9ICQkdlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImhvc3RfcGFzc3dvcmRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiYS1pY29uXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcIiNmZjY0MDBcIiB9LFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ3YXJuaW5nXCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiI2ZmMDAwMFwiLCBcImZvbnQtc2l6ZVwiOiBcIjEycHhcIiB9IH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwi5rOo77ya57O757uf5LiN5Lya5L+d5a2Y5oKo55qE5a+G56CBXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRlbXBsYXRlXCIsXG4gICAgICAgICAgICB7IHNsb3Q6IFwiZm9vdGVyXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHsga2V5OiBcImJhY2tcIiwgb246IHsgY2xpY2s6IF92bS5wZHdWaXNpYmxlQ2FuY2VsIH0gfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiIOWPliDmtoggXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImEtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcInN1Ym1pdFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJwcmltYXJ5XCIsIGxvYWRpbmc6IF92bS5zc2hWZXJpZnlMb2FkaW5nIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnB3ZFZpc2libGVIYW5kbGVPayB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiIOmqjCDor4EgXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9ob3N0TGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTgyZjcyNDQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaG9zdExpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9ob3N0TGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImE4MmY3MjQ0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3ZhbnRlcmMvdGVzdC93ZWJzc2gvd2Vic3NoX3dlYi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdhODJmNzI0NCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdhODJmNzI0NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdhODJmNzI0NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaG9zdExpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE4MmY3MjQ0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2E4MmY3MjQ0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvaG9zdE1hbmFnZS9ob3N0TGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTItMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hvc3RMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEyLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ob3N0TGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI1ZGNmYjFiMC12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hvc3RMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hODJmNzI0NCZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=