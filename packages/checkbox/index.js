import vCheckbox from './src/main';

/* istanbul ignore next */
vCheckbox.install = function(Vue) {
  Vue.component(vCheckbox.name, vCheckbox);
};

export default vCheckbox;
