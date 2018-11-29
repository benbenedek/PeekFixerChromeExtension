setTimeout(function onLoad() {
    if (typeof $ != 'undefined') {

      // ----======= Updating Dashboard Page =======----

      // Clicking 'View all activities' link
      var viewAllActivitiesLink = $(".js-link:contains('View all activities')");
      if (viewAllActivitiesLink.length > 0) {
          viewAllActivitiesLink[0].click();
      }

      // Hiding 'View activities with bookings' and 'View all activities' link
      viewAllActivitiesLink.hide();
      $(".js-link:contains('View activities with bookings')").hide();


      // ----======= Booking Options in Booking Wizard =======----

      // Clicking and hiding 'Customer Questions' link
      var customerQuestionsLink = $(".js-link:contains('Customer Questions')");
      if (customerQuestionsLink.length > 0) {
          //customerQuestionsLink[0].click(); // TODO: do only once!
      }
      customerQuestionsLink.hide();

      // Clicking 'Pay Now In Full' & Cash
      var payNowInFull = $(".button-group-item:contains('Pay Now In Full')");
      payNowInFull.click();
      $(".button-group-item:contains('Cash')").click();

      // Hiding irrelevant payment options
      $(".js-link:contains('Edit Price')").hide();
      payNowInFull.hide();
      $(".button-group-item:contains('Credit Card')").hide();
      $(".button-group-item:contains('Pay Later')").hide();
      $(".button-group-item:contains('Voucher')").hide();
      $(".button-group-item:contains('Other')").hide();

      // TODO: Block past dates
      //var date = new Date(); // get local date
      //var today = date.getDate();
      //for (i = 1; i < today; ++i) {
          //$(".:contains('" + i + "')").hide(); // remove link
      //}
  }

  setTimeout(onLoad, 1000);
}, 1000);