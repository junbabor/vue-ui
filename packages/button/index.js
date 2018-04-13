import vButton from './src/button';

/* istanbul ignore next */
vButton.install = function(Vue) {
  Vue.component(vButton.name, vButton);
};

export default vButton;
