$(function(){
    let slideWidth = $('.slide_container ul li').width();
    let dir = '-=';
    let autoSlide = setInterval(slide, 5000);

    function slide(){
        $('.slide_container ul').animate({'marginLeft' : dir + slideWidth}, 1000, function(){
            $('li:first-child', this).appendTo($(this));
            $(this).css('margin-left', 0);
        });
    }
});

$(function(){
    $('.open_btn').on('click', function(){
        $('.modal_popup').addClass('pop');
    });
    $('.popup_contents > button').on('click', function(){
        $('.modal_popup').removeClass('pop');
    });
});