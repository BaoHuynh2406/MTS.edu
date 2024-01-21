const container = document.querySelector('.container');
const IM = document.querySelector('.image-o');
const IMN = document.querySelector('.image-next');
const IMB = document.querySelector('.image-back');
const backBtn = document.querySelector('#back-btn');
const nextBtn = document.querySelector('#next-btn');
let images = [
    '../asset/png/LienQuan/1.webp',
    '../asset/png/LienQuan/2.webp', 
    '../asset/png/LienQuan/3.webp', 
    '../asset/png/LienQuan/4.webp',
    '../asset/png/LienQuan/5.webp',
    '../asset/png/LienQuan/6.webp'
  ];

let currentImage = 1;
let MB = 0;
let MN = 2;
IM.src = images[currentImage];
IMN.src = images[2];
IMB.src = images[0];

setInterval(function(){
  currentImage++;
      MB++;
      MN++;
  
      if(currentImage > 5){
        currentImage = 0;
      }
      if(MB > 5){
        MB = 0;
      }
      if(MN > 5){
        MN = 0;
      }
      IM.src = images[currentImage];
      IMN.src = images[MN];
      IMB.src = images[MB];
}, 5000);


backBtn.addEventListener('click', function() {
    currentImage--;
    MB--;
    MN--;
  
    if(currentImage < 0){
      currentImage = 5;
    }
    if(MB < 0){
      MB = 5;
    }
    if(MN < 0){
      MN = 5;
    }
  
    IM.src = images[currentImage];
    IMN.src = images[MN];
    IMB.src = images[MB];
  });
  nextBtn.addEventListener('click', function() {
      currentImage++;
      MB++;
      MN++;
  
      if(currentImage > 5){
        currentImage = 0;
      }
      if(MB > 5){
        MB = 0;
      }
      if(MN > 5){
        MN = 0;
      }
      IM.src = images[currentImage];
      IMN.src = images[MN];
      IMB.src = images[MB];
  });
  
