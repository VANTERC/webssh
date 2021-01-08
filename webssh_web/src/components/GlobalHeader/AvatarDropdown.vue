<template>
  <div>
    <a-dropdown v-if="currentUser && currentUser.name" placement="bottomRight">
      <span class="ant-pro-account-avatar">
        <a-avatar
          size="small"
          style="margin-right:5px;"
          src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          class="antd-pro-global-header-index-avatar"
        />
        <span :style="colorStyle">{{ currentUser.name }}</span>
      </span>
      <template v-slot:overlay>
        <a-menu class="ant-pro-drop-down menu" :selected-keys="[]">
          <a-menu-item v-if="menu" key="center" @click="updateUserInfo">
            <a-icon type="user" />修改信息
          </a-menu-item>
          <a-menu-divider v-if="menu" />
          <a-menu-item key="logout" @click="handleLogout">
            <a-icon type="logout" />退出登录
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
    <span v-else>
      <a-spin size="small" :style="{ marginLeft: 8, marginRight: 8 }" />
    </span>
    <a-modal
      width="400px"
      title="修改信息"
      :visible="userInfoVisible"
      @ok="userHandleOk"
      cancelText="取消"
      okText="确定"
      @cancel="userHandleCancel"
    >
    <a-form :form="form">
      <a-form-item>
        <a-input v-decorator="[
          'username',
          { rules: [{ required: true, message: '请输入用户名' }] },
        ]" placeholder="用户名" :maxLength="10">
          <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input-password v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入密码' }] },
        ]" type="password" placeholder="密码" :maxLength="20">
          <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
        </a-input-password>
      </a-form-item>
      <a-icon type="warning" style="color:#ff6400;"/> <span style="color: #ff0000;font-size: 12px;">注：修改成功后将会重新登录</span>
    </a-form>
    </a-modal>
  </div>
</template>

<script>
import { Modal } from 'ant-design-vue';
export default {
  name: 'AvatarDropdown',
  data () {
    return {
      form: this.$form.createForm(this),
      userInfoVisible: false,
      colorStyle: {},
    };
  },
  props: {
    currentUser: {
      type: Object,
      default: () => null
    },
    menu: {
      type: Boolean,
      default: true
    },
    theme: {
      type: String,
      default: 'dark'
    },
    topMenu: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.colorStyle = {
      color: this.theme === 'dark' && this.topMenu ? '#fff' : ''
    };
  },
  methods: {
    userHandleOk (){
      let _this = this;
      this.form.validateFields((err, values) => {
        if (!err) {
          let data = {
            username: values.username,
            password: values.password,
            userId: this.$store.getters.UserInfo.userId
          };
          this.$api.user.updateUserInfo(data).then(res=>{
            this.userInfoVisible = false;
            this.$message.success(res.msg);
            setTimeout(() => {
              sessionStorage.clear();
              _this.$router.push({ name: 'login' });
            }, 1000);
          });
        }
      });
    },
    userHandleCancel (){
      this.userInfoVisible = false;
    },
    updateUserInfo () {
      this.form.resetFields();
      this.userInfoVisible = true;
    },
    handleLogout () {
      Modal.confirm({
        title: '提示',
        content: '确定要退出吗？',
        cancelText: '取消',
        okText: '退出',
        onOk: () => {
          sessionStorage.clear();
          this.$router.push({ name: 'login' });
        },
        onCancel () {}
      });
    }
  }
};
</script>

<style lang="less" scoped>
.ant-pro-drop-down {
  /deep/ .action {
    margin-right: 8px;
  }
  /deep/ .ant-dropdown-menu-item {
    min-width: 160px;
  }
}
</style>
