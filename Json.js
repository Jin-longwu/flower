/* 用户 */
const userInfo = {
	status: 1,
	data: {
		id: 1,
		mobile: 18888888888,
		nickname: 'Leo yo',
		portrait: 'http://img.61ef.cn/news/201409/28/2014092805595807.jpg'
	},
	msg: '提示'
}
/* 商品列表 */
const goodsList = [{
			image: "https://img.yzcdn.cn/upload_files/2020/09/22/FsjfEAE9_xicFaACQvaCFXQk0acV.jpg",
			image2: "http://pic.rmb.bdstatic.com/819a044daa66718c2c40a48c1ba971e6.jpeg",
			image3: "http://img001.hc360.cn/y5/M00/1B/45/wKhQUVYFE0uEZ7zVAAAAAMj3H1w418.jpg",
			title: "【9月限定款】秋日少女私语（需提前四天预定）",
			price: 500.00,
			sales: 51,
		},
		{
			image: "https://img.yzcdn.cn/upload_files/2020/09/22/FmYr_eJgC0TeZ7zIjRvEIj76UkHW.jpg",
			image2: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554013048&di=a3dc9fd1406dd7bad7fbb97b5489ec04&imgtype=jpg&er=1&src=http%3A%2F%2Fimg009.hc360.cn%2Fhb%2FnKo44ac2656F831c684507E3Da0E3a26841.jpg",
			image3: "http://img.zcool.cn/community/017a4e58b4eab6a801219c77084373.jpg",
			title: "温柔初粉亦心动（需提前两天预定）",
			price: 400.00,
			sales: 36,
		},
		{
			image: "https://img.yzcdn.cn/upload_files/2019/12/02/Fsj9KwLSqHkAg7XdQhA06B1nz2hT.jpg",
			image2: "http://m.360buyimg.com/n12/jfs/t247/42/1078640382/162559/3628a0b/53f5ad09N0dd79894.jpg%21q70.jpg",
			image3: "http://ikids.61kids.com.cn/upload/2018-12-29/1546070626796114.jpg",
			title: "完美搭档—秋色",
			price: 398.00,
			sales: 59,
		}, {
			image: "https://img.yzcdn.cn/upload_files/2018/09/07/FpDhGB4QQKNCohXx4xDSZXzOApcu.jpeg",
			image2: "http://images.jaadee.com/images/201702/goods_img/30150_d85aed83521.jpg",
			image3: "http://img13.360buyimg.com/popWaterMark/jfs/t865/120/206320620/138889/dcc94caa/550acedcN613e2a9d.jpg",
			title: "秋阳”花束（需提前两天预定）",
			price: 600.00,
			sales: 8,
		}, {
			image: "https://img.yzcdn.cn/upload_files/2020/09/16/FvPpFvpNdttHKTWrIrtrmG4U4CQS.jpeg",
			image2: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553418265666&di=d4a7f7eb0ae3c859edeb921641ee1c3a&imgtype=0&src=http%3A%2F%2Fimg003.hc360.cn%2Fy3%2FM02%2FF8%2F9F%2FwKhQh1TuSkGELIlQAAAAAPuLl4M987.jpg",
			image3: "http://img.ef43.com.cn/product/2016/8/05100204b0c.jpg",
			title: "【天秤座花束】永恒的完美（需提前两天预定）",
			price: 457.00,
			sales: 37,
		},
		{
			image: "https://img.yzcdn.cn/upload_files/2020/08/21/Fi_K0EOV_hgP09Udr1aPqf9x3onY.jpg",
			image2: "http://image5.suning.cn/uimg/b2c/newcatentries/0070158827-000000000622091973_2_800x800.jpg",
			image3: "http://img.61ef.cn/news/201903/20/2019032009251784.jpg",
			title: "【处女座花束】浪漫紫的无尽爱意（需提前两天预定）",
			price: 456.00,
			sales: 101,
	},
	{
		
			image: "https://img.yzcdn.cn/upload_files/2019/11/11/9c309b7a558be9e90db125aa88bff28f.jpg",
			image2: "http://image5.suning.cn/uimg/b2c/newcatentries/0070158827-000000000622091973_2_800x800.jpg",
			image3: "http://img.61ef.cn/news/201903/20/2019032009251784.jpg",
			title: "完美搭档—夏初",
			price: 398.00,
			sales: 96,
		},
		{
			image: "https://img.yzcdn.cn/upload_files/2019/11/11/9f552c97d4165f3b9f4899596182ff02.jpg",
			image2: "http://image5.suning.cn/uimg/b2c/newcatentries/0070158827-000000000622091973_2_800x800.jpg",
			image3: "http://img.61ef.cn/news/201903/20/2019032009251784.jpg",
			title: "完美搭档—简爱（需提前两天预定）",
			price: 566.00,
			sales: 74,
		},
		{
			image: "https://img.yzcdn.cn/upload_files/2019/11/11/d16e9195aa11324458cacd09a3df7a9b.jpg",
			image2: "http://image5.suning.cn/uimg/b2c/newcatentries/0070158827-000000000622091973_2_800x800.jpg",
			image3: "http://img.61ef.cn/news/201903/20/2019032009251784.jpg",
			title: "完美搭档—春雪（需提前两天预定）",
			price: 599.00,
			sales: 198,
		},
		{
			image: "https://img.yzcdn.cn/upload_files/2019/11/11/d97be8d9d8d832faff0bd638fa99268f.jpg",
			image2: "http://image5.suning.cn/uimg/b2c/newcatentries/0070158827-000000000622091973_2_800x800.jpg",
			image3: "http://img.61ef.cn/news/201903/20/2019032009251784.jpg",
			title: "完美搭档—闺蜜",
			price: 568.00,
			sales: 67,
		},
		{
			image: "https://img.yzcdn.cn/upload_files/2020/07/14/Fpl5mNn-tTO-KYJu_uHmsMuFtQtN.jpg",
			image2: "http://image5.suning.cn/uimg/b2c/newcatentries/0070158827-000000000622091973_2_800x800.jpg",
			image3: "http://img.61ef.cn/news/201903/20/2019032009251784.jpg",
			title: "反差萌狮子座”花束（需提前两天预定）",
			price: 499.00,
			sales: 76,
		},
		{
			image: "https://img.yzcdn.cn/upload_files/2020/06/15/FkNNzpLb44aBHTHhmazWof7Vqi9I.jpg",
			image2: "http://image5.suning.cn/uimg/b2c/newcatentries/0070158827-000000000622091973_2_800x800.jpg",
			image3: "http://img.61ef.cn/news/201903/20/2019032009251784.jpg",
			title: "阳光巨蟹座”花束（需提前两天预定）",
			price: 309.00,
			sales: 70,
		},
		{
			image: "https://img.yzcdn.cn/upload_files/2020/05/18/Fq2VWlif7tMcWe7Q1PtNQW-X2jaU.jpg",
			image2: "http://image5.suning.cn/uimg/b2c/newcatentries/0070158827-000000000622091973_2_800x800.jpg",
			image3: "http://img.61ef.cn/news/201903/20/2019032009251784.jpg",
			title: "动情双子座”花束（需提前两天预定）",
			price: 469.00,
			sales: 35,
		},
		{
			image: "https://img.yzcdn.cn/upload_files/2020/04/14/FikWpsGsXY0GMmlKPbd1ZHVQZsxE.png",
			image2: "http://image5.suning.cn/uimg/b2c/newcatentries/0070158827-000000000622091973_2_800x800.jpg",
			image3: "http://img.61ef.cn/news/201903/20/2019032009251784.jpg",
			title: "遇见金牛座”花束（需提前两天预定）",
			price: 439.00,
			sales: 105,
		},
		{
			image: "https://img.yzcdn.cn/upload_files/2020/03/16/FkSS6KNGo5q945Hk6yQlN9oN_qCO.jpeg",
			image2: "http://image5.suning.cn/uimg/b2c/newcatentries/0070158827-000000000622091973_2_800x800.jpg",
			image3: "http://img.61ef.cn/news/201903/20/2019032009251784.jpg",
			title: "纯真白羊座”花束（需提前两天预定）",
			price: 639.00,
			sales: 45,
		},
		{
			image: "https://img.yzcdn.cn/upload_files/2020/01/20/FuJA23N6qOHKctIbtXdH4Zu4nZF9.jpeg",
			image2: "http://image5.suning.cn/uimg/b2c/newcatentries/0070158827-000000000622091973_2_800x800.jpg",
			image3: "http://img.61ef.cn/news/201903/20/2019032009251784.jpg",
			title: "水瓶座的异世界 踏上奇妙旅程",
			price: 619.00,
			sales: 15,
		},
		{
			image: "https://img.yzcdn.cn/upload_files/2019/12/19/Fr7RuVf2lTudKqXsJ6tv9lgJsDdQ.jpg",
			image2: "http://image5.suning.cn/uimg/b2c/newcatentries/0070158827-000000000622091973_2_800x800.jpg",
			image3: "http://img.61ef.cn/news/201903/20/2019032009251784.jpg",
			title: "摩羯座的幸运术 开启新年浪漫",
			price: 619.00,
			sales: 15,
		},
		{
			image: "https://img.yzcdn.cn/upload_files/2019/12/19/FuvOhAbGWVg20PB0-RmE089ob8wh.jpg",
			image2: "http://image5.suning.cn/uimg/b2c/newcatentries/0070158827-000000000622091973_2_800x800.jpg",
			image3: "http://img.61ef.cn/news/201903/20/2019032009251784.jpg",
			title: "芝兰之室”盆栽（需提前两天预定）",
			price: 619.00,
			sales: 15,
		},
		{
			image: "https://img.yzcdn.cn/upload_files/2019/12/19/FqKGLmd71FVoThwLF7DT-DZ4UZRq.jpg",
			image2: "http://image5.suning.cn/uimg/b2c/newcatentries/0070158827-000000000622091973_2_800x800.jpg",
			image3: "http://img.61ef.cn/news/201903/20/2019032009251784.jpg",
			title: "秘密花园”花篮（需提前两天预定）",
			price: 619.00,
			sales: 15,
		},
		{
			image: "https://img.yzcdn.cn/upload_files/2020/12/07/FjHxT_A37DF0wSnBH3ju19JVFmk3.jpg",
			image2: "http://image5.suning.cn/uimg/b2c/newcatentries/0070158827-000000000622091973_2_800x800.jpg",
			image3: "http://img.61ef.cn/news/201903/20/2019032009251784.jpg",
			title: "【圣诞季】花厨2020限定桌面圣诞树",
			price: 619.00,
			sales: 15,
		},
		{
			image: "https://img.yzcdn.cn/upload_files/2020/10/20/FqFufZ2ARBXosDjqSWaxV6BafhTx.jpg",
			image2: "http://image5.suning.cn/uimg/b2c/newcatentries/0070158827-000000000622091973_2_800x800.jpg",
			image3: "http://img.61ef.cn/news/201903/20/2019032009251784.jpg",
			title: "【天蝎座花束】爱之铭记（需提前两天预定）",
			price: 619.00,
			sales: 15,
		},
		{
			image: "https://img.yzcdn.cn/upload_files/2020/09/07/Fm5eGEOUa5S78WcKh7HaJwOE00wr.jpg",
			image2: "http://image5.suning.cn/uimg/b2c/newcatentries/0070158827-000000000622091973_2_800x800.jpg",
			image3: "http://img.61ef.cn/news/201903/20/2019032009251784.jpg",
			title: "桃李花篮”系列",
			price: 329.00,
			sales: 123,
		}
	]


const shareList = [{
		type: 1,
		icon: '/static/temp/share_wechat.png',
		text: '微信好友'
	},
	{
		type: 2,
		icon: '/static/temp/share_moment.png',
		text: '朋友圈'
	},
	{
		type: 3,
		icon: '/static/temp/share_qq.png',
		text: 'QQ好友'
	},
	{
		type: 4,
		icon: '/static/temp/share_qqzone.png',
		text: 'QQ空间'
	}
]

time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
				image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg',
			},
			{
				image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg',
			},
			{
				image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg',
			},
			{
				image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg',
			},
			{
				image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg',
			},
			{
				image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg',
			},
			{
				image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg',
			}
		]
	},
	{
		time: '2019-04-06 11:37',
		state: 9,
		goodsList: [{
			title: '古黛妃 短袖t恤女 春夏装2019新款韩版宽松',
			price: 179.5,
			image: 'https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg',
			number: 1,
			attr: '珊瑚粉 M'
		}]
	},
	{
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
				image: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/2120460599/O1CN01LBPS4C1GINkwsOTXS_!!2120460599.jpg_430x430q90.jpg',
			},
			{
				image: 'https://img.alicdn.com/imgextra/i2/1069876356/TB2ocTQG4WYBuNjy1zkXXXGGpXa_!!1069876356.jpg_430x430q90.jpg',
			},
			{
				image: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/2120460599/O1CN01YsmgwZ1GINkv38rkn_!!2120460599.jpg_430x430q90.jpg',
			},
		]
	},
	{
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
			title: '回力女鞋高帮帆布鞋女学生韩版鞋子女2019潮鞋女鞋新款春季板鞋女',
			price: 69,
			image: 'https://img.alicdn.com/imgextra/i3/2128794607/TB2gzzoc41YBuNjy1zcXXbNcXXa_!!2128794607.jpg_430x430q90.jpg',
			number: 1,
			attr: '白色-高帮 39'
		}]
	},
	{
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
				image: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/3358098495/O1CN01dhYyid2Ccl5MWLDok_!!3358098495.jpg_430x430q90.jpg',
			},
			{
				image: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/3358098495/O1CN01AWsnFA2Ccl5OzvqsL_!!3358098495.jpg_430x430q90.jpg',
			},
		]
	},
	{
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
				image: 'https://img.alicdn.com/imgextra/i4/3470687433/O1CN0124mMQOSERr18L1h_!!3470687433.jpg_430x430q90.jpg',
			},
			{
				image: 'https://img.alicdn.com/imgextra/i3/2888462616/O1CN01ERra5J1VCAbZaKI5n_!!0-item_pic.jpg_430x430q90.jpg',
			},
			{
				image: 'https://gd3.alicdn.com/imgextra/i3/819381730/O1CN01YV4mXj1OeNhQIhQlh_!!819381730.jpg_400x400.jpg',
			},
		]
	}

]
const cateList = [{
		id: 1,
		name: '手机数码'
	},
	{
		id: 2,
		name: '礼品鲜花'
	},
	{
		id: 3,
		name: '男装女装'
	},
	{
		id: 4,
		name: '母婴用品'
	},
	{
		id: 5,
		pid: 1,
		name: '手机通讯'
	},
	{
		id: 6,
		pid: 1,
		name: '运营商'
	},
	{
		id: 8,
		pid: 5,
		name: '全面屏手机',
		picture: '/static/temp/cate2.jpg'
	},
	{
		id: 9,
		pid: 5,
		name: '游戏手机',
		picture: '/static/temp/cate3.jpg'
	},
	{
		id: 10,
		pid: 5,
		name: '老人机',
		picture: '/static/temp/cate1.jpg'
	},
	{
		id: 11,
		pid: 5,
		name: '拍照手机',
		picture: '/static/temp/cate4.jpg'
	},
	{
		id: 12,
		pid: 5,
		name: '女性手机',
		picture: '/static/temp/cate5.jpg'
	},
	{
		id: 14,
		pid: 6,
		name: '合约机',
		picture: '/static/temp/cate1.jpg'
	},
	{
		id: 15,
		pid: 6,
		name: '选好卡',
		picture: '/static/temp/cate4.jpg'
	},
	{
		id: 16,
		pid: 6,
		name: '办套餐',
		picture: '/static/temp/cate5.jpg'
	},
	{
		id: 17,
		pid: 2,
		name: '礼品',
	},
	{
		id: 18,
		pid: 2,
		name: '鲜花',
	},
	{
		id: 19,
		pid: 17,
		name: '公益摆件',
		picture: '/static/temp/cate7.jpg'
	},
	{
		id: 20,
		pid: 17,
		name: '创意礼品',
		picture: '/static/temp/cate8.jpg'
	},
	{
		id: 21,
		pid: 18,
		name: '鲜花',
		picture: '/static/temp/cate9.jpg'
	},
	{
		id: 22,
		pid: 18,
		name: '每周一花',
		picture: '/static/temp/cate10.jpg'
	},
	{
		id: 23,
		pid: 18,
		name: '卡通花束',
		picture: '/static/temp/cate11.jpg'
	},
	{
		id: 24,
		pid: 18,
		name: '永生花',
		picture: '/static/temp/cate12.jpg'
	},
	{
		id: 25,
		pid: 3,
		name: '男装'
	},
	{
		id: 26,
		pid: 3,
		name: '女装'
	},
	{
		id: 27,
		pid: 25,
		name: '男士T恤',
		picture: '/static/temp/cate13.jpg'
	},
	{
		id: 28,
		pid: 25,
		name: '男士外套',
		picture: '/static/temp/cate14.jpg'
	},
	{
		id: 29,
		pid: 26,
		name: '裙装',
		picture: '/static/temp/cate15.jpg'
	},
	{
		id: 30,
		pid: 26,
		name: 'T恤',
		picture: '/static/temp/cate16.jpg'
	},
	{
		id: 31,
		pid: 26,
		name: '上装',
		picture: '/static/temp/cate15.jpg'
	},
	{
		id: 32,
		pid: 26,
		name: '下装',
		picture: '/static/temp/cate16.jpg'
	},
	{
		id: 33,
		pid: 4,
		name: '奶粉',
	},
	{
		id: 34,
		pid: 4,
		name: '营养辅食',
	},
	{
		id: 35,
		pid: 4,
		name: '童装',
	},
	{
		id: 39,
		pid: 4,
		name: '喂养用品',
	},
	{
		id: 36,
		pid: 33,
		name: '有机奶粉',
		picture: '/static/temp/cate17.jpg'
	},
	{
		id: 37,
		pid: 34,
		name: '果泥/果汁',
		picture: '/static/temp/cate18.jpg'
	},
	{
		id: 39,
		pid: 34,
		name: '面条/粥',
		picture: '/static/temp/cate20.jpg'
	},
	{
		id: 42,
		pid: 35,
		name: '婴童衣橱',
		picture: '/static/temp/cate19.jpg'
	},
	{
		id: 43,
		pid: 39,
		name: '吸奶器',
		picture: '/static/temp/cate21.jpg'
	},
	{
		id: 44,
		pid: 39,
		name: '儿童餐具',
		picture: '/static/temp/cate22.jpg'
	},
	{
		id: 45,
		pid: 39,
		name: '牙胶安抚',
		picture: '/static/temp/cate23.jpg'
	},
	{
		id: 46,
		pid: 39,
		name: '围兜',
		picture: '/static/temp/cate24.jpg'
	},
]

export default {
	carouselList,
	cartList,
	lazyLoadList,
	userInfo,
	shareList,
	goodsList,
	orderList,
	cateList
}
