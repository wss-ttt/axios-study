//两种写法都可以
import request from '@/utils/request'   // 导入axios对象
//import request from '../utils/request';

// 开始发送请求 来获取数据
export function fetchList(query) {
	return request({
		url: '/user/list',
		method: 'get', // 为get请求方式
		params: query
	})
}

export function fetchList2(query) {
	return request({
		url: '/user/list2',
		method: 'post', // 为post请求方式
		data: query
	})
}