  let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Desplazamiento hacia abajo
      navbar.classList.add('hidden');
    } else {
      // Desplazamiento hacia arriba
      navbar.classList.remove('hidden');
    }

    lastScrollTop = scrollTop;
  });
