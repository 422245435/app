var a = false;
var b = false;
window.onload = function() {
		var aInput = document.getElementsByTagName('input');
		var oPhone = aInput[0];
		var aPin = aInput[1];
		var pwd = aInput[2];
		oPhone.onmouseout = function() {
			//请输入手机号码
			var re = /^1[3|4|5|7|8][0-9]\d{8}$/g;
			if(this.value == '') {
				alert('请输入手机号码');
			}
			//不能为空
			else if(!re.test(this.value)) {
				alert('请输入正确手机号码格式');
			} else {
				a = true;
			}
		}

		pwd.onmouseout = function() {
			if(this.value == '') {
				alert('请输入验证码或手机号码');
			} else {
				b = true;
			}
		}
		
	}
	//倒计时    countdown = 90倒计时90秒
var countdown = 90;

function settime(val) {
	if(countdown == 0) {
		val.removeAttribute("disabled");
		val.value = "获取验证码";
		countdown = 90;
		return false;
	} else {
		val.setAttribute("disabled", true);
		val.value = countdown;
		countdown--;
	}
	setTimeout(function() {
		settime(val);
	}, 1000);
}

function next_3() {
	if(a && b) {
		return true;
	} else {
		return false;
	}
}