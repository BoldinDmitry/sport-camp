let closeBtn = document.querySelector('#cross')
let overlay = document.querySelector('.overlay')
let btn1 = document.querySelector('#btn_1')
let btn2 = document.querySelector('#btn_2')
let btn3 = document.querySelector('#btn_3')
let btn4 = document.querySelector('#btn_4')


btn1.onclick = function(){
  overlay.style.display = 'block'
}
btn2.onclick = function(){
  overlay.style.display = 'block'
}
btn3.onclick = function(){
  overlay.style.display = 'block'
}
btn4.onclick = function(){
  overlay.style.display = 'block'
}
closeBtn.onclick = function(){
overlay.style.display = 'none'
}
