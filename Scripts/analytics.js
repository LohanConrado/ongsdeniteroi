function countUniqueVisits() {
    // Verifica se o visitante já foi registrado
    if (!localStorage.getItem('uniqueVisitor')) {
        // Se não, registra o visitante
        localStorage.setItem('uniqueVisitor', 'true');
        incrementUniqueVisitorCount();
    }
}

function incrementUniqueVisitorCount() {
    // Incrementa o contador de visitantes únicos no armazenamento local
    let count = parseInt(localStorage.getItem('uniqueVisitorCount')) || 0;
    localStorage.setItem('uniqueVisitorCount', count + 1);
}

// Chama a função ao carregar a página
countUniqueVisits();

// Função para obter o número de visitantes únicos
function getUniqueVisitorCount() {
    return localStorage.getItem('uniqueVisitorCount') || 0;
}

countUniqueVisits();
// Exemplo de uso
const numeroAcessosUnicos = getUniqueVisitorCount();
document.getElementById('contador').innerText = numeroAcessosUnicos