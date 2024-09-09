$(function(){
    $('.familySiteBtn').on('click', function(){
        $('.familySite').toggleClass('slide');
    });
});

$(function(){
    $('.openBtn').on('click', function(){
        $('#popUpBox').addClass('showPopUp');
    });
    $('.closeBtn').on('click', function(){
        $('#popUpBox').removeClass('showPopUp');
    });
});