$(document).ready(function() {
  /**
   * Author: Heather Corey
   * jQuery Simple Parallax Plugin
   *
   */

  (function($) {
    $.fn.parallax = function(options) {
      var windowHeight = $(window).height();

      // Establish default settings
      var settings = $.extend(
        {
          speed: 0.15
        },
        options
      );

      // Iterate over each object in collection
      return this.each(function() {
        // Save a reference to the element
        var $this = $(this);

        // Set up Scroll Handler
        $(document).scroll(function() {
          var scrollTop = $(window).scrollTop();
          var offset = $this.offset().top;
          var height = $this.outerHeight();

          // Check if above or below viewport
          if (
            offset + height <= scrollTop ||
            offset >= scrollTop + windowHeight
          ) {
            return;
          }

          var yBgPosition = Math.round((offset - scrollTop) * settings.speed);

          // Apply the Y Background Position to Set the Parallax Effect
          $this.css('background-position', 'center ' + yBgPosition + 'px');
        });
      });
    };
  })(jQuery);

  //Loader
  $(window).load(function() {
    $('.loader-overlay').fadeOut('slow');
  });

  //Counter
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  $('a[data-rel^=lightcase]').lightcase();

  // Instantiate MixItUp
  $('.portfolio-items').mixItUp({
    animation: {
      duration: 300
    }
  });

  // Carousels
  $('.cl-client-carousel').owlCarousel({
    pagination: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    autoPlay: true
  });

  $('.cl-logo-carousel').owlCarousel({
    items: 6,
    itemsDesktop: [1199, 5],
    itemsDesktopSmall: [979, 3],
    stopOnHover: true,
    autoPlay: 3000
  });

  $('.header-carousel').owlCarousel({
    pagination: true,
    navigation: true, // Show next and prev buttons
    slideSpeed: 500,
    paginationSpeed: 500,
    singleItem: true,
    autoPlay: true
  });

  // Parallax
  $('.parallax-section').parallax({
    speed: 0.1
  });

  // Header Changer on Scroll
  $(function() {
    //caches a jQuery object containing the header element
    var header = $('.header-home');
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 100) {
        header.removeClass('header-home').addClass('header-default');
      } else {
        header.removeClass('header-default').addClass('header-home');
      }
    });
  });

  // Navigation
  $('.nav-container').onePageNav({
    scrollSpeed: 600,
    currentClass: 'current',
    changeHash: true,
    filter: ':not(.external)'
  });

  //Header Class Change on Resize
  var $window = $(window);

  // Function to handle changes to style classes based on window width
  function checkWidth() {
    if ($window.width() < 767) {
      $('#top-header')
        .removeClass('header-home')
        .addClass('header-default');
    }

    if ($window.width() >= 767) {
      $('#top-header')
        .removeClass('header-default')
        .addClass('header-home');
    }
  }

  // Execute on load
  checkWidth();

  // Bind event listener
  $(window).resize(checkWidth);

  //Google Map
  //set your google maps parameters,
  var $latitude = 51.51769,
    $longitude = -0.0797805,
    $map_zoom = 14;

  //google map custom marker icon - .png fallback for IE11
  var is_internetExplorer11 =
    navigator.userAgent.toLowerCase().indexOf('trident') > -1;
  var $marker_url = is_internetExplorer11
    ? 'http://i.imgur.com/TYdWTLk.png'
    : 'http://i.imgur.com/TYdWTLk.png';

  //define the basic color of your map, plus a value for saturation and brightness
  var $main_color = '#1abc9c',
    $saturation = -20,
    $brightness = 5;

  //we define here the style of the map
  var style = [
    {
      //set saturation for the labels on the map
      elementType: 'labels',
      stylers: [{ saturation: $saturation }]
    },
    {
      //poi stands for point of interest - don't show these lables on the map
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }]
    },
    {
      //don't show highways lables on the map
      featureType: 'road.highway',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }]
    },
    {
      //don't show local road lables on the map
      featureType: 'road.local',
      elementType: 'labels.icon',
      stylers: [{ visibility: 'off' }]
    },
    {
      //don't show arterial road lables on the map
      featureType: 'road.arterial',
      elementType: 'labels.icon',
      stylers: [{ visibility: 'off' }]
    },
    {
      //don't show road lables on the map
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{ visibility: 'off' }]
    },
    //style different elements on the map
    {
      featureType: 'transit',
      elementType: 'geometry.fill',
      stylers: [
        { hue: $main_color },
        { visibility: 'on' },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'geometry.fill',
      stylers: [
        { hue: $main_color },
        { visibility: 'on' },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: 'poi.government',
      elementType: 'geometry.fill',
      stylers: [
        { hue: $main_color },
        { visibility: 'on' },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: 'poi.sport_complex',
      elementType: 'geometry.fill',
      stylers: [
        { hue: $main_color },
        { visibility: 'on' },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: 'poi.attraction',
      elementType: 'geometry.fill',
      stylers: [
        { hue: $main_color },
        { visibility: 'on' },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: 'poi.business',
      elementType: 'geometry.fill',
      stylers: [
        { hue: $main_color },
        { visibility: 'on' },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: 'transit',
      elementType: 'geometry.fill',
      stylers: [
        { hue: $main_color },
        { visibility: 'on' },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry.fill',
      stylers: [
        { hue: $main_color },
        { visibility: 'on' },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: 'landscape',
      stylers: [
        { hue: $main_color },
        { visibility: 'on' },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: 'road',
      elementType: 'geometry.fill',
      stylers: [
        { hue: $main_color },
        { visibility: 'on' },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [
        { hue: $main_color },
        { visibility: 'on' },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        { hue: $main_color },
        { visibility: 'on' },
        { lightness: $brightness },
        { saturation: $saturation }
      ]
    }
  ];

  if ($('.map').length > 0) {
    //set google map options
    var map_options = {
      center: new google.maps.LatLng($latitude, $longitude),
      zoom: $map_zoom,
      panControl: false,
      zoomControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
      styles: style
    };
    //   //inizialize the map
    var map = new google.maps.Map(
      document.getElementById('google-container'),
      map_options
    );
    // //add a custom marker to the map
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng($latitude, $longitude),
      map: map,
      visible: true,
      icon: $marker_url
    });

    // //add custom buttons for the zoom-in/zoom-out on the map
    function CustomZoomControl(controlDiv, map) {
      //grap the zoom elements from the DOM and insert them in the map
      var controlUIzoomIn = document.getElementById('cd-zoom-in'),
        controlUIzoomOut = document.getElementById('cd-zoom-out');
      controlDiv.appendChild(controlUIzoomIn);
      controlDiv.appendChild(controlUIzoomOut);

      // Setup the click event listeners and zoom-in or out according to the clicked element
      google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
        map.setZoom(map.getZoom() + 1);
      });
      google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
        map.setZoom(map.getZoom() - 1);
      });
    }

    var zoomControlDiv = document.createElement('div');
    var zoomControl = new CustomZoomControl(zoomControlDiv, map);

    //insert the zoom div on the top left of the map
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
  }
});

//cookies consent
window.addEventListener('load', function() {
  window.cookieconsent.initialise({
    palette: {
      popup: {
        background: '#ecf0f1',
        text: '#333333'
      },
      button: {
        background: '#1abc9c',
        text: '#fff'
      }
    },
    type: 'opt-out',
    content: {
      message:
        'We use cookies to give you the best possible experience on our website. By continuing to browse this site, you give consent for cookies to be used in accordance with our privacy policy.',
      dismiss: 'I accept',
      deny: 'Decline',
      link: 'Privacy Policy',
      href: 'privacy.html'
    }
  });
});

$(document).ready(function(e) {
  $('input#accept-terms').click(function() {
    // get current time and date
    var dt = new Date();
    var hours = dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours();
    var min = dt.getMinutes();
    var am_pm = dt.getHours() >= 12 ? 'PM' : 'AM';
    var year = dt.getFullYear();
    var date = dt.getDate();

    var my_month = dt;

    var month_name = new Array(12);
    month_name[0] = 'January';
    month_name[1] = 'February';
    month_name[2] = 'March';
    month_name[3] = 'April';
    month_name[4] = 'May';
    month_name[5] = 'June';
    month_name[6] = 'July';
    month_name[7] = 'August';
    month_name[8] = 'September';
    month_name[9] = 'October';
    month_name[10] = 'November';
    month_name[11] = 'December';

    $('#consent-time').val(hours + ':' + min + ' ' + am_pm);
    $('#consent-date').val(
      month_name[my_month.getMonth()] + '-' + date + '-' + year
    );
  });

  // open consent popup
  $('#popup-link').click(function() {
    $('#concent-pop-up').addClass('open-popup');
    $('body').addClass('open-consent-form');
  });

  // close consent form
  $('#concent-pop-up .close-popup , #concent-pop-up .consent-pop-up-bg').click(
    function() {
      $('#concent-pop-up').removeClass('open-popup');
      $('body').removeClass('open-consent-form');
    }
  );

  $('#form-contact').validate({
    submitHandler: function(form) {
      //form.submit();
      if ($('input#hidden').val().length != 0) {
        return false;
      }

      var name = $('input#your-name').val();
      var email = $('input#email-address').val();
      var phone = $('input#phone').val();
      var check = $('input.checkbox').is(':checked') ? 'Yes' : 'No';
      var times = $('input#consent-time').val();
      var dates = $('input#consent-date').val();
      var consent = $('input#consent-accepted').val();
      $('#btn-submit').attr('disabled', 'true');
      var dataString =
        'name=' +
        name +
        '&email=' +
        email +
        '&phone=' +
        phone +
        '&times=' +
        times +
        '&dates=' +
        dates +
        '&consent=' +
        consent;

      var request = $.ajax({
        url: 'bin/appointement-form-consent.php',
        type: 'POST',
        data: dataString,
        dataType: 'html'
      });

      request.done(function(msg) {
        //alert( "Request successfull: " + msg);
        $('#form-contact').append(
          "<p class='sucess'>Thank You,<br/> Your message is received.</p>"
        );
        $('.contact_us').remove();
      });

      request.fail(function(jqXHR, textStatus) {
        //alert( "Request failed: " + textStatus );
        $('#form-contact').append(
          "<p class='failure'>Erron in submission, please try again.</p>"
        );
      });
    }
  });
});

$(document).ready(function($) {
  'use strict';
  $('.tweets-list-container').tweetscroll({
    username: 'thinkinspace',
    limit: 2,
    replies: true,
    position: 'append',
    animation: 'false',
    date_format: 'style2',
    visible_tweets: 2
  });

  $('#rotating-words').wordsrotator({
    randomize: true,
    speed: 5000,
    animationIn: 'fadeOut',
    animationOut: 'fadeIn',
    words: [
      'A space to restore your wellbeing.',
      'A space to rediscover your potential.'
    ]
  });
});

$(function() {
  $('#dialog_link').click(function() {
    $('#dialog').dialog({
      modal: true,
      responsive: true,
      width: 500
    });
    return false;
  });
});
