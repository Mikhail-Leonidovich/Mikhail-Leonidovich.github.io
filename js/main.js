const allNavLinks = document.querySelectorAll('.nav__link');
const allCircles = document.querySelectorAll('.about__circle');
const allSections = document.querySelectorAll('section');

const root = document.querySelector(':root');
const rootStyles = getComputedStyle(root);

const handleMoveToSection = (currentItem) => {
  let href = currentItem.getAttribute('href').replace('#', '');
  allSections.forEach((item) => {
    if (href === item.id) {
      item.scrollIntoView({ behavior: "smooth" ,block: 'start'});
    }
  })
}

const handleChangeNavLinks = (currentItem) => {
  allNavLinks.forEach((item) => {
    (item === currentItem) ? currentItem.classList.add('nav__link--active') : item.classList.remove('nav__link--active');
  })
}

allNavLinks.forEach((item) => {
  item.addEventListener('click', () => {
    handleChangeNavLinks(item);
    handleMoveToSection(item);
  })
})

const handleChangeCircles = (item, currentPercent) => {
  let span = item.firstElementChild;
  (item.id === span.innerHTML) ? span.innerHTML = currentPercent : span.innerHTML = item.id;
}

const handleGetCirclesPercent = (item) => {
  let currentPercent = rootStyles.getPropertyValue(`--${item.id}-firstColor`);
  return currentPercent;
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



