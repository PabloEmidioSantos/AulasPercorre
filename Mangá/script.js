const paginas = ['index.html', 'pg10-20.html', 'pg20-30.html'];

const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
const indicePagina = paginas.indexOf(paginaAtual);

document.querySelectorAll('[data-nav], [data-direction]').forEach(function(botao) {
    const direcao = botao.dataset.nav || botao.dataset.direction;

    botao.addEventListener('click', function() {
        let proximoIndice = indicePagina;

        if (direcao === 'next' && indicePagina < paginas.length - 1) {
            proximoIndice++;
        }

        if (
            (direcao === 'previous' || direcao === 'prev') &&
            indicePagina > 0
        ) {
            proximoIndice--;
        }

        if (proximoIndice !== indicePagina) {
            window.location.href = paginas[proximoIndice];
        }
    });

    if (
        (direcao === 'previous' || direcao === 'prev') &&
        indicePagina === 0
    ) {
        botao.disabled = true;
    }

    if (direcao === 'next' && indicePagina === paginas.length - 1) {
        botao.disabled = true;
    }
});