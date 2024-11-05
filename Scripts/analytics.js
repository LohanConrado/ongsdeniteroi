// Define o ID do cliente OAuth 2.0 obtido do Google Cloud Console
const ID_CLIENTE = 'SEU_CLIENT_ID.apps.googleusercontent.com'; // Substitua pelo seu Client ID

// Define o escopo de acesso para leitura de dados do Google Analytics
const ESCOPO = 'https://www.googleapis.com/auth/analytics.readonly';

// Função que carrega a biblioteca do cliente do Google API
function carregarCliente() {
    // Carrega os módulos 'client' e 'auth2' da API do Google
    gapi.load('client:auth2', inicializarCliente);
}

// Função que inicializa o cliente do Google API com as credenciais do usuário
function inicializarCliente() {
    gapi.client.init({
        clientId: ID_CLIENTE, // Configura o ID do cliente para autenticação
        scope: ESCOPO        // Define o escopo para acessar os dados do Google Analytics
    }).then(() => {
        // Após a inicialização, realiza o login do usuário
        gapi.auth2.getAuthInstance().signIn().then(() => {
            // Após o login bem-sucedido, chama a função para consultar os relatórios
            consultarRelatorios();
        });
    });
}

// Função que consulta os relatórios do Google Analytics
function consultarRelatorios() {
    gapi.client.request({
        path: '/v4/reports:batchGet', // Caminho da API para obter relatórios em lote
        root: 'https://analyticsreporting.googleapis.com/', // URL base da API de relatórios
        method: 'POST', // Método HTTP para enviar a solicitação
        body: {
            reportRequests: [
                {
                    viewId: 'G-3922PQ7M6F', // View ID do Google Analytics
                    dateRanges: [{ endDate: 'today' }], // Período: Desde o início
                    metrics: [{ expression: 'ga:users' }] // Métrica de usuários únicos (ga:users)
                }
            ]
        }
    }).then(response => {
        // Processa a resposta da API e extrai o número de usuários únicos
        const resultado = response.result.reports[0].data.totals[0].values[0];
        // Atualiza o elemento HTML com o número de usuários únicos
        document.getElementById('contador').textContent = resultado;
    }, erro => {
        // Exibe um erro no console se a solicitação falhar
        console.error('Erro ao obter os dados:', erro);
    });
}

// Aguarda o carregamento completo da página antes de carregar o cliente do Google API
document.addEventListener("DOMContentLoaded", carregarCliente);
