$(document).ready(function () {
  $(".productions-slider").slick({
    arrows: false,
    slidesToShow: 4,
    // initialSlide: 1,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
  $(".partners-slider").slick({
    arrows: false,
    slidesToShow: 2.5,
    rows: 2,
    slidesPerRow: 1,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          rows: 2,
          slidesPerRow: 1,
        },
      },
    ],
  });
});

function disableScroll() {
  document.body.classList.add("stop-scrolling");
}

function enableScroll() {
  document.body.classList.remove("stop-scrolling");
}
