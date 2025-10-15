document.addEventListener('DOMContentLoaded', () => {

    function transitionSlides(slideOut, slideIn, direction) {
        // Position the incoming slide just off-screen
        slideIn.style.transform = direction === 'right' ? 'translateX(100%)' : 'translateX(-100%)';
        slideIn.classList.add('active');
        
        // Use requestAnimationFrame to ensure the browser applies the initial position before animating
        requestAnimationFrame(() => {
            // Animate the new slide into view
            slideIn.style.transform = 'translateX(0)';
            // Animate the old slide out of view
            slideOut.style.transform = direction === 'right' ? 'translateX(-100%)' : 'translateX(100%)';
            slideOut.classList.remove('active');
        });
    }


    const startSlide = document.querySelector('[data-slide-id="start"]');
    
    if (startSlide) {
        const slideData = [
            { image: "https://placehold.co/600x400/D3CAA5/242331?text=Analog+Audio", alt: "Placeholder for Analog Audio concept", title: "1. Understanding Analog Audio", text: "Vinyl records store sound waves as physical grooves. The needle reads these grooves, creating a pure, warm analog signal." },
            { image: "https://placehold.co/600x400/A27035/FFFFFF?text=The+Turntable", alt: "Placeholder for a Turntable", title: "2. The Turntable", text: "This is the heart of the system. It spins the record at a consistent speed and holds the tonearm." },
            { image: "https://placehold.co/600x400/533E2D/FFFFFF?text=The+Stylus", alt: "Placeholder for a record needle", title: "3. The Stylus (Needle)", text: "A tiny diamond or sapphire tip that sits in the record's groove, vibrating to read the sound information." },
            { image: "https://placehold.co/600x400/242331/D3CAA5?text=The+Amplifier", alt: "Placeholder for an audio amplifier", title: "4. The Amplifier (Receiver)", text: "The turntable sends a weak signal. The amplifier boosts it to a level that can power the speakers." },
            { image: "https://placehold.co/600x400/8A817C/FFFFFF?text=The+Speakers", alt: "Placeholder for speakers", title: "5. The Speakers", text: "Finally, the speakers convert the electrical signal from the amplifier back into the audible sound you hear." }
        ];

        const contentSlide = document.querySelector('[data-slide-id="content-template"]');
        const startButton = document.querySelector('.start-button');
        const leftArrow = contentSlide.querySelector('.left-arrow');
        const rightArrow = contentSlide.querySelector('.right-arrow');
        
        const slideImage = document.getElementById('slide-image');
        const slideTitle = document.getElementById('slide-title');
        const slideText = document.getElementById('slide-text');

        let currentIndex = 0;

        function updateContent(index) {
            const data = slideData[index];
            slideImage.src = data.image;
            slideImage.alt = data.alt;
            slideTitle.textContent = data.title;
            slideText.textContent = data.text;
        }

        startButton.addEventListener('click', () => {
            currentIndex = 0;
            updateContent(currentIndex);
            transitionSlides(startSlide, contentSlide, 'right');
        });

        rightArrow.addEventListener('click', () => {
            if (currentIndex === slideData.length - 1) {
                transitionSlides(contentSlide, startSlide, 'right');
            } else {
                currentIndex++;
                updateContent(currentIndex);
            }
        });

        leftArrow.addEventListener('click', () => {
            if (currentIndex === 0) {
                transitionSlides(contentSlide, startSlide, 'left');
            } else {
                currentIndex--;
                updateContent(currentIndex);
            }
        });
    }


    // LOGIC FOR THE SECOND Slider


    const setupButtons = document.querySelectorAll('.button-setups');

    // This "guard clause" checks if the setup buttons exist on the page.
    if (setupButtons.length > 0) {
        const setupSlideData = [
            { image: "images/SimpleSetup.png", text: "The name says it all - this first setup is as simple as it gets. All you need is an Orbit with built-in phono preamp and powered speakers. Connect the Orbit to your speaker’s RCA or 3.5 mm AUX input using the included cables and you’re good to go.Keep in mind that the simple setup requires powered speakers, which differ from the passive speakers that are mentioned in the next setup. Unsure which type of speakers you have? Passive speakers don't require electricity, so if your speakers have an electrical plug then it's safe to assume they're powered. Here are a few examples of different types of powered speakers:" },
            { image: "images/TraditionalSetup.png", text: "An oldie but goodie. First, you connect your Orbit to a stereo receiver (with a dedicated phono input) using the included RCA cables. Next, you connect your stereo receiver to bookshelf or floorstanding passive speakers using speaker wire. The receiver contains both (i) a phono preamp to amplify your turntable’s signal as well as (ii) a power amp to drive your passive speakers. This setup is a good bet if you have a number of sources you want to connect to your speakers." },
            { image: "images/ModularSetup.png", text: "Not all amplifiers have a dedicated phono input. With the modular setup, you connect your Orbit to an external phono preamp (or go for the built-in option – it’s fully bypassable) which is then connected to a separate power amplifier. The power amp is then connected to passive speakers. This is very similar to the traditional setup – except that the phono preamp and power amplifier are separated out. Keeping your setup modular will make it easier to upgrade components down the line." },
            { image: "images/HeadphoneSetup.png", text: "Do your roommates hate your music? Or maybe you just prefer the fidelity and convenience of headphones? If this sounds like you, then look no further than a streamlined headphone setup. Connect your Orbit with built-in phono preamp to a headphone amp and you’re ready to toss on those cans. Many stereo receivers have headphone outputs, so if you want to listen through both headphones and speakers, then the traditional setup might be for you." }
        ];

        const setupSlides = document.querySelectorAll('.setup-slide');
        let currentSetupIndex = 0;

        function initializeSetupSlides() {
            setupSlides.forEach((slide, index) => {
                const data = setupSlideData[index];
                if (data) {
                    slide.querySelector('.setup-slide-image').src = data.image;
                    slide.querySelector('.setup-slide-text').textContent = data.text;
                }
            });
        }

        setupButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetIndex = parseInt(button.dataset.targetIndex);
                if (targetIndex === currentSetupIndex) return;

                const direction = targetIndex > currentSetupIndex ? 'right' : 'left';
                const currentSlide = setupSlides[currentSetupIndex];
                const nextSlide = setupSlides[targetIndex];

                transitionSlides(currentSlide, nextSlide, direction);

                document.querySelector('.button-setups.active-setup-button').classList.remove('active-setup-button');
                button.classList.add('active-setup-button');

                currentSetupIndex = targetIndex;
            });
        });

        initializeSetupSlides();
    }
});

