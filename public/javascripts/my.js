
	$(".bigTable .input").mouseenter(function(){
		$(this).siblings().show();
	});
	$(".bigTable .input").mouseleave(function(){
		$(this).siblings().hide();
	});
	$(".bigTable ul").mouseenter(function(){
		$(this).show();
	});
	$(".bigTable ul").mouseleave(function(){
		$(this).hide();
	});
	$(".bigTable tr:not(:first-child) .tableDw").click(function(){
		$(this).hide();
		$(this).siblings().show();
		$(this).siblings().focus();
	});
	$(".inputs").blur(function(){
		$(this).hide();
		$(this).siblings().show();
		var val = $(this).val();
		if(val != ""){
			$(this).siblings().find("th").text("");
			var j = 0;
			for (var i = val.length;i>=1;--i) {
				console.log(val.substring(i-1,i));
				var thVal = val.substring(i-1,i);
				$(this).siblings().find("th").eq(9-j).text(thVal);
				j++;
			}
		}else{
			$(this).siblings().find("th").text("");
		}
	});


function inputValue(e){
	var inputValue = $(e).val();
	var inputLen = $(e).siblings("ul").find("li").length;
	$(e).siblings("ul").find("li").hide();
	for (var i=0;i<inputLen;i++) {
		var inputLenVal = $(e).siblings("ul").find("li").eq(i).html();
		if(inputLenVal.indexOf(inputValue)>=0){
			$(e).siblings("ul").find("li").eq(i).show();
		}
	}
}
$(".bigTable ul li").click(function(){
	var liVal = $(this).text();
	$(this).parents("ul").siblings(".input").val(liVal);
	$(this).parents("ul").hide();
});

//左侧菜单折叠事件
$(".left .first").click(function(){
	$(this).parents("ul").find("div").slideUp();
	$(".left ul i").css("background-position-y",'-10px');
	var isShow = $(this).siblings("div").is(":visible");
	if(isShow == false){
		$(this).siblings("div").slideDown();
		$(this).find("i").css("background-position-y",'6px');
	}
});

//折叠左侧菜单
function collected(e){
	$(".left").animate({"width":"80px"},300);
	$(".left i").hide();
	$(".left .first strong").addClass("visibility_h");
	$(e).parent().animate({"margin-left":"95px"},300);
	$(".content").animate({"left":"100px"},300);
	$(e).attr("onclick","zkLeft(this)");
	$(e).attr('src',"img/open.png")
}
function zkLeft(e){
	$(".left").animate({"width":"220px"},300);
	$(".left i").show();
	$(".left .first strong").removeClass("visibility_h");
	$(e).parent().animate({"margin-left":"240px"},300);
	$(".content").animate({"left":"240px"},300);
	$(e).attr("onclick","collected(this)");
	$(e).attr('src',"img/collected.png")
}

//删除弹窗
function delPopDiv(fun){
	var html = "";
	html = "<div class='delPopDiv'>"
		 + "		<div class='animated bounceIn'>"
		 + "			<h4 class='delTitle'>确定删除?</h4>"
		 + "				<h5>"	
		 + "					<span onclick='"+fun+"' class='updateBtn'>确定</span>"
		 + "					<span onclick='closeDelPop()' class='lookBtn'>取消</span>"
		 + "				</h5>"	
		 + "		</div>"			
		 + "	</div>"
		 $("body").append(html);
		 $(".delPopDiv .lookBtn").click(function(){
			$(".delPopDiv div").addClass("animated bounceOut");
			setTimeout(function(){
				$(".delPopDiv").remove();
			},500);
		 });
}
function aaa(text){
	alert(text)
}

function tableWchange(id){
	var tTD; //用来存储当前更改宽度的Table Cell,避免快速移动鼠标的问题 
	var table = document.getElementById(id); 
	for (j = 0; j < table.rows[0].cells.length; j++) { 
	table.rows[0].cells[j].onmousedown = function () { 
	//记录单元格 
	tTD = this; 
	if (event.offsetX > tTD.offsetWidth - 10) { 
	tTD.mouseDown = true; 
	tTD.oldX = event.x; 
	tTD.oldWidth = tTD.offsetWidth; 
	} 
	//记录Table宽度 
	//table = tTD; while (table.tagName != ‘TABLE') table = table.parentElement; 
	//tTD.tableWidth = table.offsetWidth; 
	}; 
	table.rows[0].cells[j].onmouseup = function () { 
	//结束宽度调整 
	if (tTD == undefined) tTD = this; 
	tTD.mouseDown = false; 
	tTD.style.cursor = 'default'; 
	}; 
	table.rows[0].cells[j].onmousemove = function () { 
	//更改鼠标样式 
	if (event.offsetX > this.offsetWidth - 10) 
	this.style.cursor = 'col-resize'; 
	else 
	this.style.cursor = 'default'; 
	//取出暂存的Table Cell 
	if (tTD == undefined) tTD = this; 
	//调整宽度 
	if (tTD.mouseDown != null && tTD.mouseDown == true) { 
	tTD.style.cursor = 'default'; 
	if (tTD.oldWidth + (event.x - tTD.oldX)>0) 
	tTD.width = tTD.oldWidth + (event.x - tTD.oldX); 
	//调整列宽 
	tTD.style.width = tTD.width; 
	tTD.style.cursor = 'col-resize'; 
	//调整该列中的每个Cell 
	table = tTD; while (table.tagName != 'TABLE') table = table.parentElement; 
	for (j = 0; j < table.rows.length; j++) { 
	table.rows[j].cells[tTD.cellIndex].width = tTD.width; 
	} 
	//调整整个表 
	//table.width = tTD.tableWidth + (tTD.offsetWidth – tTD.oldWidth); 
	//table.style.width = table.width; 
	} 
	}; 
	}
}
	
function tableW(id){
	var _this = $("#"+id); 
	var table = _this.parent().html();
	var html = "<div style='height: 100%;overflow-x: auto;clear: both;'>"+table+"</div>";
	_this.parent().html(html);
	_this.width(1200);
}
