<template>
  <pro-layout
    :title="title"
    :collapsed="collapsed"
    :theme="theme"
    :menus="menus"
    :layout="layout"
    :contentWidth="contentWidth"
    :auto-hide-header="autoHideHeader"
    :mediaQuery="query"
    :isMobile="isMobile"
    :handleMediaQuery="handleMediaQuery"
    :handleCollapse="handleCollapse"
    :logo="LogoImg"
    :siderWidth="siderWidth"
  >
    <template v-slot:rightContentRender>
      <right-content
        :top-menu="layout === 'topmenu'"
        :is-mobile="isMobile"
        :theme="theme"
      />
    </template>
    <template v-slot:footerRender>
      <global-footer />
    </template>
    <router-view />
  </pro-layout>
</template>

<script>
import { routerMap } from 'router/router.config';
import RightContent from '@/components/GlobalHeader/RightContent';
import GlobalFooter from '@/components/GlobalFooter';
import LogoImg from '@/assets/logo.png';
export default {
  name: 'BasicLayout',
  data () {
    return {
      LogoImg: LogoImg,
      // 设置侧边栏宽度
      siderWidth: 276,
      // 路由
      menus: [],
      // 主题 'dark' | 'light'
      theme: 'dark',
      // 左侧头部标题
      title: 'Webssh',
      // 侧栏收起状态
      collapsed: false,
      // 自动隐藏头部栏
      autoHideHeader: false,
      // 媒体查询
      query: {},
      // 布局类型
      layout: 'sidemenu', // 'sidemenu', 'topmenu'
      // 定宽: true / 流式: false
      contentWidth: false,
      // 是否手机模式
      isMobile: false
    };
  },
  created () {
    const routes = routerMap.find(item => item.path === '/index');
    this.menus = (routes && routes.children) || [];
  },
  methods: {
    handleMediaQuery (val) {
      this.query = val;
      if (this.isMobile && !val['screen-xs']) {
        this.isMobile = false;
        return;
      }
      if (!this.isMobile && val['screen-xs']) {
        this.isMobile = true;
        this.collapsed = false;
      }
    },
    handleCollapse (val) {
      this.collapsed = val;
    }
  },
  components: {
    RightContent,
    GlobalFooter
  }
};
</script>

<style lang="less" scoped>
@import 'BasicLayout.less';
</style>
