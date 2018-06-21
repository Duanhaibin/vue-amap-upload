<template>
    <div class="hello">
        <header class="header">
            <div class="h-box">
                <input :placeholder="author"  class="search-box" type="text" name=""><span   @click="search" class="search-btn">查&nbsp;&nbsp;&nbsp;&nbsp;询{{mss}}</span>
            </div>

        </header><!-- /header -->
    </div>
    
</template>

<script>
    export default {
        name: 'Header',
        data () {
           return{

           }
        },
        methods: {
            search() {
                this.$emit('listenChildChange', "紫传福")

            }
        },
        props: ['mss'],
        computed: {
            author () {
                return this.$store.state.author
            }
        }   
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang='scss'>
    $firstclr: #e96420;
    .header{
        border-bottom: 1px solid #ccc;
        background: #fcf8e3;
        height: 68px;  
        display: flex;

    }
    .h-box{
        flex: 1;
        // top: 16px;
        // width: 40%;
        // margin: 0 auto;
        // padding: 10px  0;
        // background: #fff;
        // border-radius: 5px;
        // position: relative;
        // border: 1px solid  $firstclr;
    }
    .search-btn{
        background: #ccc;
        // background: $firstclr;
        // display: inline-block;
        // position: absolute;
        // text-align: center;
        // line-height: 36px;
        // cursor: pointer;
        // color: #ffffff;
        // height: 100%;
        // width: 18%;
        // left:82%;
        // top: 0;    
    }
    .search-box{
        width: 80%;
        height: 16px;
        border: none;
        font-size: 14px;
        margin-left: 2%;
        line-height: 16px;
    }
   
  
</style>
