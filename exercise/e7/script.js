$(document).ready(function() {
    $('body').css('background-color', 'lightblue');
    
    $('.background').hide();
    
    for (let i = 0; i < 500; i++) {
        let block = `<div style="width:${i}px; height:100vw; background-color: hsl(${200 + i/5}, 100%, 50%)"></div>`;
        $('.foreground').append(block);
    }

    $('div').each(function() {
        $(this).on('mouseenter', function() {
            $(this).addClass('no-width').fadeOut(500);
        });
    });

    $('body').on('keypress', function() {
        console.log('key press');
        $('div').removeClass('no-width').fadeIn(500);
    });

    $('.background').on('click', function() {
        $(this).fadeToggle(500); 
    });

    $('.foreground').click(function() {
        $('body').css('background-color', function() {
            return $(this).css('background-color') == 'rgb(173, 216, 230)' ? 'blue' : 'lightblue'; // 'lightblue'와 'blue' 사이를 전환
        });
    });
});
