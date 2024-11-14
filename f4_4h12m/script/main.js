$(function(){
    let slideHeight = $('.slide_banner ul li').height();
    let dir = '-=';
    let autoSlide = setInterval(slide, 3000);

    function slide(){
        $('.slide_banner ul').animate({'marginTop' : dir + slideHeight}, 1000, function(){
            $('li:first-child', this).appendTo($(this));
            $(this).css('margin-top', 0);
        });
    }
});

$(function(){
    let count = 0;
    $('.fade_container div ul li').eq(count).fadeIn(300);
    
    setInterval(function(){
        count++;
        count %= $('.fade_container div ul li').length;
        $('.fade_container div ul li').eq(count).fadeIn(500).siblings().fadeOut(500);
    }, 1500);
});

$(function(){
    $('.family_site button').on('click', function(){
        $('.family_site ul').toggleClass('slide');
    });
});

$(function(){
    $('.modal_open').on('click', function(){
        $('.modal_popup').addClass('show');
    });
    $('.modal_close').on('click', function(){
        $('.modal_popup').removeClass('show');
    });

    $('.layer_open').on('click', function(){
        $('.layer_popup').addClass('show');
    });
    $('.layer_close').on('click', function(){
        $('.layer_popup').removeClass('show');
    });
});