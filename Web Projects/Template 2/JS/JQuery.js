/*global $, window*/

$(function () {
   
    'use strict';
    
    //Adjust Header Height
    
    var myHeader = $('.header'),
        mySlider = $('.bxslider');
    
    myHeader.height($(window).height());
    
    $(window).resize(function(){
        myHeader.height($(window).height());
    
        mySlider.each(function(){
           $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
        });
        
        // Adjust Contact us position while resizing
        $('.con').css('left', ($(window).width() - $('.con').width()) / 2);
        $('.con').css('right', ($(window).width() - $('.con').width()) / 2);
        $('.con').css('top', ($('.contact').height() - $('.con').height()) / 2);
        $('.con').css('bottom', ($('.contact').height() - $('.con').height()) / 2);
    });
    
    // Links Add Active Class
    
    $('.links li a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    
    // Adjust BX Slider List item Center
    
    mySlider.each(function(){
        
       $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
        
    });
    
    // Trigger the BX Slider
    
    mySlider.bxSlider({
        pager: false
    });
   
    // Smooth Scroll to Div
    
    $('.links li a').click(function(){
       
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top
            
        }, 1000);
        
    });
    
    // Fade Our-Team & Our-Projects Overlay
    $('.our-team .box, .our-projects .gallery .row > div').mouseover(function(){
       
        $('#' + $(this).data('custom') + ' .overlay').fadeIn(300);
        
        
        $('#' + $(this).data('pr') + ' .overlay').fadeIn(300);
        $('#' + $(this).data('pr') + ' .heart').fadeIn(300);
        
    });
    $('.our-team .box, .our-projects .gallery .row > div').mouseleave(function(){
       
        $('#' + $(this).data('custom') + ' .overlay').fadeOut(300);
        
        
        $('#' + $(this).data('pr') + ' .overlay').fadeOut(300);
        $('#' + $(this).data('pr') + ' .heart').fadeOut(300);
        
    });
    
    // Testimonials Auto Slider
    
    (function autoSlider(){
        
        $('.slider .active').each(function(){
           
            if(!$(this).is(':last-child')){
                
                $(this).delay(3000).fadeOut(1000, function(){
                   
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    
                    autoSlider();
                    
                });
                
            }else{
                
                $(this).delay(3000).fadeOut(1000, function(){
                   
                    $(this).removeClass('active');
                    
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    
                    autoSlider();
                    
                });
                
            }
            
        });
        
    }());
    
    // Trigger Mixitup
    
    var mixer = mixitup('#Container');
    
    //$('#Container').mixItUp();
    
    // Adjust Shuffle Links
    
    $('.shuffle li').click(function(){
        
        $(this).addClass('selected').siblings().removeClass('selected');
        
    });
    
    // Open & Close Contact Us Form
    
    $('.contactus').click(function(){
        
        $('.contact').fadeIn(300, function(){
            $('.con').slideDown(500);
        });
        
        $('.con').css('left', ($(window).width() - $('.con').width()) / 2);
        $('.con').css('right', ($(window).width() - $('.con').width()) / 2);
        $('.con').css('top', ($('.contact').height() - $('.con').height()) / 2);
        $('.con').css('bottom', ($('.contact').height() - $('.con').height()) / 2);
        
    });
    
    $('.closecont').click(function(){
        
        $('.con').slideUp(500, function(){
            $('.contact').fadeOut(300);
        });
        
        $('.navbar .links li:first-of-type').addClass('active').siblings().removeClass('active');
    });
    
    // Trigger NiceScroll Plugin
    
    $('html').niceScroll({
        cursorcolor: '#333',
        cursorwidth: '10px',
        cursorborder: 'none'
    });
    
});