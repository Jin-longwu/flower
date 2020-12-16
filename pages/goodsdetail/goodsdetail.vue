<template>
	<view class="goods">
		<swiper indicator-dots>
			<swiper-item v-for="(item,index) in lunboinfo" :key="item.alias">
				<image :src="item.url"></image>
			</swiper-item>
		</swiper>
		<view class="good_info">
			<view class="price">
				<text>￥{{info[0].price/100}}</text>
				<text>￥{{origin}}</text>
			</view>
			<view class="goods_title">{{title}}</view>
			<view class="goods_nav">
				<uni-goods-nav :fill="true" :button-group="buttonGroup" @click="onClick" @buttonClick="buttonClick"></uni-goods-nav>
			</view>
		</view>
		<view class="good_detail">
			<view class="tit">详情介绍</view>
			<view class="content">
				<!-- #ifdef MP-WEIXIN|H5 -->
				<rich-text :nodes="content"></rich-text>
				<!-- #endif -->

				<!-- #ifdef MP-ALIPAY -->
				<rich-text :nodes="htmlNodes"></rich-text>
				<!-- #endif -->
			</view>
		</view>

	</view>
</template>


<script>
	import {
		mapState,
		mapMutations,
		mapGetters
	} from 'vuex'
	import {
		myRequestGet
	} from '@/utils/request.js'
	import {
		formatRichText
	} from '@/utils/format.js'
	import parse from '@/utils/htmlparser.js';
	import uniGoodsNav from '@/components/uni-ui/uni-goods-nav/uni-goods-nav.vue'
	export default {
		data() {
			return {
				alias: "",
				id: "",
				info: [],
				origin: "",
				htmlNodes: [],
				title: "",
				content: {},
				lunboinfo: [],
				price: "",
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
				]
			}
		},
		methods: {
			...mapMutations({
				addToCarts: 'addToCarts'
			}),
			async getDetail() {
				const res = await myRequestGet('/wscgoods/weapp/detail.json?alias=' + this.alias)
				this.info = res.data.goodsData.skuInfo.skuPrices
				this.origin = res.data.goodsData.goods.origin
				this.title = res.data.goodsData.goods.title
			},
			async getContent() {
				const res = await myRequestGet('/wscshop/goods/showcase-components.json?kdt_id=10056586&alias=' + this.alias)
				this.content = formatRichText(res.data.components[0].content)
				//#ifdef MP-ALIPAY
				//支付宝小程序rich-text不支持字符串，需要是nodes数组
				this.htmlNodes = parse(this.content)
				//#endif
			},
			async getLunbo() {
				const res = await myRequestGet('/wscgoods/weapp/detail.json?alias=' + this.alias)
				this.lunboinfo = res.data.goodsData.goods.pictures
			},
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none',
				});

			},
			buttonClick(e) {
				if (e.index == 0) {
					//加入购物车
					var good = {
						alias: this.alias,
						sellprice: this.info[0].price / 100,
						buynum: 1,
						title: this.title,
						img: this.lunboinfo[0].url
					}
					this.addToCarts(good)
					console.log(good, "gggggggggggg")
				} else {
					uni.showToast({
						title: "暂未开发此功能！",
						duration: 2000
					})
				}
				console.log(good.img, "6666666666666666666666666666666")
			}
		},
		onLoad(options) {
			this.alias = options.alias;
			this.getDetail();
			this.getContent();
			this.getLunbo()
		},
		components: {
			uniGoodsNav
		}
	}
</script>

<style lang="scss">
	.goods {
		swiper {
			height: 750rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}

	.good_info {
		padding: 10px;
		position: relative;

		.price {
			font-size: 35rpx;
			color: pink;
			line-height: 80rpx;

			text:nth-child(2) {
				color: #ccc;
				font-size: 28rpx;
				text-decoration: line-through;
				margin-left: 20rpx;
			}
		}

		.goods_title {
			font-size: 32rpx;
			line-height: 60rpx;
		}

		.goods_nav {
			position: fixed;
			bottom: 0;
			width: 100%;
		}
	}

	.good_detail {
		padding-bottom: 50px;

		.tit {
			font-size: 32rpx;
			padding-left: 10px;
			border-bottom: 1px solid #eee;
			line-height: 70rpx;
		}

		.content {
			padding: 10px;
			font-size: 28rpx;
			color: #333;
			line-height: 50rpx;
		}

	}
</style>
