setTimeout(function onLoad() {
    if (typeof $ != 'undefined') {
        if ($(".js-link:contains('View all activities')").length > 0) {
            $(".js-link:contains('View all activities')")[0].click();
        }
        $(".js-link:contains('View activities with bookings')").hide();
    }

    setTimeout(onLoad, 1000);
}, 1000);
