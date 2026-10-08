const paginas = ['index.html', 'pg10-20.html', 'pg20-30.html'];
const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
const indicePagina = paginas.indexOf(paginaAtual);

document.querySelectorAll('[data-nav]').forEach(function(botao) {
    botao.addEventListener('click', function() {
        const direcao = botao.dataset.nav === 'next' ? 1 : -1;
        const destino = paginas[indicePagina + direcao];

        if (destino) {
            window.location.href = destino;
        }
    });
});
