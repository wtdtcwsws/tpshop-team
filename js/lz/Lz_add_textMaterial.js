$('form').validate({
	// 开启调试模式
	debug: true,
	// 设置错误信息显示的标签元素
	errorElement: 'span',
	// 设置错误信息的类样式
	// errorClass: 'failed',
	// 设置错误信息的显示位置
	// errorPlacement: function(error, input){
	//   input.next().append(error);
	// },
	// success: function(error, input){
	//   error.html('<i class="fa fa-check" style="color:green;"></i>')
	// },
	// 规则设置
	rules: {
		title: {
			required: true,
			// minlength: 4,
			// pattern: '[\\w]{4,}'
			rangelength: [0, 64]
		},
		content: {
			// required: true,
			// minlength: 4,
			// pattern: '[\\w]{4,}'
			rangelength: [0, 600]
		},
		
		zipCode: {
			zipcode: true
		}
	},
	// 验证的提示信息
	messages: {
		title: {
			required: '<i class="fa fa-remove"></i>',
			rangelength: '<i class="fa fa-remove"></i>'
			// minlength: '账号至少4位',
			// pattern: '账号格式不正确'
		},
		content: {
			// required: '<i class="fa fa-remove"></i>',
			rangelength: '<i class="fa fa-remove"></i>'
			// minlength: '账号至少4位',
			// pattern: '账号格式不正确'
		},
		
		confirmPass: {
			equalTo: '两次密码不一致'
		}
	}

});
