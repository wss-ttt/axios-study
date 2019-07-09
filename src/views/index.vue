<template>
	<div class="test">
		<button @click = "send">发送请求(get方式)</button>
		<button @click = "send2">发送请求(post方式)</button>
	</div>
</template>
<script>
	import { fetchList,fetchList2 } from '@/api/user';
	export default{
		data(){
			return {
			}
		},
		methods:{
			// get 请求
			send(){
				// 不需要传递参数
				fetchList({
					id:1 // 此处用于测试 随便传递一个参数
				}).then((res)=>{
					console.log(res);
				});
			},
			// post 请求
			send2(){
				fetchList2({
					id:1     // 此处用于测试 随便传递一个参数
				}).then((res)=>{
					console.log(res);
				});
			}
		}
	}
</script>
<style>
</style>