const accItems = document.querySelectorAll('.faq__item')

accItems.forEach(item => {
  const header = item.querySelector('.faq__header')
  const content = item.querySelector('.faq__content')
  header.addEventListener('click', e => {
    const isActive = item.classList.toggle('active')
    content.style.maxHeight = isActive ? content.scrollHeight + 'px' : null
  })
})
