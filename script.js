// 1. Scroll Animation Logic (Cards slide up smoothly as she scrolls)
const cards = document.querySelectorAll('.card-content');

const observerOptions = {
    root: null,
    threshold: 0.15,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target); // Animates only once
        }
    });
}, observerOptions);

cards.forEach(card => {
    observer.observe(card);
});

// 2. Generate Floating Background Hearts
function createHeart() {
    const container = document.getElementById('hearts-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    
    // Randomize position, size, and speed
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's'; // Between 3s and 6s
    heart.style.fontSize = Math.random() * 15 + 15 + 'px'; // Between 15px and 30px
    
    container.appendChild(heart);
    
    // Remove heart after animation ends to save memory
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Keep creating hearts continuously
setInterval(createHeart, 400);

// 3. Surprise Button Action
const surpriseBtn = document.getElementById('surpriseBtn');
const hiddenMessage = document.getElementById('hiddenMessage');

surpriseBtn.addEventListener('click', () => {
    hiddenMessage.style.display = 'block';
    surpriseBtn.textContent = 'You mean a lot! ❤️';
    
    // Create an explosion of hearts when clicked
    for(let i=0; i<20; i++) {
        setTimeout(createHeart, i * 50);
    }
});