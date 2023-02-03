const images = document.querySelectorAll('.slide-in');

const checkSlide = (e) => {
    images.forEach(image => {
        const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;
        const imageBottom = image.offsetTop + image.height;
        const isHalfway = slideInAt > image.offsetTop;
        const isNotPast = window.scrollY < imageBottom;
        if(isHalfway && isNotPast) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    })
}

window.addEventListener('scroll', debounce(checkSlide));

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}