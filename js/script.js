$(function () {
    'use strict';

    // Pre Loader start
    $(window).load(function () {
        $('.pre_loader').delay(1500).fadeOut(1000);
    });

    
    
    //Marquee start

    $('.marquee').marquee({

        // Set to false if you want to use jQuery animate method
        allowCss3Support: true,

        // CSS3 easing function
        css3easing: 'linear',

        // Requires jQuery easing plugin.
        easing: 'linear',

        // Time to wait before starting the animation
        delayBeforeStart: 100,

        // 'left', 'right', 'up' or 'down'
        direction: 'left',

        // Should the marquee be duplicated to show an effect of continues flow
        duplicated: true,

        // Duration of the animation
        duration: 15000,

        // Space in pixels between the tickers
        gap: 0,

        // On cycle pause the marquee
        pauseOnCycle: false,

        // Pause on hover
        pauseOnHover: true,

        // The marquee is visible initially positioned next to the border towards it will be moving
        startVisible: false

    });


});
