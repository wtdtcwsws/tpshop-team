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
        rules:{
          rule:{
            required:true,
            minlength:1,
            // pattern: '[\\w]{4,}'
          },
          keywords:{
            required:true,
            // rangelength: [8,12]
          },
          confirmPass:{
            equalTo: '[name="pass"]'
          },
					content{
						required:true,
					},
          zipCode:{
            zipcode: true
          }
        },
        // 验证的提示信息
        messages:{
          required:{
            required:'<i class="fa fa-remove"></i>规则必填',
            minlength:'规则至少1位',
            pattern: '规则格式不正确'
          },
          keywords:{
            required:'关键词必填',
            // rangelength: '密码长度必须在{0}到{1}位'
          },
					content:{
						required:'内容必填',
					},
          confirmPass:{
            equalTo: '两次密码不一致'
          }
        }
        
      });