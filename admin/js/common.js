NProgress.start();

NProgress.done();

$('.navs ul').prev('a').on('click', function() {
	$(this).next().slideToggle();
});


// 检查用户是否登录
$.ajax({
	type: 'get',
	url: '/api/employee/checkRootLogin',
	success: function (info) {
		if (info.error) {
			alert('您还没有登录，请先登录！');
			location.href = '/admin/login.html';
		}
	}
});

$('.fa-sign-out').parent().on('click', function () {
	$.ajax({
		type: "get",
		url: "/api/employee/employeeLogout",
		success: function (info) {
			if (info.success) {
				alert('退出成功！');
				location.href = '/admin/login.html';
			}
		}
	});
});