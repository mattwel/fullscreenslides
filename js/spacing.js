$(function() {
  //caches a jQuery object containing the header element
  var header = $(".secone");
  var boxHeight = 0;
  
  $(window).on('resize', function() {
    boxHeight = $('.container').height();
  });
  
  $(window).scroll(function() {
    boxHeight = $('.container').height();

    var scroll = $(window).scrollTop();
    
    if (scroll >= boxHeight) {
      header.removeClass('secone').addClass("seconepad");
    } else {
      header.removeClass("seconepad").addClass('secone');
    }
  });
});