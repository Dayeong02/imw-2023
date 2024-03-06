async function fetchDogImage() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        const imageUrl = data.message;
        document.getElementById('dog-image').innerHTML = `
            <img src="${imageUrl}" alt="Random Dog">
        `;
    } catch (error) {
        console.error('Error fetching dog image:', error);
    }
}