<!-- <template>
    <div class="addressinfo">
        <div class="bd-shadow"></div>
        <transition-group appear @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
        <div class="ad-adi">
            <p><h4>新建收货地址</h4> <a href="javascript:;" class="close" @click="close">X</a></p>
            <div>
                <span>收货人</span> <input type="text" placeholder="请填写收货人姓名">
            </div>
            <div>
                <span>手机号码</span> <input type="text" placeholder="请填写手机号码">
            </div>
            <div>
                <span> 区域信息</span> <input type="text" placeholder="请填写区域信息">
            </div>
            <div>
                <span>详细地址</span> <input type="text" placeholder="请输入街道门牌信息">
            </div>
            <div>
                <span> 邮政编码</span> <input type="text" placeholder="可以不填">
            </div>

            <a href="#" class="save">保存</a>
        </div>
        </transition-group>
    </div>
</template>

<style>
    .bd-shadow {
        background-color: rgba(0, 0, 0, 0.2);
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
    }
    .ad-adi{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 1;
        background-color: #fff;
    }
    .ad-adi div{
        border-bottom: 1px solid #eee;
    }

    .addressinfo {
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;

    }

    h4 {
        text-align: center;
        font-weight: normal;
        line-height: 30px;
        font-size: 16px;

    }

    .addressinfo input[type=text] {
        width: 75%;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        border: 0;
        outline: 0;
    }

    .addressinfo div span {
        display: inline-block;
        width: 23%;
        padding: 0 0 0 10px;
        box-sizing: border-box;
    }

    .save {
        color: #fff;
        font-size: 18px;
        font-family: Arial;
        height: 45px;
        line-height: 45px;
        background-color: #5da8ad;
        letter-spacing: 2px;
        display: block;
        width: 90%;
        text-align: center;
        border-radius: 5px;
        margin: 0 auto;
        padding-bottom: 10px;
    }
    .close{
        text-decoration: none;
        color: #3c3c3c;
        float:right;
        position: absolute;
        right: 10px;
        top: 10px;
    }
</style>


<script>
    export default{
        data(){
            return{
               
            }
        },
        methods:{
            close(){
                this.$emit('notshow');
            },
            beforeEnter(el){
                el.style.height="0px"
            },
            enter(el,done){
                el.offsetWidth;
                el.style.height="315px"
                el.style.transition="height  5s  ease";
                done();
            },
            afterEnter(el){

            }
        }
    }
</script> -->