import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import showHomeStay from '@/components/showHomeStay'
import detailPage from '@/detailPage/detailPage'
import initPage from '@/mainPage/initPage'
import Overbooking from '@/feedBack/overBooking'
import orderDetail from '@/orderDetail/orderDetail'
import type_airbnb from '@/commonComponent/type_airbnb'
import price_Control from '@/commonComponent/price_Control'
import head from '@/commonComponent/nav'
import overBookings from '@/feedBack/overBookings'
import upload from '@/commonComponent/upload'
import Loggin from '@/landladySystem/loggin'
import B from '@/landladySystem/b'
import store from '@/store/index.js'
import Register from '@/landladySystem/register'
import test from '@/commonComponent/test'
Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/inputsearch',
      name: 'HelloWorld',
      component: HelloWorld,
      props:(route)=>({inputdata:route.query.inputdata})
    },
    {
      path: '/loggin',
      name: 'Loggin',
      component: Loggin
    },
    {
      path: '/b',
      name: 'B',
      component: B
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      name:'detailPage',
      // path:'/detailPage/:ID',
      // component:detailPage,
      // props:true
      path:'/detailPage',
      component:detailPage,
      // props:(route)=>{
      //   {ID:route.query.pappa}
      // }
      props:(route)=>({query: route.query.q,
        user_id: route.query.user_id
      })
    },
    {
      name:'initPage',
      path:'/initPage',
      component:initPage
    },
    {
      name:'Overbooking',
      path:'/Overbooking',
      component:Overbooking,
      props:(route)=>({id:route.query.qq
      })
      
    },
    {
      name:'orderDetail',
      path:'/orderDetail',
      component:orderDetail,
      props:(route)=>({
        _id:route.query._id
      })
    },
    {
      name:'overBookings',
      path:'/overBookings',
      component:overBookings,
      props:(route)=>({
        airbnb_id:route.query.ID
      })
    },
    {
      name:'upload',
      path:'/upload',
      component:upload
    },
    {
      name:'head',
      path:'/head',
      component:head
    },
    {
      name:'test',
      path:'/test',
      component:test
    }
  ]
})
router.beforeEach((to,from,next)=>{
  console.log("to=>",to)
  console.log("from=>",from)
  console.log("next=>",next)
  // if(window.localStorage.getItem('user_id')){
  //   next()
  // }else{
    
  // }
  // console.log("user_id=>",window.localStorage.getItem("user_id"))
  // if(to.name=='Overbooking'){
  //   // if(!to.query._id)
  //   if(!window.localStorage.getItem('user_id'))
  //     next({name:'initPage',path:'/initPage'})
  // }
  // if(to.name=='orderDetail'){
  //   if(!window.localStorage.getItem('user_id'))
  //     next({name:'initPage',path:'/initPage'})
  // }
  // if(to.name=='B'&&to.name==''&&!store.state.login){
  //   console.log('执行了该判断')
  //   next({name:'Loggin',path:'/loggin'})
  // }
  // if(to.name=='Login'){
  //   next()
  // }
  // next()
  next()
})
export default router

