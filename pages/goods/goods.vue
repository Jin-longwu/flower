<template>
	<view>
		<goodlist :goods="goods"></goodlist>
		<uni-load-more v-if="!flag" :status="'loading'"></uni-load-more>
		<uni-load-more v-else :status="'noMore'"></uni-load-more>
	</view>
</template>

<script>
	import uniLoadMore from "@/components/uni-ui/uni-load-more/uni-load-more.vue"
	import goodlist from '@/components/goodslist/goodslist.vue'
	import {
		myRequestGet
	} from '@/utils/request.js'
	export default {
		data() {
			return {
				flag: false,
				goods: [],
				alias: "",
				tags: [
					"63qeicqw",
					"p8s449xh",
					"8rtak5n5",
					"n56z1hy61",
					"481x6cbp",
					"3bxno8e61",
					"04yblbhe1",
					"qnp9b1k3",
					"jdmsmq861",
					"rwablbw3",
					"c7lu9fz3",
					"jg2dsyjl",
					"2tnrf49a",
					"0hrft5ym"
				],
				randomnum: ""
			}
		},
		onLoad() {
			this.getProducts();
		},
		methods: {
			async getProducts() {
				var randomnum = parseInt(Math.random() * 14)
				console.log(randomnum, "nnnnnnnnnnnnnnnnnnnnnn")
				let result = await myRequestGet(
					"/wscshop/goods/goodsByTagAlias.json?kdt_id=10056586&alias=" + this.tags[randomnum])
				console.log(result, "rrrrrrrrrrrrrr")
				if (result.code === 0) {
					this.goods = [...this.goods, ...result.data.list];
				}
			},
		},
		onReachBottom() {
			this.pageindex++;
			if (this.pageindex <= 2) {
				this.getProducts();
			} else {
				//没有更多数据了
				this.flag = true;
			}
		},
		onPullDownRefresh() {
			this.pageindex = 1;
			this.flag = false;
			this.goods = [];
			//请求完成之后停止下拉刷新
			this.getProducts().then(() => {
				uni.stopPullDownRefresh()
			});
		},
		components: {
			uniLoadMore,
			goodlist
		}
	}
</script>
