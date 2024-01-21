// Lấy tham chiếu đến các phần tử cần sử dụng
const form = document.getElementById('DangKy');

const Name = document.querySelector('.name');
const phone = document.querySelector('.phone');
const inputDate = document.querySelector(".date");
const email = document.querySelector('.email'); 
const password = document.querySelector('.matKhau__nhap');
const submitBtn = document.querySelector('.btn-sumit');
const btnDN = document.querySelector('.btn-dn');

var isName = false;
var isEmail = false;
var isDate = false;
var isPhone = false;
var pass = false;

// Kiễm tra người dùng đã nhập tên hay chưa
Name.addEventListener('blur', function(){
    if(Name.value === ''){
        document.querySelector('.name--overlay').classList.add('error');
        isName = false;
        // Xuất thông báo
        toast({
            title: 'Cảnh Báo',
            msg: 'Không thể bỏ trống tên',
            type: 'warn',
            delayMS: 5000
        });
    }else{
        document.querySelector('.name--overlay').classList.remove('error');
        isName = true; 
        submitCheck();
    }
});


// Hàm kiễm tra số điện thoại
function checkPhone(phoneNumber) {
    // kiểm tra số điện thoại có chứa ký tự nào khác số không
    const phoneNum = /^[0-9]+$/;
    if (!phoneNum.test(phoneNumber)) {
      return false;
    }
  
    // kiểm tra độ dài số điện thoại
    if (phoneNumber.length < 10 || phoneNumber.length > 13) {
      return false;
    }
  
    // kiểm tra số đầu tiên có phải là số 0 hay không
    if (phoneNumber.charAt(0) !== '0') {
      return false;
    }
  
    return true;
  }
// Bắt sự kiện nhập số điện thoại xong
phone.addEventListener('change', function(){
    if(phone.value != ''){
        if(checkPhone(phone.value)){
            isPhone = true;
            document.querySelector('.phone--overlay').classList.remove('error');
            submitCheck();
        }else{
            isPhone = false;
            document.querySelector('.phone--overlay').classList.add('error');
            // Xuất thông báo
            toast({
                title: 'Cảnh Báo',
                msg: 'Số điện thoại không hợp lệ',
                type: 'warn',
                delayMS: 5000
            });
        }
    }
});




// Kiễm tra năm sinh
inputDate.addEventListener("blur", function () {
  const date = new Date(inputDate.value);
  const now = new Date();
  const age = now.getFullYear() - date.getFullYear();
  
  if(age<16){
    isDate = false;
    document.querySelector('.date--overlay').classList.add('error');
    // Xuất thông báo
    toast({
        title: 'Bạn chưa đủ tuổi',
        msg: 'Xin lỗi chúng tôi chỉ cho phép tạo tài khoản khi đã đủ 16 tuổi.',
        type: 'error',
        delayMS: 5000
    });
  }else{
    isDate = true;
    document.querySelector('.date--overlay').classList.remove('error');
    submitCheck();
  }
  console.log('Tuổi: '+ age + " " + isDate);
});


// Hàm kiễm tra đây có phải email không
function checkEmail(email) {
    const dinhDangEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return dinhDangEmail.test(email);
}


// Kiễm tra khi đã nhập xong email
email.addEventListener('blur', function(){
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
                title: 'Cảnh Báo',
                msg: 'Email không hợp lệ',
                type: 'warn',
                delayMS: 5000
            });
        }
    }
});





// Kiễm tra nếu độ dài chưa đạt đủ thì thông báo
password.addEventListener('blur', function(){
    // Kiễm tra độ dài tối thiểu của password
    if(password.value.length >= 6){
        pass = true;
        document.querySelector('.pass--overlay').classList.remove('error');
        submitCheck();
    }else if(password.value.length < 6 && password.value != ''){
        pass = false;
        document.querySelector('.pass--overlay').classList.add('error');

        // Xuất thông báo
        toast({
            title: 'Cảnh Báo',
            msg: 'Bạn vui lòng nhập mật khẩu nhiều hơn 6 kí tự!',
            type: 'warn',
            delayMS: 5000
        });
    }
    console.log("pass: "+ pass);
    
});



// Hàm đổi màu nút submit
function submitCheck(){
    if(isDate & isEmail & isName & isPhone & pass){
        document.querySelector('.btn-submit').classList.remove('disable');
        submit = true;
    }else{
        document.querySelector('.btn-submit').classList.add('disable');
        submit = false;
    }
}


// Bắt sự kiện submit của form
form.addEventListener('submit', (event) => {
  // Ngăn chặn form submit mặc định
  event.preventDefault();

  // Kiểm tra các input đã được nhập đầy đủ chưa
  if (submit) {
    // Xuất thông báo
    toast({
        title: 'Thành Công',
        msg: 'Tạo tài khoản thành công!',
        type: 'success',
        delayMS: 5000
    });
    // Chuyển hướng đến trang khác
    setTimeout(function(){
        window.location.href = 'sign.html';
    }, 2000); 
  }
});

//Khi nhân nút đăng Nhập
btnDN.addEventListener('click', function(){
    window.location.href = 'sign.html';
});





// *** TOAST ****************************************************************************************


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