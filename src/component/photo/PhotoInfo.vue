<template>
<div class="photoinfo-container">
    <h3>{{imginfo.title}}</h3>
    <p class="subtitle">
    <span>发表时间:{{imginfo.add_time | dateFormat}}</span>
    <span>点击次数:{{imginfo.click}}</span>   
</p>
<hr>
<div class="thumbs">
<vue-preview :slides="slide1" @close="handleClose" ></vue-preview>
</div>
 <!--<img class="preview-img" v-for="(item,index) in list" :src="item.src"  :key="item.src"   height="100"
 @click="$preview.open(index,list)">-->
</img>

<div class="content" v-html="imginfo.content"></div>
<my :id="this.id"></my>
</div>
</template>
    
<script>
import comment from '../commentConponent/Comment.vue'



export default{
    data(){
        return {
            id:this.$route.params.id,
            imginfo:{},
            slide1: []
        }
    },
    created(){
        this.getPhotoInfo();
        this.getthumImages();
    
    },
    methods:{
        getPhotoInfo(){
            this.$http.get("api/getImageInfo/"+this.id).then(result=>{
                if(result.body.status==0){
                    this.imginfo=result.body.message[0];
                
                }
            })
        },  
        handleClose () {
        console.log('close event')
        },
        getthumImages(){
            this.$http.get("api/getthumimages/"+this.id).then(result=>{
                if(result.body.status==0){
                   result.body.message.forEach((item,i) => {
                       item.w=600;
                       item.h=400;
                       item.msrc=result.body.message[i].src
                   });
                   this.slide1=result.body.message;
                   console.log(this.slide1);
                
                }
            })
        }
      
    },
    components:{
      "my":comment
   }
}     
</script>
    
<style class="scss">

.thumbs{
    display: flex;
}
.thumbs>div{
    width: 100%;
}
.thumbs .my-gallery{
    display: flex;
    flex-wrap: wrap;
}
.thumbs .my-gallery figure{
    margin: 10px;
    box-shadow: 0 0 10px #ccc
}
.thumbs .my-gallery  figure img{
    width: 100px;
    vertical-align: middle;
}

.photoinfo-container h3{
        color:#26A2FF;
        font-size:15px;
        text-align:center;
        margin:15px 0;
}
.photoinfo-container .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
}
.photoinfo-container .content{
    font-size:13px;
    line-height: 30px;
}
.photoinfo-container{
    padding:3px; 
}

   
    
</style>
    