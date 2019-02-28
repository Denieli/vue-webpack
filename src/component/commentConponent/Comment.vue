<template>
    <div class="cmt-container"><h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要bb的内容（最多吐槽120字）" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="addComment">发表评论</mt-button>
    <div class="cmt-list">
        <div class="cmt-item" v-for="(item,i) in comment" :key="i">
            <div class="cmt-title">
                第{{ i+1 }}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp&发表时间：{{item.add_time | dateFormat}}
            </div>
            <div class="cmt-body">{{ item.content===''||item.content==='undefined' ? '此用户很懒':item.content }}</div>
        </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui'
    export default{
        data(){
            return{
                pageindex: 1,
                comment:[],
                msg:''
            } 
        },
        created(){
            this.getComments();
        },
        methods:{
           getComments(){
            this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageindex).then(result=>{
                if(result.body.status==0){
                    this.comment=this.comment.concat(result.body.message);
                }else{
                    Toast('获取数据失败！')
                }
            })
           },
           getMore(){
               this.pageindex=this.pageindex+1;
               this.getComments();
           },
           addComment(){
                if(this.msg.trim().length===0){
                   return Toast("评论内容不能为空！");
                }

               this.$http.post("api/postcomment/"+this.id,{
                   content:this.msg.trim()
               }).then(result=>{
                   if(result.body.status==0){
                        Toast("评论成功！！");
                        this.comment.unshift({user_name:'匿名用户',add_time:Date.now(),content:this.msg.trim()})
                        this.msg="";
                   }
               })
           }
        },
        props:["id"]
      

    }

</script>

<style lang="scss" scoped>
    
    .cmt-container{
        h3{
            font-size:18px;
        }
    textarea{
            font-size:14px;
            height: 85px;
            margin: 0;
        }
        .cmt-list{
            margin: 10px 0;
            .cmt-item{

                font-size:13px;

                .cmt-title{
                    line-height: 30px;
                    background-color:#ccc
                }
                .cmt-body{
                    line-height:30px;
                    text-indent: 2em
                }
            }
        }

    }
</style>