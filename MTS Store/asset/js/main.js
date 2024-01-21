const user = document.querySelector('.login');
var checkValue = false;

if(document.cookie.includes('check=')){
    // Lấy giá trị của cookie có tên "check" từ trình duyệt nguồn ChatGPT
    checkValue = document.cookie.split('; ')
    .find(row => row.startsWith('check='))
    ?.split('=')[1] || '';
}else{
    console.log('False');
}


if (checkValue === 'true') {
    user.innerHTML = '<span class="login__text">Bao Huynh</span>';
    console.log('Người dùng');
} else {
    user.innerHTML = '<span class="login__text">Login</span>';
    console.log('Khách');
    checkValue = false;
}

user.addEventListener('click', function() {
    console.log('checkValue: '+ checkValue);
    if (checkValue) {
        // Chuyển hướng trang User
        window.location.href = 'user.html';
    } else {
        // Chuyển hướng trang đăng nhập
        window.location.href = 'sign.html';
    }
});


