window.addEventListener('scroll', (e) => {
  const header = document.getElementById('header')
  const scrollPosition = 400

  if (scrollY > scrollPosition) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
})
