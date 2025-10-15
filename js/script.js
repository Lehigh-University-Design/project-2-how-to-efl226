// Start JS script code, feel free to not use this or remove it
document.addEventListener('DOMContentLoaded', function() {


//Data for first page clide function
const slideData = [
        {
            image: "https://placehold.co/600x400/D3CAA5/242331?text=Analog+Audio",
            alt: "Placeholder for Analog Audio concept",
            title: "1. Understanding Analog Audio",
            text: "Vinyl records store sound waves as physical grooves. The needle reads these grooves, creating a pure, warm analog signal."
        },
        {
            image: "https://placehold.co/600x400/A27035/FFFFFF?text=The+Turntable",
            alt: "Placeholder for a Turntable",
            title: "2. The Turntable",
            text: "This is the heart of the system. It spins the record at a consistent speed and holds the tonearm."
        },
        {
            image: "https://placehold.co/600x400/533E2D/FFFFFF?text=The+Stylus",
            alt: "Placeholder for a record needle",
            title: "3. The Stylus (Needle)",
            text: "A tiny diamond or sapphire tip that sits in the record's groove, vibrating to read the sound information."
        },
        {
            image: "https://placehold.co/600x400/242331/D3CAA5?text=The+Amplifier",
            alt: "Placeholder for an audio amplifier",
            title: "4. The Amplifier (Receiver)",
            text: "The turntable sends a weak signal. The amplifier boosts it to a level that can power the speakers."
        },
        {
            image: "https://placehold.co/600x400/8A817C/FFFFFF?text=The+Speakers",
            alt: "Placeholder for speakers",
            title: "5. The Speakers",
            text: "Finally, the speakers convert the electrical signal from the amplifier back into the audible sound you hear."
        }
    ];
    // Selecting elements from the DOM
    const startSlide = document.querySelector('[data-slide-id="start")]');
    const contentSlide = document.querySelector('[data-slide-id="content-template")]');
    const startButton = document.querySelector('[data-slide-id="start-button")]');
    const leftArrow = document.querySelector('[data-slide-id="left-arrow")]');
    const rightArrow = document.querySelector('[data-slide-id="right-arrow")]');
    
    // Elements within the content slide
    const slideImage = contentSlide.getElementById('.slide-image');
    const slideTitle = contentSlide.getElementById('.slide-title');
    const slideText = contentSlide.getElementById('.slide-text');

    let currentSlideIndex = 0;

    // Function to update the slide content
    function updateContent(index) {
        const data = slideData[index];
        slideImage.src = slide.image;
        slideImage.alt = slide.alt;
        slideTitle.textContent = data.title;
        slideText.textContent = data.text;
    }

    function transitionSlides(slideOut, slideIn, direction) {

        slideIn.style.transform = direction === 'right' ? 'translateX(100%)' : 'translateX(-100%)';
        slideIn.classList.add('active');

        requestAnimationFrame(() => {
            slideIn.style.transform = 'translateX(0)';
            slideOut.style.transform = direction === 'right' ? 'translateX(-100%)' : 'translateX(100%)';
            slideOut.classList.remove('active');
        });
    }

    //Event listeners for navigation buttons
    startButton.addEventListener('click', () => {
        currentIndex = 0;
        updateContent(currentIndex);
        transitionSlides(startSlide, contentSlide, 'right');
    });
    rightArrow.addEventListener('click', () => {
        const nextIndex = (currentIndex + 1) % slideData.length;
        updateContent(nextIndex);
        currentIndex = nextIndex;
    });
    leftArrow.addEventListener('click', () => {
        const prevIndex = (currentIndex - 1 + slideData.length) % slideData.length;
        updateContent(prevIndex);
        currentIndex = prevIndex;
    });
    


});