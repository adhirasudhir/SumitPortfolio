let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// const sr = ScrollReveal({
//   distance: '60px',
//   duration: 2500,
//   reset: true,
// });

// sr.reveal('.home-text', { delay: 200, origin: 'top' });
// sr.reveal('.home-img', { delay: 400, origin: 'top' });
// sr.reveal('.about, .cta, .resume, .contact, .footer', { delay: 200, origin: 'top' });



function progressBarAndCountNumber () {
  const progress = document.querySelectorAll('.progress');
  let count = 0;
  // You must put the maximum number in the MAX variable.
  let MAX = 80;

  let run = setInterval(() => {
      count++;
      progress.forEach(element => {
          if (count <= element.dataset.progress) {
              element.parentElement.style.background = `conic-gradient(#9370DB ${count}%, #212428 0)`;
              element.firstElementChild.textContent = `${count}%`;
          };
          if (count == MAX) {
              clearInterval(run);
          };
      });
  }, 20);
}

progressBarAndCountNumber();