$('.single-slick').slick({
  // slidesToShow: 1,
  infinite: true,
  // autoplay: true,
  // autoplaySpeed: 2000,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  dots: true,
  // asNavFor: '.slider-nav'
});
$('.btnPause').on('click', function () {
  $('.single-slick').slickPause();
});
$('.btnStart').on('click', function () {
  $('.single-slick').slickPlay();
});
var res = $(".drop_block");

$(".drop").on("click", func);
function func(){
  if(res.css ("display") == "none"){
    res.fadeIn(100);
    res.css({'display':'flex'});
  }
  else{
      res.fadeOut(100);
  }
}

$(document).ready(function () {
  $('.drop_list > li').click(function (event) {
    $(this).children("ul").slideToggle();
    event.stopPropagation();
  });
});