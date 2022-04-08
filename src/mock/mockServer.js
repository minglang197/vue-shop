import mockAjax from './mockAjax'
import Mock from 'mockjs'

import banner from './banner.json'
import floor from './floor.json'

//参数有三个，路径，请求方式，相应的数据格式
Mock.mock('/mock/banner','get',{code:200,status:'成功',data:banner})
Mock.mock('/mock/floor','get',{code:200,status:'成功',data:floor})

mockAjax.get('/banner').then((result)=> console.log(result) )