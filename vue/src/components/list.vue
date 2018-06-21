<template>
    <div class="list">
		<div class="list-head">
			<!-- <index-head></index-head>  -->
			<div class="list-title border-top">
				<div>快速找动态</div> 
				<div class="choose-address">
					<x-button @click.native.stop="setList" type="primary">{{$store.getters.getcity}}</x-button>
					<!-- <x-button @click.native.stop="setList" type="primary">{{area}}</x-button> -->
					<i class="iconfont  icon-xialasanjiao"></i>
				</div>
			</div>
			<ul class="type-box">
				<li>分类1</li>
				<li>分类2</li>
				<li>分类3</li>
				<li>分类1</li>
				<li>分类2</li>
				<li>分类3</li>
				<li>分类3</li>
				<li>分类3</li>
			</ul>
		</div>
        <ul class="list-box ">
            <li class="border-bottom">
                <h1>
                   <a href="/detail">中化恐龙园景区</a> 
                </h1>
                <p>我们这群在GitHub上运行一些最流行的项目的人觉得自己完全被忽略了。而当我们通过你提供的唯一渠道进行质询时,收到却是空白的回应,甚至是没有回应</p>
                <div class="more-box">
                    <div>
                        线路调整
                    </div>
                    <p>
                        2222-22-22 22:22:22
                    </p>

                </div>
            </li>
               <li class="border-bottom">
                <h1>中化恐龙园景区</h1>
                <p>我们这群在GitHub上运行一些最流行的项目的人觉得自己完全被忽略了。而当我们通过你提供的唯一渠道进行质询时,收到却是空白的回应,甚至是没有回应</p>
                <div class="more-box">
                    <div>
                        线路调整
                    </div>
                    <p>
                        2222-22-22 22:22:22
                    </p>

                </div>
            </li>
               <li class="border-bottom">
                <h1>中化恐龙园景区</h1>
                <p>我们这群在GitHub上运行一些最流行的项目的人觉得自己完全被忽略了。而当我们通过你提供的唯一渠道进行质询时,收到却是空白的回应,甚至是没有回应</p>
                <div class="more-box">
                    <div>
                        线路调整
                    </div>
                    <p>
                        2222-22-22 22:22:22
                    </p>

                </div>
            </li>
             </li>
               <li class="border-bottom">
                <h1>中化恐龙园景区</h1>
                <p>我们这群在GitHub上运行一些最流行的项目的人觉得自己完全被忽略了。而当我们通过你提供的唯一渠道进行质询时,收到却是空白的回应,甚至是没有回应</p>
                <div class="more-box">
                    <div>
                        线路调整
                    </div>
                    <p>
                        2222-22-22 22:22:22
                    </p>

                </div>
            </li>
             </li>
               <li class="border-bottom">
                <h1>中化恐龙园景区</h1>
                <p>我们这群在GitHub上运行一些最流行的项目的人觉得自己完全被忽略了。而当我们通过你提供的唯一渠道进行质询时,收到却是空白的回应,甚至是没有回应</p>
                <div class="more-box">
                    <div>
                        线路调整
                    </div>
                    <p>
                        2222-22-22 22:22:22
                    </p>

                </div>
            </li>
             </li>
               <li class="border-bottom">
                <h1>中化恐龙园景区</h1>
                <p>我们这群在GitHub上运行一些最流行的项目的人觉得自己完全被忽略了。而当我们通过你提供的唯一渠道进行质询时,收到却是空白的回应,甚至是没有回应</p>
                <div class="more-box">
                    <div>
                        线路调整
                    </div>
                    <p>
                        2222-22-22 22:22:22
                    </p>

                </div>
            </li>
             </li>
               <li class="border-bottom">
                <h1>中化恐龙园景区</h1>
                <p>我们这群在GitHub上运行一些最流行的项目的人觉得自己完全被忽略了。而当我们通过你提供的唯一渠道进行质询时,收到却是空白的回应,甚至是没有回应</p>
                <div class="more-box">
                    <div>
                        线路调整
                    </div>
                    <p>
                        2222-22-22 22:22:22
                    </p>

                </div>
            </li>
             </li>
               <li class="border-bottom">
                <h1>中化恐龙园景区</h1>
                <p>我们这群在GitHub上运行一些最流行的项目的人觉得自己完全被忽略了。而当我们通过你提供的唯一渠道进行质询时,收到却是空白的回应,甚至是没有回应</p>
                <div class="more-box">
                    <div>
                        线路调整
                    </div>
                    <p>
                        2222-22-22 22:22:22
                    </p>

                </div>
            </li>
        </ul>

		<div class="pick-mask" v-show='showPicker'>

			<div @click.stop="pickerClick" class="area-list" >
				<p> <span @click.stop="cancelArea" class='left'>取消</span/> 请选择地区  <span class="right" @click.stop="confirmArea">确定</span/></p>
				<picker  :data='year7' :columns=2 v-model='year8Value' @on-change='change'></picker>
			</div>
		</div>
        

		<!-- <pre>{{year8Value}}</pre> -->
    </div>
</template>
<script>
// import Head from "../components/head";
import { Cell, Group, Picker, GroupTitle, XButton } from "vux";

export default {
	name: "search",
	data() {
		return {
			area: '常州',
			areaArr: [] ,
			pickShow: false,
			msg: [
				"埃及",
				"美国",
				"巴厘岛",
				"法国",
				"吉尔吉斯斯坦",
				"塔吉克斯坦",
				"柬埔寨",
				"澳大利亚",
				"新西兰",
				"冰岛"
			],
			year7: [
				{
					name: "中国",
					value: "china",
					parent: 0
				},
				{
					name: "中国",
					value: "china",
					parent: 0
				},
				{
					name: "中国",
					value: "china",
					parent: 0
				},
				{
					name: "中国",
					value: "china",
					parent: 0
				},
				{
					name: "中国",
					value: "china",
					parent: 0
				},
				{
					name: "中国",
					value: "china",
					parent: 0
				},
				{
					name: "中国",
					value: "china",
					parent: 0
				},

				{
					name: "美国",
					value: "USA",
					parent: 0
				},
				{
					name: "广东",
					value: "china001",
					parent: "china"
				},
				{
					name: "广西",
					value: "china002",
					parent: "china"
				},
				{
					name: "美国001",
					value: "usa001",
					parent: "USA"
				},
				{
					name: "美国002",
					value: "usa002",
					parent: "USA"
				},
				{
					name: "广州",
					value: "gz",
					parent: "china001"
				},
				{
					name: "深圳",
					value: "sz",
					parent: "china001"
				},
				{
					name: "广西001",
					value: "gz",
					parent: "china002"
				},
				{
					name: "广西002",
					value: "sz",
					parent: "china002"
				},
				{
					name: "美国001_001",
					value: "0003",
					parent: "usa001"
				},
				{
					name: "美国001_002",
					value: "0004",
					parent: "usa001"
				},
				{
					name: "美国002_001",
					value: "0005",
					parent: "usa002"
				},
				{
					name: "美国002_002",
					value: "0006",
					parent: "usa002"
				}
			],
			year7Value: [],
			year8Value: ["USA", "usa002", "0006"]
		};
	},
	props:['showPicker'],
	components: {
		// "index-head": Head,
		Picker,
		GroupTitle,
		XButton,
		Cell,
		Group
	},
	methods: {
		setList() {
			this.$store.commit('changeCity','上海');
			this.$store.dispatch('layerchange')
			this.$emit('changePicker', true)
			this.year7.push(	{
					name: "美国002",
					value: "usa002",
					parent: "USA"
				});
		},
		change(arr) {
			this.areaArr = arr;
			console.log(this.areaArr)
		},
		confirmArea() {
			this.$emit('changePicker', false)
			this.area =  this.areaArr[1];
		},
		cancelArea() {
			this.$emit('changePicker', false)			
		},
		pickerClick() {
			this.$emit('changePicker', true)
		}

	}
};
</script>
<style scoped lang="scss">
	.list {
		button{
			font-size: .28rem;
			line-height:.28rem;
			background: none;
			color: #333;
		}
		.weui-btn::after{
			display: none
		}

	}
	.list-title {
		padding: .3rem 0.4rem;
		display: flex;
		justify-content: space-between;
		.choose-address {
			display: flex;
		}
	}
	.type-box{
		margin: 0  .4rem;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		li{
			width: 1.6rem;
			height: .8rem;
			background: #f8f8f8;
			margin: .2rem  0;
			text-align: center;
			line-height: .8rem;
		}
	}

	.pick-mask{
		position: fixed;
		top:0;
		bottom:0;
		left:0;
		right:0;
		background: rgba(0,0,0,.5)
	}
	.area-list{
		height: 5.3rem;
		width: 100%;
		background: #fff;
		z-index: 3;
		position: fixed;
		bottom: 0;
		.vux-picker {
			width: 100%;
			height: 4.5rem;
			position: fixed;
			bottom: 0;
			color: #fff;
			background: rgba(0,0,0,.4);
			background: #fff;
			
		}
		p{
			line-height: .8rem;
			text-align: center;
			font-size: 18px;
			background: #f4f4f4;
			span{
				color: #3a9cd4;
			}
			.left{
				margin-left: .4rem;
			}
			.right{
				margin-right: .4rem;
			}
		}
	}
	
	.list-box {
		li {
			padding: 0.4rem 0.4rem 0;
			h1 {
				font-size: 0.26rem;
				font-weight: bold;
				padding: 0.1rem 0;
			}
			p {
				font-size: 0.2rem;
				line-height: 0.44rem;
			}
			.more-box {
				display: flex;
				font-size: 0.2rem;
				justify-content: space-between;
				div {
						padding: 0.15rem 0.3rem;
						margin: 0.2rem 0;
						background: #e2f0f9;
						color: #3a9cd4;
				}
				p {
					margin-top: 0.25rem;
				}
			}
		}
	}
</style>

