import vTab from './src/main';

/* istanbul ignore next */
vTab.install = function(Vue) {
  Vue.component(vTab.name, vTab);
};

export default vTab;
