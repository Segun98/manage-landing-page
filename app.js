//Hamburger toggle

const hamburger = document.querySelector('.hamburger-icon')
const closeHamburger = document.querySelector('.icon-close')
const Menu = document.querySelector('.nav-menu')



hamburger.addEventListener('click', openMenu)

function openMenu() {
    Menu.classList.add('open-menu')
    hamburger.style.display = 'none'
    closeHamburger.style.display = 'block'
}

closeHamburger.addEventListener('click', closeMenu)

function closeMenu() {
    Menu.classList.remove('open-menu')
    closeHamburger.style.display = 'none'
    hamburger.style.display = 'block'

}

///DISPLAY TESTIMONIALS ON CLICK OF THE CIRCLES

const circleOne = document.querySelector('.circle-one').addEventListener('click', displayOne)
const circleTwo = document.querySelector('.circle-two').addEventListener('click', displayTwo)
const circleThree = document.querySelector('.circle-three').addEventListener('click', displayThree)
const circleFour = document.querySelector('.circle-four').addEventListener('click', displayFour)
const testItemOne = document.querySelector('.test-item-one')
const testItemTwo = document.querySelector('.test-item-two')
const testItemThree = document.querySelector('.test-item-three')
const testItemFour = document.querySelector('.test-item-four')



function displayOne() {
    testItemOne.classList.add('display-testimonial')

    //remove from other testimonials
    testItemTwo.classList.remove('display-testimonial')
    testItemThree.classList.remove('display-testimonial')
    testItemFour.classList.remove('display-testimonial')
}

function displayTwo() {
    testItemTwo.classList.add('display-testimonial')

    testItemOne.classList.remove('display-testimonial')
    testItemThree.classList.remove('display-testimonial')
    testItemFour.classList.remove('display-testimonial')
}

function displayThree() {
    testItemThree.classList.add('display-testimonial')


    testItemTwo.classList.remove('display-testimonial')
    testItemOne.classList.remove('display-testimonial')
    testItemFour.classList.remove('display-testimonial')
}

function displayFour() {
    testItemFour.classList.add('display-testimonial')


    testItemTwo.classList.remove('display-testimonial')
    testItemThree.classList.remove('display-testimonial')
    testItemOne.classList.remove('display-testimonial')
}


//VALIDATE EMAIL 

const inputField = document.querySelector('.input')
const btnSubmit = document.querySelector('.submit-mail')



btnSubmit.addEventListener('click', ValidateEmail)


function ValidateEmail(e) {
     
    e.preventDefault();
    const errorMsg = document.querySelector('.error-msg')
    setTimeout(() => {errorMsg.style.display ="none"}, 5000);

   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputField.value)) {
       inputField.value =''
   } else {
       errorMsg.style.display = "block";
   }
}