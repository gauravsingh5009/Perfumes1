$(function(){

  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn();
      } else {
        $('.back-to-top').fadeOut();
      }
    });

      // Open when click on select
      $('#openModal').click(function() {
        $('#myModal').fadeIn();  
      });
    
      // Close the button
      $('#closeModal').click(function() {
        $('#myModal').fadeOut();  
      });

      // Open New Address 
      $('#addNewAddress').click(function() {
        $('#myModal').fadeOut();
        $('#newAddress').fadeIn();  
      });
    
      // BackButton
      $('#backBtn').click(function() {
        $('#newAddress').fadeOut();
      });

      // Search Location Manually
      $('#selectManualArea').click(function() {
        $('#newAddress').fadeOut();
        $('#SearchLocation').fadeIn();
      });

      // Close Secrch Location
      $('#closeSearchLocation').click(function() {
        $('#SearchLocation').fadeOut();
      });

      // Detail Address
      $('.selectLocalities').click(function() {
        $('#SearchLocation').fadeOut();
        $('#fullAddress').fadeIn();
      });

      // Close Detail Button
      $('#closeDetailsBtn').click(function() {
        $('#fullAddress').fadeOut();
      });

      // Apply Coupon
      $('#moreOffers').click(function() {
        $('#coupon').fadeIn();
      });
      // close button
      $('#circleBackBtn').click(function() {
        $('#coupon').fadeOut();
      });
});