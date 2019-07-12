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
		service_ratio: {
			required: true,
			// minlength: 4,
			// pattern: '[\\w]{4,}'
			range: [0, 100]
		},
		min_service_money: {
			required: true,
			// rangelength: [8, 12]
		},
		max_service_money: {
			required: true,
			// equalTo: '[name="pass"]'
		},
		min_cash: {
			required: true,
			minlength: 4,
			// pattern: '[\\w]{4,}'
		},
		max_cash: {
			required: true,
			// rangelength: [8, 12]
		},
		count_cash: {
			required: true,
			// equalTo: '[name="pass"]'
		},
		cash_times: {
			required: true,
			// equalTo: '[name="pass"]'
		},
		zipCode: {
			zipcode: true
		}
	},
	// 验证的提示信息
	messages: {
		service_ratio: {
			required: '<i class="fa fa-remove"></i>',
			range:'<i class="fa fa-remove"></i>'
			// minlength: '账号至少4位',
			// pattern: '账号格式不正确'
		},
		min_service_money: {
			required: '<i class="fa fa-remove"></i>',
			// rangelength: '密码长度必须在{0}到{1}位'
		},
		max_service_money: {
			required: '<i class="fa fa-remove"></i>',
			// equalTo: '[name="pass"]'
		},
		min_cash: {
			required: '<i class="fa fa-remove"></i>',
		},
		max_cash: {
			required: '<i class="fa fa-remove"></i>',
		},
		count_cash: {
			required: '<i class="fa fa-remove"></i>',
		},
		cash_times: {
			required: '<i class="fa fa-remove"></i>',
		},
		confirmPass: {
			equalTo: '两次密码不一致'
		}
	}

});
