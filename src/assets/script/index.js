const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const header = $('.header');

// slide event
let slide = function (selectorGroup, selectorItem, selectorPrev, selectorNext, selectorDot) {
    const slideGroup = $(selectorGroup);
    const slideItem = $(selectorItem);
    const btnPrev = $(selectorPrev);
    const btnNext = $(selectorNext);
    const lengthSlide = $$(selectorItem).length;
    console.log(lengthSlide+ "so slide")
    const slideDots =  $$(selectorDot);

    let translateX = 0;
    let currentSlide = 0;
    // let setInterv = setInterval(() => {
    //     btnNext.click();
    // }, 5000);

    btnPrev.addEventListener("click", function (e) {
        e.preventDefault();
        let slideWidth = slideItem.clientWidth;
        if (slideDots) {
            slideDots[currentSlide].classList.remove('active');
        }

        if (currentSlide > 0) {
            translateX = translateX + slideWidth;
            currentSlide--;

        } else if (currentSlide === 0) {
            translateX = - slideWidth * (lengthSlide - 1);
            currentSlide = lengthSlide - 1;
        }

        if (slideDots) {
            slideDots[currentSlide].classList.add('active');
        }
        slideGroup.style.transform = `translateX(${translateX}px)`;
    })

    btnNext.addEventListener("click", function (e) {
        e.preventDefault();
        let slideWidth = slideItem.clientWidth;
        if (slideDots) {
            slideDots[currentSlide].classList.remove('active');
        }

        if (currentSlide === lengthSlide - 1) {
            translateX = 0;
            currentSlide = 0;
        } else {
            translateX = translateX - slideWidth;
            currentSlide++;
        }
        if (slideDots) {
            slideDots[currentSlide].classList.add('active');
        }
        slideGroup.style.transform = `translateX(${translateX}px)`;
    })


};


let priceToString = function (price) {
    let arr = Array.from(String(price)).reverse();
    let string = '';
    arr.forEach((char, index) => {
        if (index % 3 === 0 && index !== 0) {
            string += '.';
        }
        string += char;
    })
    return Array.from(string).reverse().join('');
}

let start = async function () {
    slide('.banner .slide-group', '.banner .slide-item', '.banner .slide-btn-prev', '.banner .slide-btn-next', '.banner .slide-filter-dot');
    
}

start()

