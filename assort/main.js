let line = document.querySelector('#under')
let bikes = document.querySelector('#assort')
let serve = document.querySelector('#serve')
bikes.onmouseover = function(){
  line.style.left = '64vw'
  line.style.width = '10.5vw'
}
bikes.onmouseout = function(){
  line.style.left = '45vw'
  line.style.width = '9vw'
}

serve.onmouseover = function(){
  line.style.left = '84.2vw'
  line.style.width = '5.5vw'
}
serve.onmouseout = function(){
  line.style.left = '45vw'
  line.style.width = '9vw'
}
