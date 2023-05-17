/**
 * File main.js.
 *
 * Theme main script.
 *
 * Contains all theme custom features.
 */
var bundle;
(function ($) {
    bundle = {
        init: function () {
            this.slider();
            this.gallery();
        },
        ie: function () {
            try {
                if (
                    /MSIE (\d+\.\d+);/.test(navigator.userAgent) ||
                    !!navigator.userAgent.match(/Trident.*rv\:11\./)
                ) {
                    $("body").addClass("ie-user");
                    return true;
                }
            } catch (err) {
                console.log(err);
            }
            return false;
        },
        slider: function () {
            // slider-col-1
            $(".slider-col-1").slick({
                dots: true,
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
            });
        },
        gallery: function () {
            try {
                $(".fancybox").fancybox({
                    openEffect: "none",
                    closeEffect: "none",
                });
            } catch (err) {
                console.log(err);
            }
            try {
                var fix = function () {
                    var t = $(".woocommerce-product-gallery__trigger"),
                        h = t.next(".flex-viewport").outerHeight() - 16;
                    t.height(h);
                };
                $(window).bind("load resize", fix);
                $(".woocommerce-product-gallery .flex-control-nav li").on(
                    "click",
                    function () {
                        setTimeout(fix, 500);
                    }
                );
            } catch (err) {
                console.log(err);
            }
        },
    };
})(jQuery);
