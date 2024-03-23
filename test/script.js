let isScrolling = false;

document.addEventListener('wheel', function(e) {
  if (isScrolling) return;
  isScrolling = true;

  setTimeout(() => {
    isScrolling = false;
  }, 1500);

  const direction = e.deltaY > 0 ? 1 : -1; 
  moveToSection(direction);
});

function moveToSection(direction) {
  const sections = document.querySelectorAll('.section');
  let currentSectionIndex = getCurrentSectionIndex();

  if (direction === 1 && currentSectionIndex < sections.length - 1) {
    currentSectionIndex++;
  } else if (direction === -1 && currentSectionIndex > 0) {
    currentSectionIndex--;
  }

  window.scrollTo({
    top: sections[currentSectionIndex].offsetTop,
    behavior: 'smooth'
  });
}

function getCurrentSectionIndex() {
  const sections = document.querySelectorAll('.section');
  const currentScrollPosition = window.pageYOffset;
  let currentSectionIndex = 0;

  sections.forEach((section, index) => {
    if (currentScrollPosition >= section.offsetTop) {
      currentSectionIndex = index;
    }
  });

  return currentSectionIndex;
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.top-bar').addEventListener('click', function(e) {
    e.preventDefault(); 
    scrollToSection('section1');
  });

  document.querySelector('.left-bar').addEventListener('click', function(e) {
    e.preventDefault();
    scrollToSection('section2');
  });

  document.querySelector('.bottom-bar').addEventListener('click', function(e) {
    e.preventDefault();
    scrollToSection('section3');
  });

  document.querySelector('.right-bar').addEventListener('click', function(e) {
    e.preventDefault();
    scrollToSection('section4');
  });

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  }
});

//Cursor
document.addEventListener('mousemove', function(e) {
    const cursor = document.getElementById('cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});


const clickables = document.querySelectorAll('a, button, input[type="submit"], input[type="image"], .top-bar, .left-bar, .bottom-bar, .right-bar');
clickables.forEach((element) => {
    element.addEventListener('mouseover', function() {
        const cursor = document.getElementById('cursor');
        cursor.style.width = '50px'; 
        cursor.style.height = '50px';
        cursor.style.opacity = '0.4';
    });
    element.addEventListener('mouseout', function() {
        const cursor = document.getElementById('cursor');
        cursor.style.width = '30px';
        cursor.style.height = '30px';
        cursor.style.opacity = '1';
    });
});

// Background
function animateGradientBackground() {
  let position = 0;
  let direction = 1;
  let speed = 1.0;

  function changeColor() {
      position += speed * direction;
      const gradientColor = `linear-gradient(to left, #ffecd2 ${position}%, #fcb69f ${position + 100}%)`;
      document.body.style.backgroundImage = gradientColor;


      if (position <= -100 || position >= 100) {
          direction *= -1;
      }

      requestAnimationFrame(changeColor);
  }

  changeColor();
}

animateGradientBackground();


//Typing effect
function typeWriter(element, text, i = 0) {
  if (i < text.length) {
      element.innerText = text.substring(0, i + 1);
      i++;
      setTimeout(() => {
          typeWriter(element, text, i);
      }, 150);
  }
}


function startTypingForTitle(titleElement, titleText) {
  typeWriter(titleElement, titleText);
}


function startTypingOnScroll() {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
      const title = section.querySelector('.title');
      if (isElementInViewport(title) && !title.classList.contains('typing')) {
          title.classList.add('typing');
          const titleText = title.innerText;
          startTypingForTitle(title, titleText);
      }
  });
}


function isElementInViewport(element) {
  const bounding = element.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

document.addEventListener('DOMContentLoaded', startTypingOnScroll);

window.addEventListener('scroll', startTypingOnScroll);


document.addEventListener('scroll', function() {
  const fadeIns = document.querySelectorAll('.fade-in');

  fadeIns.forEach((fade, index) => {
      const bounding = fade.getBoundingClientRect();
      const isVisible = (
          bounding.top >= 0 &&
          bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );

      if (isVisible) {
          setTimeout(() => {
              fade.classList.add('show');
          }, index * 200);
      }
  });
});


document.querySelector('.go-to-top').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({top: 0, behavior: 'smooth'});
});


