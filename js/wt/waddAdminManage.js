$('form').validate({

	// 开启调试模式
	debug: false,
	// 设置错误信息显示的标签元素
	errorElement: 'span',
	// 设置错误信息的类样式
	// errorClass: 'failed',
	// 设置错误信息的显示位置
	errorPlacement: function(error, input) {
		// let errorMsg = error[0].innerHTML;
		// let spanText= input.next().html();
		// input.next().html(spanText+errorMsg);
		input.next().append(error);
	},
	success: function(error, input) {
		
		console.log('success');
		console.log(error);
		error.html('<i class="fa fa-check" style="color:green;"></i>')
	},
	// 规则设置
	rules: {
		name: {
			required: true
		},
		hfEmail: {
			required: true,
			email: true
		},
		hfPassword: {
			required: true
		},
		role: {
			required: true
		}
	},
	// 验证的提示信息
	messages: {
		name: {
			required: '必填'
		},
		hfEmail: {
			required: '必填',
			email: '电子邮箱格式错误'
		},
		hfPassword: {
			required: "必填"
		},
		role: {
			required: "必填"
		}
	}

});