// document.addEventListener("click", function (e) {
//   // Hamburger menu
//   if (e.target.classList.contains("hamburger-toggle")) {
//     e.target.children[0].classList.toggle("active");
//   }
// });

$(document).ready(function () {
  $(".popular-slider").slick({
    dots: false, arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });
  $(".guests-slider").slick({
    dots: false, arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  }); $(".about-slider").slick({
    dots: true, arrows: false,
    infinite: true,
    speed: 300, autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }); $(".reviews-slider").slick({
    dots: true, arrows: false,
    infinite: true,
    speed: 300, autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $(".quickView-slider").slick({
    dots: false, arrows: true,
    infinite: true,
    speed: 300, autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });


  // Counter function
  function isElementVisible($elementToBeChecked) {
    var TopView = $(window).scrollTop();
    var BotView = TopView + $(window).height();
    var TopElement = $elementToBeChecked.offset().top;
    var BotElement = TopElement + $elementToBeChecked.height();
    return BotElement <= BotView && TopElement >= TopView;
  }

  $(window).scroll(function () {
    $(".counter").each(function () {
      $this = $(this);
      isOnView = isElementVisible($(this));
      if (isOnView && !$this.hasClass("Starting")) {
        $this.addClass("Starting");
        startTimer($this);
      }
    });
  });

  function startTimer($this) {
    const target = parseFloat($this.attr("data-target"));
    const delimiter = $this.attr("data-delimiter") || ""; // Handle delimiter if specified
    const speed = 500;
    let count = 0;

    const updateCount = () => {
      const inc = target / speed;
      count += inc;
      if (count < target) {
        $this.text(delimiter ? numberWithDelimiter(Math.floor(count), delimiter) : Math.floor(count));
        setTimeout(updateCount, 1);
      } else {
        $this.text(delimiter ? numberWithDelimiter(target, delimiter) : target);
      }
    };

    updateCount();
  }

  // Function to add delimiter to number
  function numberWithDelimiter(number, delimiter) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter);
  }
});


