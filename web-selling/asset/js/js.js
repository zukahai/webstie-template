jQuery(function () {
    var d = function () {};
    jQuery(document).delegate(".b-ball_bounce", "mouseenter", function () {
        b(this);
        m(this)
    }).delegate(".b-ball_bounce .b-ball__right", "mouseenter", function (i) {
        i.stopPropagation();
        b(this);
        m(this)
    });

    var g = 36;

    function b(n) {
        if (n.className.indexOf("b-ball__right") > -1) {
            n = n.parentNode
        }
        var i = /b-ball_n(\d+)/.exec(n.className);
        var j = /b-head-decor__inner_n(\d+)/.exec(n.parentNode.className);
        if (i && j) {
            i = parseInt(i[1], 10) - 1;
            j = parseInt(j[1], 10) - 1;
            d((i + j * 9) % g)
        }
    }
    function m(j) {
        var i = jQuery(j);
        if (j.className.indexOf(" bounce") > -1) {
            return
        }
        i.addClass("bounce");

        function n() {
            i.removeClass("bounce").addClass("bounce1");

            function o() {
                i.removeClass("bounce1").addClass("bounce2");

                function p() {
                    i.removeClass("bounce2").addClass("bounce3");

                    function q() {
                        i.removeClass("bounce3")
                    }
                    setTimeout(q, 300)
                }
                setTimeout(p, 300)
            }
            setTimeout(o, 300)
        }
        setTimeout(n, 300)
    }
});
jQuery('a.page-scroll').bind('click', function(event) {
    var $anchor = jQuery(this);
    jQuery('html, body').stop().animate({
        scrollTop: (jQuery($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});