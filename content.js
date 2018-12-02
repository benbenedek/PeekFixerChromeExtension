setTimeout(function onLoad() {
    if (typeof $ != 'undefined') {

      // Making sure all activities are visible to the user
      var viewAllActivitiesLink = $(".split-tab-toggle:contains('View all activities')");
      if (viewAllActivitiesLink.length > 0) {
          viewAllActivitiesLink[0].click();
      }
      
      // Remove irrelevant options from dashboard to prevent confusion
      viewAllActivitiesLink.hide();
      $(".js-link:contains('View activities with bookings')").hide();
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
      payNowInFull.click();
      $(".button-group-item:contains('Cash')").click();
      payNowInFull.text('POR FAVOR ASEGURA QUE RECIBISTE EL PAGO ANTES DE HACER CLICK EN \'Save Booking\'');
      $(".js-link:contains('Edit Price')").hide();
      $(".button-group-item:contains('Pay Later')").hide();
      $(".ember-view.pro-button-group.pro-button-group-block:contains('Credit Card')").hide();
  }

  setTimeout(onLoad, 500);
}, 500);