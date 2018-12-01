setTimeout(function onLoad() {
    if (typeof $ != 'undefined') {


      // ----============== Updating Dashboard Page ==============----



      // Clicking 'View all activities' link
      var viewAllActivitiesLink = $(".js-link:contains('View all activities')");
      if (viewAllActivitiesLink.length > 0) {
          viewAllActivitiesLink[0].click();
      }

      // Hiding 'View activities with bookings' and 'View all activities' link
      viewAllActivitiesLink.hide();
      $(".js-link:contains('View activities with bookings')").hide();



      // ----============== Updating Booking Wizard ===============----



      // Hide 'Add Another Product' button
      $(".secondary-button.button-block:contains('Add Another Product')").hide();

      // Hide 'Change Due' Section
      $(".form-section-header:contains('Enter Payment Information')").hide();
      $(".margin-md-bottom:contains('Change Due:')").hide();

      // Block past dates
      var date = new Date(); // get local date
      var today = date.getDate();
      for (i = 1; i < today; ++i) {
        $(".ember-view.availability-calendar-day.in-month.is-not-today.is-available.is-not-selected:contains('" + i + "')").contents().unwrap();;
      }

      // Clicking and hiding 'Customer Questions' link
      var customerQuestionsLink = $(".js-link:contains('Customer Questions')");
      /* TODO: do only once!
      if (customerQuestionsLink.length > 0) {
          //customerQuestionsLink[0].click();
      }
      */
      customerQuestionsLink.hide();

      // Clicking 'Pay Now In Full' & Cash
      var payNowInFull = $(".button-group-item:contains('Pay Now In Full')");
      payNowInFull.click();
      $(".button-group-item:contains('Cash')").click();

      // Writing Payment Instructions
      payNowInFull.text('POR FAVOR ASEGURA QUE RECIBISTE EL PAGO ANTES DE HACER CLICK EN \'Save Booking\'');

      // Hide irrelevant payment options
      $(".js-link:contains('Edit Price')").hide();
      $(".button-group-item:contains('Pay Later')").hide();
      $(".ember-view.pro-button-group.pro-button-group-block:contains('Credit Card')").hide();
  }

  setTimeout(onLoad, 500);
}, 500);