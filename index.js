const slide = document.getElementById('slide');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
function nextSlide() {
  let lists = document.querySelectorAll('.item-slide');
  slide.appendChild(lists[0]);
}
function prevSlide() {
  let lists = document.querySelectorAll('.item-slide');
  slide.prepend(lists[lists.length - 1]);
}

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

setInterval(nextSlide, 10000);
