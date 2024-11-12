$(function(){
    let count = 0;
    $('.fade_container ul li').eq(count).fadeIn(300);

    setInterval(function(){
        count++;
        count %= $('.fade_container ul li').length;
        $('.fade_container ul li').eq(count).fadeIn(300).siblings().fadeOut(300);
    }, 1500);
});

$(function(){
    $('.familySiteBtn').on('click', function(){
        $('.familySite').toggleClass('slide');
    });
});

$(function(){
    $('.open_btn').on('click', function(){
        $('.modal_popup').addClass('pop');
    });
    $('.popup_contents > button').on('click', function(){
        $('.modal_popup').removeClass('pop');
    });
});