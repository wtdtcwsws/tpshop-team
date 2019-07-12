$(function(){
	$('form').validate({
		debug: true,
		// Element: 'label',
		errorElement: 'span',
		//提示信息插入位置
		errorPlacement: function(error, input) {
			console.log(input);
			input.next().append(error);
		},
		 success: function(error, input){
		  error.html('<i class="fa fa-check" style="color:green;"></i><span style="font-size:3px">验证通过</span>')
		},
		rules:{
			 name:{
			  required:true,
			  // minlength:4,
			  // pattern: '[\\w]{4,}'
			},
			width:{
			  required:true,
			  // minlength:8,
			  pattern: '[\\d]{1,4}'
			},
			height:{
			  required:true,
			  // minlength:8,
			  pattern: '[\\d]{1,4}'
			},
			view:{
			  required:true,
			  // minlength:8,
			  // pattern: '[\\d]{4,}'
			}
		},
		messages:{
			name:{
			  required:'<i class="fa fa-edit"style="color:red;"></i><span style="font-size:3px">名称必填</span>',
			  minlength:'<i class="fa fa-remove"style="color:red;"></i><span style="font-size:3px">账号至少4位</span>',
			  pattern: '<i class="fa fa-edit"style="color:red;"></i><span style="font-size:3px">账号格式不正确</span>'                                                
			},
			width:{
			  required:'<i class="fa fa-edit"style="color:red;"></i><span style="font-size:3px">宽度必填</span>',
			  // minlength:'<i class="fa fa-remove"style="color:red;"></i><span style="font-size:3px">密码至少8位</span>',
			  pattern: '<i class="fa fa-edit"style="color:red;"></i><span style="font-size:3px">宽度只能是数字</span>'                                                
			},
			height:{
			  required:'<i class="fa fa-edit"style="color:red;"></i><span style="font-size:3px">高度必填</span>',
			  // minlength:'<i class="fa fa-remove"style="color:red;"></i><span style="font-size:3px">密码至少8位</span>',
			  pattern: '<i class="fa fa-edit"style="color:red;"></i><span style="font-size:3px">高度只能是数字</span>'                                                
			},
			view:{
			  required:'<i class="fa fa-edit"style="color:red;"></i><span style="font-size:3px">描述必填</span>',
			  // minlength:'<i class="fa fa-remove"style="color:red;"></i><span style="font-size:3px">密码至少8位</span>',
			  // pattern: '<i class="fa fa-edit"style="color:red;"></i><span style="font-size:3px">宽度格式不正确</span>'                                                
			}
		}
	})
});