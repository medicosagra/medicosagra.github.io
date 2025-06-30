document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            // Altera o ícone do botão (opcional)
            if (mainNav.classList.contains('active')) {
                menuToggle.querySelector('i').classList.remove('fa-bars');
                menuToggle.querySelector('i').classList.add('fa-times'); // Ícone de 'X'
            } else {
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars'); // Ícone de barras
            }
        });
    }

    // Fechar o menu ao clicar em um item (para navegação em single page)
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });
});

const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    question.classList.toggle('active');
    answer.classList.toggle('open');
  });
});

window.addEventListener('load', () => {
    setTimeout(() => {
      const loader = document.getElementById('loader');
      const content = document.getElementById('content');

      // Fade out loader
      loader.style.transition = 'opacity 0.8s ease';
      loader.style.opacity = 0;

      // Mostrar conteúdo
      content.classList.add('visible');

      // Depois de sumir completamente, remove do DOM
      setTimeout(() => {
        loader.style.display = 'none';
        // Permite scroll
        document.body.style.overflow = 'auto';
      }, 800);
    }, 1500); // duração total da animação e espera
  });

  var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4, // 🔁 alterado aqui para manter o loop com 5 slides
    }
  }
});


  function toggleBio(button) {
    const bioContainer = button.parentElement;
    const completo = bioContainer.querySelector('.completo');
    const resumo = bioContainer.querySelector('.resumo');

    if (completo.style.display === 'none') {
      completo.style.display = 'block';
      button.textContent = '⬆ Ver menos';
    } else {
      completo.style.display = 'none';
      button.textContent = '⬇ Ver mais';
    }
  }



 

