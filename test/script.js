let isScrolling = false; // 스크롤 중인지 아닌지를 체크하기 위한 변수

document.addEventListener('wheel', function(e) {
  if (isScrolling) return; // 이미 스크롤 중이라면 이벤트 무시
  isScrolling = true;

  setTimeout(() => {
    isScrolling = false; // 일정 시간이 지난 후에는 다시 스크롤 가능하도록 설정
  }, 1500); // 1500ms 동안은 스크롤 이벤트를 무시

  const direction = e.deltaY > 0 ? 1 : -1; // 스크롤 방향 판단
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
