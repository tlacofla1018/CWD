$(function(){
    $('#container .openPopUp').on('click', function(){
        $('#popUp').addClass('popupOpen');
    });
    $('#popUp .closeBtn').on('click', function(){
        $('#popUp').removeClass('popupOpen');
    });
});