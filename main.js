document.addEventListener("alpine:init", () => {
  Alpine.data("hero", () => ({
    data: [
      {
        image: "./assets/kerala.jpg",
        bg: "./assets/kerala_2.jpg",
        title: "Kerala",
        rating: 4,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis asperiores quod eius exercitationem quas, voluptatem, id eveniet earum explicabo omnis natus placeat? Et iure cum dolorem id tempora, dolorum quo.",
      },
      {
        image: "./assets/indonesia.jpg",
        bg: "./assets/indonesia_2.jpg",
        title: "Indonesia",
        rating: 3,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis asperiores quod eius exercitationem quas, voluptatem, id eveniet earum explicabo omnis natus placeat? Et iure cum dolorem id tempora, dolorum quo.",
      },
      {
        image: "./assets/paris.jpg",
        bg: "./assets/paris_2.jpg",
        title: "Paris",
        rating: 4,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis asperiores quod eius exercitationem quas, voluptatem, id eveniet earum explicabo omnis natus placeat? Et iure cum dolorem id tempora, dolorum quo.",
      },
      {
        image: "./assets/bali.jpg",
        bg: "./assets/bali_2.jpg",
        title: "Bali",
        rating: 5,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis asperiores quod eius exercitationem quas, voluptatem, id eveniet earum explicabo omnis natus placeat? Et iure cum dolorem id tempora, dolorum quo.",
      },
      {
        image: "./assets/thailand.jpg",
        bg: "./assets/thailand_2.jpg",
        title: "Thailand",
        rating: 4,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis asperiores quod eius exercitationem quas, voluptatem, id eveniet earum explicabo omnis natus placeat? Et iure cum dolorem id tempora, dolorum quo.",
      },
    ],
    text_swiper: null,
    swiper: null,
    cIndex: 0,
    init() {
      this.text_swiper = new Swiper(this.$refs.text_swiper, {
        direction: "vertical",
        loop: true,
        spaceBetween: 10,
        allowTouchMove: false,
      });
      this.swiper = new Swiper(this.$refs.swiper, {
        spaceBetween: 10,
        loop: true,
        speed: 500,
        breakpoints: {
          350: {
            slidesPerView: 1.4,
          },
          550: {
            slidesPerView: 2,
          },
          650: {
            slidesPerView: 1.5,
          },
          850: {
            slidesPerView: 1.8,
          },
          1000: {
            slidesPerView: 2.1,
          },
          1200: {
            slidesPerView: 2.5,
          },
        },
      });
      this.swiper.on("slideChange", () => {
        this.sliding();
      });
    },
    sliding() {
      this.cIndex = this.swiper.realIndex;
      this.text_swiper.slideToLoop(this.swiper.realIndex, 500);
    },
    nextSlide() {
      this.swiper.slideNext(500);
      this.sliding();
    },
    prevSlide() {
      this.swiper.slidePrev(500);
      this.sliding();
    },
  }));
  Alpine.data("dropdown", () => ({
    open: true,
  }));
  Alpine.data("journey", () => ({
    cities: [
      { name: "Bali", add: "DPS, Ngurah Rai International Airport" },
      { name: "Paris", add: "CDG, Paris Charles de Gaulle Airport" },
      { name: "Thailand", add: "BKK, Suvarnabhumi Airport" },
      { name: "Indonesia", add: "KNO, Kualanamu International Airport" },
      { name: "Kerala", add: "COK, Cochin International Airport" },
    ],
    from: { name: "Kerala", add: "COK, Cochin International Airport" },
    to: { name: "Thailand", add: "BKK, Suvarnabhumi Airport" },
    way: false,
    dep: null,
    ret: null,
  }));
});
