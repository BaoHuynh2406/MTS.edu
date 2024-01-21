const like_1 = document.querySelector('.like_1');
const click_like_1 = document.querySelector('#like-1');

const like_2 = document.querySelector('.like_2');
const click_like_2 = document.querySelector('#like-2');

const like_3 = document.querySelector('.like_3');
const click_like_3 = document.querySelector('#like-3');

const like_4 = document.querySelector('.like_4');
const click_like_4 = document.querySelector('#like-4');

const like_5 = document.querySelector('.like_5');
const click_like_5 = document.querySelector('#like-5');




      
let like_images = ['../asset/png/like.png', '../asset/png/liked.png'];
let index_like_1 = 0;
let index_like_2 = 0;
let index_like_3= 0;
let index_like_4 = 0;
let index_like_5 = 0;

like_1.src = like_images[index_like_1];
like_2.src = like_images[index_like_2];
like_3.src = like_images[index_like_3];
like_4.src = like_images[index_like_4];
like_5.src = like_images[index_like_5];






click_like_1.addEventListener('click',function(){
  if(index_like_1 == 0){
    index_like_1 = 1;
  }else{
    index_like_1 = 0;
  }
  like_1.src = like_images[index_like_1];
});
click_like_2.addEventListener('click',function(){
  if(index_like_2 == 0){
    index_like_2 = 1;
  }else{
    index_like_2 = 0;
  }
  like_2.src = like_images[index_like_2];
});
click_like_3.addEventListener('click',function(){
  if(index_like_3 == 0){
    index_like_3 = 1;
  }else{
    index_like_3 = 0;
  }
  like_3.src = like_images[index_like_3];
});
click_like_4.addEventListener('click',function(){
  if(index_like_4 == 0){
    index_like_4 = 1;
  }else{
    index_like_4 = 0;
  }
  like_4.src = like_images[index_like_4];
});
click_like_5.addEventListener('click',function(){
  if(index_like_5 == 0){
    index_like_5 = 1;
  }else{
    index_like_5 = 0;
  }
  like_5.src = like_images[index_like_5];
});
