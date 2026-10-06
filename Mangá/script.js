const btnProximo = document.getElementById('btnProximo');
const btnAnterior = document.getElementById('btnAnterior');

if (btnProximo) {
    btnProximo.addEventListener('click', function() {
        if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
            window.location.href = 'pg10-20.html';
        } 
        else if (window.location.pathname.includes('pg10-20.html')) {
            window.location.href = 'pg20-30.html';
        }
    });
}

if (btnAnterior) {
    btnAnterior.addEventListener('click', function() {
        window.history.back();
    });
}