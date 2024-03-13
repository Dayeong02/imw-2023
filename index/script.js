$(document).ready(function(){
    $(document).mousemove(function(e){
        $(".mouse").css({
            left: e.pageX,
            top: e.pageY
        });
    });

});

document.addEventListener("DOMContentLoaded", function() {
    // 링크 클릭 시 페이지 이동 처리
    var links = document.querySelectorAll("a");
    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // 기본 동작(페이지 이동) 방지

            var url = this.getAttribute("href"); // 클릭된 링크의 href 속성 값 가져오기

            // 애니메이션 효과 적용 (예: fadeOut)
            document.querySelector(".first-page").style.opacity = 0;

            // 일정 시간(예: 500ms) 후 새로운 페이지 로드 및 애니메이션 효과 적용 (예: fadeIn)
            setTimeout(function() {
                // 페이지 이동
                window.location.href = url;
            }, 500);
        });
    });
});
