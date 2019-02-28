import Vue from 'vue'
import app from '../App.vue'



/*import {Header , Swipe, SwipeItem,Button,Lazyload } from 'mint-ui'
Vue.component(Header.name,Header);

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(Lazyload);*/

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import moment from 'moment'
Vue.filter('dateFormat',function(datastr,pattern="YYYY-MM-DD HH:MM:SS"){
 return  moment(datastr).format(pattern);
})

import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005';
Vue.http.options.emulateJSON=true;

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import  router from './router.js'

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

import vuex from 'vuex'
Vue.use(vuex);

var car=JSON.parse(localStorage.getItem('car')|| '[]')

import { Switch } from 'mint-ui';
Vue.component(Switch.name, Switch);

const store=new vuex.Store({
   state:{
      car:car
   },
   mutations:{
      addToCar(state,goodsinfo){

         var flag=false;
         state.car.some(item=>{
            if(item.id==goodsinfo.id){
               item.count +=parseInt(goodsinfo.count)
               flag=true;
               return flag;
            }
         })
         if(!flag){
            state.car.push(goodsinfo);
         }
         localStorage.setItem('car',JSON.stringify(state.car));
      },
      updateGoodsInfo(state,goodsinfo){
         state.car.some(item=>{
            if(item.id==goodsinfo.id){
               item.count=parseInt(goodsinfo.count)
               return true;
            }
         })
         localStorage.setItem('car',JSON.stringify(state.car));
      },
      removeFormCar(state,id){
         state.car.some((item,i)=>{
            if(item.id==id){
               state.car.splice(i,1);
               return true;   
            }
         })
         localStorage.setItem('car',JSON.stringify(state.car));
      },
      updateGoodsSelected(state,info){
         state.car.some((item,i)=>{
            if(item.id==info.id){
               item.selected=info.selected;
               return true;   
            }
         })
         localStorage.setItem('car',JSON.stringify(state.car));
      }
   },
   getters:{
         getAllCount(state){
            var c=0;
            state.car.forEach(item =>{
               c += item.count;
            })

            return c;
         },
         getGoodsCount(state){
            var o={}
            state.car.forEach(item=>{
               o[item.id]=item.count;
            })
            return o;
         },
         getGoodsSelected(state){
            var o={}
            state.car.forEach(item=>{
               o[item.id]=item.selected;
            })
            return o;
         },
         getAmount(state){
            var o={
               count:0,
               amount:0
            }
            state.car.forEach(item=>{
               if(item.selected){
                  o.count+=item.count;
                  o.amount+=item.price*item.count;
               }
            })
            return o;

         }

   }
})


// with parameters install
Vue.use(VuePreview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: {top: 0, bottom: 0},
  captionEl: false,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
})


var vm=new Vue({
   el:'#app', 
   data:{
      
   },
   render:function(c){
      return c(app);
   },
   router,
   store
})
