<template>
	<view class="home">
		<goodlist :goods="goods"></goodlist>
		<uni-load-more v-if="!flag" :status="'loading'"></uni-load-more>
		<uni-load-more v-else :status="'noMore'"></uni-load-more>
	</view>
</template>

<script>
	import uniLoadMore from "@/components/uni-ui/uni-load-more/uni-load-more.vue";
	import {
		myRequestGet
	} from "@/utils/request.js";
	import goodlist from '@/components/goodslist/goodslist.vue';
	export default {
		data() {
			return {
				flag: false,
				alias: "",
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				],
				goods: [],
				pageindex: 1
			}
		},
		onLoad() {
			this.getProducts();
		},
		onReachBottom() {
			this.pageindex++;
			if (this.pageindex <= 5) {
				this.getProducts();
			} else {
				//没有更多数据了
				this.flag = true;
			}
		},
		methods: {
			async getProducts() {
				let result = await myRequestGet("/wscshop/goods/goodsByTagAlias.json?alias=n56z1hy61&kdt_id=10056586")
				if (result.code === 0) {
					this.goods = [...this.goods, ...result.data.list];
				}
			}
		},
		components: {
			goodlist,
			uniLoadMore
		}
	}
</script>

<style lang="scss">
</style>
