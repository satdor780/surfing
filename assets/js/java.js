$('.surfers__inner').slick({
  dots: false,
  infinite: true,
  speed: 300,
  centerMode: false,
  variableWidth: true,
  arrows: false
});

$('.present__inner .content').slick({
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3
      }
    }
  ]
});

var mq = window.matchMedia( "(max-width: 610px)" );
if (mq.matches) {
    $('.present__inner .content').slick('unslick');
}
// else {
//     // window width is greater than 570px
// }

 
// if ($(document).width() > 610) { 
  
//   alert()
// }
