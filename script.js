document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('toast');

  function toggleMenu() {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  menuToggle.addEventListener('click', toggleMenu);

  navItems.forEach((link) => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        toggleMenu();
      }
    });
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (!name || !email || !message) {
      showToast('Please fill in all fields before sending.', 'error');
      return;
    }

    form.reset();
    showToast('Thank you! Your message has been received.');
  });

  function showToast(message, type = 'success') {
    toast.textContent = message;
    toast.classList.add('show');
    toast.style.borderColor = type === 'error' ? 'rgba(245, 67, 90, 0.4)' : 'rgba(0, 245, 255, 0.18)';

    window.setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  particlesJS('particles-js', {
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          value_area: 900
        }
      },
      color: {
        value: '#00f5ff'
      },
      shape: {
        type: 'circle'
      },
      opacity: {
        value: 0.25,
        anim: {
          enable: true,
          speed: 1.5,
          opacity_min: 0.05,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false
        }
      },
      line_linked: {
        enable: true,
        distance: 130,
        color: '#00f5ff',
        opacity: 0.12,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: 'none',
        out_mode: 'out'
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        }
      },
      modes: {
        grab: {
          distance: 160,
          line_linked: {
            opacity: 0.15
          }
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });
});
