let line = document.querySelector('#under')
let live = document.querySelector('#accom')
let bikes = document.querySelector('#assort')
let serve = document.querySelector('#serve')
live.onmouseover = function(){
  line.style.left = '30vw'
  line.style.width = '9vw'
}
live.onmouseout = function(){
  line.style.left = '58vw'
  line.style.width = '10.5vw'
}

serve.onmouseover = function(){
  line.style.left = '84.2vw'
  line.style.width = '5.5vw'
}
serve.onmouseout = function(){
  line.style.left = '64vw'
  line.style.width = '10.5vw'
}

// let btn = document.querySelectorAll('#btn')
// let open = document.querySelector('#form iframe')
//
// btn.onclick = function(){
//   open.style.display = 'block'
// }
