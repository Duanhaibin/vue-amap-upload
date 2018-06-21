<template>
    <div class="search" @click="domPicker">
        <index-head style=" margin-top: .28rem;" :input-type="isInput"   @change= "changeType" ></index-head> 
        <div v-show='!isInput'>
            <div class="history-box border-top">
                <div >
                    <h1>历史搜索</h1>
                    <span @click = "delHistory">删除</span>
                </div>
            
                <ul class="search-list">
                    <li class="border" v-for="(item, index) in  msg"  :key='index' @click="gotodetail()">
                        {{item}}
                    </li>

                </ul>

            </div>

            <div>
                <h1>热门搜索</h1>
                <ul class="search-list">
                    <li class="border" v-for="(item, index) in  msg"  :key='index'>
                        {{item}}
                    </li>

                </ul>

            </div>
        </div>
        <list :show-picker='hidePicker'  @changePicker="picker"  v-if='isInput'></list>

    </div>
</template>
<script>

import  Head from '../components/head'
import List from '../components/list.vue'

export default {
    name: 'search',
    data () {
        return{
            isInput: false,
            hidePicker: false,
            msg: ['埃及','美国','巴厘岛','法国','吉尔吉斯斯坦','塔吉克斯坦','柬埔寨','澳大利亚','新西兰','冰岛']
        }
    },
    components:{
        'index-head' : Head,
        'list': List
    },
    methods: {
        gotodetail () {
            this.$router.push({name: 'Detail'});
        },
        changeType(showType) {
            this.isInput = showType;
        },
        domPicker() {
            this.hidePicker = false;
        },
        picker(val) {
            this.hidePicker = val;
            console.log(123)
            console.log(val)
        },
        delHistory() {
            alert()
        }
    }
}
</script>
<style scoped lang="scss">
    .search{
       
        background: #fff;
        min-height: 100%;
        position: absolute;
    }
    h1{
        margin: .32rem  0  .3rem  5%;
        font-weight: bold;
    }
    .search-list{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 0  0  0  .4rem ;
        li{ 
            // border: 1px solid #fe6617;
            word-wrap: none;
            margin: .14rem   .4rem  .14rem  0;
            padding: .1rem  .3rem;
        }
        
    }
   
    .border::before{
        border-radius: .5rem;
        border-color:#fe6a1c;
    }
    .history-box{
        div{
            display: flex;
            justify-content:space-between  ;
            span{
                margin: .32rem  .3rem  0  0 ;
                color: #3a9cd4;
            }
        }
    }
</style>

