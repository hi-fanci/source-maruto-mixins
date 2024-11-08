;
(function () {
    const html = $('html');
    const opts = {
        _loading: false,
        _loading_timing: 2000,
    }
    const fadeInSection = () => {
        $('.js_inview').on('inview', function (event, isInView) {
            if (isInView) {
                let _this = $(this);
                _this.addClass('is_show');
            } else {
                // element has gone out of viewport
            }
        });
    }
    // loading
    const LoadingInit = () => {
        $(window).on('load', function () {
            if (html.hasClass('is_loading')) {
                html.removeClass('is_loading');
                setTimeout(function () {
                    fadeInSection();
                    opts._loading = true;
                }, opts._loading_timing);
            } else {
                fadeInSection();
            }
        })
    };
    LoadingInit();


})();