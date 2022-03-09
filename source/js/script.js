const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});


const placesLinks = document.querySelectorAll(".places__options-link");

placesLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.info__item-current').classList.remove('info__item-current');
    const cuurentItem = document.querySelector(`.info__item--${link.name}`)
    cuurentItem.classList.add('info__item-current');
  })
})

const countriesLinks = document.querySelectorAll(".countries__link");

countriesLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.info__item-current').classList.remove('info__item-current');
    const cuurentItem = document.querySelector(`.info__item--${link.name}`)
    cuurentItem.classList.add('info__item-current');
  })
})

const buyButtons = document.querySelectorAll('.button-buy');
const modal = document.querySelector('.modal');
const good = document.querySelector('.good');
const modalClose = document.querySelector('.modal__close');
const sendButton = document.querySelector('.modal__send');
const goodClose = document.querySelector('.good__close');
console.log(goodClose);

buyButtons.forEach((button) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.toggle('visually-hidden');
  })
})

modalClose.addEventListener('click', () => {
  modal.classList.toggle('visually-hidden');
})

goodClose.addEventListener('click', () => {
  good.classList.toggle('visually-hidden');
})



const regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

function validatePhone(phone){
  return regex.test(phone);
}

function validateEmail(email) {
  return re.test(String(email).toLowerCase());
}

const contatcsForm = document.querySelector('.contatcs__form');
const formBuy = modal.querySelector('.modal__form');
const buyPhone = formBuy.querySelector('.modal__input--tel');
const buyEmail = formBuy.querySelector('.modal__input--email');
const contatcsPhone = contatcsForm.querySelector('.contacts__tel');
const contatcsEmail = contatcsForm.querySelector('.contacts__email');



function addSubmit (form, tel, email) {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (validatePhone(tel.value)) {
      if (validateEmail(email.value)) {
        form.classList.toggle('visually-hidden');
        good.classList.toggle('visually-hidden');
      }

      else {
        email.classList.add('error');
      }
    }

    else {
      tel.classList.add('error');
    }
  })
}

addSubmit(formBuy,buyPhone,buyEmail);
addSubmit(contatcsForm,contatcsPhone,contatcsEmail);
