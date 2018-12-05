setTimeout(function onLoad() {

    // Monitoring Peek Pro Booking Wizard
    if (typeof $ != 'undefined') {

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
 

      // Remove irrelevant options from dashboard to prevent confusion
      $(".secondary-button.button-block:contains('Add Another Product')").hide();
      $(".form-section-header:contains('Enter Payment Information')").hide();
      $(".margin-md-bottom:contains('Change Due:')").hide();


      // Prevent user errors by blocking availability of past dates
      var date = new Date();
      var today = date.getDate();
      for (i = 1; i < today; ++i) {
        $(".ember-view.availability-calendar-day.in-month.is-not-today.is-available.is-not-selected:contains('" + i + "')").contents().unwrap();;
      }


      // Protecting customers and users by enabling only payment with cash
      var payNowInFull = $(".button-group-item:contains('Pay Now In Full')");
      if (payNowInFull.length > 0) {
            payNowInFull[0].click();
            payNowInFull.text('POR FAVOR ASEGURA QUE RECIBISTE EL PAGO ANTES DE HACER CLICK EN \'Save Booking\'');
      }
      $(".button-group-item:contains('Cash')").click();
      $(".js-link:contains('Edit Price')").hide();
      $(".button-group-item:contains('Pay Later')").hide();
      $(".ember-view.pro-button-group.pro-button-group-block:contains('Credit Card')").hide();
  }

  setTimeout(onLoad, 1000);
}, 1000);