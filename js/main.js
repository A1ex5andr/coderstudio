$(document).ready(function() {

    //hide adv icons
    function hideIt(){
        $('.adv-item').css('opacity', 0);
        $('.adv-item').css('right', '-300px');
    }
    hideIt();

    // responsive navigation
    var nav = responsiveNav(".nav-collapse", { // Selector
        animate: true, // Boolean: Use CSS3 transitions, true or false
        transition: 284, // Integer: Speed of the transition, in milliseconds
        label: "Menu", // String: Label for the navigation toggle
        insert: "before", // String: Insert the toggle before or after the navigation
        customToggle: "", // Selector: Specify the ID of a custom toggle
        closeOnNavClick: false, // Boolean: Close the navigation when one of the links are clicked
        openPos: "relative", // String: Position of the opened nav, relative or static
        navClass: "nav-collapse", // String: Default CSS class. If changed, you need to edit the CSS too!
        navActiveClass: "js-nav-active", // String: Class that is added to  element when nav is active
        jsClass: "js", // String: 'JS enabled' class which is added to  element
        init: function() {}, // Function: Init callback
        open: function() {}, // Function: Open callback
        close: function() {} // Function: Close callback
    });

    //show portfolio details
    $('.doneHover').click(function() {
        var itemId = $(this).attr('id');
        console.log(itemId);
        $('body, html').css('overflow', 'hidden');
        $('.show').find('.' + itemId).find('img').attr('src', 'img/done/'+itemId+'.jpg');
        $('.show').find('.' + itemId).fadeIn(300, 'swing');

    });

    //hide portfolio details
    $('.show-item .close').click(function() {
        $('.show-item').fadeOut(300, 'swing');
        $('body, html').css('overflow-x', 'visible');
    });


    // equal height for items blocks
    $(function() {
        $('.know-item').matchHeight();
    });

});

$(window).load(function() {

    // show hidden
    $('.adv-html5').animate({
        opacity: 1,
        right: "+=300"
    }, 500, function() {
        $('.adv-css3').animate({
            opacity: 1,
            right: "+=300"
        }, 500, function() {
            $('.adv-javascript').animate({
                opacity: 1,
                right: "+=300"
            }, 500, function() {
                $('.adv-wordpress').animate({
                    opacity: 1,
                    right: "+=300"
                }, 500, function() {
                    $('.adv-php').animate({
                        opacity: 1,
                        right: "+=300"
                    }, 500, function() {
                        $('.adv-mysql').animate({
                            opacity: 1,
                            right: "+=300"
                        }, 500, function() {
                            $('.slogan h1').animate({
                               color: '#ffffff'
                            }, 500, function() {
                                $('.slogan h2').animate({
                                    color: "#000000"
                                }, 500);
                            });
                        });
                    });
                });
            });
        });
    });

})



// smooth anchor scroll
function currentYPosition() {
    if (self.pageYOffset)
        return self.pageYOffset;
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    if (document.body.scrollTop)
        return document.body.scrollTop;
    return 0;
}

function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    }
    return y;
}

function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY);
        return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for (var i = startY; i < stopY; i += step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY += step;
            if (leapY > stopY) leapY = stopY;
            timer++;
        }
        return;
    }
    for (var i = startY; i > stopY; i -= step) {
        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
        leapY -= step;
        if (leapY < stopY) leapY = stopY;
        timer++;
    }
}

