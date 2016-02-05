
$(document).ready(function(){
    var date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth()+1;
    var yyyy = date.getFullYear();
    if(dd<10){
        dd='0'+dd
    }
    if(mm<10){
        mm='0'+mm
    }
    var date = dd+'/'+mm+'/'+yyyy;

    $(".datepicker").val(date);

    var data = $.ajax({
        type: "GET",
        headers: {
            Accept: 'application/json'
        },
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: session['context']+'/exchangerates/findExchangeCurrencyByDate',
        data:{
            date:"05/01/2016"
        },
        async: false
    }).responseJSON;

    if(data.length != 0) {
        var list = [];
        var krugthai = {};
        var kbank = {};
        var gsb = {};
        $.each(data, function (index, item) {
            if (item.bank.bank_Name == "กรุงไทย") {
                krugthai.name = item.bank.bank_Name;
                if (item.currency.symbol == "USD") {
                    krugthai.buyUSD = item.buy_rate;
                    krugthai.sellUSD = item.sell_rate;
                }
                if (item.currency.symbol == "GBP") {
                    krugthai.buyGBP = item.buy_rate;
                    krugthai.sellGBP = item.sell_rate;
                }
                if (item.currency.symbol == "JPY") {
                    krugthai.buyJPY = item.buy_rate;
                    krugthai.sellJPY = item.sell_rate;
                }
            }
            if (item.bank.bank_Name == "กสิกร") {
                kbank.name = item.bank.bank_Name;
                if (item.currency.symbol == "USD") {
                    kbank.buyUSD = item.buy_rate;
                    kbank.sellUSD = item.sell_rate;
                }
                if (item.currency.symbol == "GBP") {
                    kbank.buyGBP = item.buy_rate;
                    kbank.sellGBP = item.sell_rate;
                }
                if (item.currency.symbol == "JPY") {
                    kbank.buyJPY = item.buy_rate;
                    kbank.sellJPY = item.sell_rate;
                }

            }
            if (item.bank.bank_Name == "ออมสิน") {
                gsb.name = item.bank.bank_Name;
                if (item.currency.symbol == "USD") {
                    gsb.buyUSD = item.buy_rate;
                    gsb.sellUSD = item.sell_rate;
                }
                if (item.currency.symbol == "GBP") {
                    gsb.buyGBP = item.buy_rate;
                    gsb.sellGBP = item.sell_rate;
                }
                if (item.currency.symbol == "JPY") {
                    gsb.buyJPY = item.buy_rate;
                    gsb.sellJPY = item.sell_rate;
                }
            }
        });
        list.push(krugthai);
        list.push(kbank);
        list.push(gsb);

        $("#t_body").empty();
        $.each(list, function (index, item) {
            $("#t_body").append('' +
                '<tr>' +
                '<td>' + item.name + '</td>' +
                '<td>' + '<center>' + item.buyUSD + '</center>' + '</td>' +
                '<td>' + '<center>' + item.sellUSD + '</center>' + '</td>' +
                '<td>' + '<center>' + item.buyGBP + '</center>' + '</td>' +
                '<td>' + '<center>' + item.sellGBP + '</center>' + '</td>' +
                '<td>' + '<center>' + item.buyJPY + '</center>' + '</td>' +
                '<td>' + '<center>' + item.sellJPY + '</center>' + '</td>' +
                '</tr>'
            );
        });
    }else{
        $("#t_body").empty();
    }
});


$("#menu_button_home").on('click',function(){
    window.location.href = session.context+'/';
});

$("#menu_button_calculate").on('click',function(){
    window.location.href = session.context+'/calculates/view?inquiry';
});

$("#menu_button_news").on('click',function(){
    window.location.href = session.context+'/news/view?inquiry';
});

$("#search").on('click',function(){
    var date = $(".datepicker").val();

    var data = $.ajax({
        type: "GET",
        headers: {
            Accept: 'application/json'
        },
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: session['context']+'/exchangerates/findExchangeCurrencyByDate',
        data:{
            date:date
        },
        async: false
    }).responseJSON;

    if(data.length != 0) {
        var list = [];
        var krugthai = {};
        var kbank = {};
        var gsb = {};
        $.each(data, function (index, item) {
            if (item.bank.bank_Name == "กรุงไทย") {
                krugthai.name = item.bank.bank_Name;
                if (item.currency.symbol == "USD") {
                    krugthai.buyUSD = item.buy_rate;
                    krugthai.sellUSD = item.sell_rate;
                }
                if (item.currency.symbol == "GBP") {
                    krugthai.buyGBP = item.buy_rate;
                    krugthai.sellGBP = item.sell_rate;
                }
                if (item.currency.symbol == "JPY") {
                    krugthai.buyJPY = item.buy_rate;
                    krugthai.sellJPY = item.sell_rate;
                }
            }
            if (item.bank.bank_Name == "กสิกร") {
                kbank.name = item.bank.bank_Name;
                if (item.currency.symbol == "USD") {
                    kbank.buyUSD = item.buy_rate;
                    kbank.sellUSD = item.sell_rate;
                }
                if (item.currency.symbol == "GBP") {
                    kbank.buyGBP = item.buy_rate;
                    kbank.sellGBP = item.sell_rate;
                }
                if (item.currency.symbol == "JPY") {
                    kbank.buyJPY = item.buy_rate;
                    kbank.sellJPY = item.sell_rate;
                }

            }
            if (item.bank.bank_Name == "ออมสิน") {
                gsb.name = item.bank.bank_Name;
                if (item.currency.symbol == "USD") {
                    gsb.buyUSD = item.buy_rate;
                    gsb.sellUSD = item.sell_rate;
                }
                if (item.currency.symbol == "GBP") {
                    gsb.buyGBP = item.buy_rate;
                    gsb.sellGBP = item.sell_rate;
                }
                if (item.currency.symbol == "JPY") {
                    gsb.buyJPY = item.buy_rate;
                    gsb.sellJPY = item.sell_rate;
                }
            }
        });
        list.push(krugthai);
        list.push(kbank);
        list.push(gsb);

        $("#t_body").empty();
        $.each(list, function (index, item) {
            $("#t_body").append('' +
                '<tr>' +
                '<td>' + item.name + '</td>' +
                '<td>' + '<center>' + item.buyUSD + '</center>' + '</td>' +
                '<td>' + '<center>' + item.sellUSD + '</center>' + '</td>' +
                '<td>' + '<center>' + item.buyGBP + '</center>' + '</td>' +
                '<td>' + '<center>' + item.sellGBP + '</center>' + '</td>' +
                '<td>' + '<center>' + item.buyJPY + '</center>' + '</td>' +
                '<td>' + '<center>' + item.sellJPY + '</center>' + '</td>' +
                '</tr>'
            );
        });
    }else{
        $("#t_body").empty();
    }
});
