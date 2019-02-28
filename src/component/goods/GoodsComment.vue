<template>
    <div>
        <goodcomment :id="this.$route.params.id"></goodcomment>
    </div>
</template>

<script>
import goodcomment from '../commentConponent/Comment.vue' 
export default{
    data(){
        return{

        }
    },
    methods:{
        
    },
    components:{
        goodcomment
    }
}

</script>

<style lang="scss" scoped>

</style>