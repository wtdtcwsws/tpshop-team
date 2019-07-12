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
		nickname: {
			required: true,
			// minlength: 4,
			// pattern: '[\\w]{4,}'
			rangelength: [0, 12]
		},
		password: {
			required: true,
			// minlength: 4,
			// pattern: '[\\w]{4,}'
			rangelength: [6, 16]
		},
		mobile: {
			required: true,
			// minlength: 4,
			// pattern: '[\\w]{4,}'
			rangelength: [11, 11]
		},
		email: {
			required: true,
			// minlength: 4,
			// pattern: '[\\w]{4,}'
			// rangelength: [0, 120]
		},
		
		zipCode: {
			zipcode: true
		}
	},
	// 验证的提示信息
	messages: {
		nickname: {
			required: '<i class="fa fa-remove"></i> 必填' ,
			rangelength: '<i class="fa fa-remove"></i> 昵称过长'
			// minlength: '账号至少4位',
			// pattern: '账号格式不正确'
		},
		password: {
			required: '<i class="fa fa-remove"></i> 必填',
			rangelength: '<i class="fa fa-remove"></i> 格式不对'
			// minlength: '账号至少4位',
			// pattern: '账号格式不正确'
		},
		mobile: {
			required: '<i class="fa fa-remove"></i> 必填' ,
			rangelength: '<i class="fa fa-remove"></i> 请输入11位的手机号'
			// minlength: '账号至少4位',
			// pattern: '账号格式不正确'
		},
		email: {
			required: '<i class="fa fa-remove"></i> 必填',
			// rangelength: '<i class="fa fa-remove"></i>'
			// minlength: '账号至少4位',
			// pattern: '账号格式不正确'
		},
		
		confirmPass: {
			equalTo: '两次密码不一致'
		}
	}

});
