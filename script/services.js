const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.05)';
  });

  button.addEventListener('mouseout', () => {

    button.style.transform = 'scale(1)';
  });
});
