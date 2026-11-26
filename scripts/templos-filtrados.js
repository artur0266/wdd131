// Array de objetos de templos (7 originais + 3 adicionados = 10 templos)
const templos = [
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005, 7 de agosto",
    area: 11500,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888, 21 de maio",
    area: 74792,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015, 7 de junho",
    area: 96630,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020, 2 de maio",
    area: 6861,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974, 19 de novembro",
    area: 156558,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986, 10 de janeiro",
    area: 9600,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983, 2 de dezembro",
    area: 116642,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // 3 templos adicionais
  {
    nomeDoTemplo: "Rio de Janeiro Brasil",
    localizacao: "Rio de Janeiro, Rio de Janeiro, Brasil",
    consagracao: "2022, 5 de junho",
    area: 29966,
    urlDaImagem: "imagens/templodorio.jpg"
  },
  {
    nomeDoTemplo: "São Paulo Brasil",
    localizacao: "São Paulo, São Paulo, Brasil",
    consagracao: "1978, 30 de outubro",
    area: 59246,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Salt Lake Utah",
    localizacao: "Salt Lake City, Utah, Estados Unidos",
    consagracao: "1893, 6 de abril",
    area: 382207,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
  }
];

function obterAnoConsagracao(dataConsagracao) {
  return parseInt(dataConsagracao.split(",")[0], 10);
}

function exibirTemplos(listaTemplos) {
  const gallery = document.querySelector(".gallery");
  if (!gallery) return;

  gallery.innerHTML = "";

  listaTemplos.forEach((templo) => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    const titulo = document.createElement("h3");
    titulo.textContent = templo.nomeDoTemplo;

    const local = document.createElement("p");
    local.innerHTML = `<span class="label">Localização:</span> ${templo.localizacao}`;

    const consagracao = document.createElement("p");
    consagracao.innerHTML = `<span class="label">Consagração:</span> ${templo.consagracao}`;

    const area = document.createElement("p");
    area.innerHTML = `<span class="label">Área:</span> ${templo.area} sq ft`;

    const imagem = document.createElement("img");
    imagem.src = templo.urlDaImagem;
    imagem.alt = templo.nomeDoTemplo;
    imagem.loading = "lazy";
    imagem.width = 400;
    imagem.height = 250;

    card.appendChild(titulo);
    card.appendChild(local);
    card.appendChild(consagracao);
    card.appendChild(area);
    card.appendChild(imagem);

    gallery.appendChild(card);
  });
}

function marcarLinkAtivo(idAtivo) {
  document.querySelectorAll("#primaryNav a").forEach((link) => {
    link.classList.remove("active");
  });
  const linkAtivo = document.getElementById(idAtivo);
  if (linkAtivo) {
    linkAtivo.classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const currentYearSpan = document.getElementById("currentyear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  const lastModifiedPara = document.getElementById("lastModified");
  if (lastModifiedPara) {
    lastModifiedPara.textContent = `Última Modificação: ${document.lastModified}`;
  }

  const hamburgerBtn = document.getElementById("hamburger");
  const navMenu = document.getElementById("primaryNav");

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");

      if (navMenu.classList.contains("open")) {
        hamburgerBtn.innerHTML = "&times;";
        hamburgerBtn.setAttribute("aria-expanded", "true");
      } else {
        hamburgerBtn.innerHTML = "&#9776;";
        hamburgerBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  const pageTitle = document.getElementById("page-title");

  document.getElementById("home")?.addEventListener("click", (e) => {
    e.preventDefault();
    if (pageTitle) pageTitle.textContent = "Página Inicial";
    marcarLinkAtivo("home");
    exibirTemplos(templos);
  });

  document.getElementById("old")?.addEventListener("click", (e) => {
    e.preventDefault();
    if (pageTitle) pageTitle.textContent = "Antigo";
    marcarLinkAtivo("old");
    exibirTemplos(templos.filter((t) => obterAnoConsagracao(t.consagracao) < 1900));
  });

  document.getElementById("new")?.addEventListener("click", (e) => {
    e.preventDefault();
    if (pageTitle) pageTitle.textContent = "Novo";
    marcarLinkAtivo("new");
    exibirTemplos(templos.filter((t) => obterAnoConsagracao(t.consagracao) > 2000));
  });

  document.getElementById("large")?.addEventListener("click", (e) => {
    e.preventDefault();
    if (pageTitle) pageTitle.textContent = "Grande";
    marcarLinkAtivo("large");
    exibirTemplos(templos.filter((t) => t.area > 90000));
  });

  document.getElementById("small")?.addEventListener("click", (e) => {
    e.preventDefault();
    if (pageTitle) pageTitle.textContent = "Pequeno";
    marcarLinkAtivo("small");
    exibirTemplos(templos.filter((t) => t.area < 10000));
  });

  // Exibe todos os templos ao abrir a página
  exibirTemplos(templos);
});