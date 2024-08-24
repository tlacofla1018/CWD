$(function(){
    $("#openBtn").on('click', function(){
        $('#popup').addClass('show');
    });
    $("#closeBtn").on('click', function(){
        $('#popup').removeClass('show');
    });
});