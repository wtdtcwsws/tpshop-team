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
		err_title: {
			required: true,
			// minlength: 4,
			// pattern: '[\\w]{4,}'
			rangelength: [0, 64]
		},
		author: {
			// required: true,
			// minlength: 4,
			// pattern: '[\\w]{4,}'
			rangelength: [0, 8]
		},
		textarea-input: {
			required: true,
			// minlength: 4,
			// pattern: '[\\w]{4,}'
			rangelength: [0, 64]
		},
		input-txt: {
			// required: true,
			// minlength: 4,
			// pattern: '[\\w]{4,}'
			rangelength: [0, 120]
		},
		
		zipCode: {
			zipcode: true
		}
	},
	// 验证的提示信息
	messages: {
		err_title: {
			required: '<i class="fa fa-remove"></i>',
			rangelength: '<i class="fa fa-remove"></i>'
			// minlength: '账号至少4位',
			// pattern: '账号格式不正确'
		},
		author: {
			// required: '<i class="fa fa-remove"></i>',
			rangelength: '<i class="fa fa-remove"></i>'
			// minlength: '账号至少4位',
			// pattern: '账号格式不正确'
		},
		textarea-input: {
			required: '<i class="fa fa-remove"></i>',
			rangelength: '<i class="fa fa-remove"></i>'
			// minlength: '账号至少4位',
			// pattern: '账号格式不正确'
		},
		input-txt: {
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
