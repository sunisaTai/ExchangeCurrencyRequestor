
$(document).ready(function () {
    var reveal1 = document.getElementById("reveal1");
    var reveal2 = document.getElementById("reveal2");
    var reveal3 = document.getElementById("reveal3");
    if(window.screen.width <= 1300){
        //$("#img-footer").addClass("hide");
        //$("#menu-footer").addClass("hide");
        reveal1.style.width='265px';
        reveal2.style.width='265px';
        reveal3.style.width='265px';

        if(window.screen.width <=320) {
            $("#menu_button").addClass("hide");
            $("#img-footer").addClass("hide");
            $("#menu-footer").addClass("hide");
            reveal1.style.width = '288px';
            reveal2.style.width = '288px';
            reveal3.style.width = '288px';
        }
    }else if(window.screen.width >1300){
        $("#menu_button").removeClass("hide");
        $("#img-footer").removeClass("hide");
        $("#menu-footer").removeClass("hide");
    }

});

$("#reveal1").on('click',function(){
    window.location.href = session.context+'/exchangerates/view?inquiry';
});

$("#reveal2").on('click',function(){
    window.location.href = session.context+'/calculates/view?inquiry';
});

$("#reveal3").on('click',function(){
    window.location.href = session.context+'/news/view?inquiry';
});

$("#menu_button_currency").on('click',function(){
    window.location.href = session.context+'/exchangerates/view?inquiry';
});

$("#menu_button_calculate").on('click',function(){
    window.location.href = session.context+'/calculates/view?inquiry';
});

$("#menu_button_news").on('click',function(){
    window.location.href = session.context+'/news/view?inquiry';
});

$("#sub_menu_currency").on('click',function(){
    window.location.href = session.context+'/exchangerates/view?inquiry';
});

$("#sub_menu_calculate").on('click',function(){
    window.location.href = session.context+'/calculates/view?inquiry';
});

$("#sub_menu_news").on('click',function(){
    window.location.href = session.context+'/news/view?inquiry';
});

