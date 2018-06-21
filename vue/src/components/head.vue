<template>
    <div>
        <header class="header" >
            <i class="iconfont icon-search head-left"></i>
            <div class="head-search" >
                
            <input @input="handleSearch()" v-model.trim="value" type="text" placeholder="请输入要搜索的地方">
            </div>
        </header>
        <ul v-if="hasResult" class="result-list">
            <li @click='getResult(index)' v-for='(item, index) in result' :key="index" class="border-bottom">{{item}}</li>
           
        </ul>
    </div>

    
</template>

<script>
import { setTimeout , clearTimeout } from 'timers';
    export default {
        name: 'Head',
        props: ['inputType'],
        components: {
            setTimeout,
            clearTimeout
        },
        data () {
           return{
               value: '',
               timeout: null,
               hasResult: false,
               result: ['美利坚合众国','中化人民共和国','英吉利海峡','柬埔寨','老挝','迪拜','越南','上海','苏州','非洲',]

           }
        },
       
        methods: {
            handleSearch() {
                let  showType = this.value == ''? false: true;
                this.hasResult = true; 
                let that = this;
                clearTimeout(this.timeout);
                this.timeout = setTimeout(function() {
                    // console.log(that.value)
                    // console.log(that.prop)
                    that.$emit('change',showType)
                },300)

            },
            getResult(index) {
                console.log(index);
                this.hasResult = false; 
                this.value = this.result[index];
            }
           

        },
        computed: {
            author () {
                return this.$store.state.author
            }
        }   
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='scss'>
    .header{
        display: flex;
        box-sizing: border-box;
        font-size: .24rem;
        height:.6rem;
        border-radius: .08rem;
        background:#f4f4f4;
        margin:0 .4rem .28rem ;
    }
    .head-left{
        width: .48rem;
        height:.48rem;
        line-height: .61rem;
        margin-left: .18rem;
        color: #a8a8a8;
        text-align: center;
        font-size: .28rem;
        
    }
    .head-search{
        padding-left: .3rem;
        line-height: .6rem;
        box-sizing: border-box;
        margin-right: .3rem;
        width: 100%;
        input{
            position: relative;
            display: block;
            width: 100%;
            height: .4rem;
            line-height: .4rem;
            padding: .1rem 0;
            border: 0;
            background: #f4f4f4;
            font-family: "Microsoft Yahei",Arial;
            font-size: .28rem;
        }
    }
    .result-list{
        position: absolute;
        width: 100%;
        background: #fff;
        z-index: 3;
        li{
            padding: .2rem  0  .2rem .4rem;
        }
    }

  
</style>
