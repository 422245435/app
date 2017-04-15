var a = false;
var b = false;
var c = false;
window.onload = function() {
	var aInput = document.getElementsByTagName('input');
	var oName = aInput[0];
	var aPwd = aInput[1];
	var aPwd2 = aInput[2];
	var bPwd = aInput[3];
	var bPwd2 = aInput[4];
	var next = document.getElementById('xiayibu');

	oName.onmouseout = function() {
		//请输入手机号码
		var re = /^1[3|4|5|7|8][0-9]\d{8}$/g;
		if(this.value == '') {
			alert('内容不能为空，请重新输入！');
		}
		//不能为空
		else if(!re.test(this.value)) {
			alert('请用手机号码注册');
		}
		else {
			a = true;
		}
	}

	aPwd2.onmouseout = function() {
		if(this.value != aPwd.value) {
			alert('密码输入不统一，请重新输入！');
		} else {
			b = true;
		}
	}

	bPwd2.onmouseout = function() {
		if(this.value != bPwd.value) {
			alert('二级密码输入不统一，请重新输入！');
		} else {
			c = true;
		}
	}
}

function next_1() {
	if(a && b && c) {
		return true;
	} else {
		return false;
	}
}