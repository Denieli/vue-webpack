<template>
    <div>
    
    <lunbo :lunbo="this.lunbo" :isfull="true"></lunbo>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist" >
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></router-link></li>
		</ul> 
    </div>
</template>

<script>

    import luobocomp from '../commentConponent/Lunbo.vue'
    import { Toast } from 'mint-ui';
    export default{
       data(){
           return {
              lunbo:[],
           }
       },
       created(){
        
            this.getLunbotu();
       } ,
        methods:{
            getLunbotu(){
                this.$http.get('api/getlunbo').then(result=>{
                    if(result.body.status==0){
                        console.log("ok");
                        this.lunbo=result.body.message;
                    }else{
                        console.log("wrong");
                    }
                    
                })
            }
        },
        components:{
            "lunbo":luobocomp
        }
    }
</script>
   
<style lang="scss" scoped>


.mint-swipe-item{
       background-color: red
      }

.mui-grid-view.mui-grid-9{
    background-color:#fff;
    border:none;
     .mui-media-body{
        font-size:9px;
    }  

}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:none;
    
}
 
</style>