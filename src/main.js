// 导入第三方包
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import Filters from './filter';
import 'element-ui/lib/theme-chalk/index.css'
// 导入style.css样式
import './css/style.css';

// 启用vue插件
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Filters);

// 1.3把axios和api配置对象那个注入到Vue原型中，这样组件实例就可以直接访问
import axios from './js/axios-config.js';
import api from './js/api-config.js';
Vue.prototype.$http = axios;
Vue.prototype.$api = api;

// 导入跟组建
import AppComponent from './component/App.vue';
// 导入一个路由实例
import router from './router';
new Vue({
    el: '#app',
    // render虚拟创建节点
    render: c => c(AppComponent), //es6简写写法
    router, //es6的简写
    store: new Vuex.Store({
        // 存储数据
        state: {
            shopcartTotal: 0
        },
        // 获取状态，记住以属性的方式使用
        getters: {
            // 计算购物车商品总数
            shopcartTotal(state) {
                return state.shopcartTotal;
            }
        },
        // 修改状态，记住要commit方法调用
        mutations: {
            // 添加数量
            upShopcartTotal(state, number) {
                state.shopcartTotal += number;

            }
        }
    })
});