//スライドショーする関数
const slideshow = () => {
  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;

  // クラスの更新関数
  function updateSlides() {
    slides.forEach((slide, index) => {
      slide.classList.remove(
        "previous2",
        "previous",
        "active",
        "next",
        "next2"
      );
      if (index === (currentIndex - 2 + slides.length) % slides.length) {
        slide.classList.add("previous2");
      } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
        slide.classList.add("previous");
      } else if (index === currentIndex) {
        slide.classList.add("active");
      } else if (index === (currentIndex + 1) % slides.length) {
        slide.classList.add("next");
      } else if (index === (currentIndex + 2) % slides.length) {
        slide.classList.add("next2");
      }
    });
  }

  // スライドを切り替える関数
  function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
  }

  // 初期化
  updateSlides();

  // 一定間隔でスライドを切り替え
  setInterval(showNextSlide, 6000); // 3秒ごとに次のスライドを表示
};

slideshow();
