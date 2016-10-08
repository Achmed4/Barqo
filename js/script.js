(function() {

    //Navbar on Mobile
    $('nav .container button').on('click', function() {
        $('nav .container > .links').toggleClass('toggle');
    });

    //Trigger Owl-Slider
    $(".owl-carousel").owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'zoomIn',
        items: 1,
        loop: true,
        dots: true,
        dotsData: true,
        nav: true,
        navText: ['<i class="angle left icon"></i>', '<i class="angle right icon"></i>'],
        autoplay: true,
        smartSpeed:450,
    });

    //Back To Top Button
    $(window).scroll(function() {
        if($(window).scrollTop() >= 350) {
            $('.top').addClass('on');
        } else {
            $('.top').removeClass('on');
        }
    });

    $('.top').on('click', function() {
        $('html, body').animate({scrollTop : 0}, 1000);
    });

    //Form validation
    $('.ui.form').form({
        inline : true,
        on: 'blur',
        fields: {
            name: {
                identifier: 'name',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Please enter your name'
                    }
                ]
            },
            email: {
                identifier: 'email',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Please enter a valid e-mail'
                    }
                ]
            },
            password: {
                identifier: 'password',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Please enter a password'
                    },
                    {
                        type   : 'minLength[6]',
                        prompt : 'Your password must be at least {ruleValue} characters'
                    }
                ]
            },
            checkbox: {
                identifier: 'checkbox',
                rules: [
                    {
                        type   : 'checked',
                        prompt : 'Please check the checkbox'
                    }
                ]
            },
            maxLength: {
                identifier  : 'maxLength',
                rules: [
                    {
                        type   : 'maxLength[300]',
                        prompt : 'Please enter at most 300 characters'
                    }
                ]
            },
        }
    });


}());
