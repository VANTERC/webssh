import TerminalConsole from './TerminalConsole/index.vue';
import FilesManage from './FilesManage/index.vue';
const components = [
  TerminalConsole,
  FilesManage
];
const install = function (Vue) {
  if (install.installed) return;
  components.map(component => {
    Vue.component(component.name, component);
  });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
};