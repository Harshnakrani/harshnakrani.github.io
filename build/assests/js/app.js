(function ($) {
  "use strict";
  var WEA = {};
  var plugin_track = "assets/js/";
  $.fn.exists = function () {
    return this.length > 0;
  };

  $(document).ready(function () {
    $('a[href^="#"]').on("click", function (e) {
      e.preventDefault();
      var target = this.hash;
      var $target = $(target);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $target.offset().top,
          },
          900,
          "swing",
          function () {
            // window.location.hash = target;
          }
        );
    });
  });

  /* ---------------------------------------------- /*
   * Pre load
  /* ---------------------------------------------- */
  WEA.PreLoad = function () {
    document.getElementById("loading").style.display = "none";
  };

  /*--------------------
        * Menu Close
    ----------------------*/
  WEA.MenuClose = function () {
    $(".navbar-nav a").on("click", function () {
      var toggle = $(".navbar-toggler").is(":visible");
      if (toggle) {
        $(".navbar-collapse").collapse("hide");
      }
    });
  };

  WEA.MenuTogglerClose = function () {
    $(".toggler-menu").on("click", function () {
      $(this).toggleClass("open");
      $(".header-left").stop().toggleClass("menu-open menu-open-desk");
    });
    $(".header-left a").on("click", function () {
      var toggle = $(".toggler-menu").is(":visible");
      if (toggle) {
        $(".header-left").removeClass("menu-open");
        $(".toggler-menu").removeClass("open");
      }
    });
  };

  /* ---------------------------------------------- /*
   * Header Fixed
  /* ---------------------------------------------- */
  WEA.HeaderFixd = function () {
    var HscrollTop = $(window).scrollTop();
    if (HscrollTop >= 100) {
      $("body").addClass("fixed-header");
    } else {
      $("body").removeClass("fixed-header");
    }
  };

  /* ---------------------------------------------- /*
     * lightbox gallery
    /* ---------------------------------------------- */
  WEA.Gallery = function () {
    if (
      $(".lightbox-gallery").exists() ||
      $(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()
    ) {
      loadScript(
        plugin_track + "magnific/jquery.magnific-popup.min.js",
        function () {
          if ($(".lightbox-gallery").exists()) {
            $(".lightbox-gallery").magnificPopup({
              delegate: ".gallery-link",
              type: "image",
              tLoading: "Loading image #%curr%...",
              mainClass: "mfp-fade",
              fixedContentPos: true,
              closeBtnInside: false,
              gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1], // Will preload 0 - before current, and 1 after WEA current image
              },
            });
          }
          if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
            $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
              disableOn: 700,
              type: "iframe",
              mainClass: "mfp-fade",
              removalDelay: 160,
              preloader: false,
              fixedContentPos: false,
            });
          }
        }
      );
    }
  };

  /*--------------------
    * Masonry
    ----------------------*/
  WEA.masonry = function () {
    var portfolioWork = $(".portfolio-content");
    if ($(".portfolio-content").exists()) {
      loadScript(plugin_track + "isotope/isotope.pkgd.min.js", function () {
        if ($(".portfolio-content").exists()) {
          $(portfolioWork).isotope({
            resizable: false,
            itemSelector: ".grid-item",
            layoutMode: "masonry",
            filter: "*",
          });
          //Filtering items on portfolio.html
          var portfolioFilter = $(".filter li");
          // filter items on button click
          $(portfolioFilter).on("click", function () {
            var filterValue = $(this).attr("data-filter");
            portfolioWork.isotope({ filter: filterValue });
          });
          //Add/remove class on filter list
          $(portfolioFilter).on("click", function () {
            $(this).addClass("active").siblings().removeClass("active");
          });
        }
      });
    }
  };

  /*--------------------
        * Progress Bar 
    ----------------------*/
  WEA.ProgressBar = function () {
    $(".skill-bar .skill-bar-in").each(function () {
      var bottom_object = $(this).offset().top + $(this).outerHeight();
      var bottom_window = $(window).scrollTop() + $(window).height();
      var progressWidth = $(this).attr("aria-valuenow") + "%";
      if (bottom_window > bottom_object) {
        $(this).css({
          width: progressWidth,
        });
      }
    });
  };

  /*--------------------
        * particles
    ----------------------*/
  WEA.particles = function () {
    if ($("#particles-box").exists()) {
      loadScript(plugin_track + "particles/particles.min.js", function () {});
      loadScript(plugin_track + "particles/particles-app.js", function () {});
    }
  };

  /*--------------------
        * Type It
    ----------------------*/
  $(function () {
    $(".typed").typed({
      strings: ["Designer.", "Developer."],
      // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
      stringsElement: null,
      // typing speed
      typeSpeed: 30,
      // time before typing starts
      startDelay: 1200,
      // backspacing speed
      backSpeed: 20,
      // time before backspacing
      backDelay: 500,
      // loop
      loop: true,
      // false = infinite
      loopCount: 5,
      // show cursor
      showCursor: false,
      // character for cursor
      cursorChar: "|",
      // attribute to type (null == text)
      attr: null,
      // either html or text
      contentType: "html",
      // call when done callback function
      callback: function () {},
      // starting callback function before each string
      preStringTyped: function () {},
      //callback for every typed string
      onStringTyped: function () {},
      // callback for reset
      resetCallback: function () {},
    });
  });

  WEA.one_page = function () {
    //var HHeight = $('.navbar').outerHeight();
    var $one_page_nav = $(".one-page-nav");
    if ($one_page_nav.length > 0) {
      $one_page_nav.each(function () {
        $.scrollIt({
          upKey: 38, // key code to navigate to the next section
          downKey: 40, // key code to navigate to the previous section
          easing: "linear", // the easing function for animation
          scrollTime: 600, // how long (in ms) the animation takes
          activeClass: "active", // class given to the active nav element
          onPageChange: null, // function(pageIndex) that is called when page is changed
          topOffset: -70, // offste (in px) for fixed top navigation
        });
      });
    }
  };

  /* ---------------------------------------------- /*
   * All Functions
  /* ---------------------------------------------- */
  // loadScript
  var _arr = {};
  function loadScript(scriptName, callback) {
    if (!_arr[scriptName]) {
      _arr[scriptName] = true;
      var body = document.getElementsByTagName("body")[0];
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = scriptName;
      // WEAn bind WEA event to WEA callback function
      // WEAre are several events for cross browser compatibility
      // script.onreadystatechange = callback;
      script.onload = callback;
      // fire WEA loading
      body.appendChild(script);
    } else if (callback) {
      callback();
    }
  }

  // Window on Load
  $(window).on("load", function () {
    WEA.masonry(), WEA.PreLoad();
  });
  // Document on Ready
  $(document).ready(function () {
    WEA.particles(),
      WEA.HeaderFixd(),
      WEA.MenuClose(),
      WEA.MenuTogglerClose(),
      WEA.Gallery(),
      WEA.ProgressBar(),
      WEA.mTypeIt(),
      WEA.one_page(),
      WEA.Owl(),
      $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" });
  });

  // Document on Scrool
  $(window).on("scroll", function () {
    WEA.ProgressBar(), WEA.HeaderFixd();
  });

  // Window on Resize
  $(window).on("resize", function () {});
})(jQuery);
