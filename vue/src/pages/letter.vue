<template>
	<div class="letter">
		<div class="prompt">
			您提交的动态信息审核后会第一时间发布到百度、高德、人民日报等客户端 ，请您简单清晰一次回答客服问题。
		</div>
		<ul id="aaaa">
			<li v-for="(item, index) in msg" :key="index" >
				<div :class="{hide: index%3 == 2}" class="header"></div>
				<span :class="{voice: index%3 == 1,note: index%3 == 2,border:index%3 == 2}  ">{{index}}	{{item}}
					<p  class="voice-menu"  v-if="index%3 == 2">
						<i class="iconfont  icon-icon-"></i>转化成功
						<span class="right handle-btn" @click="submit">
							提交
						</span>
						<span class="right handle-btn" @click = "edit(index)">
							编辑
						</span>
						
					</p> 
				</span>
			</li>
		
		</ul>
		
		<div class="btn-box">
			<div class="vbtn" @click="addVoice" @touchstart.native= "ss">
				<i class="iconfont  icon-yuyin"></i>
			</div>
		</div>


		<div v-show="isedit" class="mask">
			<div class="edit-box">
				<h3 class="border-bottom">编辑内容</h3>
				<textarea v-model="editmsg" name="" id="" cols="30" rows="10"></textarea>
				<div class="edit-btnbox  border-top">
					<span @click="cancel">取消</span>
					<span @click="update">确定</span>
				</div>
			</div>
			
		</div>

		
	</div>



</template>



<script>
	export default {
		data() {
			return {
				msg:['你瞅啥您提交的动态信息审核后会第一时间发布到百度、高德、人民日报等客户端 ，请您简单清晰一次回答客服问题。','瞅你咋地','再瞅一个试试','试试就试试试试就试试试试就试试试试就试试试试就试试','你瞅啥','瞅你咋地','再瞅一个试试','试试就试试','你瞅啥','瞅你咋地','再瞅一个试试','试试就试试'],
				isedit: false,
				editmsg: '',
				index: '' //确定编辑信息的位置
			}
		},
		methods:{
			ss() {
				console.log(111)
			},
			addVoice () {
				this.msg.push('您提交的动态信息审核后会第一时间发布到百度、高德、人民日报等客户端 ，请您简单清晰一次回答客服问题。您提交的动态信息审核后会第一时间发布到百度、高德、人民日报等客户端 ，请您简单清晰一次回答客服问题。')
			},
			edit(index){
				this.editmsg = this.msg[index];
				this.index = index;
				this.isedit = true;
			},
			cancel() {
				this.isedit = false;
			},
			update() {
				this.msg.splice(this.index, 1 , this.editmsg)
				this.isedit = false;
			},
			submit() {
				this.$router.push({name: 'Success'});
			}
		},
		watch: {
			msg () {
				this.$nextTick(function(){ 
					document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight;
				}) 

			}
		}

	};
</script>

<style scoped  lang="scss" >
	.letter{
		position: absolute;
		background: #eee;
		font-size: 14px;
		ul{
			margin-bottom : 200px;
		}
		ul li{
			margin: 20px 10px;
			display: flex;
			.header{
				width: 40px;
				height: 40px;
				min-width: 40px;
				background: yellow;
			}
			.hide{
				display: none;
			}
			>span{
				font-size: 14px;
				line-height: 20px;
				padding: 10px;
				background: #fff;
				margin: 0  15px;
				position: relative;
				border-radius: 5px;
			}
		}
		ul li:nth-child(3n+1){
			flex-direction: row;
			>span{
				margin-right: 50px;
			
			}
			>span::before{
				content: '';
				display: block;
				width:0;
				height: 0;
				border-style: solid;
				border-width: 7px 7px 7px 7px;
				border-color: transparent #fff transparent transparent;
				position: absolute;
				top: 13px;
				left: -14px;
			}
		}
		
		ul li:nth-child(3n+2){
			flex-direction: row-reverse;
			>span{
				margin-left: 50px;
			}
			>span::before{
				content: '';
				display: block;
				width:0;
				height: 0;
				border-style: solid;
				border-width: 7px 7px 7px 7px;
				border-color: transparent  transparent transparent #fff;
				position: absolute;
				top: 13px;
				right: -14px;
			}
		}
		ul li:nth-child(3n+3){
			align-items:top;
			justify-content:center;
			.note{
				width: 100%;
				margin: 0 50px;
				padding-bottom: 50px;
				position: relative;
				p{
					font-size: 12px;
					color: #bbb;
					position: absolute;
					left: 0;
					bottom: 5px;
					width: 100%;
					i{
						font-size: 12px;
						margin: 0  5px;
					}
					.handle-btn{
						color: #ef6824;
						margin-right: 20px;
					}

				}
			}
			.border::before{
				border-color: #bbb;
				border-radius: 10px;
			}
		
		}
		.prompt{
			font-size: 14px;
			text-indent: 28px;
			line-height: 2;
			padding:  8px  0;
			background: #fff;
		}
		.btn-box{
			position: fixed;
			height: 100px;
			bottom: 0 ;
			width: 100%;
			display: flex;
			align-items:top;
        	justify-content:center;
			.vbtn{
				width: 70px;
				height: 70px;
				background: #fff;
				text-align: center;
				border-radius: 70px;
				i{
					line-height: 70px;
					font-size: 30px;
					color: #ef6824;
				}

			}
		}

		.mask{
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 9;
			background: rgba(0,0,0, .4);
			display: flex;
			align-items:center;
        	justify-content:center;
			.edit-box{
				background: #fff;
				width: 90%;
				h3{
					line-height: 36px;
					text-align: center;
					font-size: 18px;
				}
				textarea{
					width: 90%;
					margin-left: 5%;
				}
				.edit-btnbox{
					display: flex;
					justify-content:space-around;
					line-height: 36px;
				}
			}
		}
	}
	
	

</style>

