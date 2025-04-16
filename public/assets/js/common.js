;
(function () {
    const html = $('html');
    const body = $('body');
    const wrapper = $('.wrapper');
    const main = $('.main');
    const opts = {
        _prev_pos: 0,
        _html_height: body.innerHeight(),
        _is_show: "is_show",
        _is_active: "is_active",
        _is_fixed: "is_fixed",
        _is_footer: "is_footer",
    }

    // helper
    const HelperHTMLAnimate = (e = 0, t = 800) => {
        let _offset_top = 0;
        if (window.innerWidth < 768) {
            _offset_top = 0;
        }
        let _pos = e - _offset_top;
        if (_pos < 0) {
            _pos = 0;
        }
        html.animate({
            scrollTop: _pos
        }, t);
    }

    const HelperHTMLNoneScroll = (e = 1) => {
        if (e) {
            // scroll
            
            body.css({
                position: ''
            });
            html.css({
                height: ''
            });
            html.animate({
                scrollTop: opts._prev_pos
            }, 0);
            setTimeout(() => {
                main.css({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                });
            }, 60);
            setTimeout(() => {
                body.css({
                    height: ''
                });
                wrapper.css({
                    height: ''
                });
                main.css({
                    position: '',    height: '',
                });
            }, 120);
        } else {
            // none
            opts._prev_pos = window.scrollY;
            opts._html_height = body.innerHeight();

            html.css({
                height: window.innerHeight
            });
            body.css({
                position: 'fixed',
                height: window.innerHeight
            });
            wrapper.css({
                height: opts._html_height,
            });
            main.css({
                position: 'fixed',
                top: -opts._prev_pos,
                left: 0,
            });
        }
    }
    $('.abc').on('click', function(){
        const check = $(this).hasClass('a');
        console.log('asd')
        if (check){
            $(this).removeClass('a');
        } else {
            $(this).addClass('a');
        }
        HelperHTMLNoneScroll(check);
    })

    // loading
    const LoadingInit = () => {
        const handleInview = () => {
            const js_inview = $('.js_inview');
            js_inview.on('inview', function (event, isInView) {
                if (isInView) {
                    $(this).addClass('is_show');
                }
            });
        }
        $(window).on('load', function () {
            if (html.hasClass('is_loading')) {
                html.removeClass('is_loading');
                setTimeout(function () {
                    handleInview();
                }, 2000);
            } else {
                handleInview();
            }
        })
    };
    LoadingInit();


    //
    const PageInit = () => {
        const handleMenuState = (e = 1) => {
            if (e) {
                // close
                console.log('close');
            } else {
                // open
                console.log('open');
            }
        }
        const handleScrollTo = () => {
            const scroll_to = $('.scroll_to');
            if (scroll_to.length == 0) return;
            scroll_to.on('click', function () {
                const target_id = $(this).attr('href') || "";
                const target = $(target_id);

                if (target.length) {
                    const {
                        top
                    } = target.offset();
                    const data_close = $(this).attr('data-menu-hidden');
                    if (data_close == "1") {
                        // function for close menu
                        handleMenuState();
                    };

                    HelperHTMLAnimate(top);

                    return false;
                }
            });
        };
        handleScrollTo();

        
        // 
        let _mobile = 0;
        $(window).on('load resize', function () {
            const {
                innerWidth: ww
            } = window;
            if (ww < 768) {
                if (!_mobile) {
                    _mobile = 1;
                    // code reset on SP
                }
            } else {
                if (_mobile) {
                    _mobile = 0;
                    // code reset on PC
                }
            }
        });
    };
    PageInit();

    // 
    const ToTopInit = () => {
        const totop = $('.totop');
        if (totop.length == 0) return;
        totop.on('click', function () {
            HelperHTMLAnimate();
        });
        $(window).on('load scroll', function () {
            const {
                scrollY: y
            } = window;
            if (y > 100) {
                totop.addClass(opts._is_show);
            } else {
                totop.removeClass(opts._is_show);
            }
        });
    };
    ToTopInit();
})();