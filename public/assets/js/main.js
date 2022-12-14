$(document).ready(function () {

    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }

        warning_check_position()
    });

    function close_warning() {
        $(".warning").removeClass("active")
        localStorage.setItem("warning_closed", true)
    }

    function open_warning() {
        if (localStorage.getItem("warning_closed") !== 'true') {
            $(".warning").addClass("active")
            warning_check_position()
        }
    }

    function warning_check_position() {
        if ($(".scroll-up-btn").hasClass("show")) {
            $(".warning").addClass("scroll_show")
        } else {
            $(".warning").removeClass("scroll_show")
        }
    }

    setTimeout(() => {
        open_warning()
    }, 20000)

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
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


    $('.portfolio-content.owl-carousel').owlCarousel({
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    $('.cards_container_mobile.owl-carousel').owlCarousel({
        margin:10,
        dots: true,
        responsive:{
            0:{
                items:1,
            },
            520:{
                items:2,
            },
            800:{
                items:3,
            }
        }
    })

    document.querySelector('.toggle').ondblclick = function () {
        this.classList.toggle('active');
        document.querySelector('.navigation').classList.toggle('active')
    }

    $(".navigation").draggable();
    $(".navigation").mousedown(function () {
        $(".navigation").css('cursor', '-moz-grabbing')
    });

    $(".navigation").click(function () {
        open_warning()
    })


    $(".close_warning").click(function () {
        close_warning()
    })


    $(".navigation").dblclick(function () {
        close_warning()
    })

    $(".theme-color-menu .closeMenu, .navbar i").click(function (e) {
        $(".theme-color-menu").toggleClass("active")
    })

    $(".theme-color-menu li").click(function (e) {
        var target = $(this)[0]
        var color = target.getAttribute("class")
        color = color.split(" ")[0]
        $("body").attr("theme-color", `theme-color-${color.trim()}`)
        localStorage.setItem("theme-color", color)

        $(".theme-color-menu li").removeClass("active")
        target.classList.add("active")
    })

    var currTheme = localStorage.getItem("theme-mode")

    if (currTheme) {
        $("body").attr("theme-mode", `theme-mode-${currTheme}`)
    } else {
        $("body").attr("theme-mode", `theme-mode-light`)
    }

    $(".theme-color-menu .themes-toggle").click(function (e) {
        var target = $(this)[0]
        var currTheme = $("body").attr("theme-mode")
        var theme;
        if (currTheme == "theme-mode-light") {
            theme = 'dark'
            $("body").attr("theme-mode", "theme-mode-dark")
            target.setAttribute("theme-mode", "dark")
        } else {
            theme = 'light'
            $("body").attr("theme-mode", "theme-mode-light")
            target.setAttribute("theme-mode", "light")
        }
        localStorage.setItem("theme-mode", theme)

    })

    var currColor = localStorage.getItem("theme-color")
    if (currColor) {
        $("body").attr("theme-color", `theme-color-${currColor}`)
    } else {
        $("body").attr("theme-color", `theme-color-crimson`)
    }

    document.querySelectorAll(".theme-color-menu .colors-list li").forEach(function (item) {
        if (item.classList.contains(currColor)) {
            item.classList.add("active")
        }
    })

    function getLinkWhastapp(message) {
        message = window.encodeURIComponent(message)
        window.open(`https://wa.me/5521984238879?text=${message}`)
    }

    $("form").submit(function (e) {
        e.preventDefault()
        var form = e.currentTarget
        var name = form.name.value
        var email = form.email.value
        var subject = form.subject.value
        var text = form.text.value
        var message = `
        *${subject}*

Nome: ${name.trim()}
Email: ${email.trim()}

${text}
        `
        getLinkWhastapp(message)
    })

    document.querySelector(".img_play_container img").addEventListener("error", function (e) {
        e.target.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcT0gfUfQFnyI5p8HCnWSbLHQhmy_cO80TxudY7E4ZtfoqI93Ky2Dx6FDvjoICrsBAj8&usqp=CAU")
    })
});