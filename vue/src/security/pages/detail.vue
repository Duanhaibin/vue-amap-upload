<template>
    <div class="detail">
        <index-banner></index-banner>
        <div class="detail-box">
            <h3>贺州市玉石林景区交通路线图州市玉石林景区交通路线图州市玉石林景区交通路线图州市玉石林景区交通路线图</h3>
            <p class="time  publish">
                发布时间： 2888-88-99 33:33:33
            </p>
            <p class="time  valid">
                有效期至： 2888-88-99 33:33:33
            </p>

            <p class="detail-info">尤雨溪是Vue.js框架的作者，HTML5版Clear的打造人。他认为，未来App的趋势是轻量化和细化，能解决问题的应用就是好应用。而在移动互联网时代大的背景下，个人开发者的机遇在门槛低，成本低，跨设备和多平台四个方雨溪是Vue.js框架的作者，HTML5版Clear的打造人。他认为，未来App的趋势是轻量化和细化，能解决问题的应用就是好应用。而面。</p>

            <a href="https://www.baidu.com">
                来源出处： <span>原始文章链接</span> 
            </a>
        </div>
       
    
    </div>
</template>
<script>

import  Banner from '../components/banner'


// require styles


export default {
    name: 'search',
    data () {
        return{
            msg: ['埃及','美国','巴厘岛','法国','吉尔吉斯斯坦','塔吉克斯坦','柬埔寨','澳大利亚','新西兰','冰岛']
        }
    },
    components:{
        'index-banner': Banner
    }
}
</script>
<style lang="scss">
    .detail{
        background: #fff;
        position:absolute;
        min-height: 100%;

    }
    .detail-box{
        padding: 0 .4rem;
        h3{
            font-size: .28rem;
            font-weight: bold ;
            line-height: .48rem;
            padding: .2rem 0;
        }
        p{  
            font-size: .28rem;
            line-height: .5rem;
        }
        .time{
            font-size: .24rem;
        }
        .publish{
            color: #666;
        }
        .valid{
            color:#ef6824;
            margin-bottom: .5rem;

        }
        .detail-info{
            margin-top:   .4rem;
            padding-bottom: .4rem;
        }
    }
   
 
</style>

