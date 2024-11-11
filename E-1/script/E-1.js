$(function(){
    $('.openBtn').on('click', function(){
        $('#popUpBg').addClass('showPopUp');
    });
    $('.closeBtn').on('click', function(){
        $('#popUpBg').removeClass('showPopUp');
    });

    let slideWidth = $('#mainBanner ul li').width();
            let dir = '-=';
            let autoSlide = setInterval(slide, 5000);

            function slide(){
                $('#mainBanner ul').animate({'marginLeft' : dir + slideWidth}, 1000, function(){ 
                    $('li:first-child', this).appendTo($(this));
                    $(this).css('margin-left', 0);
                });
            }
});