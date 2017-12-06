$(window).on('scroll', function () {
  var scrollTop = $(this).scrollTop() + 120;
  var anchorsLength = $('.anchor').length;
  var closest = $('.header').closest('.anchor').find('id');
   console.log(closest);
    // console.log('closest: ', closest + ' ');
  $('.anchor').each(function (index, el) {
 // console.log('index and el', index ,el);
    var topDistance = $(this).offset().top;
     // console.log('last', el[index]);
if(anchorsLength === index+1) {
  // console.log(el);
}
    if ((topDistance + 110) < scrollTop) {
  // console.log(topDistance , topDistance);
      // console.log($(this).text());
      //  console.log('closest', $(this).closest('.anchor').text());
      //   console.log($(this).parent().parent().attr('id'));
      //   console.log($(this).offset());
    }
  });
});