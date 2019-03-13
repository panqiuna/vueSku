import YuTable from './src/main';

/* istanbul ignore next */
YuTable.install = function(Vue) {
  Vue.component(YuTable.name, YuTable);
};

export default YuTable;