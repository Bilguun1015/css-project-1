const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button');
const closeButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

selectPlanButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // modal.style.display = 'block';
    // backdrop.style.display = 'block';
    // modal.className = 'open'; // overwrites the class list
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
});

const closeModal = () => {
  // modal.style.display = 'none';
  // backdrop.style.display = 'none';
  modal.classList.remove('open');
  backdrop.classList.remove('open');
};

backdrop.addEventListener('click', () => {
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove('open');
  closeModal();
});
closeButton.addEventListener('click', closeModal);

toggleButton.addEventListener('click', () => {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';\
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});
