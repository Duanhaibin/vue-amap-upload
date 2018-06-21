import Vue from 'vue'
import Router from 'vue-router'
// import Header from '@/components/header'
import Search from '@/pages/search'
import Listsearch from '@/pages/listsearch'
import Searchs from '@/pages/searchs'
import Detail from '@/pages/detail'
import Report from '@/pages/report'
import Index from '@/pages/index'
import Letter from '@/pages/letter'
import Success  from '@/pages/success'



Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'Index',
		component: Index
    },
    {
		path: '/search',
		name: 'Search',
		component: Search
		},
		{
			path: '/listsearch',
			name: 'Listsearch',
			component: Listsearch
		},
		{
		path: '/searchs',
		name: 'Searchs',
		component: Searchs
    },
    {
		path: '/detail',
		name: 'Detail',
		component: Detail
	},
	{
		path: '/report',
		name: 'Report',
		component: Report
	},
	{
		path: '/letter',
		name: 'Letter',
		component: Letter
	},
	{
		path: '/success',
		name: 'Success',
		component: Success
	},

  ]
})
