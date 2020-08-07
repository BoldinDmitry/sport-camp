// document.addEventListener('DOMContentLoaded', ()=>{


let coach_1 = document.getElementById('#coach_1')
let lad = document.getElementById('#hidden_1')
if(coach_1){
coach_1.addEventListener('mouseenter', function(){
 hidden_1.style.marginTop = '9vw'
})

coach_1.onclick = function(){
  lad.style.opacity = '1'
}

let windw = this

$.fn.followTo = function(pos){
  let $this = this,
  $window = $(windw)

  $window.scroll(function(e){
   if($window.scrollTop() > pos){
     $this.css({
       position: 'absolute',
       top: pos
     })
   } else{
     $this.css({
       position: 'fixed',
       top: 0
     })
   }

  })
}
 $('#f').followTo(250)
// })
