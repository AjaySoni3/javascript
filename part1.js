

$('input').eq(0).keypress(function(event) {
  if (event.which === 13) {
    $('h3').toggleClass('turnBlue')
  }
})

$('h1').on('dblclick',function(){
  $(this).toggleClass('turnBlue')
})
$('h1').on('mouseenter',function(){
  $(this).toggleClass('turnBlue')
})
