const navLinks = document.querySelectorAll('.nav__link');

const handleChangeNavLinks = (currentItem) => {
  navLinks.forEach((item) => {
    item === currentItem ? currentItem.classList.add('nav__link--active') : item.classList.remove('nav__link--active');
  })
}

navLinks.forEach((item) => {
  item.addEventListener('click', () => {
    handleChangeNavLinks(item);
  })
})

