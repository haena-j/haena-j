document.addEventListener('DOMContentLoaded', () => {
    const heroH1 = document.querySelector('.hero-text h1');
    const textToType = "Hi, I'm a Frontend Developer.";
    let index = 0;

    function type() {
        if (index < textToType.length) {
            heroH1.textContent += textToType.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust typing speed here (in ms)
        } else {
            // Add a blinking cursor effect after typing is complete
            heroH1.style.borderRight = '2px solid #a0c4ff';
            setInterval(() => {
                heroH1.style.borderRightColor = heroH1.style.borderRightColor === 'transparent' ? '#a0c4ff' : 'transparent';
            }, 500);
        }
    }

    type();
});
