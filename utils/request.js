// const baseUrl = "https://h5.youzan.com"
// export function myRequestGet(url, data) {
// 	return new Promise((resolve, reject) => {
// 		uni.request({
// 			url: baseUrl + url,
// 			method: "GET",
// 			data: data,
// 			success: function(res) {
// 				resolve(res.data)
// 				console.log("收到数据了",res.data)
// 			},
// 			fail: function(err) {
// 				reject(err)
// 				console.log("失败了",err)
// 			}
// 		})
// 	})
// }



const baseUrl = "https://h5.youzan.com"
export function myRequestGet(url, data) {
	return new Promise((resolve, reject) => {
		uni.request({
			//#ifndef H5
			url: baseUrl + url,
			//#endif
			//#ifdef H5
			url: url,
			//#endif
			method: "GET",
			data: data,
			success: function(res) {
				resolve(res.data)
			},
			fail: function(err) {
				reject(err)
			}
		})
	})
}

export function myRequestPost(url, data) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			method: "POST",
			data: data,
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			success: function(res) {
				resolve(res.data);
				console.log("收到数据了", res.data)
			},
			fail: function(err) {
				reject(err)
				console.log("失败了", err)
			}
		})
	})
}
