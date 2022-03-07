// Typed text effect on Hero variables

const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = [
  'Creative!',
  'Unique!',
  'Professional!',
  'Impactful!',
  'Responsive!',
];
const typingDelay = 150;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

// Contact Us form cariables

const btnHere = document.querySelector('.contact-us__p--here');
const popupWindow = document.querySelector('.popup');
const btnHereClose = document.querySelector('.popup__close');
const overlay = document.querySelector('.overlay');
const submitBtn = document.querySelector('.submit__btn');
const contactUsForm = document.querySelector('.form');

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains('typing'))
      cursorSpan.classList.add('typing');
    typedTextSpan.textContent +=
      textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains('typing'))
      cursorSpan.classList.add('typing');
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

const parallax = document.querySelector('body');

window.addEventListener('scroll', function () {
  let offset = window.pageYOffset;

  parallax.style.backgroundPositionY = offset * 0.7 + 'px';
});

const toggleWindow = function () {
  overlay.classList.toggle('hidden');
  popupWindow.classList.toggle('hidden');
};

btnHere.addEventListener('click', function () {
  toggleWindow();
});

btnHereClose.addEventListener('click', function () {
  toggleWindow();
});

overlay.addEventListener('click', function () {
  toggleWindow();
});

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  sendMessage(name, email, message);
  contactUsForm.reset();
  toggleWindow();
});

const sendMessage = function (name, email, message) {
  Email.send({
    SecureToken: '3617a64d-b088-4e04-8712-c058397a5214',
    To: 'info@cwdme.com',
    From: 'info@cwdme.com',
    Subject: `${name} sent you a message`,
    Body: `Name: ${name}<br><br>Email: ${email}<br><br>Message: ${message}`,
  }).then((message) =>
    alert(
      'Your message has been sent sucessfully! We will get in touch with you shortly.'
    )
  );
};
