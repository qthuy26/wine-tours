// Percent in progress bar
const chartProgressBarContent = document.querySelectorAll('.chart-progress-bar-content')
const chartPercent = document.querySelectorAll('.chart-percent')
for(let i = 0; i < chartPercent.length; i++) {
    chartPercent[i].textContent = chartProgressBarContent[i].getAttribute('data-percentage') + '%'
}


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const header = document.getElementById('header')

let prevScrollpos = window.pageYOffset
window.onscroll = () => {
    let currentScrollPos = window.pageYOffset
    if (prevScrollpos > currentScrollPos) {
        header.style.top = "0"
    } else {
        
        if(mobileNav.style.display == 'block') {
            header.style.top = '0'
        }
        else {
            header.style.top = "-70px"
        }
    }
    prevScrollpos = currentScrollPos
}



const mobileMenuIcon = $('.mobile-menu-icon')
const mobileNav = $('.mobile-nav')
const navLinks = $$('.nav-link')
const subNavLists = $$('.subnav-list')
const subNavItems = $$('.subnav-item')
const subSubNavLists = $$('.sub-subnav-list')
const subNavLinks = $$('.subnav-link.has-sub-subnav')
const navIconAngle = $$('.nav-icon-angle')
const subNavIconAngle = $$('.subnav-icon-angle')

function menuClicked() {
    if (mobileNav.style.display === "block") {
        mobileNav.style.display = "none"

    } else {
        mobileNav.style.display = "block"
    }
}

for(let i = 0; i < navLinks.length-1; i++) {
    navLinks[i].addEventListener('click', () => {
        if(subNavLists[i].style.display === 'block') {
            subNavLists[i].style.display = 'none'
            navIconAngle[i].style.transform = 'none'
        }
        else {
            subNavLists[i].style.display = 'block'
            navIconAngle[i].style.transform = 'rotate(90deg)'
        }
    })
}


for(let i = 0; i < subNavLinks.length; i++) {
    subNavLinks[i].addEventListener('click', () => {
        if(subSubNavLists[i].style.display === 'block') {
            subSubNavLists[i].style.display = 'none'
            subNavIconAngle[i].style.transform = 'none'
        }
        else {
            subSubNavLists[i].style.display = 'block'
            subNavIconAngle[i].style.transform = 'rotate(90deg)'

        }
    })
}


// Slider IMG
const prev = document.querySelector('.slider-btn-left')
const next = document.querySelector('.slider-btn-right')
const images1 = document.querySelectorAll('.slides')[0].children
const images2 = document.querySelectorAll('.slides')[1].children
const totalImages = images1.length
let index = 0;

prev.addEventListener('click', () => {
    nextImage('prev')
})

next.addEventListener('click', () => {
    nextImage('next')
})

function nextImage(direction) {
    if(direction == 'next') {
        index++
        if(index == totalImages) {
            index = 0
        }
    } 
    else {
        if(index == 0) {
            index = totalImages - 1
        } 
        else {
            index--
        }
    }

    for(let i = 0; i < images1.length; i++) {
        images1[i].classList.remove('main')
        images2[i].classList.remove('main')
    }
    images1[index].classList.add('main')
    images2[index].classList.add('main')
}

setInterval(function() {
    nextImage('next')
}, 5000);



// Modal sign in
const modal = $('.modal')
const userLogin = $('.user-login')
const modalContainer = $('.modal-container')
const authForms = $$('.auth-form')
const modalLogin = $('.modal-login')
const modalRegister = $('.modal-register')

userLogin.addEventListener('click', () => {
    modal.classList.add('open')
})

modal.addEventListener('click', () => {
    modal.classList.remove('open')
})

modalContainer.addEventListener('click', (e) => {
    e.stopPropagation()
})

authForms[0].style.display = 'block'



modalRegister.addEventListener('click', () => {
    authForms[0].style.display = 'none'
    authForms[1].style.display = 'block'
    modalLogin.style.backgroundColor = '#3abdc1'
    modalRegister.style.backgroundColor = 'var(--primary-color)'
})



modalLogin.addEventListener('click', () => {
    authForms[1].style.display = 'none'
    authForms[0].style.display = 'block'
    modalRegister.style.backgroundColor = '#3abdc1'
    modalLogin.style.backgroundColor = 'var(--primary-color)'
})


// BACK TO TOP BUTTON
mybutton = document.querySelector(".back-to-top");

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
