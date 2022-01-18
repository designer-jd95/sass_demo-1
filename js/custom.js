$(document).ready (function(){     
    $('.toggle').click (function(){
        $(this).toggleClass('show')
        $('.sidebar-area').toggleClass('hide-sidebar')
        $('.container-right').toggleClass('full-width-container')
    });
});