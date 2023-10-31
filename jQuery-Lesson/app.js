/*$(document).ready(function () {
  $('body').html('<h1>Hello jQuery!!</h1>');
});

$(function(){
  $('.box1').css({
    'background-color': '#0000FF',
    'height': '100px'
  });
});

$(function(){
  $('.box1').slideDown(1000);
});

$(function(){
  $('.box1').slideUp(10000);
})

$(function(){
  $('.box1').hide(1000);
});
*/


$(function(){
  $('.box1').slideDown(1000,function(){
    $('.box1').css({
      'background-color': '#0000FF',
      'height': '100px',
      'width': '200px'
    }).slideUp(1000);
  });
});

