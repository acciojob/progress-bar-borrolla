//your JS code here. If required.
// script.js

const circles = document.querySelectorAll('.circle');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
let currentActive = 0;

nextButton.addEventListener('click', () => {
    currentActive++;
    
    if (currentActive > circles.length - 1) {
        currentActive = circles.length - 1; // Prevent going out of bounds
        nextButton.disabled = true; // Disable next button at last circle
    }
    
    updateCircles();
});

prevButton.addEventListener('click', () => {
    currentActive--;
    
    if (currentActive < 0) {
        currentActive = 0; // Prevent going out of bounds
        prevButton.disabled = true; // Disable previous button at first circle
    }
    
    updateCircles();
});

function updateCircles() {
    circles.forEach((circle, index) => {
        if (index < currentActive + 1) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
        
        // Enable/Disable buttons based on the current active circle
        prevButton.disabled = currentActive === 0;
        nextButton.disabled = currentActive === circles.length - 1;
        
        // Update progress line width based on active circles
        const progressLine = document.querySelector('.progress-line');
        const widthPercentage = (currentActive / (circles.length - 1)) * 100;
        progressLine.style.width = `${widthPercentage}%`;
    });
}
