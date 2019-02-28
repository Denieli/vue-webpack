<template>
    <div class="goodsinfo-container">
        <transition 
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
                <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
       
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                        <lunbo :lunbo="this.lunbo" :isfull="false"></lunbo>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">{{goodinfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                <p class="price">
                    市场价<del>￥{{goodinfo.market_price}}</del>&nbsp;&nbsp;销售价<span class="now_price">￥{{goodinfo.sell_price}}</span>
                </p>
                <p>购买数量： <numbox @getNum="getNum" :max="goodinfo.stock_quantity"></numbox> </p>
                <p>
                    <mt-button type="primary" size="small" >立即购买</mt-button>
                    <mt-button type="danger" size="small" @click="addShopCar">加入购物车</mt-button>
                </p>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{goodinfo.goods_no}}</p>
                    <p>库存情况：{{goodinfo.stock_quantity}}件</p>
                    <p>上架时间：{{goodinfo.add_time | dateFormat}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain  @click="goGoodsDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goGoodsComment(id)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template> 
<script>
    import luobocomp from '../commentConponent/Lunbo.vue'
    import numboxcomp from '../commentConponent/NumBox.vue'
    export default {
        data() {
            return {
                id: this.$route.params.id,
                lunbo: [],
                goodinfo:{},
                ballFlag:false,
                num:1
            }
        },
        created() {
            this.getLunbotu();
            this.getGoodInfo();
        },
        methods: {
            getLunbotu() {
                this.$http.get('api/getthumimages/' + this.id).then(result => {
                    if (result.body.status == 0) {
                        this.lunbo = result.body.message;
                        this.lunbo.forEach(elem => {
                            elem.img=elem.src;
                        });
                        console.log(this.lunbo);
                    } else {
                        console.log("wrong");
                    }

                })
            },
            getGoodInfo(){
                this.$http.get('api/goods/getinfo/'+this.id).then(result=>{
                    if(result.body.status==0){
                        this.goodinfo=result.body.message[0];
                    }
                })
            },
            goGoodsDesc(id){
                this.$router.push({name:"goodsdesc",params:{ id }}
                );
            },
            goGoodsComment(id){
                this.$router.push({name:"goodscomment",params:{ id }});
            },
            addShopCar(){
                this.ballFlag=!this.ballFlag;
                var goodsinfo={
                    id:this.id,
                    count:this.num,
                    price:this.goodinfo.sell_price,
                    selected:true
                }
                this.$store.commit('addToCar',goodsinfo);
            },
            beforeEnter(el){
                el.style.transform="translate(0,0)";
            },
            enter(el,done){
                el.offsetWidth;
                //获取徽标和小球的位置
                const ballPosition=this.$refs.ball.getBoundingClientRect();
                const badge=document.getElementById('badge').getBoundingClientRect();
                const yDist=badge.top-ballPosition.top;
                const xDist=badge.left-ballPosition.left;
                el.style.transform="translate("+xDist+"px,"+yDist+"px)";
                el.style.transition="all 0.5s cubic-bezier(.4,-0.3,1,.68)";
                done();
            },
            afterEnter(el){
                this.ballFlag=!this.ballFlag;
            },
            getNum(num){
                this.num=num;
                console.log(this.num);
            }
            
        },
        components: {
            "lunbo": luobocomp,
            "numbox":numboxcomp
        }
    }

</script>


<style lang="scss" scoped>
    .goodsinfo-container {
        background-color: #eee;
        overflow: hidden;
        .now_price{
            color:red;
            font-size:16px;
            font-weight:bold;
        }
        .mui-card-footer{
            display:block;
        }
        button{
            margin:15px 0;
        }
        .ball{
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: red;
            position:absolute;
            z-index: 99;
            top:390px;
            left:147px;
            
        }
    }
</style>