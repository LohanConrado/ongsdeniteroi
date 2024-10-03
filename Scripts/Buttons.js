const site = document.querySelectorAll(".site");
const instagram = document.querySelectorAll(".instagram");

const links = {
    sonipaniteroi: '',
    rioecopets: 'https://www.rioecopets.com.br/',
    projetorecicao: '',
    classifigatosrj: '',
    peludosderua: '',
    casadocaoegato: 'https://www.casadocaoegatorj.com/',
    adamaniteroi: 'https://www.adama.org.br/',
    fenaseprojetoviver: 'https://www.fenase.org.br/'
}

function abrirLinkSite(url) {
  window.open(url, "_blank"); // Abre o link do site
}
function abrirLinkInstagram(id) {
  window.open(`https://www.instagram.com/${id}`, "_blank");
}

site.forEach((site) => {
  site.addEventListener("click", (event) => {
    const siteId = event.target.id;
    const url = links[`${siteId}`]
    abrirLinkSite(url);
  });
});

instagram.forEach((instagram) => {
    instagram.addEventListener('click', (event) => {
        const instagramId = event.target.id;
        abrirLinkInstagram(instagramId);
    })
})
