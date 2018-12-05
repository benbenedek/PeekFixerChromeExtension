setTimeout(function onLoad() {

    if (typeof $ != 'undefined') {


      // -------------------------    Monitoring Peek Pro Booking Dashboard    -------------------------


      // Making sure all activities are visible to the user
      if (!$(".pika-lendar").is(":visible")) {

        // Only if the date picker is not in use, click 'View all activities'.
        // this check is in place in order to make sure we don't interrupt the
        // user's interaction with the date pickers.

        var showAllJsLink = $(".js-link:contains('View all activities')");
        var showAllToggle = $(".split-tab-toggle:contains('View all activities')");
        if (showAllJsLink.length > 0) {
            showAllJsLink[0].click();
            showAllJsLink.hide();
        }
        if (showAllToggle.length > 0) {
            showAllToggle[0].click();
            showAllToggle.hide();
        }
      }
 

      // --------------------------    Monitoring Peek Pro Booking Wizard    ---------------------------


      // Prevent user errors by blocking availability of past dates
      if ($(".pro-form-label:contains('Date / Time')").is(":visible")) {
        var date = new Date();
        var today = date.getDate();
        for (i = 1; i < today; ++i) {
          $(".ember-view.availability-calendar-day.in-month.is-not-today.is-available.is-not-selected:contains('" + i + "')").contents().unwrap();;
        }
      }

      if ($(".pk-1-2:contains('Mx$')").is(":visible")) {
      // Making sure the prices has updated (prevent 0 price bug)
        
        // Blocking 'Edit Price' option
        if ($(".js-link:contains('Edit Price')").is(":visible")) {
          $(".js-link:contains('Edit Price')").hide();
        }

        // Blocking 'Pay Later' option
        if ($(".button-group-item:contains('Pay Now In Full')").is(":visible")) {
          var payNowInFull = $(".button-group-item:contains('Pay Now In Full')");
          if (payNowInFull.length > 0) {
                payNowInFull[0].click();
                payNowInFull.text('POR FAVOR ASEGURA QUE RECIBISTE EL PAGO ANTES DE HACER CLICK EN \'Save Booking\'');
          }

        }
        if ($(".button-group-item:contains('Pay Later')").is(":visible")) {
          $(".button-group-item:contains('Pay Later')").hide();
        }

        // Making sure 'Cash' is clicked
        if ($(".button-group-item:contains('Cash')").is(":visible")) {
          $(".button-group-item:contains('Cash')").click();

          // Hiding payment options only after 'Cash' is clicked
          if ($(".ember-view.pro-button-group.pro-button-group-block:contains('Credit Card')").is(":visible")) {
            $(".ember-view.pro-button-group.pro-button-group-block:contains('Credit Card')").hide();
          }
        }
        
        // Hiding other irrelevant information
        if ($(".secondary-button.button-block:contains('Add Another Product')").is(":visible")) {
          $(".secondary-button.button-block:contains('Add Another Product')").hide();
        }
        if ($(".form-section-header:contains('Enter Payment Information')").is(":visible")) {
          $(".form-section-header:contains('Enter Payment Information')").hide();
        }
        if ($(".margin-md-bottom:contains('Change Due:')").is(":visible")) {
          $(".margin-md-bottom:contains('Change Due:')").hide();
        }

      }


      // -----------------------------------------------------------------------------------------------

  }

  setTimeout(onLoad, 500);
}, 500);