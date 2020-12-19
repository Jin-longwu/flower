import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		carts: uni.getStorageSync('carts') || [],
		user_address: {
			province: '',
			city: '',
			district: ''
		},
		shop: uni.getStorageSync('shop') || []
	},
	mutations: {
		//将商品加购
		addToCarts(state, good) {
			var currentGood = state.carts.find(item => {
				if (item.alias == good.alias) {
					return item;
				}
			})
			if (currentGood) {
				currentGood.buynum += good.buynum
			} else {
				state.carts.push(good)
			}
			uni.setStorageSync('carts', state.carts)
		},

		//加购商品数量改变时保存数量
		changeCarts(state, newgood) {
			var currentGood = state.carts.find(item => {
				if (item.alias == newgood.alias) {
					return item;
				}
			})
			if (currentGood) {
				currentGood.buynum = newgood.buynum
			} else {
				state.carts.push(newgood)
			}
			uni.setStorageSync('carts', state.carts)
		},

		//加购商品被删时保存剩下的
		insteadcarts(state, payload) {
			uni.setStorageSync('carts', state.carts)
			console.log("保存成功")
		},


		commit_address(state, data) {
			state.user_address = data;
		},

		//增加要结算的商品
		addToShop(state, shoplist) {
			var currentGood = state.shop.find(item => {
				if (item.alias == shoplist.alias) {
					return item;
				}
			})
			if (currentGood) {
				currentGood.buynum = shoplist.buynum
			} else {
				state.shop.push(shoplist)
			}
			uni.setStorageSync('shop', state.shop)
		},

		insteadshop(state, payload) {
			uni.setStorageSync('shop', state.shop)
			console.log("保存成功")
		},
	},
	actions: {}
})
export default store
