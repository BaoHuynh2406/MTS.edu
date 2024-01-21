const bannerBg = document.querySelector('.banner__container');
const banner = document.querySelector('.banner');




banners = [
    'asset/png/banner/Picture1.png',
    'asset/png/banner/Picture2.png',
    'asset/png/banner/Picture3.png'
];
var i = 0;
setInterval(() => {
    if(i > banners.length-1){
        i = 0;
    }
    banner.src = banners[i];
    bannerBg.style.backgroundImage = `url(${banners[i]})`;
    i++;
}, 5000);


// Trang chủ
const trang_chu = document.querySelector('.trang_chu');
trang_chu.onclick = function(){
    console.log("Chuyển trang");
    window.location.href = 'index.html';
};



// CƠ SỞ DỮ LIỆU MINI ----------------------------------------------------------
// Load trang web
function products(id, ten, sourc, sale, giaRoc){
  this.id = id;
  this.ten = ten;
  this.sourc = sourc;
  this.sale = sale;
  this.isSale = function(){
    if(this.sale == 0){
      return 'disable';
    } else return '';
  }
  this.giaRoc = giaRoc;
  this.gia = giaRoc - (sale*giaRoc);
}
// Danh sách phụ kiện
var list1 = [
    new products('1_0','Tai nghe có dây Awei Q29Hi', "https://cdn.tgdd.vn/Products/Images/54/202536/tai-nghe-ep-awei-q29hi-den-hong-thumbnew-600x600.jpg", 0.15, 200000),
    new products('1_1', 'Tai nghe bluetooth Xmobile Z706a', "https://cdn.tgdd.vn/Products/Images/54/279768/bluetooth-xmobile-z706a-den-thumb1-600x600.jpeg", 0.1, 250000),
    new products('1_2', 'Đế laptop Rain Bạc RD10080', "https://cdn.tgdd.vn/Products/Images/6862/249104/de-laptop-rain-design-rd10080-nhom-bac-thumb-1-600x600.jpg", 0, 850000),
    new products('1_3', 'Loa vi tính SoundMax A2126', "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/8/637850238943112900_AVT-soundmax-a2126.jpg", 0, 1438000),
    new products('1_4', 'Bộ phát Wifi router chuẩn AC1500 AiMesh ASUS RT-AC59U V2', "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/27/637709318849248813_00773450-bo-phat-wifi-router-chuan-ac1500-aimesh-asus-rt-ac59u-v2-dd.jpg", 0, 1890000)
];

// Danh sách máy chơi game
var list2 = [
  new products('2_0', 'Màn hình Asus ProArt PA247CV 23.8 inch', "https://cdn.tgdd.vn/Products/Images/5697/238484/asus-lcd-proart-pa247cv-238-inch-full-hd-121122-124911-600x600.jpg", 0.09, 7090000),
  new products('2_1', 'Asus S501MD i5 12400/8GB/256GB/Bàn phím/Chuột/Win11 (512400059W)', "https://cdn.tgdd.vn/Products/Images/5698/304597/asus-s501md-i5-512400059w-thumb-600x600.jpg", 0.6, 16190000),
  new products('2_2', 'Laptop MSI Gaming GE66 Raider 11UH i7 11800H', "https://cdn.tgdd.vn/Products/Images/44/249147/msi-gaming-gs66-stealth-11ug-i7-219vn-600x600.jpg", 0.4, 77990000),
  new products('2_3', 'Play Station 5', "https://cdn.shopify.com/s/files/1/0298/6259/2571/products/PS5console_17788dc5-ed6a-41e7-b757-29227837dea3_1_medium.jpg?v=1670561195", 0, 15590000),
  new products('2_4', 'PC Gaming E-Power i7G12 - 3060Ti i7 12700F/16GB/500GB', "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/31/638107706869497048_pc-gaming-e-power-i7g11-3060ti-i7-11700f-den-dd.jpg", 0, 33290000)
];

// Danh sách Bàn phím chuột
var list3 = [
  new products('3_0', 'Bàn phím cơ có dây Corsair K60 Pro SE', "https://images.fpt.shop/unsafe/fit-in/750x500/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/9/637746446059885760_00772790-2.jpg", 0.25, 2790000),
  new products('3_1', 'Chuột gaming Corsair Iron claw RGB', "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/13/637671646353297576_00772807-chuot-corsair-iron-claw-rgb-dd.jpg", 0.9, 1611000),
  new products('3_2', 'Chuột Gaming MSI Clutch GM20 Elite', "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/24/637759609885932940_CHUOT-AVT.jpg", 0.05, 840000),
  new products('3_3', 'Bàn phím gaming MSI Vigor GK30 US',"https://cdn.tgdd.vn/Products/Images/4547/283688/co-day-gaming-msi-vigor-gk30-us-den-thumb1-600x600.jpeg", 0.1, 870000 ),
  new products('3_4', 'Chuột có dây gaming ASUS Kseri', "https://cdn.tgdd.vn/Products/Images/86/279453/chuot-co-day-gaming-asus-keris-thumb-2-600x600.jpeg", 0, 550000)
];

//Danh sách Ram, Ổ Cứng
var list4 = [
  new products ('4_0', 'Ram Aorus RGB 16GB bus 333 new', 'https://cdn.chotot.com/ueppLPfXjmGv74kRG78dfQ9QYmw5l8xDCtQqPSHS0sU/preset:listing/plain/1935534dae1f3861b95362688e3b7c20-2819840722723479728.webp', 0.25, 1500000),
  new products('4_1', 'RAM Corsair Vengeance LPX 8GB bus 3200', 'https://product.hstatic.net/1000026716/product/-cmk8gx4m1e3200c16-gallery-veng-lpx-blk-02_db321d7ece8f45659518b1217764a815_large.png', 0.3, 890000),
  new products('4_2', 'Ram T-Group T-Force Delta 1x8GB 3200 RGB Black', 'https://product.hstatic.net/1000026716/product/b009154f9963656b7a55f1a93b91f1b8_9a41f0b66e26430580accff8ad7706ea_811b8f21341a4872969f36c91953dbf3_large.jpg',0, 990000),
  new products('4_3', 'SSD GIGABYTE AORUS Gen5 10000 2TB', 'https://product.hstatic.net/1000026716/product/z4131616836917_e5cda722eb8165b304cc8c0ba03547e6_b2fd63d47aaf494daed95c4437cc004b_large.jpg', 0, 11900000),
  new products('4_4', 'SSD GIGABYTE NVMe 512Gb', 'https://product.hstatic.net/1000026716/product/512_6eecf6fbd1df4b6987f8a05cb2e66008_large.png', 0.4, 1990000)
]
// ALL sản phẩm
var All = [
  list1, list2, list3, list4
];


// Vòng lập để load các phần tử trong mảng
for(let i = 0; i < All.length; i++){

  for(let k = 0; k<4; k++){ //Để cho mỗi sản phẩm được lặp lại 3 lần
    for(let j = 0; j < All[i].length; j++){
      document.getElementById(`list${i+1}`).innerHTML += `
      <!-- ${i+1}_${j} -->
      <div class="item__container">
                  <img class="item__png" src="${All[i][j].sourc}" alt="">
                  <h3 class="item__name">${All[i][j].ten}</h3>
                  <!-- Sale -->
                  <div class="item__sale item__sale--${All[i][j].isSale()}">
                    <h3 class="sale__tt">-${All[i][j].sale * 100}%</h3>
                  </div>
  
                  <div class="item__footer">
                    <div class="footer__gia">
                      <div class="item__giamGia item__giamGia--${All[i][j].isSale()}"><span>${All[i][j].giaRoc.toLocaleString('vi-VN')  }₫</span>-${All[i][j].sale * 100}%</div>
                      <div class="item__gia">${All[i][j].gia.toLocaleString('vi-VN')}₫</div>
                    </div>
                    <i id="${All[i][j].id}" class="addCart fa-solid fa-cart-plus"></i>
                  </div>
      </div>
      `
      document.getElementById('listAll').innerHTML += `
      <div class="item__container item__container--all">
                  <img class="item__png" src="${All[i][j].sourc}" alt="">
                  <h3 class="item__name">${All[i][j].ten}</h3>
                  <!-- Sale -->
                  <div class="item__sale item__sale--${All[i][j].isSale()}">
                    <h3 class="sale__tt">-${All[i][j].sale * 100}%</h3>
                  </div>
  
                  <div class="item__footer">
                    <div class="footer__gia">
                      <div class="item__giamGia item__giamGia--${All[i][j].isSale()}"><span>${All[i][j].giaRoc.toLocaleString('vi-VN')  }₫</span>-${All[i][j].sale * 100}%</div>
                      <div class="item__gia">${All[i][j].gia.toLocaleString('vi-VN')}₫</div>
                    </div>
                    <i id="${All[i][j].id}" class="addCart fa-solid fa-cart-plus"></i>
                  </div>
      </div>
      `
    }
  }
}

// Đối tượng giỏ hàng
function gioHang(id){
  this.id = id;
  this.sl = 1;
  this.tongTien = 0;
}


var Carts = [];


//Sự kiện để thêm vào giỏ hàng
const addtoCart = document.querySelectorAll('.fa-cart-plus');
addtoCart.forEach(function(add){//Sự kiện khi nhấn nút
  add.addEventListener('click', function(){ //Sự kiện người dùng click vào nút thêm vào giỏ hàng
    console.log(add.id); //Lấy id của sản phẩm được thêm vào

    var check = false; //khởi tạo biến check để kiễm tra mảng TRUE = đã có, false = chưa có
    var viTri = 0; //Biến tìm vị trí của vật phẩm nếu đã có trong giỏ

    for(let i = 0; i < Carts.length; i++){ // vòng lặp để duyệt mảng
      if(Carts[i].id === add.id){
        check = true;
        viTri = i;
        break;
      }
    }

    console.log('vị trí ' + viTri);
    if(check == false){ // Vật Phẩm chưa có trong giỏ hàng
      Carts.push(new gioHang(add.id));
    }else{
      Carts[viTri].sl += 1;
    }

    console.log(Carts);
    // Xuất thông báo
    toast({
      title: 'Thành Công',
      msg: 'Đã Thêm một sản phẩm vào giỏ hàng',
      type: 'success',
      delayMS: 1000
  });
    capNhatGioHang();
  });
});


// ---------------------------- GIỎ HÀNG XỬ LÝ -------------------------

var soLuongTong = 0; //Biến đếm tổng số lượng
var tongTien = 0; //Biến tính tổng các mặt hàng
const sl__cart = document.querySelector('.cart__num'); //hiển thị số lượng ra màn hình
const ht__cart = document.querySelector('.cart__container');



// Lấy mảng từ localStorage với key là "Carts"
// Nhúng 1
Carts = JSON.parse(localStorage.getItem('Carts'));
if(Carts != null){
  console.log(Carts);
  capNhatGioHang();
}else{
  Carts = [];
}


// Hàm cập nhật giỏ hàng
function capNhatGioHang(){
  document.querySelector('.cart__item__container').innerHTML = '';
  // Duyệt Mảng
  soLuongTong = 0;
  tongTien = 0;

  Carts.forEach(function(item){

    // Đếm số lượng
    soLuongTong += item.sl;

    // Bóc tách ID để lấy các thông tin 
    let idArry = item.id.split('_').map(Number);
      // Tên
      let tensp = All[idArry[0]-1][idArry[1]].ten;
      // file ảnh
      let sourc = All[idArry[0]-1][idArry[1]].sourc;
      // giá sp
      let giasp = All[idArry[0]-1][idArry[1]].gia;
      // gán tổng tiền cho sản phẩm
      item.tongTien = item.sl * giasp;

      // In ra màn hình
      document.querySelector('.cart__item__container').innerHTML+=
      `
      <div class="cart__item">
                      <img class="cart__item__png" src="${sourc}" alt="">
                      <h2 class="cart__item__tt">${tensp}<br> <span>${giasp.toLocaleString('vi-VN')}₫</span> </h2>

                      <h3 class="cart__item__price">${item.tongTien.toLocaleString('vi-VN')}₫</h3>

                      <div class="cart__item__sl"> <span> x${item.sl} </span> </div>
                      <i id="${item.id}" onclick = "xoa__sanPham(this.id)" class="cart__item__x fa-solid fa-xmark"></i>
      </div>
      `;

      tongTien += item.tongTien;
  });

  // Cập nhật số lượng trong giỏ
  if(soLuongTong != 0){
    sl__cart.innerHTML = `<span>${soLuongTong}</span>`;
    sl__cart.style.opacity = 1;
    

    ht__cart.classList.remove('cart__container--Nosp');
    document.querySelector('.cart__container__total').textContent = `Tổng: ${tongTien.toLocaleString('vi-VN')}₫`;
  }else{
    sl__cart.style.opacity = 0;
    ht__cart.classList.add('cart__container--Nosp');
  }

  if(soLuongTong > 1){
    document.getElementById('num').classList.add('cart__num-blue');
  }else{
    document.getElementById('num').classList.remove('cart__num-blue');
  }

  // Lưu mảng vào localStorage với key là "Carts"
  localStorage.setItem('Carts', JSON.stringify(Carts));
}


// Hàm xóa sản phẩm
function xoa__sanPham(id){
  for (let i = 0; i < Carts.length; i++) {
    if (Carts[i].id === id) {
      Carts.splice(i, 1);
      console.log(`Đã xóa đối tượng có ID là ${id} ra khỏi mảng.`);
      capNhatGioHang();
      break;
    }
  }
}


var sanPham = document.querySelectorAll('.item__png');
sanPham.forEach(function(sanPham){
  sanPham.addEventListener('click', function(){
    window.location.href = 'sanPham.html';
  });
});














//================================================================================
// Jquery Selector -----------------------------------------
$(".btn__scroll").click(function(){
  const do_cuon = 600;
  var cuon = $(this).siblings(".group__container").scrollLeft();
  if($(this).val() == 'left'){
      cuon = $(this).siblings(".group__container").scrollLeft();
      cuon -= do_cuon;
      $(this).siblings(".group__container").scrollLeft(cuon);
  }else{
      cuon = $(this).siblings(".group__container").scrollLeft();
      cuon += do_cuon;
      $(this).siblings(".group__container").scrollLeft(cuon);
  }   
});


// Khi trang web được tải hoàn tất Jquery
$(document).ready(function() {

// Khi click vào thẻ a
$('a[href^="#"]').on('click', function(event) {

// Ngăn chặn trình duyệt di chuyển đến vị trí thẻ a đang trỏ đến
event.preventDefault();

// Lấy giá trị của href
var href = $(this).attr('href');

// Sử dụng animate để di chuyển trình duyệt đến phần tử tương ứng với href
$('html, body').animate({
  scrollTop: $(href).offset().top
}, 800, function() {
  // Sau khi di chuyển hoàn tất, thêm class active vào thẻ a được click
  $(this).addClass('active');
});
});
});
// -------------------------------------------------------------------------------------



// *** TOAST ****


// Toast Message
function toast({
  title = '', 
  msg = '', 
  type = '', 
  delayMS = 1000
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