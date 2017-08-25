//批改v-2.0
        
        var screenWidth=document.documentElement.clientWidth;
	    var screenHeight=document.documentElement.clientHeight;
		var Width=screenWidth-150;//屏幕宽度
		var Height=screenHeight-220;//屏幕高度
		var rotater=1        			 //旋转系数
		var realwidth=null;  			 //图片真实宽度
		var realheight=null; 			 //图片真实高度
		var pigaidraw=$("#draw")
		var pigaimove=$("#move");        //鼠标手势
		var pigaicolor=$("#color");  	 //颜色选择
		var pigaidui=$("#dui");      	 //正确对勾
		var pigaibandui=$("#bandui"); 	 //半对
		var pigaicuo=$("#cuo");			 //错误
		var pigaixiangpi=$("#eraser")	 //橡皮擦
		var pigaiclear=$("#clear")		 //清空/还原	
		var pigaiimgurl=$("#imgurl")     //保存图片
	    var pigaiclose=$(".close")       //关闭批改
	    var closecolor=$(".closecolor")  //关闭颜色选择按钮
	    var chosecolorname=$(".chosecolorname")
	    //颜色选择
	    var color_red="#ff0000",
	        color_orange="#ffcc00",
	        color_yellow="#ffff00",
	        color_green="#99ff00",
	        color_blueone="#79e4ff",
	        color_blue="#1199ff";
	    var chosecolor_name="#ffcc00";  
		/////////////
		var opencanvans=$(".opencanvans")//点击获取图片
		var iconbar=$(".icon-bar")
	$("#parent").css("width",Width)
	$("#parent").css("height",Height)
	$("#pigai").css("marginLeft",-Width/2)
	$("#pigai").css("marginTop",-((screenHeight/2)-80))
	opencanvans.on("click", function() {
			        $('body').scrollTop(0)//scrolltop
		            $('body').css("overflow","hidden")
					$("#pigai").show();//批改显示
					rotater=1;
					$("#rotate").removeClass("unckick");
				//默认选中状态
				$(".top span").removeClass("active")
				$("#move").addClass("actvie")
				var imgtt = $(this).parent().find('img');//获取图片
				$("<img/>").attr("src", $(imgtt).attr("src")).load(function() {
				    //图片真实宽度高度	
				    realwidth = this.width;
					realheight = this.height;
					//创建目标图片和canvas
				var imgback = '<img src="' + imgtt.attr("src") + '" style="display: none" id="imger">'
				var imgcanvas = '<canvas id="canvas" width="0" height="0">您的浏览器不支持 canvas 标签</canvas>'
				    $("#parent").html(imgback + imgcanvas)
				    
					//初始化canvas背景图
				var imgbg = document.getElementById("imger").src;
				$("canvas").css("backgroundImage", 'url(' + imgbg + ')')
					// 初始化缩放之前重置canvas大小
		            $('#canvas').attr('width',realwidth);
				    $('#canvas').attr('height',realheight); 
				    //运行批改方法
		             Marking()
		             
		             chosebar()
		             
				   })
				})


//工具选择颜色互斥
iconbar.on("click",function(){
	$(this).addClass("active").siblings().removeClass("active")
})

function chosebar(){
	    var pigaicanvas=$("#canvas")    
				//鼠标手势选择
				pigaidraw.on("click",function(){ pigaicanvas.attr("class","qianbi");})
				pigaimove.on("click",function(){ pigaicanvas.attr("class","");})
				//鼠标手势
				pigaicolor.on("click",function(){ pigaicanvas.attr("class","");})
				//颜色选择
				pigaidui.on("click",function(){ pigaicanvas.attr("class","dui"); })
				//正确对勾
				pigaibandui.on("click",function(){ pigaicanvas.attr("class","bandui");})
				//半对
				pigaicuo.on("click",function(){ pigaicanvas.attr("class","cuo"); })
				//错误
				pigaixiangpi.on("click",function(){ pigaicanvas.attr("class","xiangpi"); })
				//橡皮擦
				pigaiclear.on("click",function(){ pigaicanvas.attr("class",""); })
				//清空/还原
				pigaiimgurl.on("click",function(){ pigaicanvas.attr("class",""); })
				//保存图片
}


//批改关闭
pigaiclose.on("click",function(){
$("#pigai").hide()	
 $('body').css("overflow","auto")
})
//关闭颜色选择按钮
$(".closecolor").on("click",function(){
$(".chosecolorname").hide()
return false;
})

//颜色选择



$(".chosecolorname li").on("click",function(){
	$(this).addClass("avtivecolor").siblings().removeClass("avtivecolor")
})

//旋转
function  rotate(){
	              	var imgbger=document.getElementById("imger")
	              	var imgbg=document.getElementById("imger").src;
	        if(rotater==1){
	        var imgback = '<img src="'+imgbg.split("=")[0]+'='+(parseInt(imgbg.split("=")[1])+parseInt(90))+'" style="display: none" id="imger">'
			var imgcanvas = '<canvas id="canvas" width="'+realheight+'" height="'+realwidth+'">您的浏览器不支持 canvas 标签</canvas>'
			$("#parent").html(imgback + imgcanvas)
				         var imgbg = document.getElementById("imger").src;
			             $("canvas").css("backgroundImage", 'url(' + imgbg + ')')
			             Marking()
//			             chosebar()
				    rotater=2
	              	}
	        
	      else if(rotater==2){
	        var imgback = '<img src="'+imgbg.split("=")[0]+'='+(parseInt(imgbg.split("=")[1])+parseInt(90))+'" style="display: none" id="imger">'
			var imgcanvas = '<canvas id="canvas" width="'+realwidth+'" height="'+realheight+'">您的浏览器不支持 canvas 标签</canvas>'
			$("#parent").html(imgback + imgcanvas)
				         var imgbg = document.getElementById("imger").src;
			             $("canvas").css("backgroundImage", 'url(' + imgbg + ')')
			             Marking()
			             chosebar()
	                 rotater=3
	              	} 
	              	
	      else if(rotater==3){
	        var imgback = '<img src="'+imgbg.split("=")[0]+'='+(parseInt(imgbg.split("=")[1])+parseInt(90))+'" style="display: none" id="imger">'
			var imgcanvas = '<canvas id="canvas" width="'+realheight+'" height="'+realwidth+'">您的浏览器不支持 canvas 标签</canvas>'
			$("#parent").html(imgback + imgcanvas)
				         var imgbg = document.getElementById("imger").src;
			             $("canvas").css("backgroundImage", 'url(' + imgbg + ')')
			             Marking()
			             chosebar()
	              		 rotater=4
	              	}
	       else if(rotater==4){
	        var imgback = '<img src="'+imgbg.split("=")[0]+'='+(parseInt(imgbg.split("=")[1])+parseInt(90))+'" style="display: none" id="imger">'
			var imgcanvas = '<canvas id="canvas" width="'+realwidth+'" height="'+realheight+'">您的浏览器不支持 canvas 标签</canvas>'
			$("#parent").html(imgback + imgcanvas)
				         var imgbg = document.getElementById("imger").src;
			             $("canvas").css("backgroundImage", 'url(' + imgbg + ')')
			             Marking()
			             chosebar()
	                     rotater=1
	              	} 
	              }
 
//批改 放大缩小 
function Marking(){     
	
	                    var chosecolor_name;
						var X,Y;
		                var imgbg = document.getElementById("imger").src;
	             	        // 初始化缩放之前重置canvas大小
		                var imgdui=new Image();
					        imgdui.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADp0lEQVR4Xu1Z3VHbQBDePTEDTEByOnAqCKkgpoLAI+IhpAKcCiAV2KnAzoPtR9MBdgWYCkIJkSEQZixd5myJkYWQ9sSdsX70qtPeft9+t7vaQyj5gyXHDxUBlQJKzkB1BEougCoJVkegOgIlZ6BYR2CwVTf4Zsu1nUNqXAtDABuYZ8jxHADGru00ykNA790eg40OIuz5oMtDgNHbPeHAWohQCyLOgf/y7OlJ4RUQkvwSVs75D+94Ko4C6cllDmA9s4OIsVEuPAFJ4EXIXXT34ehuRAo/QL5a4TTwhSaAAr6wBLC+2UTAFkXWhTsCotQBsg4FfPEUsGhyLsN1Po0IDvy7Z0/baeuC9+tbBodQYw/WFQLUqWDEOg78p2dPm9Rv1pYAo28NAeCACiS0Lv+tsEzSiyPI3XbewyH8oZC3fgrIcO6fAeXeN/f4tptLAljPugr92VEwRNeMXfDaYN9eUD5eKwWwnnmOiGcUx6NrOMC1h25Tpg0WNtaHgMU053cm8JJ/gOE99BEwhBo1EQmHjL51CQDkSc6i5IHjoXsgG3W9BAx2GowbHQA+Jg8m+rsHBjBR9sjPXPJ8dgLHfyfkj2IWqlOAP5AM124XHz/A0b+bRAczNDxz8NtOQ0ZhL/mghAAxnQEPmzEt60XahFY28akE//ok6Ms9qV1N/DsbbNWZtynK3tNML0ktqsFnJ0DI9t5svTSWioAYubazHweM9c0uAn6lnGEd4DMRwHrmKQCeU6MmNolVgUTZ0wVejgAhd88QI+hg/k4JXLDmmQqo0dcJXo6ARakSv5mfZZAHa5dUQIz+os4/7qVWkiwO+d/IV4HBTsPghpi7yxLxpAJK9Ofg+azx2jqfxo08Ab7F+a0MsjYCWGmbLKkAZjeUltcF75D6Q0PdP25dZgLmxoZQM+7NLiB+oTjBOUwA+RgBT5PLndxYi7K33kZIYmqb5qzs3V6avbT3r1NA2PqiKbqQORJR53RnfPVHIGpRdHZ8U5DwMY35GPDaM75+Avy8wB6skSwJq0p6URLUHYGwZdnkKDnKllVX0no9BPg7Euv9tWc7WbpLJTxoJUB4mEaCy2efdDc7b6aAYGPWtyZxOUH2GktJyCNGtCsgaJhiEqPUDY4O8MLmagiIqQ5vLf2A0NURIHYUtz64MQLgXZkLTF3RX60CAhSDnQZs3U1UDDRVELNaBajwWLGNigDFhObOXKWA3IVMscOVAhQTmjtzlQJyFzLFDpdeAf8Bjl93UEa73e4AAAAASUVORK5CYII=";
					    var imgbandui=new Image();
					        imgbandui.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE7UlEQVR4Xu2ZW4gbZRTHz5lJNumC3d26mSzJBLe6XrsT90279KIgKCreHupTBR8qIoIIK60FsYKw9UpBfFB8qKBvPhRxxb4sdV20D4olE6kVW6y5dDNZ3V0rtc0mc2QGokl2Lt/kMvnCJk9hcr5vzv93Lt+ZCcIm/+Am1w99AP0M2OQE+iWwyROA/yaYmZSSYumffOyXy8udCBbXJZCblKZ1AeaQcCmAsHcsVdBagbAyNTw8cmZ1tXYPbgFkd4zeS4L4JSKETYcJfg4S3RNNa4VmIGTuiEygiIsA8Kasau9W9+ASQCYZvQsB5gFgsFYsEV0IIu70mgn524dvqAQGTiPimLmfTjNyWnvH+ModgKVkdPs60I8IOGQVaSI6Hy7ruyNnly+xZIKxX5loARDlOntdPyyni7PcATCczCaljwHwKTuBRiaES/ruyLnlvBMEI/J6YGBxg/jqIp1muATAAgEALoauVabtIGTuvD6OunjaVrzZVug1bgEYEHKK9CEhHnCIsiUEUzwFjIY3brcWCY7G1cLLXANghSBUSntiP638bth7Ec9lE7SKmFsmEFBOrKxPVwJChTXyXB+DVhCyyegxAHjBtjEC5YDgKiLe5JD2b8TVwqGeGISsRGSU6HuI8DzL8bfBhvRjslp8sfE69z2g0eGmINiI75kesAFCUnoLAWeYMsFBfM8CMOeESel9EPA5RwhEx2VVe9rJpudKwBDjOuH9r7gY1GlnNK2dt22MTGnEkZEH8abXRLQ0QLDLDkJPZQDLeGsVKwOCWC7dHTu7erFnTwGWCc+lH2SFcmlXI4SeyIBscptMEFxAgO1Os70O+hqiMGsLguhZWdU+6KlBiCXyBPR2IqW9ZAjLKJGDiMLROghERIjPJFKFj3qqBMzIU+CUy3hrPtXVCsslpVcJ8Ej1Gum0P5HWPrHKjLoSMF5CEsIR4Q/tsVgernSz+XuNfKOvOSU6SwiHCOCAVeSr9v8BMF9CiuIcAmwBgPn4X4WH8De42g0I2o7IWEnEBQC82anmGyPfaJtXIntianHBdRC6pIzuLYN4EhFCNcbz8SuFB/FXuOYnhMKkFC0hLCLihN19a2u+Vd8wp0Tv0wG+aBBf3ddXCH6LN0RiRpFOIOKjDrRPJlLaA62Sdltvpr2ApwDxVgfbWTlVOOy2l5ffkSYglB2UTiCgrUgC+koOao/gD7DuZXNW225Evq4JdhNC/pbrRiuhLd/5VfO2cwAzhJT2MAJUWKPrZGeI10OD3wDCbX40PNc5gAUCEH0eV7UnWoXAg3izCTZS8QMCL+ItARgXPUB4HAF0L+XAk3hbAB4gfBZXtSdZIfAm3hFAuyGsKkMjf0P42242PNcmaGXAWA6OmWCIvwyhrxFR6Va3t7sv0wsRDxD2ofGna82HZ/GuJVArhAUCEX0qq9r+KgTexXsCwNoTqhDWlKFhXtO+NrBMJVCXCeMQzm41nx3utz3+iI4DwhQATtnb6K/LavEVL0doJ2w9A2DNBCdn2/k83yqUpgC0AoEn8Z57QFNjc80i3sS3DMBLJvAovi0AWCDwKr5tAJwg8Cy+rQCsIPAuvu0ATAjjEM5tjc4R0fcJVTvY6jHV6fVNH4NOjv1548jQtgsra512vh37dwRAOxzza48+AL9I83qffgbwGhm//OpngF+keb3Pps+AfwGAT4yfYoLmawAAAABJRU5ErkJggg==";
					    var imgcuo=new Image();
					        imgcuo.src="data:image/png;base64,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";      
				var paint = {
					init: function() {
						this.load();
						console
					},
					load: function() {
						this.x = []; //记录鼠标移动是的X坐标 
						this.y = []; //记录鼠标移动是的Y坐标 
						this.clickDrag = [];
						this.lock = false; //鼠标移动前，判断鼠标是否按下 
						this.m = true;
						this.isEraser = false;
						this.piDui=false;
						this.piBandui=false;
						this.piCuo=false;
						this.storageColor = "#000000";
						this.eraserRadius = 15; //擦除半径值 
						this.fontWeight = [2, 5, 8];
						this.$ = function(id) { return typeof id == "string" ? document.getElementById(id) : id; };
						this.canvas = this.$("canvas");
						if(this.canvas.getContext) {} else {
							alert("您的浏览器不支持 canvas 标签");
							return;
						}
						this.cxt = this.canvas.getContext('2d');
						this.cxt.lineJoin = "round"; //context.lineJoin - 指定两条线段的连接方式 
						this.cxt.lineWidth = 2; //线条的宽度 
						this.iptClear = this.$("clear");
						this.imgurl = this.$("imgurl"); //图片路径按钮 
						this.move = this.$("move");
						this.draw = this.$("draw");
						this.dui=this.$("dui");
						this.bandui=this.$("bandui");
						this.chosecolor=this.$("color")
						this.cuo=this.$("cuo");
						this.w = this.canvas.width; //取画布的宽 
						this.h = this.canvas.height; //取画布的高 
						this.touch = ("createTouch" in document); //判定是否为手持设备 
						this.StartEvent = this.touch ? "touchstart" : "mousedown"; //支持触摸式使用相应的事件替代 
						this.MoveEvent = this.touch ? "touchmove" : "mousemove";
						this.EndEvent = this.touch ? "touchend" : "mouseup";
						this.bind();
					
					},
					bind: function() {
						var t = this;
						/*清除画布*/
						this.iptClear.onclick = function() {
							t.clear();
						};
						/*鼠标按下事件，记录鼠标位置，并绘制，解锁lock，打开mousemove事件*/
						this.canvas['on' + t.StartEvent] = function(e) {
							if(t.m) {
								var location = getLocation(e.clientX, e.clientY); 
					            X=location.x;
					            Y=location.y;
								console.log(1);
								obj.mouseMoveBind();
								//正确绘图
								if(t.piDui){
									t.cxt.drawImage(imgdui,X, Y,60,60)
									console.log(X)
									console.log(Y)
							   //半对绘图
								} else if(t.piBandui){
									t.cxt.drawImage(imgbandui,X, Y,60,60)
								//错误绘图
								}else if(t.piCuo){
									t.cxt.drawImage(imgcuo,X, Y,60,60)
								}
							}else {
								console.log(2);
								var location = getLocation(e.clientX, e.clientY); 
					            X=location.x;
					            Y=location.y;
								obj.mouseMoveUnbind();
								var touch = t.touch ? e.touches[0] : e;
								// 获取放大后的偏移量
								var l = $('canvas').css('transform').length;
								var top = parseFloat($('canvas').css('transform').substring(7,l-1).split(', ')[0]);
								var _x = ((touch.clientX - $('#canvas').offset().left)/top); //鼠标在画布上的x坐标，以画布左上角为起点 
								var _y = touch.clientY - $('#canvas').offset().top; //鼠标在画布上的y坐标，以画布左上角为起点 
									
								if(t.isEraser) { // 判断isEraser 为true是橡皮擦，false为画笔
									t.resetEraser(_x+5, _y+15, touch);
								}else {
//									t.movePoint(_x, _y, true); //记录鼠标位置 
//									t.drawPoint(); //绘制路线 
								}
								t.lock = true;
							}
						};
						/*鼠标移动事件*/
						this.canvas['on' + t.MoveEvent] = function(e) {
							var touch = t.touch ? e.touches[0] : e;
							if(t.lock) //t.lock为true则执行 
							{
								// 获取放大后的偏移量
								var l = $('canvas').css('transform').length;
								var top = parseFloat($('canvas').css('transform').substring(7,l-1).split(', ')[0]);
								var _x = ((touch.clientX - $('#canvas').offset().left)/top); //鼠标在画布上的x坐标，以画布左上角为起点 
								var _y = ((touch.clientY - $('#canvas').offset().top)/top); //鼠标在画布上的y坐标，以画布左上角为起点 
								X=_x;
								Y=_y;
								if(t.isEraser) {
									t.resetEraser(_x, _y, touch);
								} else {
									t.movePoint(_x, _y, true); //记录鼠标位置 
									t.drawPoint(); //绘制路线 
								}
							}
						};
						this.canvas['on' + t.EndEvent] = function(e) {
							/*重置数据*/
							t.lock = false;
							t.x = [];
							t.y = [];
							t.clickDrag = [];
							clearInterval(t.Timer);
							t.Timer = null;
						};
                        this.changeColor();
						this.imgurl.onclick = function() {
							t.getUrl();
						};
						//点击画笔
						this.draw.onclick = function() {
							obj.mouseMoveUnbind();
							chosecolorname.hide();
							t.m = false;
							console.log(t.m)
							t.isEraser = false;
							t.cxt.save();
							t.cxt.strokeStyle = 'red';
							t.storageColor= chosecolor_name;
							t.cxt.strokeStyle = t.storageColor;
							rotater=88;
							$("#rotate").addClass("unckick");
						};
						//正确批改
						this.dui.onclick=function (){
							    chosecolorname.hide();
							    obj.mouseMoveUnbind();
							    t.m =true;
							    t.piDui= true;
							    t.isEraser =false;
								t.piBandui=false;
								t.piCuo=false;
								rotater=88;
							$("#rotate").addClass("unckick");
						    }
						//半对批改
						this.bandui.onclick=function (){
							    obj.mouseMoveUnbind();
							    chosecolorname.hide();
							    t.m =true;
							    t.isEraser =false;
							    t.piDui=false;
								t.piBandui=true;
								t.piCuo=false;
								rotater=88;
							    $("#rotate").addClass("unckick");
						    }
						//错误批改
						this.cuo.onclick=function (){
							    obj.mouseMoveUnbind();
							    chosecolorname.hide();
							    t.m =true;//
							    t.isEraser =false;
							    t.piDui=false;
								t.piBandui=false;
								t.piCuo=true;
								rotater=88;
							$("#rotate").addClass("unckick");
						    }
						//颜色选择
						this.chosecolor.onclick=function(){
							 obj.mouseMoveUnbind();
							 t.isEraser =false;
							 t.piDui=false;
							 t.piBandui=false;
							 t.piCuo=false;
							 $("#color ul").show();
							 rotater=88;
							$("#rotate").addClass("unckick");
						}
						this.move.onclick = function(){
							chosecolorname.hide();
							obj.mouseMoveBind();
							t.m = true;
							t.piDui=false;
							t.piBandui=false;
							t.piCuo=false;
							rotater=88;
							$("#rotate").addClass("unckick");
						};
						/*橡皮擦*/
						this.$("eraser").onclick = function(e) {
							t.isEraser = true;
							obj.mouseMoveUnbind();
							chosecolorname.hide();
							t.m = false;
							console.log(t.m)
							rotater=88;
							$("#rotate").addClass("unckick");
						};
					},
					movePoint: function(x, y, dragging) {
						/*将鼠标坐标添加到各自对应的数组里*/
						this.x.push(x);
						this.y.push(y);
						this.clickDrag.push(y);
						rotater=88;
							$("#rotate").addClass("unckick");
					},
					drawPoint: function(x, y, radius) {
						for(var i = 0; i < this.x.length; i++) //循环数组 
						{
							this.cxt.beginPath(); //context.beginPath() , 准备绘制一条路径 
							if(this.clickDrag[i] && i) { //当是拖动而且i!=0时，从上一个点开始画线。 
								this.cxt.moveTo(this.x[i - 1], this.y[i - 1]); //context.moveTo(x, y) , 新开一个路径，并指定路径的起点 
							} else {
								this.cxt.moveTo(this.x[i] - 1, this.y[i]);
							}
							this.cxt.lineTo(this.x[i], this.y[i]); //context.lineTo(x, y) , 将当前点与指定的点用一条笔直的路径连接起来 
							this.cxt.closePath(); //context.closePath() , 如果当前路径是打开的则关闭它 
							this.cxt.stroke(); //context.stroke() , 绘制当前路径 
						}
					},
					clear: function() {
						chosecolorname.hide();
						    this.m = true;
							this.piDui=false;
							this.piBandui=false;
							this.piCuo=false;
						rotater=8;
						$("#rotate").addClass("unckick");
//						$("#rotate").removeClass("unckick");
						this.cxt.clearRect(0, 0, 4000, 4000); //清除画布，左上角为起点 
					},
					preventDefault: function(e) {
						/*阻止默认*/
						var touch = this.touch ? e.touches[0] : e;
						if(this.touch) touch.preventDefault();
						else window.event.returnValue = false;
					},
					changeColor: function() {
						/*为按钮添加事件*/
						var t=this
						
						$(".chosecolorname li").on("click",function(){
							rotater=88;
							$("#rotate").addClass("unckick");
							chosecolor_name=$(this).attr("data")
						    obj.mouseMoveUnbind();
							chosecolorname.hide();
							t.m = false;
							console.log(t.m)
							t.isEraser = false;
							t.cxt.save();
							t.cxt.strokeStyle = 'red';
							t.storageColor= chosecolor_name;
							t.cxt.strokeStyle = t.storageColor;
							$(".chosecolorname").hide()
							$(".icon_gangbi").addClass("active").siblings().removeClass("active");
							$("#canvas").addClass("qianbi")
							return false;
                            })
					},
					getUrl: function() {
						
						$('body').css("overflow","auto")
						rotater=88;
						$("#rotate").addClass("unckick");
						chosecolorname.hide();
						$("#pigai").hide()
						var that = this;
						// 把图片和涂鸦放进canvas上
						var canvas = document.getElementById("canvas");
						var ctx = canvas.getContext('2d');
						var img = new Image();
						img.crossOrigin="anonymous"; //关键
						
						    img.src =imgbg;
						    img.crossOrigin = "*"
						var imgs = new Image();
						imgs.crossOrigin="anonymous"; //关键
						imgs.src = this.canvas.toDataURL();
						img.onload = function() {
							ctx.drawImage(img,0,0)// 保证图片加载后才放到画布中
							ctx.drawImage(imgs,0,0)
							that.$("html").innerHTML = '<img src="'  + that.canvas.toDataURL() + '"/>';
							base64back(that.canvas.toDataURL())
						};
					},
					resetEraser: function(_x, _y, touch) {
						/*使用橡皮擦-提醒*/
						rotater=88;
						$("#rotate").addClass("unckick");
						var t = this;
						t.cxt.globalCompositeOperation = "destination-out";
						t.cxt.beginPath();
						t.cxt.arc(_x, _y, t.eraserRadius, 0, Math.PI * 2);
						t.cxt.strokeStyle = "rgba(250,250,250,0)";
						t.cxt.fill();
						t.cxt.globalCompositeOperation = "source-over"
					}
				};
				//获取鼠标位置						
				function getLocation(x, y) {
					var bbox = canvas.getBoundingClientRect();
					return {
						x: (x - bbox.left) * (canvas.width / bbox.width),
						y: (y - bbox.top) * (canvas.height / bbox.height)
					};
				}
				paint.init();
			    $(document).ready(function() {
				// 初始化缩放之前重置canvas大小
			    	obj = $('#canvas').smartZoom({'containerClass':'zoomableContainer'}); 
			});

}
