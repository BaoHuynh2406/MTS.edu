
// Lấy tham chiếu đến các phần tử cần sử dụng
const form = document.getElementById('dangNhap');
const email = document.querySelector('.taiKhoan__nhap');
const password = document.querySelector('.matKhau__nhap');
const submitBtn = document.querySelector('.btn-sumit');
const btnDK = document.querySelector('.btn-dk');

const btnSubmit = document.querySelector('.btn-sumit');

var isEmail = false;
var pass = false;
var submit = false;
btnSubmit.disabled = true;
// Hàm kiễm tra đây có phải email không
function checkEmail(email) {
    const dinhDangEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return dinhDangEmail.test(email);
}


// Kiễm tra khi đã nhập xong email
email.addEventListener('blur', function(){
    // Kiễm tra email nhập đúng hay sai để báo đỏ
    console.log(email.value);
    if(email.value != ''){
        if(checkEmail(email.value)){
            isEmail = true;
            document.querySelector('.email--overlay').classList.remove('error');
            submitCheck();
        }else{
            isEmail = false;
            document.querySelector('.email--overlay').classList.add('error');

            // Xuất thông báo
            toast({
                title: 'Lỗi Email',
                msg: 'Bạn vui lòng nhập đúng định dạng của email. vd abc@gmail.com',
                type: 'error',
                delayMS: 5000
            });
        }
    }
});
//Xóa đỏ khi nhập
email.addEventListener('input', function(){
    document.querySelector('.email--overlay').classList.remove('error');
});




// Kiễm tra khi nhập password
password.addEventListener('input', function(){
    // Kiễm tra độ dài tối thiểu của password
    if(password.value.length >= 6){
        pass = true;
        submitCheck();
        document.querySelector('.pass--overlay').classList.remove('error');
    }else{
        pass = false;
    }
});

// Kiễm tra nếu độ dài chưa đạt đủ thì thông báo
password.addEventListener('blur', function(){
    // Kiễm tra độ dài tối thiểu của password
    if(!pass & password.value != ''){
        document.querySelector('.pass--overlay').classList.add('error');

        // Xuất thông báo
        toast({
            title: 'Cảnh Báo',
            msg: 'Bạn vui lòng nhập mật khẩu nhiều hơn 6 kí tự!',
            type: 'warn',
            delayMS: 5000
        });
    }
});



// Hàm Kiễm tra dữ liệu đã nhập
function submitCheck(){
    if(pass & isEmail){
        submitBtn.classList.remove("disable");
        submit = true;
        btnSubmit.disabled = false;
    }else{
        submitBtn.classList.add("disable");
        submit = false;
        btnSubmit.disabled = true;
    }
}


// Bắt sự kiện submit của form
form.addEventListener('submit', (event) => {
  // Ngăn chặn form submit mặc định
  event.preventDefault();
});
btnSubmit.addEventListener('click', function(){
    if (submit) {
        // Chuyển hướng đến trang khác
        // document.cookie = "check=true; expires=Thu, 01 Jan 2026 00:00:00 UTC; path=/";
        document.cookie = "check = true";
        window.location.href = 'index.html';
      }
});




//Khi nhân nút đăng kí
btnDK.addEventListener('click', function(){
    window.location.href = 'signUp.html';
});


// Tiếp tục mà không cần đăng nhập
const tiepTuc = document.querySelector('.noSign');

tiepTuc.addEventListener('click', function(){
    // document.cookie = "check=false; expires=Thu, 01 Jan 2026 00:00:00 UTC; path=/";
    document.cookie = "check = false";
    window.location.href = 'index.html';
});





















// *** TOAST ****


// Toast Message
function toast({
    title = '', 
    msg = '', 
    type = '', 
    delayMS = 5000
    }){
        const main = document.getElementById('toast');

        if(main){

            const toast = document.createElement('div');

            // Tự động xóa
            const autoRemove = setTimeout(function(){
                                main.removeChild(toast);
                                }, delayMS+1000);


            // Xóa khi click
            toast.onclick = function(click){
                if(click.target.closest('.toast__close')){
                    main.removeChild(toast);
                    clearTimeout(autoRemove);
                }
            }

            // Các icon
            const icons = {
                success: "fa-solid fa-circle-check",
                warn: "fa-solid fa-triangle-exclamation",
                error: "fa-sharp fa-solid fa-circle-exclamation"
            }

            // Thời gian delay
            const delay = (delayMS/1000).toFixed(2);

            // Thêm class và hiệu ứng
            toast.classList.add('toast', `toast--${type}`);
            toast.style.animation = `flyIn ease-in .3s, flyOut linear 1s ${delay}s forwards`;

            // Thay đổi đoạn html
            toast.innerHTML = `
                <div class="toast__icon">
                    <i class="${icons[type]}"></i>
                </div>
                <div class="toast__body">
                    <h3 class="toast__title">${title}</h3>
                    <p class="toast__msg">${msg}</p>
                </div>

                <div class="toast__close">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            `; main.appendChild(toast);

    }
};

// **************************************************************************
