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
				pageindex: 1,
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
				var randomnum = parseInt(Math.random() * 14)
				let result = await myRequestGet(
					"/wscshop/goods/goodsByTagAlias.json?kdt_id=10056586&alias=" + this.tags[randomnum])
				if (result.code === 0) {
					this.goods = [...this.goods, ...result.data.list];
				}
			},
		},
		components: {
			goodlist,
			uniLoadMore
		}
	}
</script>

<style lang="scss">
</style>
