function criarAnimacaoTransicao() {
    const coracao1 = document.createElement('div');
    coracao1.classList.add('heart-overlay');
    coracao1.textContent = '❤️';
    coracao1.style.left = (Math.random() * 100) + '%';
    document.body.appendChild(coracao1);

    const coracao2 = document.createElement('div');
    coracao2.classList.add('heart-overlay');
    coracao2.textContent = '💕';
    coracao2.style.left = (Math.random() * 100) + '%';
    document.body.appendChild(coracao2);

    const coracao3 = document.createElement('div');
    coracao3.classList.add('heart-overlay');
    coracao3.textContent = '🎀';
    coracao3.style.left = (Math.random() * 100) + '%';
    document.body.appendChild(coracao3);
}

function confirmar() {
    const dia = document.querySelector('input[name="dia"]:checked');
    const local = document.querySelector('input[name="local"]:checked');
    const hora = document.querySelector('input[name="hora"]:checked');

    if (!dia || !local || !hora) {
        alert('Por favor, selecione dia, local e horário!');
        return;
    }

    const card = document.querySelector('.card');
    card.classList.add('page-exit');
    criarAnimacaoTransicao();

    localStorage.setItem('diaEscolhido', dia.value);
    localStorage.setItem('localEscolhido', local.value);
    localStorage.setItem('horaEscolhida', hora.value);

    setTimeout(() => {
        window.location.href = 'confirmacao.html';
    }, 600);
}

window.addEventListener('DOMContentLoaded', function() {
    const diaSelected = document.getElementById('dia-selected');
    const localSelected = document.getElementById('local-selected');
    const horaSelected = document.getElementById('hora-selected');

    if (diaSelected && localSelected && horaSelected) {
        const dia = localStorage.getItem('diaEscolhido');
        const local = localStorage.getItem('localEscolhido');
        const hora = localStorage.getItem('horaEscolhida');

        if (dia) diaSelected.textContent = dia;
        if (local) localSelected.textContent = local;
        if (hora) horaSelected.textContent = hora;

        localStorage.removeItem('diaEscolhido');
        localStorage.removeItem('localEscolhido');
        localStorage.removeItem('horaEscolhida');
    }

    // Adicionar comportamento de transição nos links
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.endsWith('.html')) {
                e.preventDefault();
                const card = document.querySelector('.card');
                if (card) {
                    card.classList.add('page-exit');
                    criarAnimacaoTransicao();
                    setTimeout(() => {
                        window.location.href = href;
                    }, 600);
                }
            }
        });
    });
});
