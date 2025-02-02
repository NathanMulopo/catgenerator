const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const gif = document.querySelector('.gif');

yesBtn.addEventListener('click', () => {
    alert('Great! Cats are awesome!');
    gif.src = 'https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif';
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
