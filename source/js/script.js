const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

// Обработка нажатия кнопки навигации
navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    setEventListenersToNavButtons();
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

function setEventListenersToNavButtons() {
  const navItems = document.querySelectorAll('.site-list__item');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth < 1000) {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
      }
    })
  })
}

const closetImages = document.querySelectorAll('.closet-image');
let closetIndex = 0;
const closetPrevButton = document.getElementById('closet-prev-button');
const closetNextButton = document.getElementById('closet-next-button');

closetPrevButton.addEventListener('click', () => {
  if (closetIndex === 0) { return }
  else {
    closetIndex -= 1;
    updateClosetSlider();
  }
})

closetNextButton.addEventListener('click', () => {
  if (closetIndex === closetImages.length - 1) { return }
  else {
    closetIndex += 1;
    updateClosetSlider();
  }
})

function updateClosetSlider() {
  closetImages.forEach((slide, index) => {
    if (index === closetIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

const ceilingImages = document.querySelectorAll('.ceiling-image');
let ceilingIndex = 0;
const ceilingPrevButton = document.getElementById('ceiling-prev-button');
const ceilingNextButton = document.getElementById('ceiling-next-button');

ceilingPrevButton.addEventListener('click', () => {
  if (ceilingIndex === 0) { return }
  else {
    ceilingIndex -= 1;
    updateCeilingSlider();
  }
})

ceilingNextButton.addEventListener('click', () => {
  if (ceilingIndex === ceilingImages.length - 1) { return }
  else {
    ceilingIndex += 1;
    updateCeilingSlider();
  }
})

function updateCeilingSlider() {
  ceilingImages.forEach((slide, index) => {
    if (index === ceilingIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

const windowImages = document.querySelectorAll('.window-image');
let windowIndex = 0;
const windowPrevButton = document.getElementById('window-prev-button');
const windowNextButton = document.getElementById('window-next-button');

windowPrevButton.addEventListener('click', () => {
  if (windowIndex === 0) { return }
  else {
    windowIndex -= 1;
    updateWindowSlider();
  }
})

windowNextButton.addEventListener('click', () => {
  if (windowIndex === windowImages.length - 1) { return }
  else {
    windowIndex += 1;
    updateWindowSlider();
  }
})

function updateWindowSlider() {
  windowImages.forEach((slide, index) => {
    if (index === windowIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

const balconyImages = document.querySelectorAll('.balcony-image');
let balconyIndex = 0;
const balconyPrevButton = document.getElementById('balcony-prev-button');
const balconyNextButton = document.getElementById('balcony-next-button');

balconyPrevButton.addEventListener('click', () => {
  if (balconyIndex === 0) { return }
  else {
    balconyIndex -= 1;
    updateBalconySlider();
  }
})

balconyNextButton.addEventListener('click', () => {
  if (balconyIndex === balconyImages.length - 1) { return }
  else {
    balconyIndex += 1;
    updateBalconySlider();
  }
})

function updateBalconySlider() {
  balconyImages.forEach((slide, index) => {
    if (index === balconyIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}
