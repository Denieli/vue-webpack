<template>
<div class="goods-list">
    <router-link class="goods-item" v-for="item in goodlist" :key="item.id"  :to="'/home/goodsinfo/'+item.id" tag="div">
        <img :src="item.img_url" alt="">
        <h1 class="title">{{item.title}}</h1>
        <div class="info">
            <p class="price">
                <span class="now">￥{{item.sell_price}}</span>
                <span class="old">￥{{item.market_price}}</span>
            </p>
            <p class="sell">
                <span>热卖中</span>
                <span>剩{{item.stock_quantity}}</span>
            </p>
        </div>
    </router-link>
    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
</div>
</template>

<script>
export default{
    data(){
        return{
            number:1,
            goodlist:[]
        }
    },
    created(){
        this.getGoodsList();
    },
    methods:{
        getMore(){
            this.number=this.number+1;
            this.getGoodsList();
        },
        getGoodsList(){
            this.$http.get("api/getgoods?pageindex="+this.number).then(result=>{
                if(result.body.status==0){
                    this.goodlist=this.goodlist.concat(result.body.message)
                }
            })
        }
    }
}

</script>

<style  lang="scss" scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    
    justify-content: space-between;
    .goods-item{
        width: 49%;
        border:1px solid #ccc;
        box-shadow:0 0 8px #ccc;
        margin: 4px 0;
        padding :2px;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        min-height:293px;
        img{
            width: 100%;
        }
        .title{
            font-size:14px;
        }
        .info{
            background-color: #eee
            p{
                margin:0px;
                padding:5px;
            }
            .price{
                .now{
                    color:red;
                    font-weight:bold;
                    font-size:16px;
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
               
            }
            .sell{
                    display: flex;
                    justify-content: space-between;
                    font-size:13px;
                }
        }
    }
}
</style>