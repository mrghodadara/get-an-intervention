const countries = [
  { name: 'Afghanistan', code: 'AF' },
  { name: 'Åland Islands', code: 'AX' },
  { name: 'Albania', code: 'AL' },
  { name: 'Algeria', code: 'DZ' },
  { name: 'American Samoa', code: 'AS' },
  { name: 'AndorrA', code: 'AD' },
  { name: 'Angola', code: 'AO' },
  { name: 'Anguilla', code: 'AI' },
  { name: 'Antarctica', code: 'AQ' },
  { name: 'Antigua and Barbuda', code: 'AG' },
  { name: 'Argentina', code: 'AR' },
  { name: 'Armenia', code: 'AM' },
  { name: 'Aruba', code: 'AW' },
  { name: 'Australia', code: 'AU' },
  { name: 'Austria', code: 'AT' },
  { name: 'Azerbaijan', code: 'AZ' },
  { name: 'Bahamas', code: 'BS' },
  { name: 'Bahrain', code: 'BH' },
  { name: 'Bangladesh', code: 'BD' },
  { name: 'Barbados', code: 'BB' },
  { name: 'Belarus', code: 'BY' },
  { name: 'Belgium', code: 'BE' },
  { name: 'Belize', code: 'BZ' },
  { name: 'Benin', code: 'BJ' },
  { name: 'Bermuda', code: 'BM' },
  { name: 'Bhutan', code: 'BT' },
  { name: 'Bolivia', code: 'BO' },
  { name: 'Bosnia and Herzegovina', code: 'BA' },
  { name: 'Botswana', code: 'BW' },
  { name: 'Bouvet Island', code: 'BV' },
  { name: 'Brazil', code: 'BR' },
  { name: 'British Indian Ocean Territory', code: 'IO' },
  { name: 'Brunei Darussalam', code: 'BN' },
  { name: 'Bulgaria', code: 'BG' },
  { name: 'Burkina Faso', code: 'BF' },
  { name: 'Burundi', code: 'BI' },
  { name: 'Cambodia', code: 'KH' },
  { name: 'Cameroon', code: 'CM' },
  { name: 'Canada', code: 'CA' },
  { name: 'Cape Verde', code: 'CV' },
  { name: 'Cayman Islands', code: 'KY' },
  { name: 'Central African Republic', code: 'CF' },
  { name: 'Chad', code: 'TD' },
  { name: 'Chile', code: 'CL' },
  { name: 'China', code: 'CN' },
  { name: 'Christmas Island', code: 'CX' },
  { name: 'Cocos (Keeling) Islands', code: 'CC' },
  { name: 'Colombia', code: 'CO' },
  { name: 'Comoros', code: 'KM' },
  { name: 'Congo', code: 'CG' },
  { name: 'Congo, The Democratic Republic of the', code: 'CD' },
  { name: 'Cook Islands', code: 'CK' },
  { name: 'Costa Rica', code: 'CR' },
  { name: "Cote D'Ivoire", code: 'CI' },
  { name: 'Croatia', code: 'HR' },
  { name: 'Cuba', code: 'CU' },
  { name: 'Cyprus', code: 'CY' },
  { name: 'Czech Republic', code: 'CZ' },
  { name: 'Denmark', code: 'DK' },
  { name: 'Djibouti', code: 'DJ' },
  { name: 'Dominica', code: 'DM' },
  { name: 'Dominican Republic', code: 'DO' },
  { name: 'Ecuador', code: 'EC' },
  { name: 'Egypt', code: 'EG' },
  { name: 'El Salvador', code: 'SV' },
  { name: 'Equatorial Guinea', code: 'GQ' },
  { name: 'Eritrea', code: 'ER' },
  { name: 'Estonia', code: 'EE' },
  { name: 'Ethiopia', code: 'ET' },
  { name: 'Falkland Islands (Malvinas)', code: 'FK' },
  { name: 'Faroe Islands', code: 'FO' },
  { name: 'Fiji', code: 'FJ' },
  { name: 'Finland', code: 'FI' },
  { name: 'France', code: 'FR' },
  { name: 'French Guiana', code: 'GF' },
  { name: 'French Polynesia', code: 'PF' },
  { name: 'French Southern Territories', code: 'TF' },
  { name: 'Gabon', code: 'GA' },
  { name: 'Gambia', code: 'GM' },
  { name: 'Georgia', code: 'GE' },
  { name: 'Germany', code: 'DE' },
  { name: 'Ghana', code: 'GH' },
  { name: 'Gibraltar', code: 'GI' },
  { name: 'Greece', code: 'GR' },
  { name: 'Greenland', code: 'GL' },
  { name: 'Grenada', code: 'GD' },
  { name: 'Guadeloupe', code: 'GP' },
  { name: 'Guam', code: 'GU' },
  { name: 'Guatemala', code: 'GT' },
  { name: 'Guernsey', code: 'GG' },
  { name: 'Guinea', code: 'GN' },
  { name: 'Guinea-Bissau', code: 'GW' },
  { name: 'Guyana', code: 'GY' },
  { name: 'Haiti', code: 'HT' },
  { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
  { name: 'Holy See (Vatican City State)', code: 'VA' },
  { name: 'Honduras', code: 'HN' },
  { name: 'Hong Kong', code: 'HK' },
  { name: 'Hungary', code: 'HU' },
  { name: 'Iceland', code: 'IS' },
  { name: 'India', code: 'IN' },
  { name: 'Indonesia', code: 'ID' },
  { name: 'Iran, Islamic Republic Of', code: 'IR' },
  { name: 'Iraq', code: 'IQ' },
  { name: 'Ireland', code: 'IE' },
  { name: 'Isle of Man', code: 'IM' },
  { name: 'Israel', code: 'IL' },
  { name: 'Italy', code: 'IT' },
  { name: 'Jamaica', code: 'JM' },
  { name: 'Japan', code: 'JP' },
  { name: 'Jersey', code: 'JE' },
  { name: 'Jordan', code: 'JO' },
  { name: 'Kazakhstan', code: 'KZ' },
  { name: 'Kenya', code: 'KE' },
  { name: 'Kiribati', code: 'KI' },
  { name: "Korea, Democratic People'S Republic of", code: 'KP' },
  { name: 'Korea, Republic of', code: 'KR' },
  { name: 'Kuwait', code: 'KW' },
  { name: 'Kyrgyzstan', code: 'KG' },
  { name: "Lao People'S Democratic Republic", code: 'LA' },
  { name: 'Latvia', code: 'LV' },
  { name: 'Lebanon', code: 'LB' },
  { name: 'Lesotho', code: 'LS' },
  { name: 'Liberia', code: 'LR' },
  { name: 'Libyan Arab Jamahiriya', code: 'LY' },
  { name: 'Liechtenstein', code: 'LI' },
  { name: 'Lithuania', code: 'LT' },
  { name: 'Luxembourg', code: 'LU' },
  { name: 'Macao', code: 'MO' },
  { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
  { name: 'Madagascar', code: 'MG' },
  { name: 'Malawi', code: 'MW' },
  { name: 'Malaysia', code: 'MY' },
  { name: 'Maldives', code: 'MV' },
  { name: 'Mali', code: 'ML' },
  { name: 'Malta', code: 'MT' },
  { name: 'Marshall Islands', code: 'MH' },
  { name: 'Martinique', code: 'MQ' },
  { name: 'Mauritania', code: 'MR' },
  { name: 'Mauritius', code: 'MU' },
  { name: 'Mayotte', code: 'YT' },
  { name: 'Mexico', code: 'MX' },
  { name: 'Micronesia, Federated States of', code: 'FM' },
  { name: 'Moldova, Republic of', code: 'MD' },
  { name: 'Monaco', code: 'MC' },
  { name: 'Mongolia', code: 'MN' },
  { name: 'Montserrat', code: 'MS' },
  { name: 'Morocco', code: 'MA' },
  { name: 'Mozambique', code: 'MZ' },
  { name: 'Myanmar', code: 'MM' },
  { name: 'Namibia', code: 'NA' },
  { name: 'Nauru', code: 'NR' },
  { name: 'Nepal', code: 'NP' },
  { name: 'Netherlands', code: 'NL' },
  { name: 'Netherlands Antilles', code: 'AN' },
  { name: 'New Caledonia', code: 'NC' },
  { name: 'New Zealand', code: 'NZ' },
  { name: 'Nicaragua', code: 'NI' },
  { name: 'Niger', code: 'NE' },
  { name: 'Nigeria', code: 'NG' },
  { name: 'Niue', code: 'NU' },
  { name: 'Norfolk Island', code: 'NF' },
  { name: 'Northern Mariana Islands', code: 'MP' },
  { name: 'Norway', code: 'NO' },
  { name: 'Oman', code: 'OM' },
  { name: 'Pakistan', code: 'PK' },
  { name: 'Palau', code: 'PW' },
  { name: 'Palestinian Territory, Occupied', code: 'PS' },
  { name: 'Panama', code: 'PA' },
  { name: 'Papua New Guinea', code: 'PG' },
  { name: 'Paraguay', code: 'PY' },
  { name: 'Peru', code: 'PE' },
  { name: 'Philippines', code: 'PH' },
  { name: 'Pitcairn', code: 'PN' },
  { name: 'Poland', code: 'PL' },
  { name: 'Portugal', code: 'PT' },
  { name: 'Puerto Rico', code: 'PR' },
  { name: 'Qatar', code: 'QA' },
  { name: 'Reunion', code: 'RE' },
  { name: 'Romania', code: 'RO' },
  { name: 'Russian Federation', code: 'RU' },
  { name: 'RWANDA', code: 'RW' },
  { name: 'Saint Helena', code: 'SH' },
  { name: 'Saint Kitts and Nevis', code: 'KN' },
  { name: 'Saint Lucia', code: 'LC' },
  { name: 'Saint Pierre and Miquelon', code: 'PM' },
  { name: 'Saint Vincent and the Grenadines', code: 'VC' },
  { name: 'Samoa', code: 'WS' },
  { name: 'San Marino', code: 'SM' },
  { name: 'Sao Tome and Principe', code: 'ST' },
  { name: 'Saudi Arabia', code: 'SA' },
  { name: 'Senegal', code: 'SN' },
  { name: 'Serbia and Montenegro', code: 'CS' },
  { name: 'Seychelles', code: 'SC' },
  { name: 'Sierra Leone', code: 'SL' },
  { name: 'Singapore', code: 'SG' },
  { name: 'Slovakia', code: 'SK' },
  { name: 'Slovenia', code: 'SI' },
  { name: 'Solomon Islands', code: 'SB' },
  { name: 'Somalia', code: 'SO' },
  { name: 'South Africa', code: 'ZA' },
  { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
  { name: 'Spain', code: 'ES' },
  { name: 'Sri Lanka', code: 'LK' },
  { name: 'Sudan', code: 'SD' },
  { name: 'Suriname', code: 'SR' },
  { name: 'Svalbard and Jan Mayen', code: 'SJ' },
  { name: 'Swaziland', code: 'SZ' },
  { name: 'Sweden', code: 'SE' },
  { name: 'Switzerland', code: 'CH' },
  { name: 'Syrian Arab Republic', code: 'SY' },
  { name: 'Taiwan, Province of China', code: 'TW' },
  { name: 'Tajikistan', code: 'TJ' },
  { name: 'Tanzania, United Republic of', code: 'TZ' },
  { name: 'Thailand', code: 'TH' },
  { name: 'Timor-Leste', code: 'TL' },
  { name: 'Togo', code: 'TG' },
  { name: 'Tokelau', code: 'TK' },
  { name: 'Tonga', code: 'TO' },
  { name: 'Trinidad and Tobago', code: 'TT' },
  { name: 'Tunisia', code: 'TN' },
  { name: 'Turkey', code: 'TR' },
  { name: 'Turkmenistan', code: 'TM' },
  { name: 'Turks and Caicos Islands', code: 'TC' },
  { name: 'Tuvalu', code: 'TV' },
  { name: 'Uganda', code: 'UG' },
  { name: 'Ukraine', code: 'UA' },
  { name: 'United Arab Emirates', code: 'AE' },
  { name: 'United Kingdom', code: 'GB' },
  { name: 'United States', code: 'US' },
  { name: 'United States Minor Outlying Islands', code: 'UM' },
  { name: 'Uruguay', code: 'UY' },
  { name: 'Uzbekistan', code: 'UZ' },
  { name: 'Vanuatu', code: 'VU' },
  { name: 'Venezuela', code: 'VE' },
  { name: 'Viet Nam', code: 'VN' },
  { name: 'Virgin Islands, British', code: 'VG' },
  { name: 'Virgin Islands, U.S.', code: 'VI' },
  { name: 'Wallis and Futuna', code: 'WF' },
  { name: 'Western Sahara', code: 'EH' },
  { name: 'Yemen', code: 'YE' },
  { name: 'Zambia', code: 'ZM' },
  { name: 'Zimbabwe', code: 'ZW' },
];

// Load and populate countries dropdown
async function loadCountries() {
  const countrySelect = document.getElementById('country');

  countries.forEach((country) => {
    const option = document.createElement('option');
    option.value = country.code;
    option.textContent = country.name;
    countrySelect.appendChild(option);
  });
}

// Call loadCountries when the page loads
document.addEventListener('DOMContentLoaded', loadCountries);

// Floating input style
document
  .querySelectorAll('.form-group input, .form-group select')
  .forEach((field) => {
    field.addEventListener('blur', () => {
      if (field.value.trim()) {
        field.classList.add('has-content');
      } else {
        field.classList.remove('has-content');
      }
    });

    if (field.value.trim()) {
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

      window.location.href = './thank-you.html';
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

// Slider for testimonials
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
    // autoplayInterval = setInterval(() => {
    //   slide('next');
    // }, 10000);
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
