$(function () {

  $(".reviews_carousel").owlCarousel({
    loop: true,
    mouseDrag: true,
    nav: true,
    navText: ['<img src="img/arrows-right.png">', '<img src="img/arrows-left.png">'],
    margin: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    items: 3,
    navSpeed: 900,
    responsive: {
      0: {
        items: 1
      },
      820: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });

  $(function () {
    var pull = $('#mobile_mnu');
    menu = $('.menu');
    menuHeight = menu.height();

    $(pull).on('click', function (e) {
      e.preventDefault();
      menu.slideToggle();
    });
  });

  $(window).resize(function () {
    var w = $(window).width();
    if (w > 320 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });


  $("a.gallery").fancybox(
    {
      "padding": 20,
      "imageScale": false,
      "zoomOpacity": false,
      "zoomSpeedIn": 1000,
      "zoomSpeedOut": 1000,
      "zoomSpeedChange": 1000,
      "frameWidth": 700,
      "frameHeight": 600,
      "overlayShow": true,
      "overlayOpacity": 0.8,
      "hideOnContentClick": false,
      "centerOnScroll": false

    });

  $('.details').click(function () {
    $('.bl_hidden').slideToggle();
  });

  $('.check1').hide();
  $('.form_name').keyup(function () {
    $('.check1').show();
    if($('.form_name').val() == ''){
      $('.check1').hide();
    }
  });

  $('.check2').hide();
  $('.form_phone').keyup(function () {
    $('.check2').show();
    if($('.form_phone').val() == ''){
      $('.check2').hide();
    }
  });

});

// modal form
$(document).ready(function () {
  var overlay = $('#overlay');
  var open_modal = $('.open_modal');
  var close = $('.modal_close, #overlay');
  var modal = $('.modal_div');

  open_modal.click(function (event) {
    event.preventDefault();
    var div = $(this).attr('href');
    overlay.fadeIn(400,
      function () {
        $(div)
          .css('display', 'block')
          .animate({
            opacity: 1,
            top: '50%'
          }, 200);
      });
  });

  close.click(function () {
    modal
      .animate({
          opacity: 0,
          top: '45%'
        }, 200,
        function () {
          $(this).css('display', 'none');
          overlay.fadeOut(400);
        }
      );
  });
});
// modal form end

$(document).ready(function () {

  $(".form").submit(function () {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find("input").val("");
      window.location.href = "thanks.html";
      $(".form").trigger("reset");
    });
    return false;
  });

  $(document).ready(function () { //плавный скролл
    $('.go_to').click(function () {
      var scroll_el = $(this).attr('href');
      if ($(scroll_el).length != 0) {
        $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 1000);
      }
      return false;
    });
  });

});