import demo from './src/main.vue'


demo.install = function(Vue) {

    Vue.component(demo.name,demo)

}

export default demo ;

