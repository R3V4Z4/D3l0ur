export function slider() {
  let splide = new Splide(".splide", {
    type: "loop",
    autoplay: {
      speed: 2,
    },
  });

  splide.mount();
}
