import Popout from './src/index.vue';

/* istanbul ignore next */
Popout.install = function(Vue) {
  Vue.component(Popout.name, Popout);
};

export default Popout;
