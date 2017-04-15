window.onload = function() {
	var aInput = document.getElementsByTagName('input');
	var oName = aInput[0];
	var pwd = aInput[1];
	var login = aInput[2];
	var aLogin = document.getElementById('aLogin');

	aLogin.onclick = function() {
		if(aInput[1].value.length > 16) {
			aLogin.href = 'JavaScript:void(0)';
			alert('登录失败，账号或者密码不对');
		} else if(pwd.value.length < 6) {
			aLogin.href = 'JavaScript:void(0)';
			alert('登录失败，账号或者密码不对');
		} else {
			aLogin.href = 'HomePage.html'
		}
	}
}