import "./main.pcss";


// onscroll add sticky class
// ======================================================
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var menuHeight = $("header").outerHeight()

    if (scroll > menuHeight) {
        $(".logoImg").removeClass("w-full");
        $(".logoImg").addClass("w-11/12");
        $("header").addClass("bg-primary");
    }else{
        $(".logoImg").addClass("w-full");
        $(".logoImg").removeClass("w-11/12");
        $("header").removeClass("bg-primary");
    }
});


// faq item
$(document).ready(function(){
    $(".faqHeader").click(function(){
        // get current active
        var current = $(this).siblings(".faqText");
        var currentIcon = $(this).find(".faqIcon");
        
        // remove old active
        $(".faqText").not(current).removeClass("max-h-screen oveflow-y-auto");
        $(".faqIcon").not(currentIcon).removeClass("rotate-180");
        
        // add new active
        $(current).toggleClass("max-h-screen oveflow-y-auto");
        $(currentIcon).toggleClass("rotate-180");
    });
});

// footer drop down
$(document).ready(function(){
    $(".fdLink").click(function(){
        // get current active
        var current = $(this).siblings(".fdContent");
        var currentIcon = $(this).find(".fdIcon");
        
        // remove old active
        $(".fdContent").not(current).removeClass("max-h-screen oveflow-y-auto");
        $(".fdIcon").not(currentIcon).removeClass("rotate-180");
        
        // add new active
        $(current).toggleClass("max-h-screen oveflow-y-auto");
        $(currentIcon).toggleClass("rotate-180");
    });
});


// main menu script
$(document).ready(function(){
    $("#menuBtn").click(function(){
        $("#menu").toggleClass("menuActive");
        $("#menu li").toggleClass("liActive");
        $("#menuOpen").toggleClass("menuOpenActive");
        $("#menuClose").toggleClass("menuCloseActive");
    });
});

// active hero slider
$(document).ready(function(){
    $('.heroSlider.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
        }
    })
});



// ative testimonials slider
$(document).ready(function(){
    $('.testimonials.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
        }
    })
});


// main menu dropdown
$(document).ready(function(){
    $(".subMenuBtn").hover(
        function () {
            $(this).siblings(".subMenu").removeClass('hidden');
        }
    );
    $(".submenuContainer").mouseleave(function() {
        $(this).children(".subMenu").addClass('hidden');
    });
});