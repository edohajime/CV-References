export const getParentNode = (e, className) => {
  let slides = e;
  while (!slides.classList.contains(className)) {
    slides = slides.parentNode;
  }
  return slides;
};

export let pos = 0;

export const handlePrev = (e, ops) => {
  // Lấy listMedia, prev, next button, độ rộng của phần tử để chuyển slide
  let slides = getParentNode(e, ops.carousel);
  let prev = slides.querySelector("." + ops.prevButton);
  let next = slides.querySelector("." + ops.nextButton);
  let itemWidth = slides.querySelector(ops.cellSelector).offsetWidth;

  // Lấy div.mediaSlide-contain
  slides = slides.querySelector("." + ops.container);

  if (pos < 0) {
    // khi vị trí hiện tại đã gần vị trí đầu thì khi kích vào prev sẽ disable nút prev
    if (pos === -itemWidth) {
      prev.classList.add("disable");
    }
    pos += itemWidth;
    slides.style.transform = "translateX(" + pos + "px)";
    next.classList.remove("disable");
  }
};

export const handleNext = (e, ops) => {
  // Lấy listMedia, prev, next button, độ rộng của phần tử để chuyển slide
  let slides = getParentNode(e, ops.carousel);
  let prev = slides.querySelector("." + ops.prevButton);
  let next = slides.querySelector("." + ops.nextButton);
  let itemWidth = slides.querySelector(ops.cellSelector).offsetWidth;

  // Lấy div.mediaSlide-contain
  slides = slides.querySelector("." + ops.container);

  // Biến cho biết đã gần cuối của listMedia
  let indexPos = slides.offsetWidth - slides.scrollWidth + itemWidth;

  if (pos > slides.offsetWidth - slides.scrollWidth) {
    // khi vị trí hiện tại đã gần cuối thì khi kích vào next sẽ disable nút next
    if (Math.abs(pos - indexPos) < 2) {
      next.classList.add("disable");
    }
    pos -= itemWidth;

    slides.style.transform = "translateX(" + pos + "px)";
    prev.classList.remove("disable");
  }
};

export const handleSelect = (e, object) => {
  let container = getParentNode(e, object.containerClass);
  let childs = container.querySelectorAll("." + object.childClass);
  let thisChild = getParentNode(e, object.childClass);
  childs.forEach((attribute) => {
    attribute.classList.remove("active");
  });

  thisChild.classList.add("active");
};
