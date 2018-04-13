import vRadio from './src/main';

/* istanbul ignore next */
vRadio.install = function(Vue) {
  Vue.component(vRadio.name, vRadio);
};

export default vRadio;
