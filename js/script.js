// Load and populate countries dropdown
async function loadCountries() {
  try {
    const response = await fetch('./assets/json/countries.json');
    const countries = await response.json();

    const countrySelect = document.getElementById('country');

    const sortedCountries = countries.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    sortedCountries.forEach((country) => {
      const option = document.createElement('option');
      option.value = country.code;
      option.textContent = country.name;
      countrySelect.appendChild(option);
    });
  } catch (error) {
    console.error('Error loading countries:', error);
  }
}

// Call loadCountries when the page loads
document.addEventListener('DOMContentLoaded', loadCountries);

// Floating input style
document
  .querySelectorAll('.form-group input, .form-group select')
  .forEach((field) => {
    field.addEventListener('blur', () => {
      if (field.value.trim() !== '') {
        field.classList.add('has-content');
      } else {
        field.classList.remove('has-content');
      }
    });

    if (field.value.trim() !== '') {
      field.classList.add('has-content');
    }
  });

// Form handling
const fields = [
  { id: 'firstName', label: 'First Name' },
  { id: 'lastName', label: 'Last Name' },
  { id: 'businessEmail', label: 'Business Email', type: 'email' },
  { id: 'company', label: 'Company' },
  { id: 'country', label: 'Country' },
];

function validateField(input, type = 'text') {
  const value = input.value.trim();
  const errorSpan = document.getElementById(input.id + 'Error');
  let message = '';

  if (!value) {
    message = `This field can't be empty. Please fill it in.`;
  } else if (type === 'email' && !/^\S+@\S+\.\S+$/.test(value)) {
    message = `Please enter a valid email address.`;
  }

  if (message) {
    input.classList.add('has-error');
    errorSpan.textContent = message;
    // errorSpan.classList.add('tooltip-visible');
  } else {
    input.classList.remove('has-error');
    errorSpan.textContent = '';
    // errorSpan.classList.remove('tooltip-visible');
  }

  if (value) {
    input.classList.add('has-content');
  } else {
    input.classList.remove('has-content');
  }
}

fields.forEach(({ id, type }) => {
  const input = document.getElementById(id);

  input.addEventListener('input', () => validateField(input, type));
});

document
  .querySelector('.contact-form-fields')
  .addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    for (let { id, type } of fields) {
      const input = document.getElementById(id);
      validateField(input, type);

      if (input.classList.contains('has-error')) {
        input.focus();
        isValid = false;
        const tooltip = document.querySelector(`${id}Error`);
        tooltip.style.opacity = '1';
        tooltip.style.visibility = 'visible';
        break;
      }
    }

    if (isValid) {
      this.reset();

      // Reset styles
      document
        .querySelectorAll('.has-content')
        .forEach((el) => el.classList.remove('has-content'));
      document
        .querySelectorAll('.has-error')
        .forEach((el) => el.classList.remove('has-error'));
      document
        .querySelectorAll('span[id$="Error"]')
        .forEach((el) => (el.textContent = ''));

      window.location.href = '/thank-you.html';
    }
  });

document.querySelectorAll('.form-group').forEach((group) => {
  const input = group.querySelector('input, select');
  const tooltip = group.querySelector('span');

  input.addEventListener('mouseenter', () => {
    if (input.classList.contains('has-error')) {
      tooltip.style.opacity = '1';
      tooltip.style.visibility = 'visible';
    }
  });

  input.addEventListener('focus', () => {
    if (input.classList.contains('has-error')) {
      tooltip.style.opacity = '1';
      tooltip.style.visibility = 'visible';
    }
  });

  input.addEventListener('input', () => {
    if (input.classList.contains('has-error')) {
      tooltip.style.opacity = '1';
      tooltip.style.visibility = 'visible';
    } else {
      tooltip.style.opacity = '0';
      tooltip.style.visibility = 'hidden';
    }
  });
});

// Video Popup Functionality
const videoPopup = document.getElementById('videoPopup');
const popupVideo = document.getElementById('popupVideo');
const pauseIcon = document.querySelector('.play-icon');
const closePopup = document.querySelector('.close-popup');

pauseIcon.addEventListener('click', () => {
  videoPopup.classList.add('active');
  popupVideo.play();
  document.body.style.overflow = 'hidden';
});

closePopup.addEventListener('click', () => {
  videoPopup.classList.remove('active');
  popupVideo.pause();
  popupVideo.currentTime = 0;
  document.body.style.overflow = '';
});

videoPopup.addEventListener('click', (e) => {
  if (e.target === videoPopup) {
    videoPopup.classList.remove('active');
    popupVideo.pause();
    popupVideo.currentTime = 0;
    document.body.style.overflow = '';
  }
});

// Close popup when pressing Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && videoPopup.classList.contains('active')) {
    videoPopup.classList.remove('active');
    popupVideo.pause();
    popupVideo.currentTime = 0;
    document.body.style.overflow = '';
  }
});

// Custom Slider for testimonials
function initSlider() {
  const container = document.querySelector('.slider-container');
  const wrapper = document.querySelector('.slider-wrapper');
  const slides = document.querySelectorAll('.slider-slide');
  const prevBtn = document.querySelector('.prev-slide');
  const nextBtn = document.querySelector('.next-slide');
  const pagination = document.querySelector('.slider-pagination');

  let currentIndex = 0;
  const slideCount = slides.length;
  let isAnimating = false;
  let autoplayInterval = null;

  // pagination dots
  function createPagination() {
    for (let i = 0; i < slideCount; i++) {
      const dot = document.createElement('div');
      dot.classList.add('pagination-dot');
      if (i === 0) dot.classList.add('active');

      dot.addEventListener('click', () => {
        if (currentIndex !== i) {
          goToSlide(i);
        }
      });

      pagination.appendChild(dot);
    }
  }

  function updatePagination() {
    const dots = pagination.querySelectorAll('.pagination-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  function slide(direction) {
    if (isAnimating) return;

    const newIndex =
      direction === 'next'
        ? (currentIndex + 1) % slideCount
        : (currentIndex - 1 + slideCount) % slideCount;

    goToSlide(newIndex);
  }

  function goToSlide(index) {
    if (isAnimating) return;
    isAnimating = true;

    const offset = -index * 100;
    wrapper.style.transform = `translateX(${offset}%)`;
    currentIndex = index;

    updatePagination();

    setTimeout(() => {
      isAnimating = false;
    }, 500);
  }

  function addTouchEvents() {
    let startX = 0;
    let currentX = 0;

    container.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      stopAutoplay();
    });

    container.addEventListener('touchmove', (e) => {
      currentX = e.touches[0].clientX;
      const diff = currentX - startX;
      const offset = -currentIndex * 100 + (diff / container.offsetWidth) * 100;
      wrapper.style.transform = `translateX(${offset}%)`;
    });

    container.addEventListener('touchend', () => {
      const diff = currentX - startX;
      if (Math.abs(diff) > 50) {
        slide(diff > 0 ? 'prev' : 'next');
      } else {
        goToSlide(currentIndex);
      }
      startAutoplay();
    });
  }

  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      slide('next');
    }, 5000);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  // Initialize slider
  function init() {
    createPagination();

    prevBtn.addEventListener('click', () => slide('prev'));
    nextBtn.addEventListener('click', () => slide('next'));

    addTouchEvents();

    startAutoplay();

    container.addEventListener('mouseenter', stopAutoplay);
    container.addEventListener('mouseleave', startAutoplay);
  }

  // Start the slider
  init();
}

// Initialize the slider
initSlider();

// Navigation Drawer Functionality
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-button');
  const navDrawer = document.getElementById('navDrawer');
  const hamburgerIcon = document.getElementById('hamburgerIcon');
  const closeIcon = document.getElementById('closeIcon');

  const openDrawer = () => {
    navDrawer.classList.add('open');
    document.body.classList.add('no-scroll');

    hamburgerIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
  };

  const closeDrawer = () => {
    navDrawer.classList.remove('open');
    document.body.classList.remove('no-scroll');

    hamburgerIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  };

  menuBtn.addEventListener('click', () => {
    if (navDrawer.classList.contains('open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  navDrawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('click', (e) => {
    if (
      !navDrawer.contains(e.target) &&
      !menuBtn.contains(e.target) &&
      navDrawer.classList.contains('open')
    ) {
      closeDrawer();
    }
  });
});
