const botaoMenu = document.querySelector('.botao-menu');
const navegacaoPrincipal = document.querySelector('.navegacao');
const linksDeNavegacao = document.querySelectorAll('.navegacao__link');
const secoesDaPagina = document.querySelectorAll('main section[id]');
const elementosAnimados = document.querySelectorAll('.entrada');
const cabecalho = document.querySelector('.cabecalho');
const anoAtual = document.querySelector('#ano-atual');

anoAtual.textContent = new Date().getFullYear();

botaoMenu.addEventListener('click', () => {
  const menuEstaAberto = botaoMenu.getAttribute('aria-expanded') === 'true';
  botaoMenu.setAttribute('aria-expanded', String(!menuEstaAberto));
  botaoMenu.setAttribute('aria-label', menuEstaAberto ? 'Abrir menu' : 'Fechar menu');
  navegacaoPrincipal.classList.toggle('aberta', !menuEstaAberto);
});

linksDeNavegacao.forEach((linkDeNavegacao) => {
  linkDeNavegacao.addEventListener('click', () => {
    botaoMenu.setAttribute('aria-expanded', 'false');
    botaoMenu.setAttribute('aria-label', 'Abrir menu');
    navegacaoPrincipal.classList.remove('aberta');
  });
});

const observadorDeEntrada = new IntersectionObserver((itensObservados, observador) => {
  itensObservados.forEach((itemObservado) => {
    if (itemObservado.isIntersecting) {
      itemObservado.target.classList.add('visivel');
      observador.unobserve(itemObservado.target);
    }
  });
}, { threshold: 0.14 });

elementosAnimados.forEach((elementoAnimado) => observadorDeEntrada.observe(elementoAnimado));

const observadorDeSecoes = new IntersectionObserver((secoesObservadas) => {
  secoesObservadas.forEach((secaoObservada) => {
    if (!secaoObservada.isIntersecting) return;

    linksDeNavegacao.forEach((linkDeNavegacao) => {
      const linkApontaParaSecao = linkDeNavegacao.getAttribute('href') === `#${secaoObservada.target.id}`;
      linkDeNavegacao.classList.toggle('ativo', linkApontaParaSecao);
    });
  });
}, { rootMargin: '-35% 0px -55% 0px' });

secoesDaPagina.forEach((secaoDaPagina) => observadorDeSecoes.observe(secaoDaPagina));

window.addEventListener('scroll', () => {
  cabecalho.classList.toggle('rolado', window.scrollY > 20);
}, { passive: true });
