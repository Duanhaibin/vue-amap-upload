<template>

    <div class="report-box">
        <report-banner></report-banner>

        <group>
            <i class="iconfont  icon-dizhi"></i>
            <x-input :required="true"   @click.native="show"  v-model="form.inspect_address"  title="景区地址" name="username" readonly  placeholder="请选择景区地址"></x-input>
        </group>

        <group>
            <i class="iconfont  icon-jingdian"></i>
            <x-input :required="true"  title="景区名称" v-model="form.inspect_name"  name="username" placeholder="请输入景区名称" ></x-input>
        </group>


        <group >
            <i class="iconfont  icon-icon-test up-icon"></i>
            <x-input :max="20" :placeholder="('标题')"></x-input>
            <x-textarea :max="200" name="description" :placeholder="('内容')"></x-textarea>
        </group>

        <group>
            <i class="iconfont  icon-yonghu  icon-user"></i>

            <x-input :required="true"  title="姓名" name="username" placeholder="请输入姓名" is-type="china-name"></x-input>
        </group>

        <group>
            <i class="iconfont  icon-shouhuorenshoujihao   up-icon  phone-icon"></i>
            <x-input :required="true" title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
        </group>

        <div class="upload-container">
            <upload></upload>
            <p class="annotation">
                注： 上传图片、视频有助于景区动态发布审核，谢谢配合
            </p>
            
        </div>






        <div class="btn-box">
            <x-button @click.native= "handleSubmit">提交</x-button>
        </div>
       

       
         
        <transition style="width:100%; height: 100%" name="up">
            <v-map v-show="showMap" :start="showMap"  @changemap='changeshow'  @address="getAddress" ></v-map>
        </transition>
    
    </div>
</template>

<script>
import  Banner from '../components/banner'
import vMap from '../components/LbsMap.vue'
import { XInput, XTextarea , Group, XButton, Cell } from 'vux'
import upload from "../components/UploadFiles"
export default {
    components: {
        reportBanner: Banner,
        vMap,
        XInput,
        XTextarea,
        XButton,
        Group,
        Cell,
        upload
    },
    data () {
        return {
            showMap: false,
            form: {
                inspect_address: '',
                inspect_name: ''
            }
        }
    },
    methods: {
        changeshow(val){
             this.showMap = val;
        },
        getAddress(ads) {
            this.form.inspect_address = ads.address
            this.form.inspect_province = ads.province
            this.form.inspect_city = ads.city
            this.form.inspect_name = ads.name
            this.showMap = false;
        },
        show() {
            this.showMap = true;
        },
        handleSubmit() {
            this.$router.push({name: 'Success'});
        },
        upload() {
            alert()
        }

    }
    
    
}
</script>
<style  lang="scss">
.report-box{
    background: #fff;
    .weui-cells{
        font-size: .28rem;
        padding-left: .5rem;
        position: relative;
        margin-top : 0;
        .iconfont{
            position: absolute; 
            left: .2rem;
            color: #333;
            font-size: .35rem;
        }
        .up-icon{
            // top: .06rem;
            font-size: .4rem;
        }
       
        .phone-icon{
            // top: .06rem;
            left: .14rem;
            font-size: .44rem;
        }
    }
    .weui-cells:before{
        display: none;
    }
    .vux-x-input::before{
        display: none;
    }
    @media screen and (max-width: 600px) { /*当屏幕尺寸小于600px时，应用下面的CSS样式*/  
        .iconfont{
            top:.16rem;      
        }
        .icon-user{
            top:.14rem;
        }
        .phone-icon{
            top: .04rem;
        }
         .icon-icon-test{
            top: .06rem
        }
    }  

    @media screen and (min-width: 600px) { /*当屏幕尺寸小于600px时，应用下面的CSS样式*/  
        .iconfont{
            top: .08rem;      
        }
        .icon-user{
            top: .06rem;
        }
        .phone-icon{
            top: -0.02rem;
        }
        .icon-icon-test{
            top: 0;
        }
    }  
    @media screen and (min-width: 900px) { /*当屏幕尺寸小于600px时，应用下面的CSS样式*/  
        .iconfont{
            top: .03rem;      
        }
        .icon-user{
            top: .04rem;
        }
        .phone-icon{
            top: -0.08rem;
        }
        .icon-icon-test{
            top: -0.04rem;
        }
    }  



    .btn-box{
        padding: .4rem;
        .weui-btn{
            background: #ef6824;
            color: #fff;
            height: .8rem;
            font-size: .32rem;
            
        }
        .weui-btn:active{
            background: #ec4e00;
            color: #fff;
        }
    }
    .upload-container{
        margin:  .4rem .2rem; 
        .upload-box{
            height: 1rem;
            width: 1rem;
            text-align: center;
            line-height: 1rem;
            i{
                font-size: .6rem;
                color: #06a951;
            }

        }

    }
    .annotation{
        font-size:  .24rem;
        color : red;
        margin-top: .2rem;
    }
    
  
    
}
.report-img{
    height: 2rem;
    width: 100%;
}
</style>