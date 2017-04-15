
window.onload = function() {

	var aInput = document.getElementsByTagName('input');
	var next = document.getElementById('xiayibu');

	xiayibu.onclick = function() {
		var isIDCard2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
		if(aInput[0].value == '') {
			xiayibu.href = 'JavaScript:void(0)';
			alert('请输入你的真实姓名');
		} else if(!isIDCard2.test(aInput[1].value)) {
			xiayibu.href = 'JavaScript:void(0)';
			alert('请输入18位身份证号码');
		} else if(aInput[2].value == '') {
			xiayibu.href = 'JavaScript:void(0)';
			alert('请输入您实体店名称');
		}else if(aInput[3].value == '') {
			xiayibu.href = 'JavaScript:void(0)';
			alert('请输入您的详细地址');
		}else if(aInput[4].value == '') {
			xiayibu.href = 'JavaScript:void(0)';
			alert('请输入您的银行名称');
		}else if(aInput[5].value == '') {
			xiayibu.href = 'JavaScript:void(0)';
			alert('请输入您的银行卡号');
		}else if(aInput[6].value == '') {
			xiayibu.href = 'JavaScript:void(0)';
			alert('请输入您的办理网点');
		}else if(aInput[7].value == '') {
			xiayibu.href = 'JavaScript:void(0)';
			alert('请输入您的推荐人编号');
		}else{
			xiayibu.href = 'zhuceshangjia4.html';
		}
	}

}