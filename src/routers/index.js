import Vue from 'vue'
import VueRouter from "vue-router";
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'
import Undefined from '../pages/Undefined'

Vue.use(VueRouter)
const originPush = VueRouter.prototype.push  // 先将之前的存储到一个变量当中
const originReplace = VueRouter.prototype.replace // 同上

// 修改VueRouter原型上的push 用于解决重复跳转时报错的问题
VueRouter.prototype.push = function(location,okCallBack,errCallBack){
    if(okCallBack === undefined && errCallBack === undefined){
        // 上面的判断成立的话，表示没有传递这两个参数
        originPush.call(this,location).catch(()=>{})  // 统一处理报错的问题 一劳永逸
    } else {
        // 如果传了成功或是失败的回调，那么就以你传入的成功或是失败的回调为主
        originPush.call(this,location,okCallBack,errCallBack)
    }
}

// 修改VueRouter原型上的replace 用于解决重复跳转时报错的问题
VueRouter.prototype.replace = function(location,okCallBack,errCallBack){
    if(okCallBack === undefined && errCallBack === undefined){
        // 上面的判断成立的话，表示没有传递这两个参数
        originReplace.call(this,location).catch(()=>{})  // 统一处理报错的问题 一劳永逸
    }else {
        originReplace.call(this,location,okCallBack,errCallBack)
    }
}

const router = new VueRouter({
    routes:[
        {
            path:'/',
            redirect: '/home'
        },
        {
            path:'/home',
            name:'home',
            component: Home,
            meta: {
                isShowNav:true
            }
        },
        {
            path:'/login',
            name:'login',
            component: Login,
            meta:{
                isHidden: true
            }
        },{
            path:'/register',
            name:'register',
            component: Register,
            meta:{
                isHidden: true
            }
        },
        {
            path:'/search',
            name:'search',
            component: Search
        },
        {
            path:'*',
            component: Undefined
        },

    ]
})

export default router