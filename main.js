document.addEventListener('DOMContentLoaded', ()=>{




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
