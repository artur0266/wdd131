// Preenche o ano atual dinamicamente no rodapé
const anoAtualSpan = document.getElementById("anoatual");
const anoAtual = new Date().getFullYear();
if (anoAtualSpan) {
    anoAtualSpan.textContent = anoAtual;
}

// Preenche a data da última modificação do documento no rodapé
const ultimaModificacaoP = document.getElementById("ultimaModificacao");
if (ultimaModificacaoP) {
    ultimaModificacaoP.textContent = `Last Modification: ${document.lastModified}`;
}