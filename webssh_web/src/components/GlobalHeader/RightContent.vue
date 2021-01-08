<template>
  <div :class="wrpCls">
    <avatar-dropdown
      :menu="showMenu"
      :current-user="currentUser"
      :theme="theme"
      :topMenu="topMenu"
      class="ant-pro-global-header-index-action"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AvatarDropdown from './AvatarDropdown';
export default {
  name: 'RightContent',
  components: {
    AvatarDropdown
  },
  props: {
    prefixCls: {
      type: String,
      default: ''
    },
    isMobile: {
      type: Boolean,
      default: () => false
    },
    topMenu: {
      type: Boolean,
      required: true
    },
    theme: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      showMenu: true,
      currentUser: {}
    };
  },
  computed: {
    ...mapGetters(['UserInfo']),
    wrpCls () {
      return {
        'ant-pro-global-header-index-right': true,
        [`ant-pro-global-header-index-${
          this.isMobile || !this.topMenu ? 'light' : this.theme
        }`]: true
      };
    }
  },
  mounted () {
    setTimeout(() => {
      this.currentUser = {
        name: this.UserInfo.userName
      };
    }, 1500);
  }
};
</script>
