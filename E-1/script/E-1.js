$(function(){
    $('.openBtn').on('click', function(){
        $('#popUpBg').addClass('showPopUp');
    });
    $('.closeBtn').on('click', function(){
        $('#popUpBg').removeClass('showPopUp');
    });
});