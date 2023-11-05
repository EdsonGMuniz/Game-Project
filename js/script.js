const habibi = document.querySelector('.habibi');
const trump = document.querySelector('.trump');

const jump = () => {
  habibi.classList.add('jump');

  setTimeout(() => {
   habibi.classList.remove('jump');
  }, 500);

}

const loop = setInterval(() =>{

   const trumpPosition = trump.offsetLeft;
   const habibiPosition = +window.getComputedStyle(habibi).bottom.replace('px', '');

   if (trumpPosition <= 120 && trumpPosition > 0 && habibiPosition <80) {

      trump.style.animation = 'none';
      trump.style.left = `${trumpPosition}px`;
      
      habibi.style.animation = 'none';
      habibi.style.bottom = `${habibiPosition}px`;

      habibi.src ='./imagens/explosao.png'
      habibi.style.width = '200px'
      habibi.style.marginLeft = '20px'

      clearInterval(loop);

   }

}, 10);

document.addEventListener('keydown', jump);






