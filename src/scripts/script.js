const faqBtns = document.querySelectorAll('.faq__btn')
const faqItems = document.querySelectorAll('.faq__item')

faqBtns.forEach((parent) => {
  parent.addEventListener('click', (event) => {
    if (parent.parentNode.classList.contains('active')) {
      parent.parentNode.classList.remove('active')
    } else {
      faqItems.forEach((child) => {
          child.classList.remove('active')
      })
      parent.parentNode.classList.add('active')
    }
  })
})


const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});







