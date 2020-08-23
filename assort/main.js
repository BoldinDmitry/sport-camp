// let line = document.querySelector('#under')
// let live = document.querySelector('#accom')
// let bikes = document.querySelector('#assort')
// let serve = document.querySelector('#serve')
// live.onmouseover = function(){
//   line.style.left = '30vw'
//   line.style.width = '9vw'
// }
// live.onmouseout = function(){
//   line.style.left = '58vw'
//   line.style.width = '10.5vw'
// }
//
// serve.onmouseover = function(){
//   line.style.left = '84.2vw'
//   line.style.width = '5.5vw'
// }
// serve.onmouseout = function(){
//   line.style.left = '64vw'
//   line.style.width = '10.5vw'
// }


let closeBtn = document.querySelector('#cross')
let overlay = document.querySelector('.overlay')
let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
let btn4 = document.querySelector('#btn4')
let btn5 = document.querySelector('#btn5')
let btn6 = document.querySelector('#btn6')


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
btn5.onclick = function(){
  overlay.style.display = 'block'
}
btn6.onclick = function(){
  overlay.style.display = 'block'
}
closeBtn.onclick = function(){
overlay.style.display = 'none'
}
