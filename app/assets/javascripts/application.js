// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
//loading
$(function() {
  var h = $(window).height();
 
  $('.main,.header,footer').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');
});
 
$(window).on("load",function () { //全ての読み込みが完了したら実行
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
  $('.obj1').addClass('change');
  $('.obj2').addClass('change');
  $('.under-arrow').hide();
  //top-imgのアニメーション:ロード１秒後

setTimeout(function(){
	$('.opening').fadeIn(2000)
},1000);
setTimeout(function(){
	$('.opening').fadeOut(2000)
},3500);
setTimeout(function(){
	$('.main,.header,footer').fadeIn(2000)
},5500);
setTimeout(function(){
	$('.obj1').animate({left:"+=21%",opacity:1},2000,"swing"
		,function(){
			$('.obj2').animate({left:"-=21%",opacity:1},2000,"swing")
		}
);},7500);
setTimeout(function(){
			$('.under-arrow').slideDown("slow")
},11500);
	});
 
//10秒たったら強制的にロード画面を非表示
$(function(){
  setTimeout('stopload()',10000);
});
 
function stopload(){
  $('.main').css('display','block');
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);

}

//スクロールアクション
$(function(){
	    var fadeSpeed = 2000;

	    $(window).scroll(function(){
			$('.content').each(function(){
				var obj_t_pos = $(this).offset().top;
		        var windowHeight = $(window).height();
		        var scroll = $(window).scrollTop();
			if(scroll > obj_t_pos - windowHeight + 300){
				$(this).find('.PC-content').addClass('change');
            }else{
				$(this).find('.PC-content').removeClass('change');
			}
			});
			var scroll = $(window).scrollTop();
			if(scroll > 400){
				$('.header').addClass('change');
			}else{
				$('.header').removeClass('change');
			}
		});
});
