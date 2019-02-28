<template>
    <div>
        <!--顶部滑动条-->
      
                <!--这里放置真实显示的DOM内容-->
          
        	<div id="slider" class="mui-slider">
                    <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                        <div class="mui-scroll">
                            <a :class="['mui-control-item',item.id==0 ? 'mui-active' : '']"  v-for="item in categoryList" :key="item.id" @tap="getImgList(item.id)" data-wid="tab-top-subpage-1.html">
                                        {{ item.title }}
                            </a>
                           <!-- <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
                                热点
                            </a>
                            <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
                                北京
                            </a>
                            <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
                                社会
                            </a>
                            <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                                娱乐
                            </a>
                            <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                                    娱乐
                                </a>
                                -->
                        </div>
                    </div>
    
                </div>
         
         <ul class="photo-list">
                <router-link v-for="item in imglist" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
                     <img v-lazy="item.img_url">
                     <div class="info">
                     <h1 class="info-title">{{item.title}}</h1>
                     <div class="info-body">{{item.zhaiyao}}</div>
                    </div>
                 </router-link>
         </ul>
    </div>
</template>

<script>
 
import mui from '../../lib/mui/js/mui.min.js'
import {Toast} from 'mint-ui'
export default{
    data(){
        return {
            categoryList:[],
            imglist:[],
            cateid:0
         };
    },
    mounted() {//已经有dom元素了
       mui('.mui-scroll-wrapper').scroll({
	     deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      });
    },
    created(){
        this.getImgCategory();
        this.getImgList(this.cateid);
    },
    methods:{ 
        getImgCategory(){
            this.$http.get("api/getimgcategory").then(result=>{
                if(result.body.status==0){
                    this.categoryList=result.body.message;
                    this.categoryList.unshift({title:"全部",id:0})
                }else{
                    Toast("获取数据失败！！")
                }
            })
        },
        getImgList(id){
            this.$http.get("api/getimages/"+id).then(result=>{
                if(result.body.status==0){
                    this.imglist=result.body.message;
                }else{
                    Toast("获取数据失败")
                }
            })

        }
    }
};
</script>

<style lang="scss" scoped>
* { touch-action: pan-y; }

.photo-list{
    list-style:none;
    margin:0;
    padding:10px;
    padding-bottom: 0;
    li{
       
        background-color:#ccc;
        text-align:center;
        margin-bottom:10px;
        box-shadow:0 0 9px #999;
        position: relative;
        img{
            width: 100%;
            vertical-align:middle;
        }
        img[lazy="loading"] {
         width: 40px;
         height: 300px;
         margin: auto;
        }

        .info{
        color:white;
        text-align: left;
        position: absolute;
        bottom: 0;
        background-color:rgba(0, 0, 0, 0.4);
      
        .info-body{
            font-size:13px;
        }
        .info-title{
            font-size:14px;
        }
      }
    }
    
   
   

}


</style>
