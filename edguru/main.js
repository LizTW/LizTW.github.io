/*
 * Auto-generated content from the Brackets New Project extension.
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, window, document */

// Simple jQuery event handler
$(document).ready(function () {

    var wid = window.innerWidth;
    var hei = window.innerHeight;
    var dest = 0;

    $('.direct').css('width',(hei/1.4)+'px');
    $('.direct').css('height',(hei/1.4)+'px');

    $('.circle').click(function(){
        $('.detail').fadeIn();
    });

    $('.i_circle').click(function(){
        $('.detail').fadeIn();
    });

    $('#menubtn').click(function(){
       // $('#i_menu').removeClass('hide');
        //$('#i_menu').removeClass('fadeOutRight');
        //$('#i_menu').addClass('fadeInRight');
    });

    $('#closemenu').click(function(){
        $('#i_menu').removeClass('fadeInRight');
        $('#i_menu').addClass('fadeOutRight');
        setTimeout(function(){$('#i_menu').addClass('hide');},1000);
    });

    $('#close').click(function(){
        $('.detail').fadeOut();
    });

    var id = 0;

    $('.teamicon2').click(function(){
        id = $(this).attr("id").replace(/\D/g,'');
        $('body,html').animate({scrollTop: $('#tb'+id).offset().top-100},1000);
    });

    $('#right').click(function(){
        $('#inner1').addClass('next');
        $('#right').css('opacity','0.25');
        $('#right').css('cursor','default');
        $('#left').css('opacity','1');
        $('#left').css('cursor','pointer');
    });

    $('#left').click(function(){
        $('#inner1').removeClass('next');
        $('#left').css('opacity','0.25');
        $('#left').css('cursor','default');
        $('#right').css('opacity','1');
        $('#right').css('cursor','pointer');

    });

    $('#sl1').hover(function(){
        $('#pointer').css('transform','rotate(-180deg)');
    },function(){
        $('#pointer').css('transform','rotate('+dest+'deg)');
    });

    $('#sl1').click(function(){
        if(wid>670){
        $('#compass').css('margin-left','0px');
        $('#sb1').removeClass('hide');
        $('#sb1').addClass('fadeInRight');

        $('#sb2').addClass('hide');
        $('#sb3').addClass('hide');
        $('#sb4').addClass('hide');
        $('#sb5').addClass('hide');
        $('#sb6').addClass('hide');
        }

        $('#pointer').css('transform','rotate(-180deg)');
        $('#sl1').attr('class','slice selected');
        $('#sl1 .st0').attr('class','st0 selectedC');
        dest = (-1)*180;

        $('#sl2').attr('class','slice');
        $('#sl2 .st0').attr('class','st0');
        $('#sl3').attr('class','slice');
        $('#sl3 .st0').attr('class','st0');
        $('#sl4').attr('class','slice');
        $('#sl4 .st0').attr('class','st0');
        $('#sl5').attr('class','slice');
        $('#sl5 .st0').attr('class','st0');
        $('#sl6').attr('class','slice');
        $('#sl6 .st0').attr('class','st0');
    });

    $('#sl2').hover(function(){
        $('#pointer').css('transform','rotate(-120deg)');
    },function(){
        $('#pointer').css('transform','rotate('+dest+'deg)');
    });

    $('#sl2').click(function(){
        if(wid>670){
        $('#compass').css('margin-left','0px');
        $('#sb2').removeClass('hide');
        $('#sb2').addClass('fadeInRight');

        $('#sb1').addClass('hide');
        $('#sb3').addClass('hide');
        $('#sb4').addClass('hide');
        $('#sb5').addClass('hide');
        $('#sb6').addClass('hide');
        }

        $('#pointer').css('transform','rotate(-120deg)');
        $('#sl2').attr('class','slice selected');
        $('#sl2 .st0').attr('class','st0 selectedC');
        dest = (-1)*120;

        $('#sl1').attr('class','slice');
        $('#sl1 .st0').attr('class','st0');
        $('#sl3').attr('class','slice');
        $('#sl3 .st0').attr('class','st0');
        $('#sl4').attr('class','slice');
        $('#sl4 .st0').attr('class','st0');
        $('#sl5').attr('class','slice');
        $('#sl5 .st0').attr('class','st0');
        $('#sl6').attr('class','slice');
        $('#sl6 .st0').attr('class','st0');
    });

    $('#sl3').hover(function(){
        $('#pointer').css('transform','rotate(60deg)');
    },function(){
        $('#pointer').css('transform','rotate('+dest+'deg)');
    });

    $('#sl3').click(function(){
        if(wid>670){
        $('#compass').css('margin-left','0px');
        $('#sb3').removeClass('hide');
        $('#sb3').addClass('fadeInRight');

        $('#sb2').addClass('hide');
        $('#sb1').addClass('hide');
        $('#sb4').addClass('hide');
        $('#sb5').addClass('hide');
        $('#sb6').addClass('hide');
        }

        $('#pointer').css('transform','rotate(60deg)');
        $('#sl3').attr('class','slice selected');
        $('#sl3 .st0').attr('class','st0 selectedC');
        dest = 60;

        $('#sl1').attr('class','slice');
        $('#sl1 .st0').attr('class','st0');
        $('#sl2').attr('class','slice');
        $('#sl2 .st0').attr('class','st0');
        $('#sl4').attr('class','slice');
        $('#sl4 .st0').attr('class','st0');
        $('#sl5').attr('class','slice');
        $('#sl5 .st0').attr('class','st0');
        $('#sl6').attr('class','slice');
        $('#sl6 .st0').attr('class','st0');
    });

    $('#sl4').hover(function(){
        $('#pointer').css('transform','rotate(0deg)');
    },function(){
        $('#pointer').css('transform','rotate('+dest+'deg)');
    });

    $('#sl4').click(function(){
        if(wid>670){
        $('#compass').css('margin-left','0px');
        $('#sb4').removeClass('hide');
        $('#sb4').addClass('fadeInRight');

        $('#sb2').addClass('hide');
        $('#sb3').addClass('hide');
        $('#sb1').addClass('hide');
        $('#sb5').addClass('hide');
        $('#sb6').addClass('hide');
        }

        $('#pointer').css('transform','rotate(0deg)');
        $('#sl4').attr('class','slice selected');
        $('#sl4 .st0').attr('class','st0 selectedC');
        dest = 0;

        $('#sl1').attr('class','slice');
        $('#sl1 .st0').attr('class','st0');
        $('#sl2').attr('class','slice');
        $('#sl2 .st0').attr('class','st0');
        $('#sl3').attr('class','slice');
        $('#sl3 .st0').attr('class','st0');
        $('#sl5').attr('class','slice');
        $('#sl5 .st0').attr('class','st0');
        $('#sl6').attr('class','slice');
        $('#sl6 .st0').attr('class','st0');
    });

    $('#sl5').hover(function(){
        $('#pointer').css('transform','rotate(120deg)');
    },function(){
        $('#pointer').css('transform','rotate('+dest+'deg)');
    });

    $('#sl5').click(function(){
        if(wid>670){
        $('#compass').css('margin-left','0px');
        $('#sb5').removeClass('hide');
        $('#sb5').addClass('fadeInRight');

        $('#sb2').addClass('hide');
        $('#sb3').addClass('hide');
        $('#sb4').addClass('hide');
        $('#sb1').addClass('hide');
        $('#sb6').addClass('hide');
        }

        $('#pointer').css('transform','rotate(120deg)');
        $('#sl5').attr('class','slice selected');
        $('#sl5 .st0').attr('class','st0 selectedC');
        dest = 120;

        $('#sl1').attr('class','slice');
        $('#sl1 .st0').attr('class','st0');
        $('#sl2').attr('class','slice');
        $('#sl2 .st0').attr('class','st0');
        $('#sl4').attr('class','slice');
        $('#sl4 .st0').attr('class','st0');
        $('#sl3').attr('class','slice');
        $('#sl3 .st0').attr('class','st0');
        $('#sl6').attr('class','slice');
        $('#sl6 .st0').attr('class','st0');
    });

    $('#sl6').hover(function(){
        $('#pointer').css('transform','rotate(-60deg)');
    },function(){
        $('#pointer').css('transform','rotate('+dest+'deg)');
    });

    $('#sl6').click(function(){
        if(wid>670){
        $('#compass').css('margin-left','0px');
        $('#sb6').removeClass('hide');
        $('#sb6').addClass('fadeInRight');

        $('#sb2').addClass('hide');
        $('#sb3').addClass('hide');
        $('#sb4').addClass('hide');
        $('#sb5').addClass('hide');
        $('#sb1').addClass('hide');
        }

        $('#pointer').css('transform','rotate(-60deg)');
        $('#sl6').attr('class','slice selected');
        $('#sl6 .st0').attr('class','st0 selectedC');
        dest = (-1)*60;

        $('#sl1').attr('class','slice');
        $('#sl1 .st0').attr('class','st0');
        $('#sl2').attr('class','slice');
        $('#sl2 .st0').attr('class','st0');
        $('#sl4').attr('class','slice');
        $('#sl4 .st0').attr('class','st0');
        $('#sl5').attr('class','slice');
        $('#sl5 .st0').attr('class','st0');
        $('#sl3').attr('class','slice');
        $('#sl3 .st0').attr('class','st0');
    });

    $(window).resize(function(){

        wid = window.innerWidth;
        hei = window.innerHeight;

        $('.direct').css('width',(hei/1.4)+'px');
        $('.direct').css('height',(hei/1.4)+'px');
    });

});
