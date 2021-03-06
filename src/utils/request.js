import axios from 'axios';

// 创建axios对象
const service = axios.create({
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    baseURL: 'https://www.easy-mock.com/mock/5d22e06ce6f04f21fc5b6be7',
    timeout: 5000
})

service.interceptors.request.use( config => {
    return config;
}, error => {
    console.log(error);
    return Promise.reject();
})

service.interceptors.response.use(response => {
    if(response.status === 200){
        return response.data;
    }else{
        Promise.reject();
    }
}, error => {
    console.log(error);
    return Promise.reject();
})

export default service;   // 返回的就是axios对象