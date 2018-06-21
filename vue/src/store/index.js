import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	// 定义状态
	// state : 存储公共数据
	// getters ： 获取公共数据
	// mutations : 里面放的是同步的操作
	// actions : 里面放的是异步操作
	// context : store 的副本
	// dispatch 执行action
	state: {
		city: '常州'
	},
	getters: {
		getcity: (state) => {
			return state.city
		}
	},
	mutations: {
		changeCity: (state, name) => {
			state.city = name
		}
	},
	actions: {
		layerchange: (context) => {
			setTimeout(() => {
				context.commit('changeCity', '云南')
			},3000)
		}
	}
})

export default store
