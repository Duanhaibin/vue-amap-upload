<template>
    <div class="index">
        <index-banner></index-banner>

        <div class="link-search">
    
            <div class="index-search">
                <i class="iconfont icon-search head-left"></i>
                <router-link to="/search" class="head-search">
                    <span>
                        搜索目的地
                    </span>
                </router-link>
            </div>
        </div>
      
       
        <div class="count-box">
            <p class="border-right">
                今日发布： <span>35</span>
            </p>
            <p>
                累计发布： <span>1203</span>
            </p>
        </div>

        <div class="handle-box">
            <div class="btn-box">
                <router-link  to="/listsearch" class="border link-btn lastest">

                    <i class="iconfont  icon-iconfontanquan"></i>
                </router-link  >
                <router-link to="/listsearch">浏览最近安全</router-link to>
            </div>
            <div class="btn-box">
                <a  href="tel: 12301" class="border link-btn  ask">
                    <i class="iconfont  icon-dianhua"></i>
                </a>
                <a  href="tel: 12301">领事保护热线</a>
            </div>
            <div class="btn-box">
                <router-link  to="/report"  class="border link-btn report">
                    <i class="iconfont  icon-xinxifill"></i>
                </router-link>
                <router-link  to="/report">旅游咨询 12301</router-link>
            </div>

        </div>

     
    </div>

</template>

<script>
    import  Head from '../components/head'
    import  Banner from '../components/banner'
   
    export default {
        name: 'Index',
        components:{
            'index-head' : Head,
            'index-banner': Banner
        }
        // data () {
        //     return {
        //         tabs: [{
        //                 'name': '网页',
        //                 'num': 123
        //             },
        //             {
        //                 'name': '景区',
        //                 'num': 234
        //             },
        //             {
        //                 'name': '酒店',
        //                 'num': 345
        //             },
        //         ],
        //         tabcontents: [],
        //         shownum: 0,
        //     }
        // },
        // methods: {
        //     tab(index) {
        //         let _this = this;
        //         this.$ajax({
        //             method: 'get',
        //             url: '../serve/num.jsoner',
        //             data: {
        //                 name: 'wise',
        //                 info: 'wrong'
        //             }
        //         })
        //         .then(function (response) {
        //             console.log(response);
        //         })
        //         .catch(function (error) {
        //             let res = [{"total":481},{"total":12231},{"total":3531}]
        //             _this.tabcontents[index] = res[index].total
        //         });   
        //         this.shownum = index;   

        //     },
        //     listenChildChange(data){
        //         alert(data)
        //     }
        // },
        // beforeCreate () {
        //     // this.$http.get('../serve/num.json', {params: {word: "", from: "0", size: "1", searchType: "csr"}, headers: {'X-Custom': '...'}}).then(response=>{
        //     //     console.log(response)
        //     // }, response => {
        //     //     let res = [{"total":481},{"total":12231},{"total":3531}]
        //     //     for (let i in  this.tabs) {
        //     //         this.tabs[i].num = res[i].total;
        //     //     }
        //     // });
        //     let _this = this;
        //     this.$ajax({
        //         method: 'post',
        //         url: '../serve/num.jsoner',
        //         data: {
        //             name: 'wise',
        //             info: 'wrong'
        //         }
        //     })
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
               
                
        //         let res = [{"total":481},{"total":12231},{"total":3531}]
        //         for (let i in  _this.tabs) {
        //             _this.tabs[i].num = res[i].total;
        //              _this.tabcontents.push(res[i].total)
        //         }
        //     });      
        // },
        // components: {
        //     search
        // }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
    .index{
        height: 100%;
        width: 100%;
        position:fixed;
        background: #eee;
        div{
            background: #fff;
        }
        .link-search{
            height: .8rem;
            padding-top: .4rem;
        }
        .index-search{
            height: 40px;
            display: flex;
            box-sizing: border-box;
            margin : 0 .4rem ;
            background: green;
            height:.54rem;
            border-radius: .08rem;
            background:#f4f4f4;
            color: #a8a8a8;
            .head-left{
                width: .48rem;
                height:.48rem;
                line-height: .54rem;
                margin-left: .18rem;
                text-align: center;
            }
            .head-search{
                padding-left: .3rem;
                line-height: .54rem;
                box-sizing: border-box;
                margin-right: .3rem;
                background:#f4f4f4;
                width: 100%;
                color: #a8a8a8;

            }
        }
        
    }
  



  
  
    .count-box{
        height: 1.4rem;
        display: flex;
        text-align: center;
        p{
            width: 50%;
            box-sizing: border-box;
            margin: .2rem 0 ;
            line-height: 1rem;
            span{
                color: #ff6301;
            }
        }
    }
    .handle-box{
        background: #ffffff;
        height: 2.8rem;
        margin-top:.3rem;
        display: flex;
        .btn-box{
            flex: 1;
            text-align: center;
            .link-btn{
                display: block;
                height: 1.08rem;
                width: 1.08rem;
                margin: .5rem auto .3rem;
            }
            
            i{
                font-size: .5rem;
                line-height: 1.08rem;
                text-align: center;
            }
        }
        .border::before{
            border-radius: 5rem;
        }
        .lastest i{
            color: #06a951;
        }
        .lastest::before{
            border-color: #06a951;
        }
        .ask i{
            font-size: .4rem;
            color: #ef6824;
        }
        .ask::before{
            border-color: #ef6824;
        }
        .report i{
                color: #227cb1;
        }
        .report::before{
            border-color: #3a9cd4;
        }
        p{
            margin-top: .3rem;
        }
    }
</style>


