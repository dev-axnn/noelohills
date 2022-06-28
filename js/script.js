// 멀티미디어 요소 로딩 전 실행
$(document).ready(function(){
  // 모바일 메뉴
  let mb_div = $('.mb-div');

  // 모바일 보기 버튼 기능
  let mb_bt = $('.mb-bt');
  mb_bt.click(function(){
    mb_div.show();
  });
  // 모바일 닫기 버튼 기능
  let mb_close = $('.mb-close');
  mb_close.click(function(){
    mb_div.hide();
  });
  // 배경 누르면 닫기
  mb_div.click(function(){
    mb_div.hide();
  });
  // 내용을 클릭하면 닫기지 않도록 방지
  $('.mb-top, mb-wrap').click(function(event){
    // 신호 전달 막기
    event.stopPropegation();
  });

  
  // 모바일 메뉴 기능
  let mb_menu_li = $('.mb-menu > li');
  $.each(mb_menu_li, function(index, item){
    // mb-mainmenu 를 찾아서 보관
    let temp = $(this).find('.mb-mainmenu');
    temp.click(function(){
      // 펼쳐져 있는 경우 true, 없으면 false
      let result = temp.hasClass('mb-mainmenu-open');
      if(result == true) {
        // 펼쳐진 클래스를 가진 경우
        temp.removeClass('mb-mainmenu-open');
        // 펼쳐진 서브 메뉴 
        
      }else{
        // 모든 클래스 일단 제거
        mb_menu_li.find('.mb-mainmenu').removeClass('mb-mainmenu-open')
        // 펼쳐진 서브 메뉴 닫기
        mb_menu_li.find('.mb-submenu').hide();
        // 펼쳐진 클래스가 없는 경우
        temp.addClass('mb-mainmenu-opem');
        // 서브메뉴 펼치기
        mb_menu_li.eq(index).find('.mb-submenu').show();
      }
    });
  });

  // window 너비 체크
  $(window).resize(function(){
    let temp = $(window).width();
    if(temp >= 880) {
      mb_div.hide();
      $('.mb-mainmenu').removeClass('mb-mainmenu-open');
      $('.mb-submenu').hide();
    }
  });
});



// 멀티미디어 요소 로딩 완료 후 실행
window.onload = function(){
  // 상단 배너 슬라이드
  new Swiper('.sw-banner', {
    loop: true,
    // fade 효과(Swiper demo 에서 확인)
    effect: "fade",
    // 페이지네이션(Swiper demo 에서 확인)
    pagination: {
      el: '.sw-banner-pg',
      clickable: true
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // touchMove 제거
    allowTouchMove: false,
  });

  // visual 슬라이드
  new Swiper('.sw-visual', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.sw-visual-pg',
      clickable: true
    }
  });
};