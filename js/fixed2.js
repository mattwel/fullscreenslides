$(function() {
  //caches a jQuery object containing the header element
  var header = $(".navbarwrap");
  var boxHeight = 0;
  
  $(window).on('resize', function() {
    boxHeight = $('#gray').height();
  });
  
  $(window).scroll(function() {
    boxHeight = $('#gray').height();

    var scroll = $(window).scrollTop();
    
    if (scroll >= boxHeight) {
      header.removeClass('navbarwrap').addClass("navbar-fixed");
    } else {
      header.removeClass("navbar-fixed").addClass('navbarwrap');
    }
  });
});