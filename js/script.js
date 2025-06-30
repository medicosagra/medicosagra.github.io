document.addEventListener('DOMContentLoaded', function() {

    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    function handleAnchorScroll(event) {
        const link = event.currentTarget;
        const href = link.getAttribute('href');

        if (!href || href.charAt(0) !== '#') {
            return;
        }

        event.preventDefault();

        const targetMobileID = href.substring(1);
        let targetElement = document.getElementById(targetMobileID);

        if (targetMobileID === 'guim' || targetMobileID === 'rodrigom') {
            const targetDesktopID = (targetMobileID === 'guim') ? 'gui' : 'rodri';
            const desktopElement = document.getElementById(targetDesktopID);
            const mobileElement = document.getElementById(targetMobileID);

            if (desktopElement && desktopElement.offsetParent !== null) {
                targetElement = desktopElement;
            } else {
                targetElement = mobileElement;
            }
        }

        if (targetElement) {
            const header = document.querySelector('.main-header');
            const headerHeight = header ? header.offsetHeight : 0;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }

        if (mainNav && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }

    const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', handleAnchorScroll);
    });

    const questions = document.querySelectorAll('.faq-question');
    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            question.classList.toggle('active');
            answer.classList.toggle('open');
        });
    });

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        speed: 1500,
        autoplay: {
            delay: 2500,
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
                slidesPerView: 4,
            }
        }
    });

    const loader = document.getElementById('loader');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const content = document.getElementById('content');
                loader.style.transition = 'opacity 0.8s ease';
                loader.style.opacity = 0;

                if (content) {
                    content.classList.add('visible');
                }

                setTimeout(() => {
                    loader.style.display = 'none';
                }, 800);
            }, 1000);
        });
    }
});

function toggleBio(button) {
    const bioContainer = button.parentElement;
    const completo = bioContainer.querySelector('.completo');

    if (completo) {
        const isHidden = completo.style.display === 'none' || completo.style.display === '';
        if (isHidden) {
            completo.style.display = 'block';
            button.innerHTML = '⬆ Ver menos';
        } else {
            completo.style.display = 'none';
            button.innerHTML = '⬇ Ver mais';
        }
    }
}
