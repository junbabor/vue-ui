import vPagination from './src/pagination';

/* istanbul ignore next */
vPagination.install = function(Vue) {
  Vue.component(vPagination.name, vPagination);
};

export default vPagination;
