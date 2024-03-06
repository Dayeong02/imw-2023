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
    oscillator.type = 'sine'; // Sine wave
    oscillator.frequency.setValueAtTime(mapKeyToFrequency(key), context.currentTime); // Frequency in Hz
    oscillator.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.5); // Play sound for 0.5 seconds
}

function mapKeyToFrequency(key) {
    // Map keyboard keys to different frequencies
    const baseFrequency = 440; // A4 frequency
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
    // Add more sophisticated visual feedback as needed
}
