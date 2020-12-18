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
		}
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
		}
	},
	actions: {}
})
export default store
