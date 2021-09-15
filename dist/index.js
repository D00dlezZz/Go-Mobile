const btn = document.getElementById('btn');
const infoBtn = document.getElementById('rules');
const blockInfo = document.getElementById('blockInfo');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');

btn.addEventListener('click', () => {
    console.log('Button clicked')
});

infoBtn.addEventListener('click', () => {
    blockInfo.style.display = 'block';
    overlay.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    blockInfo.style.display = 'none';
    overlay.style.display = 'none';
});