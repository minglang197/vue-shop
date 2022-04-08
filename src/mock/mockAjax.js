/**
 * 此文件是用来二次封装axios对象的
 * 因为当前项目的很多请求的目标地址一样的,如果将来有所变动，在此文件中统一修改
 * 还可以统一设置超时时间，及请求头或是响应回来内容
 */

// 1. 引入axios模块
import axios from 'axios'
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'
// 2. 创建实例对象
const mockAjax = axios.create({
    baseURL: '/mock',
    timeout: 1000
});
// 3. 设置请求拦截器
mockAjax.interceptors.request.use(config => {
    // 进度条开始
    NProgress.start()
    // 只要发送请求，就会先走这个请求拦截器
    // 可以在请求拦截器当中做一些统一的操作，比如说设置进度条，设置请求头
    // config是与请求相关的参数信息
    // console.log('config',config);
    return config
})
// 4. 设置响应拦截器
mockAjax.interceptors.response.use(response => {
    NProgress.done()
    // 只要服务器响应回来了信息，一定会先走响应拦截器，再走后续的流程
    // console.log('response', response);
    // axios对象对于响应回来的数据进行了进一步的封装，但是我们只需要response.data中的数据即可
    // response.data是服务器端真正响应回来的原始数据
    return response.data
}, error => {
    NProgress.done()
    // 如果失败了，此时应该返回一个失败的Promise对象，而不能是其它非Promise对象
    // 如果返回的不是一个真正的失败的Promise对象，后续方法仍然会当成成功来处理
    // console.log('error', error);
    // 按如下来返回一个失败的Promise对象，那么后续的then方法就不会当成成功来处理了
    return Promise.reject(new Error(error.message))
})
// 5. 导出对象
export default mockAjax