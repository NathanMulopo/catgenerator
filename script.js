const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const gif = document.querySelector('.gif');

const API_KEY = '8jK5zPqTj4iQW7rbth5NOaAcReeGazDG';  // Your actual API key
const API_URL = () => `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=cat&rating=g&timestamp=${new Date().getTime()}`;

yesBtn.addEventListener('click', async () => {
    try {
        const response = await fetch(API_URL());
        const data = await response.json();
        
        if (data.data && data.data.images) {
            const imageUrl = data.data.images.original.url;
            gif.src = imageUrl;
        } else {
            console.error('No GIF found:', data);
            alert('No cat GIF found! Try again.');
        }
    } catch (error) {
        console.error('Error fetching GIF:', error);
        alert('Failed to load a cat GIF. Try again!');
    }
});

noBtn.addEventListener('mouseover', () => {
    // Move the "No" button randomly within the wrapper
    const wrapper = document.querySelector('.wrapper');
    const maxX = wrapper.clientWidth - noBtn.clientWidth;
    const maxY = wrapper.clientHeight - noBtn.clientHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});



