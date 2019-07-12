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
		level_name: {
			required: true,
			// minlength: 4,
			// pattern: '[\\w]{4,}'
			// rangelength: [0, 12]
		},
		amount: {
			required: true,
			// minlength: 4,
			// pattern: '[\\w]{4,}'
			// rangelength: [0, 16]
		},
		discount: {
			required: true,
			// minlength: 4,
			// pattern: '[\\w]{4,}'
			range: [0, 100]
		},
		describe: {
			// required: true,
			// minlength: 4,
			// pattern: '[\\w]{4,}'
			rangelength: [0, 1200]
		},
		
		zipCode: {
			zipcode: true
		}
	},
	// 验证的提示信息
	messages: {
		level_name: {
			required: '<i class="fa fa-remove"></i> 必填' ,
			// rangelength: '<i class="fa fa-remove"></i> 昵称过长'
			// minlength: '账号至少4位',
			// pattern: '账号格式不正确'
		},
		amount: {
			required: '<i class="fa fa-remove"></i> 必填',
			// rangelength: '<i class="fa fa-remove"></i> 格式不对'
			// minlength: '账号至少4位',
			// pattern: '账号格式不正确'
		},
		discount: {
			required: '<i class="fa fa-remove"></i> 必填' ,
			range: '<i class="fa fa-remove"></i> 只能填0-100'
			// minlength: '账号至少4位',
			// pattern: '账号格式不正确'
		},
		describe: {
			// required: '<i class="fa fa-remove"></i> 必填',
			rangelength: '<i class="fa fa-remove"></i>'
			// minlength: '账号至少4位',
			// pattern: '账号格式不正确'
		},
		
		confirmPass: {
			equalTo: '两次密码不一致'
		}
	}

});
