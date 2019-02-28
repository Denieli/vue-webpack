import VueRounter from 'vue-router'


import AddressList from '../component/address/AddressList.vue'
import home from '../component/tabber/HomeContainer.vue'
import member from '../component/tabber/MemberContainer.vue'
import shopCar from '../component/tabber/ShopCarContainer.vue'
import search from '../component/tabber/SearchContainer.vue'
import newslist from '../component/news/NewsList.vue'
import newsinfo from '../component/news/NewsInfo.vue'
import photolist from '../component/photo/PhotoList.vue'
import photoinfo from '../component/photo/PhotoInfo.vue'
import goodslist from '../component/goods/GoodsList.vue'
import goodsinfo from '../component/goods/GoodsInfo.vue'
import goodscomment from '../component/goods/goodscomment.vue'
import goodsdesc from '../component/goods/goodsdesc.vue'

var router=new VueRounter({
    base:'/app/',
    routes:[
        {path:'/',redirect:"/home"},
       {path:'/home',component:home},
       {path:'/member',component:member},
       {path:'/shopcar',component:shopCar},
       {path:'/search',component:search},
       {path:'/home/newslist',component:newslist},
       {path:'/home/newsinfo/:id',component:newsinfo},
       {path:'/home/photolist',component:photolist},
       {path:'/home/photoinfo/:id',component:photoinfo},
       {path:'/home/goodslist',component:goodslist},
       {path:'/home/goodsinfo/:id',component:goodsinfo},
       {path:'/home/goodsdesc/:id',component:goodsdesc,name:"goodsdesc"},
       {path:'/home/goodscomment/:id',component:goodscomment,name:"goodscomment"},
       {path:'/home/addressList',component:AddressList}
    ],
    linkActiveClass: 'mui-active'//覆盖默认路由高亮类router-link-exact-active
})

export default router

