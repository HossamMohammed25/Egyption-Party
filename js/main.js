/// <reference types="../@types/jquery" />

//----------------------------side Nav------------------


  $("#home span").on("click",function () {
  

    if ($("#leftMenu").width() === 0) {
      $("#leftMenu").animate({ width: "250px" }, 200);
       $("#home-content").animate({ marginLeft: "250px" }, 200);
      $(this).text("☰ close");
    } else {
      $("#leftMenu").animate({ width: "0" }, 200);
       $("#home-content").animate({ marginLeft: "0" }, 200);
      $(this).text("☰ open");
    }
  });

  $(".closebtn").on("click", function () {
    $("#leftMenu").animate({ width: "0px" }, 50);
    $("#home-content").animate({ marginLeft: "0px" }, 50);
    $("#home span").text("☰ open");
  });


//*******************************************Scroll **************/
$("#leftMenu a").on("click", function () {
  let aHref = $(this).attr("href");
  let secOffset = $(aHref).offset().top;
  $("html, body").animate({ scrollTop: secOffset }, 2000);
});
//------------------------------------------------ Singer accordion
$("#sliderDown .toggle").on("click", function () {
  $(".inner").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});

/*************************************************** counter ************************************/

$(window).on("load", function () {
  const endDate = new Date("2024-10-25T22:59:59");

  function updateCountdown() {
    const now = new Date();
    const distance = endDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${minutes} m`);
    $(".seconds").html(`${seconds} s`);

    if (distance < 0) {
      clearInterval(countdownInterval);
      $(".days").html(`00 D`);
      $(".hours").html(`00 h`);
      $(".minutes").html(`00 m`);
      $(".seconds").html(`00 s`);
    }
  }

  const countdownInterval = setInterval(updateCountdown, 1000);

  updateCountdown();
});
/*************---------------   textarea   -----------------******************/
const maxChar = 100;
$("textarea").on("input", function () {
  const textLength = $(this).val().length;
  const textLeft = maxChar - textLength;
  if (textLeft <= 0) {
    $("#chars").text(`your available character finished`);

    $(this).val($(this).val().substring(0, maxChar));
  } else {
    $("#chars").text(textLeft);
  }
});


document.getElementById('toggle-dark-mode').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
});

    window.addEventListener('DOMContentLoaded', (event) => {
        document.body.classList.add('light-mode'); // أو 'dark-mode' إذا أردت الوضع الداكن كالوضع الافتراضي
    });
