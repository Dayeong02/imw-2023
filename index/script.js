// $(document).ready(function(){
//     $(document).mousemove(function(e){
//         $(".mouse").css({
//             left: e.pageX,
//             top: e.pageY
//         });
//     });

// });


document.addEventListener("mousemove", function(e) {
    var cursor = document.getElementById("cursor");
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});

document.addEventListener("click", function(e) {
    // 클릭한 요소가 "a" 태그인 경우에는 폭죽 효과를 발생시키지 않습니다.
    if (e.target.tagName === "A") {
        return;
    }

    var cursor = document.getElementById("cursor");
    var explosionRadius = 100; // Change the radius of explosion here
    for (var i = 0; i < 50; i++) { // Change the number of confetti here
        var confetti = document.createElement("div");
        confetti.className = "confetti";
        var x = e.pageX + Math.random() * explosionRadius - explosionRadius / 2;
        var y = e.pageY + Math.random() * explosionRadius - explosionRadius / 2;
        confetti.style.left = x + "px";
        confetti.style.top = y + "px";
        /* 색상을 파스텔톤으로 변경합니다. */
        confetti.style.backgroundColor = "hsl(" + (Math.random() * 360) + ", 80%, 80%)"; // Adjust saturation and lightness
        document.body.appendChild(confetti);

        setTimeout(function() {
            document.body.removeChild(confetti);
        }, 500);
    }
});

