<template>
	<view>
		<view v-for="item in carts" :key="item.alias" class="carts">
			<text>{{item.title}}</text>
			<text>{{item.buynum}}</text>
			<text>{{item.price}}</text>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		computed: {
			...mapState({
				carts: "carts"
			})
		}
	}
</script>

<style>

</style>
