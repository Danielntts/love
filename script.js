const botaoNao = document.getElementById('btnNao');

botaoNao.addEventListener('mouseenter', () => {
  const larguraJanela = window.innerWidth - 100;
  const alturaJanela = window.innerHeight - 100;

  const novaPosX = Math.random() * larguraJanela;
  const novaPosY = Math.random() * alturaJanela;

  botaoNao.style.left = `${novaPosX}px`;
  botaoNao.style.top = `${novaPosY}px`;
});