$(document).ready(function(){

    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Designer", "Desenvolvedor Web", "Programador", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Designer", "Desenvolvedor Web", "Programador", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    document.querySelector('.toggle').ondblclick = function(){
        this.classList.toggle('active');
        document.querySelector('.navigation').classList.toggle('active')
    }
    
    $( ".navigation" ).draggable();
    $( ".navigation" ).mousedown(function(){
        $( ".navigation" ).css('cursor', '-moz-grabbing')
    });


    $(".theme-color-menu .closeMenu, .navbar i").click(function(e){
        $(".theme-color-menu").toggleClass("active")
    })

    $(".theme-color-menu li").click(function(e){
        var target = $(this)[0]
        var color = target.getAttribute("class")

        $("body").attr("theme-color", `theme-color-${color.trim()}`)
        localStorage.setItem("theme-color", color)

        $(".theme-color-menu li").removeClass("active")
        target.classList.add("active")
    })

    var currTheme = localStorage.getItem("theme-mode")

    if(currTheme){
        $("body").attr("theme-mode", `theme-mode-${currTheme}`)
    }else{
        $("body").attr("theme-mode", `theme-mode-light`)
    }

    $(".theme-color-menu .themes-toggle").click(function(e){
        var target = $(this)[0]
        var currTheme = $("body").attr("theme-mode")
        var theme;
        if(currTheme === "theme-mode-light"){
            theme = 'dark'
            $("body").attr("theme-mode", "theme-mode-dark")
            target.setAttribute("theme-mode", "dark")
        }else{
            theme = 'light'
            $("body").attr("theme-mode", "theme-mode-light")
            target.setAttribute("theme-mode", "light")
        }
        console.log(theme, localStorage.getItem("theme-mode"))
    })

    var currColor = localStorage.getItem("theme-color")
    if(currColor){
        $("body").attr("theme-color", `theme-color-${currColor}`)
    }else{
        $("body").attr("theme-color", `theme-color-crimson`)
    }

    document.querySelectorAll(".theme-color-menu .colors-list li").forEach(function(item){
        if(item.classList.contains(currColor)){
            item.classList.add("active")
        }
    })
});