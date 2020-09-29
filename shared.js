const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button');
const closeButton = document.querySelector('.modal__action--negative');

selectPlanButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  });
});

const closeModal = () => {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
};

backdrop.addEventListener('click', closeModal);
closeButton.addEventListener('click', closeModal);
