const btnMapa = document.querySelectorAll('.mapa-btn');

document.addEventListener('click', (e) => {
    const targetEl = e.target;

    if (targetEl.classList.contains('mapa-btn')) {

        const cards = targetEl.closest('.cards');
        const mapa = cards.querySelector('.map');

        mapa.style.display = 'flex';
    }
});

/*const filtro = document.getElementById('localizador');
const cards = document.querySelectorAll('.cards li');

filtro.addEventListener('input', filtroCards);

function filtroCards() {
    if (filtro.value !== '') {

        for (let card of cards) {
            let item = card.querySelector('li');

            item = item.textContent.toLocaleLowerCase()

        }
    } else {

    }
};*/
const filtro = document.getElementById('localizador');
const cards = document.querySelectorAll('.cards');

filtro.addEventListener('input', () => {
    const termo = filtro.value.toLowerCase().trim(); // Obtém o valor do input e o normaliza

    cards.forEach(card => {
        const itens = card.querySelectorAll('li');

        let corredorContemItem = false; // Variável para rastrear se o corredor contém o item

        itens.forEach(item => {
            const textoItem = item.textContent.toLowerCase();

            if (textoItem.includes(termo)) {
                // Se o termo estiver contido no texto do item, torna o item visível
                item.style.display = 'block';
                corredorContemItem = true; // Define a variável como true se o item foi encontrado
            } else {
                // Caso contrário, oculta o item
                item.style.display = 'none';
            }
        });

        // Exibe ou oculta o corredor com base na variável corredorContemItem
        if (corredorContemItem) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});




