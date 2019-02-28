<template>
    <div class="newsinfo-container">

          <h3 class="title">{{newsinfo.title}}</h3>
          <p class="subtitle">
              <span>发表时间：{{newsinfo.add_time}}</span>
              <span>点击{{newsinfo.click}}次</span>
          </p>
          <hr>
          <div class="content" v-html="newsinfo.content"></div>
          <my :id="this.id"></my>
    </div>
  
</template>

<script>
 import comment from '../commentConponent/Comment.vue'

 export default{
     data(){
         return{ 
             id:this.$route.params.id,
             newsinfo:{}
         }
        
     },
     created(){
         this.getNewsInfo();
     },
     methods:{
        getNewsInfo(){
            this.$http.get("api/getnew/"+this.id).then(result=>{
                if(result.body.status==0){
                    this.newsinfo=result.body.message[0];
                }
            })
        },

     },
     components:{
      "my":comment
   }
 }

</script>

<style lang="scss" scoped>
.newsinfo-container{
    padding:0 4px;
    .title{
        font-size:16px;
        text-align:center;
        margin:15px 0;
        color:red;
    }
}
.subtitle{
    font-size:13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;

}
.content{
    img{
        width:100%;
    }
}


</style>
