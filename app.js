// ANIMATION

const firstHeaders = document.querySelectorAll('h1');
const button = document.querySelectorAll('button');
const arrows = document.querySelectorAll('.arrow');

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entrie) => {

        //console.log(entrie);
        if(entrie.isIntersecting) {

            entrie.target.classList.add('show');
        }
    });
});

firstHeaders.forEach((el) => {observer.observe(el)});
button.forEach((el) => {observer.observe(el)});


const newObservar = new IntersectionObserver((entries) => {

    entries.forEach((entrie) => {

        if(entrie.isIntersecting) {
        
            if(document.getElementsByClassName('arrow')) {

                setInterval(() => {

                    //console.log('1')
                    entrie.target.classList.add('down')
                }, 2000)
            }
            if(document.getElementsByClassName('down')){
               setInterval(() => {

                   //console.log('2')
                   entrie.target.classList.remove('down')
                }, 10000)
            }
            
        }
    })
});

arrows.forEach((el) => {newObservar.observe(el)});


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
