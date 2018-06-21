<template>
    <div class="destlist">
        <ul class="list-box ">
			<li class="border-bottom">
				<router-link  to="/">
					<img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg" alt="" >
					<div>
						<div class="slist-title">
							<h3>埃及 <span class="border">紧急</span>    </h3>
							<span>一小时前</span>
						</div>

						<p>中华人民共和他中央人民政府提示您这里是埃及人民共和共中燃根民振幅</p>

					</div>

				</router-link>
			</li>
			<li class="border-bottom">
				<router-link  to="/">
					<img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg" alt="" >
					<div>
						<div class="slist-title">
							<h3>埃及 <span class="border">紧急</span>    </h3>
							<span>一小时前</span>
						</div>

						<p>中华人民共和他中央人民政府提示您这里是埃及人民共和共中燃根民振幅</p>

					</div>

				</router-link>
			</li>
			<li class="border-bottom">
				<router-link  to="/">
					<img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg" alt="" >
					<div>
						<div class="slist-title">
							<h3>埃及</h3>
							<span>一小时前</span>
						</div>

						<p>中华人民共和他中央人民政府提示您这里是埃及人民共和共中燃根民振幅</p>

					</div>

				</router-link>
			</li>
			<li class="border-bottom">
				<router-link  to="/">
					<img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg" alt="" >
					<div>
						<div class="slist-title">
							<h3>埃及</h3>
							<span>一小时前</span>
						</div>

						<p>中华人民共和他中央人民政府提示您这里是埃及人民共和共中燃根民振幅</p>

					</div>

				</router-link>
			</li>
			<li class="border-bottom">
				<router-link  to="/">
					<img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg" alt="" >
					<div>
						<div class="slist-title">
							<h3>埃及</h3>
							<span>一小时前</span>
						</div>

						<p>中华人民共和他中央人民政府提示您这里是埃及人民共和共中燃根民振幅</p>

					</div>

				</router-link>
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
			continent:['亚洲','欧洲','北美洲','南美洲','非洲','大洋洲','南极洲'], 
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
			// this.$store.commit('changeCity','上海');
			// this.$store.dispatch('layerchange')
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
	.destlist {
        background: #fff;
        min-height: 100%;
        position: absolute;
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
		justify-content: flex-start;
		flex-wrap: wrap;
		li{
			width: 1.5rem;
			height: .8rem;
			background: #f8f8f8;
			margin: .2rem .2rem  0 0;
			text-align: center;
			line-height: .8rem;
		}
		li:nth-child(4){
			margin-right: 0;
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
			padding: 0.4rem;
			position: relative;
			a{
				display: flex;
				img{
					width: 1.3rem;
					height: .9rem;
					margin-right: .4rem;
				}
				>div{
					width: 100%;
					overflow: hidden;
					.slist-title{
						padding: .05rem  0;
						display: flex;
						justify-content: space-between;
						h3{
							font-weight: bold;
							font-size: .32rem;
                            color: #333;
                            >span{
                                padding: 0.03rem  .1rem;
                                position:relative;
                                top: -0.03rem;
                                color: #ce1326;
                                font-weight: normal;
                            }
						}
						span{
							font-size: .24rem;
							color: #ef6824;
                        }
                        span::before{
                            border-color: #ce1326;
                            border-radius: 1rem
                        }
					}
					>p{
						color: #666;
						width: 5rem;
						font-size: .28rem;
						overflow: hidden;
						padding-top: .15rem;
						text-overflow:ellipsis;
						white-space: nowrap;
					}
				}	
				
				
			}
			
		}
	}
</style>

