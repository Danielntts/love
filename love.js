const imagens = document.querySelectorAll('.carrossel img');
const btnAnterior = document.querySelector('.anterior');
const btnProximo = document.querySelector('.proximo');

let indexAtual = 0;

function mostrarImagem(index) {
  imagens.forEach(img => img.classList.remove('active'));
  imagens[index].classList.add('active');
}

btnProximo.addEventListener('click', () => {
  indexAtual = (indexAtual + 1) % imagens.length;
  mostrarImagem(indexAtual);
});

btnAnterior.addEventListener('click', () => {
  indexAtual = (indexAtual - 1 + imagens.length) % imagens.length;
  mostrarImagem(indexAtual);
});
