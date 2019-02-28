<template>
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1"  @change="changeCount"  ref="numbox"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>
<style lang="scss" scoped>

</style>
<script >
    import mui from '../../lib/mui/js/mui.min.js';
    export default {
        data(){
            return {
                
            }
        },
        mounted() {
            mui(".mui-numbox").numbox();
        },
        methods:{
            changeCount(){
                this.$emit('getNum',parseInt(this.$refs.numbox.value));
            }
        },
        props:['max'],
        watch:{
            max:function(newVal,oldVal){
                mui(".mui-numbox").numbox().setOption("max",newVal);
            }
        }
    }

</script>