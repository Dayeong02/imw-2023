document.addEventListener('DOMContentLoaded', () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const visualsElement = document.getElementById('visuals');

    document.addEventListener('keydown', (e) => {
        playTone(audioContext, e.key);
        showVisualFeedback(visualsElement, e.key);
    });
});

function playTone(context, key) {
    const oscillator = context.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(mapKeyToFrequency(key), context.currentTime);
    oscillator.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.5);
}

function mapKeyToFrequency(key) {
    const baseFrequency = 440;
    const keyMappings = {
        'a': 1,
        's': 2,
        'd': 3,
        'f': 4,
        'g': 5,
        'h': 6,
        'j': 7,
        'k': 8,
        'l': 9,
    };
    return baseFrequency * (keyMappings[key.toLowerCase()] || 1);
}

function showVisualFeedback(element, key) {
    element.innerHTML = `You pressed "${key}".`;
}

document.addEventListener('DOMContentLoaded', () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const visualsElement = document.getElementById('visuals');

    document.addEventListener('keydown', (e) => {
        playTone(audioContext, e.key);
        showVisualFeedback(visualsElement, e.key);
    });

    document.addEventListener('keydown', function(e) {
        const note = document.createElement('div');
        note.classList.add('note');
        note.textContent = '♪'; 
        note.style.left = `${Math.random() * window.innerWidth}px`;
        note.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
      
        document.getElementById('visuals').appendChild(note);
      
        note.addEventListener('animationend', function() {
          note.remove();
        });
      });
});
