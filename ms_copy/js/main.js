$('.single-slick').slick({
  // slidesToShow: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  dots: true,
  // asNavFor: '.slider-nav'
});
$(".fa-pause").click(function(){
  $('.single-slick').slick('slickPause');
  $(".fa-play").show();
  $(".fa-pause").hide();
  console.log("pause");
});
$('.fa-play').on('click', function () {
  $('.single-slick').slick('slickPlay');
  $(".fa-pause").show();
  $(".fa-play").hide();
  console.log("play");

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

  $(".action").click(function(){
    $(".wrap, .input").toggleClass("active");
    $("input[type='text']").focus();
    $(".nav_item").hide();
    $(".mob .fa-search").hide();
  });
  $(".close").click(function(){
    $(".nav_item").show();
    $(".mob .fa-search").show();
    $(".wrap, .input").toggleClass("active");

  });
