<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbo" :key="lunbo.img">
                <img :src="item.img" :class="{'full':isfull}"></img>
            </mt-swipe-item>
        </mt-swipe>
    </div>

</template>

<style lang="scss" scoped>
 .mint-swipe{
        text-align: center;
        height:200px;
        img{
            height: 100%;
        }
        .full{
            width: 100%
        }
    }
</style>

<script>
  import { Toast } from 'mint-ui';
    export default{
       data(){
           return {
           }
       },
        props:['lunbo','isfull']
    }
</script>