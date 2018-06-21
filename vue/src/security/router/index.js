import Vue from 'vue'
import Router from 'vue-router'
// import Header from '@/components/header'

import Index from '@/security/pages/index'
import Search from '@/security/pages/search'
import Detail from '@/security/pages/detail'
import Listsearch from '@/security/pages/listsearch'
import Dest from '@/security/pages/dest'




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
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/listsearch',
      name: 'Listsearch',
      component: Listsearch
    },
    {
      path: '/dest',
      name: 'Dest',
      component: Dest
    }
   
  ]
})
