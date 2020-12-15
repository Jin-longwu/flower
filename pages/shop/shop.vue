<template>
	<view class="shop1">
		<swiper indicator-dots :autoplay="true" :interval="2000" circular>
			<swiper-item v-for="item in shops1" :key='item'>
				<image :src="item"></image>
			</swiper-item>
		</swiper>
		<image :src="tubiao" class="tubiao"></image>
		<view class="word1">
			<text class="name">北京府中环店</text>
			<text class="address">
				<image src="../../static/icon/ditu.png"></image>王府井大街999号王府中环东座
			</text>
			<text class="time">
				<image src="../../static/icon/shijian.png"></image>
				周一至周日 11:00-22:00
			</text>
		</view>
	</view>
</template>

<script>
	import {
		myRequestGet
	} from '@/utils/zgrequest.js'
	export default {
		data() {
			return {
				shops1: [],
				tubiao: "",
			}
		},
		onLoad() {
			this.getShops1();
		},
		methods: {
			async getShops1() {
				const result = await myRequestGet(
					"/wscshop/weapp/feature_detail.json?app_id=wx988cb9521c950d63&kdt_id=10056586&access_token=4d97706cd5aa6e7e58253810c1a19e&alias=h2knlXzmCr&show_ad=true&check_multistore=true&check_chainstore=true&async_components=goods%2Cump_limitdiscount&adaptor_components=text%2Ctitle%2Cstore%2Csearch%2Cfeature_video_search%2Ccoupon%2Ccube_v3%2Cnotice%2Cgroupon%2Cpoints_goods%2Cgoods%2Cgoods_recommend%2Ctag_list_top%2Ctag_list_left%2Cump_seckill"
				);
				this.shops1 = result.data.components[2].store.images;
				this.tubiao = result.data.components[2].logo_url;
			},
		},
		onPullDownRefresh() {
			this.pageindex = 1;
			this.flag = false;
			this.shops = [];
			this.getShops().then(() => {
				uni.stopPullDownRefresh()
			});
		},
	}
</script>

<style lang="scss">
	.shop1 {
		swiper {
			height: 320rpx;

			swiper-item {
				image {
					height: 320rpx;
				}
			}
		}

		.tubiao {
			width: 150rpx;
			height: 150rpx;
			border-radius: 50%;
			left: 40rpx;
			top: 250rpx;
			position: absolute;
		}

		.word1 {
			width: 300px;
			margin-left: 10px;
			.name {
				margin-top: 60px;
				padding-bottom: 10px;
				font-size: 48rpx;
				display: block;
				border-bottom: 1px solid #C0C0C0;
			}
			.address {
				padding-top: 10px;
				padding-bottom: 10px;
				font-size: 32rpx;
				display: block;
				border-bottom: 1px solid #C0C0C0;
			}
			.time {
				padding-top: 10px;
				padding-bottom: 10px;
				font-size: 32rpx;
				display: block;
			}
		}
	}
</style>
