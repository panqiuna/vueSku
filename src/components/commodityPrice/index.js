import goodsPrice from './components/goodsPrice';

/* istanbul ignore next */
goodsPrice.install = function(Vue) {
  Vue.component(goodsPrice.name, goodsPrice);
};

export default goodsPrice;
