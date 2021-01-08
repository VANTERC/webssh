<template>
  <global-footer class="footer custom-render">
    <template v-slot:links>
      <!-- <a href="https://github.com/VANTERC" target="_blank">www.vanterc.com</a>
      <a href="https://github.com/VANTERC" target="_blank">www.vanterc.com</a>
      <a href="https://github.com/VANTERC" target="_blank">www.vanterc.com</a> -->
    </template>
    <template v-slot:copyright>
      <a href="https://github.com/VANTERC/webssh" target="_blank"><a-icon type="github" /> Github</a>
    </template>
  </global-footer>
</template>

<script>
import { GlobalFooter } from '@ant-design-vue/pro-layout';
export default {
  name: 'ProGlobalFooter',
  components: {
    GlobalFooter
  }
};
</script>
