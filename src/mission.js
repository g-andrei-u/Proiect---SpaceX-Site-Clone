// NUMBER ANIMATION

const number = document.getElementsByClassName('number');

const numberAnimation = (maxNumber, place) => {  
    let showNumber = 0;
    let closeNumber = maxNumber - 20;
    let finalNumber = maxNumber - 4;

    setInterval(() => {

        if(maxNumber - 20 > showNumber) {

            showNumber++
            //console.log(showNumber);
            place.innerHTML = showNumber.toString();
        }
    }, 10)

    setInterval(() => {

        if(showNumber === maxNumber - 20 && closeNumber != maxNumber - 4 && showNumber === maxNumber - 20) {

            closeNumber++
            //console.log(closeNumber);
            place.innerHTML = closeNumber.toString();
        }
    }, 110)

    setInterval(() => {

        if(closeNumber === maxNumber - 4 && finalNumber != maxNumber && showNumber === maxNumber - 20) {

            finalNumber++
            //console.log(finalNumber);
            place.innerHTML = finalNumber.toString();
        }

        else if(finalNumber === maxNumber) {
            place.innerHTML = maxNumber.toString();
        }
    }, 450)
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entrie) => {

        if(entrie.isIntersecting) {

            numberAnimation(224, number[0]);
            numberAnimation(186, number[1]);
            numberAnimation(158, number[2]);
        }
    })
});

observer.observe(number[0]);


// DATES ANIMATION

const dateButtons = document.getElementsByClassName('buttonDate');
const dateSection = document.getElementById('date');
const page2008 = document.getElementById('center-left-2008');
const page2012 = document.getElementById('center-left-2012');
const page2016 = document.getElementById('center-left-2016');
const page2020 = document.getElementById('center-left-2020');

dateButtons[0].onclick = function() {

    dateButtons[0].classList.add('active');
    page2008.classList.add('open2008');
    dateSection.classList.add('open2008');
    if(document.getElementsByClassName('open2012') || document.getElementsByClassName('open2016') || document.getElementsByClassName('open2020')) {

        dateButtons[1].classList.remove('active');
        page2012.classList.remove('open2012');
        dateSection.classList.remove('open2012');
        dateButtons[2].classList.remove('active');
        page2016.classList.remove('open2016');
        dateSection.classList.remove('open2016');
        dateButtons[3].classList.remove('active');
        page2020.classList.remove('open2020');
        dateSection.classList.remove('open2020');
    }
};

dateButtons[1].onclick = function() {

    dateButtons[1].classList.add('active');
    page2012.classList.add('open2012');
    dateSection.classList.add('open2012');
    if(document.getElementsByClassName('open2008') || document.getElementsByClassName('open2016') || document.getElementsByClassName('open2020')) {

        dateButtons[0].classList.remove('active');
        page2008.classList.remove('open2008');
        dateSection.classList.remove('open2008');
        dateButtons[2].classList.remove('active');
        page2016.classList.remove('open2016');
        dateSection.classList.remove('open2016');
        dateButtons[3].classList.remove('active');
        page2020.classList.remove('open2020');
        dateSection.classList.remove('open2020');
    }
};

dateButtons[2].onclick = function() {

    dateButtons[2].classList.add('active');
    page2016.classList.add('open2016');
    dateSection.classList.add('open2016');
    if(document.getElementsByClassName('open2008') || document.getElementsByClassName('open2012') || document.getElementsByClassName('open2020')) {

        dateButtons[0].classList.remove('active');
        page2008.classList.remove('open2008');
        dateSection.classList.remove('open2008');
        dateButtons[1].classList.remove('active');
        page2012.classList.remove('open2012');
        dateSection.classList.remove('open2012');
        dateButtons[3].classList.remove('active');
        page2020.classList.remove('open2020');
        dateSection.classList.remove('open2020');
    }
};

dateButtons[3].onclick = function() {

    dateButtons[3].classList.add('active');
    page2020.classList.add('open2020');
    dateSection.classList.add('open2020');
    if(document.getElementsByClassName('open2008') || document.getElementsByClassName('open2012') || document.getElementsByClassName('open2016') ) {

        dateButtons[0].classList.remove('active');
        page2008.classList.remove('open2008');
        dateSection.classList.remove('open2008');
        dateButtons[1].classList.remove('active');
        page2012.classList.remove('open2012');
        dateSection.classList.remove('open2012');
        dateButtons[2].classList.remove('active');
        page2016.classList.remove('open2016');
        dateSection.classList.remove('open2016');
    }
};


// TEXT ANIMATION

const firstHeaders = document.querySelectorAll('h1');
const secondHeaders = document.querySelectorAll('h2');
const paragraps = document.querySelectorAll('p');
const button = document.querySelectorAll('button');

const observer2 = new IntersectionObserver((entries) => {

    entries.forEach((entrie) => {

        //console.log(entrie);
        if(entrie.isIntersecting) {

            entrie.target.classList.add('show');
        }
    });
});

firstHeaders.forEach((el) => {observer2.observe(el)});
button.forEach((el) => {observer2.observe(el)});
secondHeaders.forEach((el) => {observer2.observe(el)});
paragraps.forEach((el) => {observer2.observe(el)});

// SIDEBAR


const main = document.querySelector('main');
const header = document.getElementById('nav1');
const sidebar = document.getElementById('sidebar');
const hamburgher = document.getElementById('hamburger');
const sideLinks = document.querySelectorAll('.sideLinks');


hamburgher.onclick = () => {

    if(!sidebar.active) {

        sidebar.classList.toggle('active');
        sideLinks.forEach((el) => {

            el.classList.toggle('open');
        });
    }

    main.onclick = () =>  {

        if(document.getElementsByClassName('active')) {

            //console.log('2')
            sidebar.classList.remove('active');
            sideLinks.forEach(el => el.classList.remove('open'));
        }
    }

    header.onclick = () => {

        if(document.getElementsByClassName('active')) {

            sidebar.classList.remove('active');
            sideLinks.forEach(el => el.classList.remove('open'));
        }
    }
};