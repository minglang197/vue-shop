/**
 * 统一管理ajax的请求，也就是说所有的ajax请求路径都在此处进行统一维护
 */

// 0. 引入二次封装好的axios对象
import ajax from './ajax'
import mockAjax from "@/mock/mockAjax";
// 1. 定义获取三级导航的接口函数
// 带Listdata表示响应回来的数据是数组格式
// req开头，一般表示一个请求的函数
// export const reqGetCategoryListData = () => {
//   return ajax.get('/api/product/getBaseCategoryList')
// }
// 上面的函数，简写成如下形式
export const reqGetCategoryListData = () => ajax.get('/api/product/getBaseCategoryList')
export const reqBannerListData = () =>mockAjax.get('/banner')
export const reqFloorListData = () =>mockAjax.get('/floor')