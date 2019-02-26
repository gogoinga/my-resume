import Vue from 'vue'
import Router from 'vue-router'
import userMsg from '@/components/userMsg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'userMsg',
      component: userMsg
    }
  ]
})
