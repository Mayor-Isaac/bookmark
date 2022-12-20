'use strict'
const navs = document.querySelectorAll('nav')
const headerNav = document.querySelector('header nav ul')
const showMenu = document.querySelector('.show-menu')
const headerContainer = document.querySelector('header .container')
const hero = document.querySelector('.hero')
const about = document.querySelector('.about')
const tabs = document.querySelectorAll('.tab')
const browsers = document.querySelectorAll('.browser')
const questions = document.querySelectorAll('.question')


// STYLING NAVBAR IN MOBILE VERSION
const myDiv = document.createElement('div')
myDiv.classList.add('close-menu')
myDiv.innerHTML = '<img src="./images/icon-close.svg" alt="">'
headerNav.prepend(myDiv)

showMenu.addEventListener('click', function(){
    headerNav.style.display = 'flex'
    myDiv.addEventListener('click', function(){
        headerNav.style.display = 'none'
    })
})

// IMPLEMENTING SMOOTH SCROLLING
navs.forEach(function(nav){
    nav.addEventListener('click', function(e){
        e.preventDefault()
        if(e.target.classList.contains('nav__link')){
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior:'smooth'})}
    })
})
document.querySelectorAll('.logo').forEach(function(logo){
    logo.addEventListener('click', function(e){
        e.preventDefault()
        window.scroll({behavior:'smooth', top:0})
})
})
//IMPLEMENTING STICKY NAVIGATION

const ObserverFn = function (entries, headerObserver) {
    const [entry] = entries;
    if (entry.isIntersecting === false) {
      headerContainer.classList.add('sticky');
    } else {
      headerContainer.classList.remove('sticky');
    }
  };
  const observerObj = {
    root: null,
    threshold: 0,
    rootMargin: '-110px',
  };
  const headerObserver = new IntersectionObserver(ObserverFn, observerObj);
  headerObserver.observe(hero);
  

//   BUILDING TAB COMPONENT
about.addEventListener('click', function(e){
    if(e.target.tagName === 'P'){
        this.querySelectorAll('p').forEach(function(ele){
            ele.classList.remove('about--active')
        })
        e.target.classList.add('about--active')
        tabs.forEach(function(tab){
            tab.classList.remove('tab__active')
            document.querySelector(`.tab--${e.target.dataset.tab}`).classList.add('tab__active')
        })
    }
})
// STYLING THE BROWSERS COMPONENT (STEP) DYNAMICALLY
browsers.forEach(function(browser,index){
    browser.style.marginTop = `${90*index}px`
    if(window.innerWidth < 615){
    browser.style.marginTop = `0px`
}
})

// IMPLEMENTING FAQ
questions.forEach(function(question){
    question.addEventListener('click', function(e){
        if(e.target.tagName === 'H5'){
            document.querySelectorAll('.answer').forEach(function(answer){
                answer.classList.remove('answer-slide')
            })
            document.querySelectorAll('.fa-angle-down').forEach(function(icon){
                icon.classList.remove('rotate')
            })
            document.querySelector(`.answer--${e.target.dataset.tab}`).classList.add('answer-slide')
            document.querySelector(`.icon--${e.target.dataset.tab}`).classList.add('rotate')
        }
    })
})

//VALIDATING EMAIL
document.querySelector('.cta .btn').addEventListener('click', function(){
    const emailAddress = document.querySelector('input')
    if(emailAddress.value.endsWith('@gmail.com') || emailAddress.value.endsWith('@email.com')){
        emailAddress.value = ''
        document.querySelectorAll('.error').forEach(function(err){
            err.style.display = 'none'
        })
    }else{
        emailAddress.style.border = '4px solid hsl(0, 94%, 66%)'
        document.querySelectorAll('.error').forEach(function(err){
            err.style.display = 'block'
        })
    }
})

// console.log(window.innerWidth);

