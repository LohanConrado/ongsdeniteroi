function contarAcessosUnicos() {
    const uniqueVisitorsKey = 'uniqueVisitors'; // Chave para armazenar os visitantes únicos
    const visitorsSet = JSON.parse(localStorage.getItem(uniqueVisitorsKey)) || new Set(); // Obtém o conjunto de visitantes únicos ou cria um novo conjunto

    // Gera um ID único baseado no timestamp e em um número aleatório
    const newVisitorId = 'visitor-' + Date.now() + '-' + Math.floor(Math.random() * 1000); 

    // Adiciona o novo ID ao conjunto
    visitorsSet.push(newVisitorId);

    // Armazena o conjunto atualizado no localStorage
    localStorage.setItem(uniqueVisitorsKey, JSON.stringify(visitorsSet));

    // Retorna a quantidade total de acessos únicos
    return visitorsSet.length; // O número total de visitantes únicos
}

// Exemplo de uso
const numeroAcessosUnicos = contarAcessosUnicos();
document.getElementById('contador').innerText = numeroAcessosUnicos