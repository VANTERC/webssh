<template>
  <div id="userLayout" class="user-layout-wrapper">
    <div class="container">
      <div class="top">
        <div class="header">
          <a href="/">
            <span class="title">WEBSSH</span>
          </a>
        </div>
        <div class="desc">web版主机终端管理器</div>
      </div>
      <div class="main">
        <a-form
          id="formLogin"
          class="user-layout-login"
          ref="formLogin"
          :form="form"
          @submit="handleSubmit"
        >
          <a-tabs
            :activeKey="customActiveKey"
            :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' }"
            @change="handleTabClick"
          >
            <a-tab-pane key="tab1" tab="用户名密码登录">
              <a-alert
                v-if="isLoginError"
                type="error"
                showIcon
                style="margin-bottom: 24px;"
                message="用户名或密码错误（admin/ant.design )"
              />
              <a-form-item>
                <a-input
                  size="large"
                  type="text"
                  placeholder="用户名"
                  v-decorator="[
                    'username',
                    {
                      rules: [
                        { required: true, message: '请输入用户名' },
                        { validator: handleUsernameOrEmail }
                      ],
                      validateTrigger: 'change'
                    }
                  ]"
                >
                  <a-icon
                    slot="prefix"
                    type="user"
                    :style="{ color: 'rgba(0,0,0,.25)' }"
                  />
                </a-input>
              </a-form-item>

              <a-form-item>
                <a-input-password
                  size="large"
                  placeholder="密码"
                  v-decorator="[
                    'password',
                    {
                      rules: [{ required: true, message: '请输入密码' }],
                      validateTrigger: 'blur'
                    }
                  ]"
                >
                  <a-icon
                    slot="prefix"
                    type="lock"
                    :style="{ color: 'rgba(0,0,0,.25)' }"
                  />
                </a-input-password>
              </a-form-item>
            </a-tab-pane>
          </a-tabs>

          <a-form-item style="margin-top:24px">
            <a-button
              size="large"
              type="primary"
              htmlType="submit"
              class="login-button"
              :loading="state.loginBtn"
              :disabled="state.loginBtn"
              >确定</a-button
            >
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
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
  created () {},
  mounted () {
    document.body.classList.add('userLayout');
  },
  methods: {
    // handler
    handleUsernameOrEmail (rule, value, callback) {
      const { state } = this;
      const regex = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
      if (regex.test(value)) {
        state.loginType = 0;
      } else {
        state.loginType = 1;
      }
      callback();
    },
    handleTabClick (key) {
      this.customActiveKey = key;
      // this.form.resetFields()
    },
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, fieldsValue) => {
        if (err) {
          return;
        } else {
          let data = {
            userName: fieldsValue.username,
            password: fieldsValue.password
          };
          this.$api.user.login(data).then(res=>{
            let userInfo = {
              userName: res.data.userName,
              userId: res.data.userId,
              token: res.data.token
            };
            this.$store.commit('SET_USERINFO', userInfo);
            this.state.loginBtn = true;
            this.loginSuccess();
          });
        }
      });
    },
    getCaptcha () {},
    stepCaptchaCancel () {
      this.Logout().then(() => {
        this.loginBtn = false;
        this.stepCaptchaVisible = false;
      });
    },
    loginSuccess () {
      // 延迟 1 秒显示欢迎信息
      setTimeout(() => {
        this.$notification.success({
          message: '欢迎',
          description: '欢迎回来'
        });
      }, 1000);
      this.$router.push({ path: '/index' });
      this.isLoginError = false;
    },
    requestFailed (err) {
      this.isLoginError = true;
      this.$notification['error']({
        message: '错误',
        description:
          ((err.response || {}).data || {}).message ||
          '请求出现错误，请稍后再试',
        duration: 4
      });
    }
  },
  beforeDestroy () {
    document.body.classList.remove('userLayout');
  }
};
</script>

<style lang="less" scoped>
#userLayout.user-layout-wrapper {
  height: 100%;

  .container {
    width: 100%;
    min-height: 100%;
    background-size: 100%;
    padding: 110px 0 144px;
    position: relative;

    a {
      text-decoration: none;
    }

    .top {
      text-align: center;

      .header {
        height: 44px;
        line-height: 44px;

        .badge {
          position: absolute;
          display: inline-block;
          line-height: 1;
          vertical-align: middle;
          margin-left: -12px;
          margin-top: -10px;
          opacity: 0.8;
        }

        .logo {
          height: 44px;
          vertical-align: top;
          margin-right: 16px;
          border-style: none;
        }

        .title {
          font-size: 33px;
          color: rgba(0, 0, 0, 0.85);
          font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
          font-weight: 600;
          position: relative;
          top: 2px;
        }
      }
      .desc {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.45);
        margin-top: 12px;
        margin-bottom: 40px;
      }
    }

    .main {
      min-width: 260px;
      width: 368px;
      margin: 0 auto;

      .user-layout-login {
        label {
          font-size: 14px;
        }

        .getCaptcha {
          display: block;
          width: 100%;
          height: 40px;
        }

        .forge-password {
          font-size: 14px;
        }

        button.login-button {
          padding: 0 15px;
          font-size: 16px;
          height: 40px;
          width: 100%;
        }

        .user-login-other {
          text-align: left;
          margin-top: 24px;
          line-height: 22px;

          .item-icon {
            font-size: 24px;
            color: rgba(0, 0, 0, 0.2);
            margin-left: 16px;
            vertical-align: middle;
            cursor: pointer;
            transition: color 0.3s;

            &:hover {
              color: #1890ff;
            }
          }

          .register {
            float: right;
          }
        }
      }
    }

    .footer {
      position: absolute;
      width: 100%;
      bottom: 0;
      padding: 0 16px;
      margin: 48px 0 24px;
      text-align: center;

      .links {
        margin-bottom: 8px;
        font-size: 14px;
        a {
          color: rgba(0, 0, 0, 0.45);
          transition: all 0.3s;
          &:not(:last-child) {
            margin-right: 40px;
          }
        }
      }
      .copyright {
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
      }
    }
  }
}
</style>
