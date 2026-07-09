
document.addEventListener('DOMContentLoaded',() => {
    const gridJogos = document.getElementById('grid-jogos');
    const URL_API = 'https://www.freetogame.com/api/games?sort-by=release-date';

    async function carregarJogos() {
        try {
            const resposta = await fetch(URL_API);

            if (!resposta.ok) {
                throw new Error('Erro ao carregar os jogos');
            }

            const jogos = await resposta.json();

            jogos.forEach(jogo => {
                console.log(jogo.title);
                console.log(jogo.short_description);
            })

        } catch (erro) {
            console.log("Erro ao carregar os jogos:", erro)
        }
    }

    carregarJogos();
})