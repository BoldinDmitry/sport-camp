document.addEventListener('DOMContentLoaded', ()=>{


  // let line = document.querySelector('#under')
  // let live = document.querySelector('#accom')
  // let bikes = document.querySelector('#assort')
  // let serve = document.querySelector('#serve')
  // accom.onmouseover = function(){
  //   line.style.left = '45vw'
  //   line.style.width = '9vw'
  // }
  // accom.onmouseout = function(){
  //   line.style.left = '0vw'
  //   line.style.width = '20vw'
  // }
  //
  // bikes.onmouseover = function(){
  //   line.style.left = '64vw'
  //   line.style.width = '10.5vw'
  // }
  // bikes.onmouseout = function(){
  //   line.style.left = '0vw'
  //   line.style.width = '20vw'
  // }
  //
  // serve.onmouseover = function(){
  //   line.style.left = '84.2vw'
  //   line.style.width = '5.5vw'
  // }
  // serve.onmouseout = function(){
  //   line.style.left = '0vw'
  //   line.style.width = '20vw'
  // }



document.getElementsByClassName('.name').onmouseover = function(){
  document.querySelector('.name img').style.zIndex = '100'
}

// let windw = this
//
// $.fn.followTo = function(pos){
//   let $this = this,
//   $window = $(windw)
//
//   $window.scroll(function(e){
//    if($window.scrollTop() > pos){
//      $this.css({
//        position: 'absolute',
//        top: pos
//      })
//    } else{
//      $this.css({
//        position: 'fixed',
//        top: 0
//      })
//    }
//
//   })
// }
//  $('#f').followTo(250)
})
