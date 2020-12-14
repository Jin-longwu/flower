<template>
	<view class="home">
		<swiper indicator-dots :autoplay="true" :interval="5000" circular>
			<swiper-item v-for="item in swipers" :key="item.link_id">
				<image :src="item.image_url"></image>
			</swiper-item>
		</swiper>
		<image :src="lujin" mode="widthFix"></image>
		
		
		<uni-grid :column="2">
			   <uni-grid-item v-for="item in list" :key="item.link_id">
				       <!-- <view :class="item.icons"  @click="goSuperMarket(item)"></view> -->  
				     <image :src="item.image_url" mode="widthFix"></image>
				   </uni-grid-item>    
		</uni-grid>




	</view>

</template>

<script>
	import uniGrid from "@/components/uni/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni/uni-grid-item/uni-grid-item.vue"
	import {
		myRequestGet
	} from '@/utils/zgrequest.js'

	export default {
		data() {
			return {
				swipers: [],
				lujin: "",
				list:[],
			}
		},
		components: {
           uniGrid,
		   uniGridItem
		},
		onLoad() {
			this.getSwipers();
		},
		methods: {
			async getSwipers() {
				let result = await myRequestGet(
					"/wscshop/weapp/homepage_detail.json?app_id=wx988cb9521c950d63&kdt_id=10056586&access_token=149a09b93a90072d40f6bfdb220b3d&platform=2&show_ad=true&check_multistore=true&async_components=goods%2Cump_limitdiscount&adaptor_components=text%2Ctitle%2Cstore%2Csearch%2Cfeature_video_search%2Ccoupon%2Ccube_v3%2Cnotice%2Cgroupon%2Cpoints_goods%2Cgoods%2Cgoods_recommend%2Ctag_list_top%2Ctag_list_left%2Cump_seckill"
				);
				this.swipers = result.data.components[1].sub_entry;
				console.log(this.swipers);
				this.lujin = result.data.components[2].sub_entry[0].image_url;
				// console.log(this.lujin);
				this.list = result.data.components[3].items;
				//console.log(this.list)
			},

			// async getProducts() {
			// 	let result = await myRequestGet("/wscshop/showcase/goodsList.json?app_id=wx988cb9521c950d63&kdt_id=10056586&access_token=4d97706cd5aa6e7e58253810c1a19e&tagId=61971791&page=3&pageSize=10&goodsIds=&goodsFrom=1&kdtId=10056586&offlineId=0&goodsNumber=30&isShowPeriod=1", {
			// 		pageindex: this.pageindex,
			// 	});
			// 	if (result.status === 0) {
			// 		this.goods = [...this.goods, ...result.message];
			// 	}

			//}
		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			height: 750rpx;

			swiper-item {
				image {
					width: 320px;
					height: 320px;
				}
			}
		}

		image {
			width: 320px;

		}
		
		uni-grid{
	   
			uni-grid-item{
				height: 55px;
			image{
				 width: 160px;
				
				
				
			}	
			}
			
		}

	}
	
	
	.uni-grid-item--border.data-v-3de9aced {
		border: 0px;
	}
</style>
