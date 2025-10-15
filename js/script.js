document.addEventListener('DOMContentLoaded', () => {

    // --- SLIDE DATA ---
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

    // --- DOM ELEMENTS ---
    const startSlide = document.querySelector('[data-slide-id="start"]');
    const contentSlide = document.querySelector('[data-slide-id="content-template"]');
    const startButton = document.querySelector('.start-button');
    const leftArrow = contentSlide.querySelector('.left-arrow');
    const rightArrow = contentSlide.querySelector('.right-arrow');
    
    const slideImage = document.getElementById('slide-image');
    const slideTitle = document.getElementById('slide-title');
    const slideText = document.getElementById('slide-text');

    let currentIndex = 0;

    // --- FUNCTIONS ---

    function updateContent(index) {
        const data = slideData[index];
        slideImage.src = data.image;
        slideImage.alt = data.alt;
        slideTitle.textContent = data.title;
        slideText.textContent = data.text;
    }

    function transitionSlides(slideOut, slideIn, direction) {
        slideIn.style.transform = direction === 'right' ? 'translateX(100%)' : 'translateX(-100%)';
        slideIn.classList.add('active');
        
        requestAnimationFrame(() => {
            slideIn.style.transform = 'translateX(0)';
            slideOut.style.transform = direction === 'right' ? 'translateX(-200%)' : 'translateX(200%)';
            slideOut.classList.remove('active');
        });
    }

    // --- EVENT LISTENERS ---
    
    startButton.addEventListener('click', () => {
        currentIndex = 0;
        updateContent(currentIndex);
        transitionSlides(startSlide, contentSlide, 'right');
    });

    rightArrow.addEventListener('click', () => {
        //Check if we are on the LAST content slide.
        if (currentIndex === slideData.length - 1) {
            // If yes, transition back to the start slide.
            transitionSlides(contentSlide, startSlide, 'right');
        } else {
            // Otherwise, just update the content to the next slide.
            currentIndex++;
            updateContent(currentIndex);
        }
    });

    leftArrow.addEventListener('click', () => {
        //Check if we are on the FIRST content slide.
        if (currentIndex === 0) {
            // If yes, transition back to the start slide.
            transitionSlides(contentSlide, startSlide, 'left');
        } else {
            // Otherwise, just update the content to the previous slide.
            currentIndex--;
            updateContent(currentIndex);
        }
    });

});

