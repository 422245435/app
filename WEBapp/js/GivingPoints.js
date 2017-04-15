window.onload = function() {
	var point = document.getElementById('point');
	var givePoint = document.getElementById('give');
	var aLogin = document.getElementById('aLogin');

	aLogin.onclick = function() {


		if(Number(point.innerHTML) < Number(givePoint.value)) {
			aLogin.href = 'JavaScript:void(0)';
			alert('赠送积分不能大于现有积分');
		} else if(Number(givePoint.value) == '') {
			aLogin.href = 'JavaScript:void(0)';
			alert('请填写需要赠送的积分数');
		} else {
			aLogin.href = 'MyWealth.html';
		}
	}
}

