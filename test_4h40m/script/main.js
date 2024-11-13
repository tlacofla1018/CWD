$(function(){
    let slideHeight = $('.slide_container div ul li').height();
    let dir = '-=';
    let autoSlide = setInterval(slide, 3000);

    function slide(){
        $('.slide_container div ul').animate({'marginTop' : dir + slideHeight}, 1000, function(){
            $('li:first-child', this).appendTo($(this));
            $(this).css('margin-top', 0);
        });
    };
});

$(function(){
    $('.family_site button').on('click', function(){
        $('.family_site ul').toggleClass('slide');
    });
});

$(function(){
    $('.modal_open_btn').on('click', function(){
        $('.modal_popup').addClass('pop');
    });
    $('.modal_close').on('click', function(){
        $('.modal_popup').removeClass('pop');
    });
    $('.layer_open_btn').on('click', function(){
        $('.layer_popup').addClass('pop');
    });
    $('.layer_close').on('click', function(){
        $('.layer_popup').removeClass('pop');
    });
});