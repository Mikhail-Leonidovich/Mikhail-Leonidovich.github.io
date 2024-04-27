const allNavLinks = document.querySelectorAll('.nav__link');
const allCircles = document.querySelectorAll('.about__circle');
const root = document.querySelector(':root');
const rootStyles = getComputedStyle(root);

allNavLinks.forEach((item) => {
  item.addEventListener('click', () => {
    handleChangeNavLinks(item);
  })
})

const handleChangeNavLinks = (currentItem) => {
  allNavLinks.forEach((item) => {
    item === currentItem ? currentItem.classList.add('nav__link--active') : item.classList.remove('nav__link--active');
  })
}

allCircles.forEach((item) => {
  let currentPercent = handleGetCirclesPercent(item);

  item.addEventListener('mouseenter', () => {
    handleChangeCircles(item, currentPercent);
  })
  item.addEventListener('mouseleave', () => {
    handleChangeCircles(item, currentPercent);
  })
})

const handleGetCirclesPercent = (item) => {
  let currentPercent = rootStyles.getPropertyValue(`--${item.id}-firstColor`);
  return currentPercent;
}

const handleChangeCircles = (item, currentPercent) => {
  let span = item.firstElementChild;
  if (item.id === span.innerHTML) {
    span.innerHTML = currentPercent;
  } else {
    span.innerHTML = item.id;
  }
}
