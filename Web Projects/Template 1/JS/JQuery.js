/*global $,alert,console, window*/

$(function () {
   
    'use strict';
    
    // Trigger Nice Scroll
    
    //$('html').niceScroll();
    
    // Change header Height
    
    $('.header').height($(window).height());
    /*
    $(window).resize(function(){
        $('.header').height($(window).height());
    });*/
    
    
    // Scroll to Features
    
    $('.header .arrow svg').click(function(){
       
        $('html , body').animate({
            scrollTop: $('.features').offset().top
        }, 1000);
        
    });
    
    // Show Hidden items from Our Work
    
    $('.show-more').click(function(){
       
        $('.our-work .hidden').slideToggle(1000);
        
    });
    
    // Check Testimonials
    
    var left = $('.testim .fa-chevron-left'),
        right = $('.testim .fa-chevron-right');
    
    function checkclient(){/*
        if($('.client:first').hasClass('active')){
            left.fadeOut();
        }                                                                         If Condition in Multi Line
        else{
            left.fadeIn();
        }*/
        //                                  (?)if          (:)else
        $('.client:first').hasClass('active') ? left.hide() : left.show(); // If Condition in one Line
    
        $('.client:last').hasClass('active') ? right.hide() : right.show();
    }
    
        checkclient();
    
    $('.testim svg').click(function(){
       
        if($(this).hasClass('fa-chevron-right')){
            
            $('.testim .active').fadeOut(100, function(){
                
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                
                checkclient();
                
            });
            
        }
        else
        {
            
            $('.testim .active').fadeOut(100, function(){
                
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                
                checkclient();
                
            });
            
        }
        
    });
    
});