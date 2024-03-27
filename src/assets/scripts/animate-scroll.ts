function scrollAnimate() {
    const elements = $('.scroll-anim');

    for (let i = 0; i < elements.length; i++) {
        const windowHeight = window.innerHeight;
        const topRect = elements[i].getBoundingClientRect().top;

        if (topRect < windowHeight) {
            elements[i].classList.add('scroll-anim-reveal');
        } else {
            elements[i].classList.remove('scroll-anim-reveal');
        }
    }
}

window.addEventListener('scroll', scrollAnimate);
