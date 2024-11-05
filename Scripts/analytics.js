function contarAcessosUnicos() {
    const uniqueVisitorsKey = 'uniqueVisitors'; // Chave para armazenar os visitantes únicos
    let uniqueVisitors = JSON.parse(localStorage.getItem(uniqueVisitorsKey)) || []; // Obtém a lista de visitantes únicos ou cria uma nova lista

    // Verifica se o visitante atual já foi registrado
    const currentVisitorId = localStorage.getItem('visitorId');
    if (!currentVisitorId) {
        // Se não existir, gera um novo ID único para o visitante
        const newVisitorId = 'visitor-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
        localStorage.setItem('visitorId', newVisitorId); // Armazena o ID do visitante no localStorage

        // Adiciona o novo ID à lista de visitantes únicos
        uniqueVisitors.push(newVisitorId);
        localStorage.setItem(uniqueVisitorsKey, JSON.stringify(uniqueVisitors)); // Atualiza a lista no localStorage
    }

    // Retorna a quantidade total de acessos únicos
    return uniqueVisitors.length; // O número total de visitantes únicos
}

// Exemplo de uso
const numeroAcessosUnicos = contarAcessosUnicos();
document.getElementById('contador').innerText = numeroAcessosUnicos