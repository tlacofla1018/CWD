// 소메뉴 접었다 폈다 js버전
// $(function(){
//     $('#container .depth-01').hover(
//         function(){
//             $('#container .depth-02').show(100)
//         },
//         function(){
//             $('#container .depth-02').hide(100)
//         }
//     );
// });
$(function(){
    $('#popup-box .close-btn').on('click', function(){
        $('#popup-box').hide();
    });
});