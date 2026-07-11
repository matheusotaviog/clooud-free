
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

            //Apenas 8 cards iniciais
            const jogosEmDestaque = jogos.slice(0, 8);

            let htmlJogos = '';

            jogosEmDestaque.forEach(jogo => {
                htmlJogos += `
                    <div class="cartao-jogo">
                        <div class="cartao-imagem">
                            <img src="${jogo.thumbnail}" alt="Capa do jogo ${jogo.title}">
                            <span class="tag tag-genero">${jogo.genre}</span>
                            <span class="tag tag-free">FREE</span>
                        </div>
                        <div class="cartao-conteudo">
                            <h3 class="cartao-titulo">${jogo.title}</h3>
                            <p class="cartao-descricao">${jogo.short_description}</p>
                            <a href="${jogo.game_url}" target="_blank" class="btn-jogar">JOGAR AGORA</a>
                        </div>
                    </div>
                `;
            })

            gridJogos.innerHTML = htmlJogos;

        } catch (erro) {
            console.log("Erro ao carregar os jogos:", erro)
        }
    }

    carregarJogos();
})