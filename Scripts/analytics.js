function contarAcessosUnicos() {
    const uniqueVisitorsKey = 'uniqueVisitors'; // Chave para armazenar os visitantes únicos
    const currentVisitorId = localStorage.getItem('visitorId'); // Obtém o ID do visitante atual

    // Se o visitante não tiver um ID, cria um novo ID
    if (!currentVisitorId) {
        const newVisitorId = 'visitor-' + Date.now(); // Gera um ID único baseado no timestamp
        localStorage.setItem('visitorId', newVisitorId); // Armazena o ID do visitante
    }

    // Recupera o conjunto de visitantes únicos armazenados
    const uniqueVisitors = new Set(JSON.parse(localStorage.getItem(uniqueVisitorsKey)) || []);

    // Adiciona o ID do visitante atual ao conjunto
    uniqueVisitors.add(currentVisitorId || newVisitorId);

    // Armazena o conjunto atualizado no localStorage
    localStorage.setItem(uniqueVisitorsKey, JSON.stringify(Array.from(uniqueVisitors)));

    // Retorna a quantidade de acessos únicos
    return uniqueVisitors.size;
}

// Exemplo de uso
const numeroAcessosUnicos = contarAcessosUnicos();
document.getElementById('contador').innerText = numeroAcessosUnicos