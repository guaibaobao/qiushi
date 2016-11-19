

$(function() {

	//模态
	$("#logintop").click(function(event) {
		$("#login-form").slideDown(1000);
		$("#modal").show();
	});
	$("#modal").click(function(event) {
		$("#login-form").slideUp();
		$("#modal").hide();
	});
	$("#up-117392791").click(function(event) {
		$("#up-117392791").attr('style', 'background:url(../images/icongroup.png) no-repeat -25px 199px;');
	});


	//表单验证
	$("#form").validate({
		rules:{
			name:'required',
			password:{
				required:true,
				minlength:6
			}
		},
		messages:{
			name:"请输入内容",
			password:{
				required:"请输入密码",
				minlength:"请至少输入六位数",
			}
		}
	});


	//ajax获取数据：
	$.get('json/json.json', function(result) {
	    debugger;
	    // console.log(result);
	    console.log(result.date[0].src);
	    // console.log(result.date[0].name);
	    // console.log(result.date[0].content);
	    // console.log($("#jsonimg"));
	    for (var i = 0; i <= 4; i++) {
	    	var cnt = $("#qiushi_tag_117392791").clone(true);
	    	var num = result.date[i];
	    	$("#jsonimg").attr("src", num.src);
	    	$("#jsonh2").text(num.name);
	    	$("#jsoncontent").text(num.content);

	    	
	    	// $("#content-left").append(cnt);
	    	cnt.insertBefore($("#jsonul"));
	    		    	
	    }

	});








})