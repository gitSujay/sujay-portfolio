$('.Show').zoomImage();
$('.Show-small-img:first-of-type').css({'border': 'solid 1px #951b25', 'padding': '2px'})
$('.Show-small-img:first-of-type').attr('alt', 'now').siblings().removeAttr('alt')
$('.Show-small-img').click(function () {
  $('#Show-img').attr('src', $(this).attr('src'))
  $('#big-img').attr('src', $(this).attr('src'))
  $(this).attr('alt', 'now').siblings().removeAttr('alt')
  $(this).css({'border': 'solid 1px #951b25', 'padding': '2px'}).siblings().css({'border': 'none', 'padding': '0'})
  if ($('#Small-img-roll').children().length > 4) {
    if ($(this).index() >= 3 && $(this).index() < $('#Small-img-roll').children().length - 1){
      $('#Small-img-roll').css('left', -($(this).index() - 2) * 76 + 'px')
    } else if ($(this).index() == $('#Small-img-roll').children().length - 1) {
      $('#Small-img-roll').css('left', -($('#Small-img-roll').children().length - 4) * 76 + 'px')
    } else {
      $('#Small-img-roll').css('left', '0')
    }
  }
})

$('#next-img').click(function (){
  $('#Show-img').attr('src', $(".Show-small-img[alt='now']").next().attr('src'))
  $('#big-img').attr('src', $(".Show-small-img[alt='now']").next().attr('src'))
  $(".Show-small-img[alt='now']").next().css({'border': 'solid 1px #951b25', 'padding': '2px'}).siblings().css({'border': 'none', 'padding': '0'})
  $(".Show-small-img[alt='now']").next().attr('alt', 'now').siblings().removeAttr('alt')
  if ($('#Small-img-roll').children().length > 4) {
    if ($(".Show-small-img[alt='now']").index() >= 3 && $(".Show-small-img[alt='now']").index() < $('#Small-img-roll').children().length - 1){
      $('#Small-img-roll').css('left', -($(".show-small-img[alt='now']").index() - 2) * 76 + 'px')
    } else if ($(".Show-small-img[alt='now']").index() == $('#Small-img-roll').children().length - 1) {
      $('#Small-img-roll').css('left', -($('#Small-img-roll').children().length - 4) * 76 + 'px')
    } else {
      $('#Small-img-roll').css('left', '0')
    }
  }
})

$('#prev-img').click(function (){
  $('#Show-img').attr('src', $(".Show-small-img[alt='now']").prev().attr('src'))
  $('#big-img').attr('src', $(".Show-small-img[alt='now']").prev().attr('src'))
  $(".Show-small-img[alt='now']").prev().css({'border': 'solid 1px #951b25', 'padding': '2px'}).siblings().css({'border': 'none', 'padding': '0'})
  $(".Show-small-img[alt='now']").prev().attr('alt', 'now').siblings().removeAttr('alt')
  if ($('#Small-img-roll').children().length > 4) {
    if ($(".Show-small-img[alt='now']").index() >= 3 && $(".Show-small-img[alt='now']").index() < $('#Small-img-roll').children().length - 1){
      $('#Small-img-roll').css('left', -($(".Show-small-img[alt='now']").index() - 2) * 76 + 'px')
    } else if ($(".Show-small-img[alt='now']").index() == $('#Small-img-roll').children().length - 1) {
      $('#Small-img-roll').css('left', -($('#Small-img-roll').children().length - 4) * 76 + 'px')
    } else {
      $('#Small-img-roll').css('left', '0')
    }
  }
})
