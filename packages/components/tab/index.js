import Tab from './src/main.vue'

Tab.install = function(Vue) {
    Vue.component(Tab.name, Tab)
}

export default Tab