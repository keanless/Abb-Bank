$(() => {
    /* Language Dropdown Menu */
    let open = false;
    $("#lang-button").on("click", () => {
        if (open) {
            $("#lang-icon").addClass("fa fa-angle-down").removeClass("open");
            $("#lang-content").css({
                display: "none",
            });
        } else {
            $("#lang-icon").addClass("fa fa-angle-down open");
            $("#lang-content").css({
                display: "block",
            });
        }
        open = !open;
    });


    /* Search Button */
    let openSearch = true;
    $("#navbar-search").on("click", () => {
        if (openSearch) {
            $("#search-bar-section").fadeIn("fast");
            $("#search-span").css({
                color: "#0056c1",
            });
            $(".bi-search").css({
                color: "#0056c1"
            })

        } else {
            $("#search-span").css({
                color: "#666",
            });
            $(".bi-search").css({
                color: "#666"
            })
            $("#search-bar-section").fadeOut();

        }
        openSearch = !openSearch
    })



    let openSearchMobile = true;
    $(".navbar-mobile-search").on("click", () => {
        if (openSearchMobile) {
            $(".search-bar-section").fadeIn("fast");

            $("#search-span").css({
                color: "#0056c1",
            });
            $(".bi-search").css({
                color: "#0056c1"
            })
            console.log("sa");
        } else {
            $("#search-span").css({
                color: "#666",
            });
            $(".bi-search").css({
                color: "#666"
            })
            $(".search-bar-section").fadeOut();

        }
        openSearchMobile = !openSearchMobile
    })
    $(".search-bar-icon").on("click", () => {
        $(".search-bar-section").fadeOut(100);
        $("#search-span").css({
            color: "#666",
        });
        $(".bi-search").css({
            color: "#666"
        })
    });

    $(".search-bar-icon").on("click", () => {
        $("#search-bar-section").fadeOut(100);
        $("#search-span").css({
            color: "#666",
        });
        $(".bi-search").css({
            color: "#666"
        })
    });



    /* Navbar Hover */

    $("#nav-credits").hover(
        () => {
            $("#nav-credits-hover").stop().show();
            $(".slider").addClass("slider-z-index");
        },
        () => {
            $(".slider").removeClass("slider-z-index");
            $("#nav-credits-hover").stop().hide();
        }
    );
    $("#nav-emanets").hover(
        () => {
            $("#nav-emanets div").stop().show();
            $(".slider").addClass("slider-z-index");

        },
        () => {
            $(".slider").removeClass("slider-z-index");
            $("#nav-emanets div").stop().hide();
        }
    );

    $("#nav-cards").hover(
        () => {
            $(".slider").addClass("slider-z-index");
            $("#nav-cards div").stop().show();
        },
        () => {
            $(".slider").removeClass("slider-z-index");
            $("#nav-cards div").stop().hide();
        }
    );
    $("#nav-transactions").hover(
        () => {
            $(".slider").addClass("slider-z-index");
            $("#nav-transactions div").stop().show();
        },
        () => {
            $(".slider").removeClass("slider-z-index");
            $("#nav-transactions div").stop().hide();
        }
    );
    $("#nav-current-acc").hover(
        () => {
            $(".slider").addClass("slider-z-index");
            $("#nav-current-acc div").stop().show();
        },
        () => {
            $(".slider").removeClass("slider-z-index");
            $("#nav-current-acc div").stop().hide();
        }
    );
    $("#nav-electron-services").hover(
        () => {
            $(".slider").addClass("slider-z-index");
            $("#nav-electron-services div").stop().show();
        },
        () => {
            $(".slider").removeClass("slider-z-index");
            $("#nav-electron-services div").stop().hide();
        }
    );
    $("#nav-bank-24-7").hover(
        () => {
            $(".slider").addClass("slider-z-index");
            $("#nav-bank-24-7 div").stop().show();
        },
        () => {
            $(".slider").removeClass("slider-z-index");
            $("#nav-bank-24-7 div").stop().hide();
        }
    );


    $(".nav-credits-icon").bind("click", function (e) {
        $("#nav-credits-hover").stop().hide();
        $("#nav-bank-24-7 div").stop().hide();
        $("#nav-emanets div").stop().hide();
        $("#nav-cards div").stop().hide();
        $("#nav-transactions div").stop().hide();
        $("#nav-current-acc div").stop().hide();
        $("#nav-electron-services div").stop().hide();
        $("#nav-bank-24-7 div").stop().hide();
    });

    /* Window Scroll top navbar disappear */
    window.onscroll = () => {
        if (
            document.body.scrollTop >= 30 ||
            document.documentElement.scrollTop >= 30
        ) {
            $(".navbar-top-bg").slideUp("0.5s");
        } else {
            $(".navbar-top-bg").slideDown("0.5s");
        }
    };
});


/* Convertor */
$("#sell").on("change input", function () {
    $("#buy").val(
        (($("#sell").val()) * 1.6970).toFixed(4)
    )
});



/* Swiper slider */


var swiper = new Swiper(".mySwiper", {
    speed: 500,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        type: 'bullets',
        clickable: true,
    },
    autoplay: {
        delay: 5000
    }
});

/* Accordion */
$(() => {
    $("#btn-acc-credits").on("click", function (e) {
        $("#credits-acc-open").slideToggle(500)
        $(".ac-panel:not(#credits-acc-open").slideUp(500)
    });
    $("#btn-acc-emanets").on("click", function () {
        $("#emanets-acc-open").slideToggle()
        $(".ac-panel:not(#emanets-acc-open").slideUp()
    });
    $("#btn-acc-cards").on("click", function () {
        $("#cards-acc-open").slideToggle()
        $(".ac-panel:not(#cards-acc-open").slideUp()
    });
    $("#btn-acc-money").on("click", function () {
        $("#money-acc-open").slideToggle()
        $(".ac-panel:not(#money-acc-open").slideUp()
    });
    $("#btn-acc-current").on("click", function () {
        $("#current-acc-open").slideToggle()
        $(".ac-panel:not(#current-acc-open").slideUp()
    });
    $("#btn-acc-electron").on("click", function () {
        $("#electron-acc-open").slideToggle()
        $(".ac-panel:not(#electron-acc-open").slideUp()
    });
    $("#btn-acc-bank").on("click", function () {
        $("#bank-acc-open").slideToggle()
        $(".ac-panel:not(#bank-acc-open").slideUp()
    });

});


/* Annuty Calculator */
let $moneyValue = $("#range-slider-money")
let $monthValue = $("#range-slider-month")
let $percentValue = $("#range-slider-percent")

function calculateAnnuity(month = 6, interest = 14, amount = 5000) {
    const i = interest / 100 / 12;
    let pow = i + 1;
    const n = month;
    pow = Math.pow(pow, -n);
    const annuity = (i / (1 - pow)) * amount;
    return annuity;
}
calculateAnnuity()
/* Range Slider */

$('input[type="range"]').rangeslider({
    polyfill: false
});

$('#range-slider-money').on('change input', function () {
    let annuityValue = calculateAnnuity($monthValue.val(), $percentValue.val(), $moneyValue.val())
    $('#money-inp').val($(this).val());
    $(".monthly-payment").text(annuityValue.toFixed(2))
    $(".total-payment").text(((annuityValue.toFixed(2)) * +$monthValue.val()).toFixed(2))
});
$('#range-slider-month').on('change input', function () {
    let annuityValue = calculateAnnuity($monthValue.val(), $percentValue.val(), $moneyValue.val())
    $('#month-inp').val($(this).val());
    $(".monthly-payment").text(annuityValue.toFixed(2))
    $(".total-payment").text(((annuityValue.toFixed(2)) * +$monthValue.val()).toFixed(2))
});
$('#range-slider-percent').on('change input', function () {
    let annuityValue = calculateAnnuity($monthValue.val(), $percentValue.val(), $moneyValue.val())
    $('#percent-inp').val($(this).val());
    $(".monthly-payment").text(annuityValue.toFixed(2))
    $(".total-payment").text(((annuityValue.toFixed(2)) * +$monthValue.val()).toFixed(2))
});
let selector = '[data-rangeslider-money]';
$('#money-inp').on('change input', function (e) {
    let $inputRange = $(selector, e.target.parentNode);
    let value = $('#money-inp', e.target.parentNode)[0].value;
    $($inputRange).val(value).change();
    if (value == "") {
        $("#range-slider-money").val(0).change()
        $("#money-inp").val(0)
    }
});
var selectorMoney = '[data-rangeslider-month]';
$('#month-inp').on('change input', function (e) {
    var $inputRange = $(selectorMoney, e.target.parentNode);
    var value = $('input[type="number"]', e.target.parentNode)[0].value;
    $($inputRange).val(value).change();
    if (value == "") {
        $("#range-slider-month").val(0).change()
        $("#month-inp").val(0)
    }
});
var selectorPercent = '[data-rangeslider-percent]';
$('#percent-inp').on('change input', function (e) {
    var $inputRange = $(selectorPercent, e.target.parentNode);
    var value = $('#percent-inp', e.target.parentNode)[0].value;
    $($inputRange).val(value).change();
    console.log(value);
    if ((value >= 1 && value < 14) || value == "") {
        $("#range-slider-percent").val(0).change()
        $("#percent-inp").val(value)
    }
});

let openHam = true;
$("#hamburger-btn").on("click", () => {
    if (openHam) {

        $("#hamburger-btn").addClass("is-active")
        $(".navbar-section-mobile").addClass("navbar-section-mobile-active")
        $(".navbar-hamburger-menu").addClass("navbar-hamburger-menu-active")
        $("body").css({
            "overflow": "hidden"
        })
    } else {
        $("#hamburger-btn").removeClass("is-active")
        $("body").css({
            "overflow": "auto"
        })

        $(".navbar-section-mobile").removeClass("navbar-section-mobile-active")
        $(".navbar-hamburger-menu").removeClass("navbar-hamburger-menu-active")

    }
    openHam = !openHam;

});


/* Footer lang */
let openFooter = false;
$("#footer-lang-button").on("click", () => {
    if (openFooter) {
        $("#footer-lang-icon").addClass("fa fa-angle-down").removeClass("open");
        $("#footer-lang-content").css({
            display: "none",
        });
    } else {
        $("#footer-lang-icon").addClass("fa fa-angle-down open");
        $("#footer-lang-content").css({
            display: "block",
        });
    }
    openFooter = !openFooter;
});


var swiper = new Swiper(".swiper-mobile", {
    pagination: {
        el: ".swiper-pagination-mobile"
    }
});