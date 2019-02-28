
<template>
    <div class="shopcar-container">
        <div class="goods-list" > 
            <div class="mui-card" v-for="(item,i) in shopcarlist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                          <mt-switch @change="selectChanged(item.id,$store.getters.getGoodsSelected[item.id])" 
                          
                          v-model="$store.getters.getGoodsSelected[item.id]"></mt-switch>
                          <img :src="item.thumb_path">
                          <div class="info">
                              <h1>{{item.title}}</h1>
                              <p>
                                  <span class="price">￥{{item.sell_price}}</span>
                                  <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                                  <!--如何从购物车中获取商品的数量-->
                                  <!--id作为对象的属性名，count作为对象的属性值-->
                                  <!--{88:2,89:3}--> 
                                  <a @click.prevent="remove(item.id,i)">删除</a>
                              </p>
                              
                          </div>
					</div>
				</div>
			</div>
            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
                        <div class="left">
                            <p>总计（不含运费）</p>
                            <p>已勾选商品<span class="red">{{$store.getters.getAmount.count}}</span>件，总价￥<span class="red">{{$store.getters.getAmount.amount}}</span></p>
                        </div>
                    <mt-button type="danger">去结算</mt-button>

                    </div>
				</div>
			</div>
        </div>
    </div>   
</template>

<script>
import numbox from '../commentConponent/shopcar_numbox.vue';
export default{
    data(){
        return{
            shopcarlist:[]
        }
    },
    created(){
        this.shopcar();
    },
    methods:{
        shopcar(){
            var ids=''
            this.$store.state.car.forEach(elem => {
                ids+=elem.id+",";
            });
            ids=ids.substring(0,ids.length-1);
            if(ids.length<=0)
            return;
            console.log(ids);
            this.$http.get("api/goods/getshopcarlist/"+ids).then(result=>{
                if(result.body.status==0){
                    this.shopcarlist=result.body.message;
                }
            })
        },
        remove(id,index){
            this.shopcarlist.splice(index,1);
            this.$store.commit('removeFormCar',id)
        },
        selectChanged(id,val){
            this.$store.commit('updateGoodsSelected',{id,selected:val})
        }
    },
    components:{
        "numbox":numbox
    }
}
</script>
            
<style lang="scss" scoped>
.shopcar-container{
    background-color:#eee;
    overflow: hidden;
    .goods-list{
        img{
            width: 60px;
            height:60px;
        }
        h1{
            font-size:13px;
        }
    }
    .info{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .price{
            color:red;
            font-weight:bold;
        }
    }
    .mui-card-content-inner{
        display: flex;
        align-items: center;
    }
    .jiesuan{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .red{
            color: red;
            font-weight:bold;
            font-size:16px;
        }
    }
}
            

</style>