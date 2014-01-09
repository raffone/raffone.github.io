$(window).scroll(function() {
  $('[data-animation-scroll]').each(function(){
    var elemPos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (elemPos < topOfWindow+400) {
      var animName = $(this).data("animation-scroll");
      $(this).addClass(animName);
    }
  });
});
