<template>
	<view>
		<view class="shop" v-for="(item,index) in carts" :key="index">
			<checkbox class="check" ref="checkbox" functionType="page" :checked="pageChecked" @pageClick="changeBoxFromPage(index)"></checkbox>
			<view class="carts">
				<text class="title">{{item.title}}</text>
				<text class="price">￥{{item.sellprice}}</text>
				<!-- <image class="pic" src="../../static/1.JPG"></image> -->
				<image :src="item.url" class="pic"></image>
				<view class="change">
					<text class="less" @click="reduce(index)">-</text>
					<text class="num">{{item.buynum}}</text>
					<text class="more" @click="plus(index)">+</text>
				</view>
			</view>
		</view>
		<view>
			<goodlist :goods="goods"></goodlist>
			<uni-load-more v-if="!flag" :status="'loading'"></uni-load-more>
			<uni-load-more v-else :status="'noMore'"></uni-load-more>
		</view>
		<view class="account">
			<view class="left">
				<checkbox class="checkall" ref="checkboxall" functionType="page" :checked="pageChecked" @pageClick="changeBoxFromPage(index)"></checkbox>
				<text class="all">全选</text>
			</view>
			<text class="and">合计：￥{{account}}</text>
			<input type="button" value="结算" class="jiesuan" />
		</view>
	</view>
</template>

<script>
	import goodlist from '@/components/goodslist/goodslist.vue';
	import checkbox from "../../components/checkbox/checkbox.vue"
	import uniLoadMore from "@/components/uni-ui/uni-load-more/uni-load-more.vue";
	import {
		mapState,
		mapMutations,
		mapGetters
	} from 'vuex'
	import {
		myRequestGet
	} from "@/utils/request.js"
	export default {
		data() {
			return {
				pageChecked: false,
				good: {},
				goods: [],
				newgood: {},
				flag: false,
				alias: "",
				account: 0,
				n: "",
				p: "",
				pageindex: 1,
				num: ""
			}
		},
		methods: {
			...mapMutations({
				addToCarts: "addToCarts",
				changeCarts: "changeCarts"
			}),
			changeBoxFromPage(index) {
				if (this.$refs.checkbox[index].checked) {
					this.$refs.checkbox[index].checked = this.pageChecked
				} else {
					this.$refs.checkbox[index].checked = !this.pageChecked
					var n = this.carts[index].buynum
					var p = this.carts[index].sellprice
					this.account += n * p
				}

			},
			reduce(index) {
				if (this.carts[index].buynum === 0) {
					uni.showToast({
						title: "数量已为空！",
						duration: 2000
					})
				} else {
					this.num = this.carts[index].buynum - 1
					var good = {
						alias: this.carts[index].alias,
						sellprice: this.carts[index].sellprice,
						buynum: this.num,
						title: this.carts[index].title,
						url: this.carts[index].url
					}
					this.carts[index] = { ...good
					}
					var newgood = { ...this.carts[index]
					}
					this.changeCarts(newgood)
					var p = this.carts[index].sellprice
					this.account -= p
				}
				console.log(newgood, "99999999999999999999999999999")

			},
			plus(index) {
				this.num = this.carts[index].buynum + 1
				var good = {
					alias: this.carts[index].alias,
					sellprice: this.carts[index].sellprice,
					buynum: this.num,
					title: this.carts[index].title,
					url: this.carts[index].url
				}
				this.carts[index] = { ...good
				}
				var newgood = { ...this.carts[index]
				}
				this.changeCarts(newgood)
				var p = this.carts[index].sellprice
				this.account += p
				console.log(newgood, "99999999999999999999999999999")
			},
			async getProducts() {
				let result = await myRequestGet("/wscshop/goods/goodsByTagAlias.json?alias=n56z1hy61&kdt_id=10056586")
				if (result.code === 0) {
					this.goods = [...this.goods, ...result.data.list];
				}
			},
		},
		computed: {
			...mapState({
				carts: "carts"
			})
		},
		onLoad() {
			this.getProducts();
		},
		onReachBottom() {
			this.pageindex++;
			if (this.pageindex <= 3) {
				this.getProducts();
			} else {
				//没有更多数据了
				this.flag = true;
			}
		},
		components: {
			checkbox,
			goodlist,
			uniLoadMore
		}
	}
</script>

<style lang="scss" scoped>
	.account {
		width: 750rpx;
		height: 140rpx;
		position: fixed;
		bottom: 0;
		background-color: yellow;
		display: flex;

		.left {
			width: 170rpx;
			height: 140rpx;
			position: absolute;
			left: 0;
		}

		.checkall {
			width: 44rpx;
			height: 44rpx;
			position: absolute;
			left: 20rpx;
			top: 50%;
			margin-top: -22rpx;
		}

		.all {
			width: 80rpx;
			line-height: 140rpx;
			position: absolute;
			left: 90rpx;
			font-size: 40rpx;
		}

		.and {
			font-weight: bold;
			font-size: 40rpx;
			position: absolute;
			bottom: 44rpx;
			right: 320rpx;
			flex: 1;
		}

		.cost {
			font-size: 40rpx;
			position: absolute;
			bottom: 40rpx;
			right: 220rpx;
		}

		.jiesuan {
			width: 180rpx;
			height: 140rpx;
			position: absolute;
			right: 0;
			bottom: 0;
			line-height: 140rpx;
			font-size: 40rpx;
			color: red;
			background-color: black;
			text-align: center;
		}
	}

	.shop {
		width: 750rpx;
		height: 200rpx;
		position: relative;

		.check {
			width: 44rpx;
			height: 44rpx;
			position: absolute;
			left: 10rpx;
			top: 50%;
			margin-top: -22rpx;
		}

		.carts {
			width: 680rpx;
			height: 200rpx;
			position: relative;
			margin: 20rpx 70rpx 0;
			border-bottom: 1px solid grey;

			.change {
				width: 170rpx;
				height: 42rpx;
				position: absolute;
				bottom: 22rpx;
				right: 15rpx;
				display: flex;

				.num {
					flex: 1;
					text-align: center;
					line-height: 42rpx;
				}

				.less {
					width: 42rpx;
					heihgt: 42rpx;
					background-color: grey;
					position: absolute;
					bottom: 0;
					left: 0;
					text-align: center;
					line-height: 42rpx;
				}

				.more {
					width: 42rpx;
					heihgt: 42rpx;
					background-color: grey;
					position: absolute;
					bottom: 0;
					right: 0;
					text-align: center;
					line-height: 42rpx;
				}
			}



			.title {
				font-size: 28rpx;
				position: absolute;
				top: 0;
				left: 212rpx;
				width: 420rpx;
			}

			.price {
				color: green;
				font-size: 34rpx;
				position: absolute;
				bottom: 22rpx;
				left: 212rpx;
			}

			.pic {
				width: 180rpx;
				height: 180rpx;
				position: absolute;
				top: 0;
				left: 0;
			}


		}
	}
</style>
