<!-- <template>
    <div class="addressList">
        <div class="ad-shadow">
            <div class="clearfix">
                <div class="ad-l">收货人：测试</div>
                <div class="ad-r">15990157013</div>
            </div>
            <div class="ad-ad">地址：浙江省 杭州市 拱墅区 北部软件园</div>
            <div class="clearfix">
                <div class="ad-l"><mt-radio></mt-radio></div>
                <div class="ad-r"><a class="ad-line" href="#">编辑</a></span><a class="remove" >删除</a></div>
            </div>
        </div>


        <div class="ad-shadow">
            <div class="clearfix">
                <div class="ad-l">收货人：测试</div>
                <div class="ad-r">15990157013</div>
            </div>
            <div class="ad-ad">地址：浙江省 杭州市 拱墅区 北部软件园</div>
            <div class="clearfix">
                <div class="ad-l">
                        <mt-radio></mt-radio>
                </div>
                <div class="ad-r"><a class="ad-line" href="javascript:;" @click="notshow('edit')">编辑</a></span><a  href="#">删除</a></div>
            </div>
      
      
        </div>
    
        <addressInfo v-show="isshow" @notshow="notshow"></addressInfo>
       
        <a href="#" class="add" @click="notshow('add')">添加新地址</a>
    </div>
</template>
     
<script>

    import mui from '../../lib/mui/js/mui.min.js'
    mui.init({
		swipeBack: true 
     });
     window.onload=function(){

        document.getElementsByClassName("remove")[0].addEventListener('click', function() {
				var btnArray = ['是', '否'];
				mui.confirm('', '确认要将地址删除吗？', btnArray, function(e) {
					if (e.index == 0) {
						
					} else {
						
					}
				})
			},false);
     }
    import mtRadio from '../commentConponent/Radio.vue'
    import addressInfo from '../commentConponent/AddressInfo.vue'
    export default {
        data() {
            return {
                value: '',
                isshow:false
            }
        },
        created(){

        },
        components: {
            'mt-radio': mtRadio,
             addressInfo
        },
        methods:{
            notshow(flag){
                this.isshow=!this.isshow;
                if(flag=="edit"){

                }
                if(flag=="add"){
                    
                }
            }
        }
    }
</script>
<style>
    * {
        margin: 0;
        padding: 0;
    }

    .addressList {
        font-size: 14px;
        background-color: #f9fafb;
        width: 100%;
        height: 100%;
    }

    .clearfix::after {
        content: '';
        display: block;
        visibility: hidden;
        height: 0;
        line-height: 0;
        clear: both;
    }

    .clearfix {
        zoom: 1;
    }

    .addressList .ad-shadow {
        border: none;
        border-bottom: 1px solid #eee;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        margin-bottom: 10px;
        background-color: #fff;
    }

    .ad-l {
        float: left;
    }

    .ad-r {
        float: right;
        padding-right: 10px;
    }

    .ad-info {
        height: 20px;
    }

    .addressList .ad-shadow>div {
        line-height: 25px;
        padding-left: 8px;
    }

    .addressList .ad-shadow>div:nth-child(2) {
        border-bottom: 1px solid #eee;
    }

    .ad-line {
        border-right: 2px solid #eee;
    }

    .addressList>.ad-shadow .ad-r a {
        text-decoration: none;
        color: #3e3e3e;
        padding: 0px 20px;
        font-size: 15px;
        line-height: 35px;
    }
    .ad-ad{
        color: rgb(121, 117, 117);
    }
    .mui-radio.mui-left  input[type=radio]{
        left: 0;
    }
    .mui-radio.mui-left label{
        padding-left: 38px;
    }

    .add{
        color:#fff;
        font-size: 18px;
        font-family: Arial;
        height: 45px;
        line-height: 45px;
        background-color: red;
        letter-spacing: 2px;
        position: absolute;
        bottom: 0;
        left: 0;
        display: block;
        width: 100%;
        text-align: center;
        
    }
    .add:active{
        color: #fff;
    }
    .show{
        visibility: hidden;
    }
</style> -->