// Função para obter websites e a quantidade de visualizações para o primeiro website
async function obterDados(apiKey) {
    const urlWebsites = 'https://api.umami.is/v1/websites';

    try {
        const resposta = await fetch(urlWebsites, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'x-umami-api-key': apiKey
            }
        });

        if (!resposta.ok) {
            throw new Error('Erro na requisição: ' + resposta.status);
        }

        const websites = await resposta.json(); // Converte a resposta em JSON
        console.log(websites); // Exibe os websites no console

        if (websites.length > 0) {
            const websiteId = websites[0].id; // Pega o ID do primeiro website
            const urlPageviews = `https://api.umami.is/v1/websites/${websiteId}/pageviews`;

            const respostaPageviews = await fetch(urlPageviews, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'x-umami-api-key': apiKey
                }
            });

            if (!respostaPageviews.ok) {
                throw new Error('Erro na requisição de pageviews: ' + respostaPageviews.status);
            }

            const pageviews = await respostaPageviews.json();
            document.getElementById('contador').innerText = pageviews; // Mostra a quantidade de visualizações

        } else {
            console.log('Nenhum website encontrado.');
        }

    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

// Chame a função com a chave da API
const apiKey = 'LZQDhaw89Phn10wlaQWFq3jTujFeqsY6'; // chave da API
obterDados(apiKey);