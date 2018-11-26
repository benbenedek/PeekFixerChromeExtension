setTimeout(function onLoad() {
    if (typeof $ != 'undefined') {

      console.log("Peek Fixer Monitor")

      // ----======= Updating Dashboard Page =======----

      // Clicking 'View all activities' link
      if ($(".js-link:contains('View all activities')").length > 0) {
          $(".js-link:contains('View all activities')")[0].click();
      }

      // Hiding 'View activities with bookings' and 'View all activities' link
      $(".js-link:contains('View all activities')").hide();
      $(".js-link:contains('View activities with bookings')").hide();


      // ----======= Booking Options in Booking Wizard =======----

      // Clicking 'Customer Questions' link
      if ($(".js-link:contains('Customer Questions')").length > 0) {
          $(".js-link:contains('Customer Questions')")[0].click();
      }
      $(".js-link:contains('Customer Questions')").hide();

      // Hiding 'Edit Price' link
      $(".js-link:contains('Edit Price')").hide();

      // Hiding 'Pay Later', 'Voucher' & 'Other' payent options
      $(".button-group-item:contains('Pay Later')").hide();
      $(".button-group-item:contains('Voucher')").hide();
      $(".button-group-item:contains('Other')").hide();

      // Block past dates - TODO
      //var date = new Date(); // get local date
      //var today = date.getDate();
      //for (i = 1; i < today; ++i) {
          //$(".:contains('" + i + "')").hide(); // remove link
      //}
  }

  setTimeout(onLoad, 1000);
}, 1000);