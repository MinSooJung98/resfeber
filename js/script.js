$(document).ready(function(){ 
	 $('.fix_gnbb').hide();
  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 930) {
      $('#fix').addClass('header-scrolled');
	  $('.fix_gnba').fadeOut(0);
	  $('.fix_gnbb').fadeIn(0);
    } else {
      $('#fix').removeClass('header-scrolled');
	   $('.fix_gnbb').fadeOut(0);
	  $('.fix_gnba').fadeIn(0);
    }
  })
 });
 
 $(window).scroll( function(){
		 $('.motion_left1').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'0px'},600);
            }
            
        });
		$('.motion_left2').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'0px'},800);
            }
            
        });
		$('.motion_left3').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'0px'},800);
            }
            
        });
		$('.motion_left4').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'0px'},1000);
            }
            
        });
		$('.motion_left5').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'0px'},1000);
            }
            
        });
		$('.motion_right1').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-right':'0px'},600);
            }
            
        });
		$('.motion_right2').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-right':'0px'},800);
            }
            
        });
		$('.motion_right3').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-right':'0px'},800);
            }
            
        });
		$('.motion_right4').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-right':'0px'},1000);
            }
            
        });
		$('.motion_right5').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-right':'0px'},1000);
            }
            
        });
		$('.motion_top1').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'0px','margin-bottom':'100px'},600);
            }
            
        });
		$('.motion_top2').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'0px','margin-bottom':'100px'},800);
            }
            
        });
		$('.motion_top3').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'0px','margin-bottom':'100px'},1000);
            }
            
        });
		$('.motion_opacity1').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},600);
            }
            
        });
		$('.motion_opacity2').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},800);
            }
            
        });
		$('.motion_opacity3').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},1000);
            }
            
        });
		$('.motion_opacity4').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},1200);
            }
            
        });
    });
	
$(function(){
	$('.hea_fon2').hide();
	$('.ban_img').hide();
	$('.banner_bg1').click(function(){
		$('#header video').animate({'opacity':'1'},300);
		$('.ban_img').animate({'opacity':'0'},300);
		$('.hea_fon1').show();
		$('.hea_fon2').hide();
	});
	$('.banner_bg2').click(function(){
		$('#header video').animate({'opacity':'0'},300);
		$('.ban_img').animate({'opacity':'1'},300);
		$('.hea_fon1').hide();
		$('.hea_fon2').show();
		$('.ban_img').show();
	});
});

var total_section = 0; //전체 원페이지 수
var current_idx = 0;
var screen_h = 0; // 화면 높이
var page_h = 0;
var last_y = 0; // 스크롤 마지막 하단 높이
var onpage_on = true;
var isScroll = false;

$(document).ready(function(){
	
	init();
	
		
	// Scroll Event
	$('body').on('scroll touchmove mousewheel', function(event) {	
		
		//console.log(current_idx);

		if(last_y > $("html").scrollTop() && !onpage_on){
			
			//원페이지 스크롤 진입
			console.log(":: 원페이지 시작 ::");
			onpage_on = true;
			isScroll = false;
		}
		
		if(!onpage_on) return;
		
		//스크롤 이벤트 막기
		event.preventDefault();
		event.stopPropagation();		
		if(isScroll) return; // 현재 스크롤이 동작중이면 종료
		
		
		isScroll = true;		
		var direction = event.originalEvent.wheelDelta; //마우스 휠 방향
		var y = 0;

		if(direction > 0){
			// up
			current_idx --;
			if(current_idx < 0){current_idx = -1;}
			y = current_idx * page_h;
		}
		else{
			// down
			current_idx ++;
			if(current_idx > total_section){
				current_idx = total_section;
				onpage_on = false;
				return;
			}
			
			y = current_idx * page_h;		
		}

		$('body').animate({scrollTop: y}, 500, function(){isScroll=false;});	
	});
});

$( window ).resize(function() {
	
	// 반응형
	setHeight();
});


function init(){
	
	setHeight();
	
	total_section = $('#header > video').length;
	last_y = page_h * total_section;
}	

function setHeight(){
	
	// 높이 설정
	screen_h = document.body.clientHeight;
	page_h = screen_h;
	$("#header > video").height(page_h);
}

$(function(){
	$('.submenu_wrap').hide();
	$('.submenu').hide();
	$('.sub_icon img').click(function(){
		$('.submenu_wrap').hide();
		$('.submenu').hide();
		$('.submenu').animate({'margin-right':'-360px'},300);
	});
	$('.fix_icon').click(function(){
		$('.submenu_wrap').show();
		$('.submenu').show();
		$('.submenu').animate({'margin-right':'0'},300);
	});
	$('.sub_link li a').click(function(){
		$('.submenu_wrap').hide();
		$('.submenu').hide();
		$('.submenu').animate({'margin-right':'-360px'},300);
	});
});