// Select all the .rounded-box and .vertical-line elements
const roundedBoxes = document.querySelectorAll('.rounded-box');
const verticalLines = document.querySelectorAll('.vertical-line');

// Apply animation delay to each box dynamically
roundedBoxes.forEach((box, index) => {
    box.style.animationDelay = `${index * 0.3}s`; // Adjust the delay as needed
});

// Apply animation delay to each box dynamically
verticalLines.forEach((box, index) => {
    box.style.animationDelay = `${index * 0.3}s`; // Adjust the delay as needed
});

// Function to fade in the vertical lines
function fadeInVerticalLines() {
    const verticalLines = document.querySelectorAll('.vertical-line');

    // Loop through the vertical lines and apply the fade-in effect
    verticalLines.forEach((line) => {
        line.style.animation = 'fadeInAnimation ease 1s';
        line.style.opacity = '1';
    });
}

// Delay the execution of fadeInVerticalLines by 2 seconds after page load
window.addEventListener('load', () => {
    setTimeout(fadeInVerticalLines, 1700);
});

// Add the rounded-box.zoom class when the box is towards the top of the page
window.addEventListener('scroll', () => {
    let closestBox = null;
    let closestDistance = Infinity;

    document.querySelectorAll('.rounded-box').forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const distance = Math.abs(window.innerHeight / 5 - boxTop); // One third from the top of the viewport

        if(distance < closestDistance) {
            closestBox = box;
            closestDistance = distance;
        }
    });

    if(closestBox) {
        document.querySelectorAll('.rounded-box').forEach(box => {
            box.classList.remove('zoomed');
        });
        closestBox.classList.add('zoomed');
    }
});

// Add typing text animation to class with typing-text
const textElement = document.querySelector('.typing-text');
const texts = ["blood results...", "DNA Data...", "Health conditions...", "contact information..."]; // Replace with your desired texts
const permanentText = "Your"; // Permanent part of the text
const typingSpeed = 50; // Adjust typing speed in milliseconds


let textIndex = 0;
let charIndex = 0;
let isErasing = false;

function typeText() {
    const currentText = isErasing ? texts[textIndex].slice(0, charIndex) : texts[textIndex].slice(0, charIndex + 1);
    textElement.textContent = permanentText + " " + currentText;
    textElement.style.visibility = 'visible'; // Make the green background visible

    if (!isErasing && charIndex === texts[textIndex].length) {
        isErasing = true;
        setTimeout(typeText, 1000); // Wait for 1 second before erasing
    } else if (isErasing && charIndex === 0) {
        isErasing = false;
        textIndex = (textIndex + 1) % texts.length; // Cycle through texts
        setTimeout(typeText, 800); // Wait for 1 second before typing the next text
    } else {
        charIndex = isErasing ? charIndex - 1 : charIndex + 1;
        setTimeout(typeText, typingSpeed);
    }
}

// Start the typing animation
setTimeout(typeText, 500);