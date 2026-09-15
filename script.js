const PROJECTS = [
  {
    id: "nach",
    number: "01",
    title: "NACH",
    tags: ["Stratégie", "Brand", "Entrepreneuriat"],
    cover: "./assets/images/nach-01.webp",
    summary: "Un projet de relance de marque autour d'une question simple : comment faire évoluer NACH pour renforcer son positionnement sur le marché français du poulet frit ? Le travail mêle benchmark, développement de l'offre, communication et projection business.",
    role: "Recherche d'idées de nouveaux produits, réflexion sur l'évolution de l'offre et la différenciation, contribution à l'argumentaire présenté avec l'équipe.",
    output: "Recommandations de relance, nouvelles pistes produits, propositions de communication et réflexion à 12 mois.",
    gallery: [
      ["./assets/images/nach-01.webp","Identité / univers NACH"],
      ["./assets/images/nach-02.webp","Développement de nouveaux produits"],
      ["./assets/images/nach-03.webp","Stratégie de relance"]
    ]
  },
  {
    id: "moonlie",
    number: "02",
    title: "MOONLIE",
    tags: ["UX/UI", "Workshop", "Hackathon"],
    cover: "./assets/images/moonlie-01.webp",
    summary: "Hackathon de cinq jours autour de Moonlie, une application de vie étudiante. L'objectif était de repenser l'espace destiné aux associations et d'imaginer un service plus collaboratif et plus engageant.",
    role: "Benchmark et état des lieux, planches d'inspiration et moodboard pour la direction artistique, puis conception de la page Profil pendant le prototypage.",
    output: "Direction UI, benchmark, parcours association et prototype d'interface.",
    gallery: [
      ["./assets/images/moonlie-01.webp","Présentation Moonlie"],
      ["./assets/images/moonlie-02.webp","Objectifs du workshop"]
    ]
  },
  {
    id: "simple-human",
    number: "03",
    title: "SIMPLE HUMAN",
    tags: ["Communication 360", "Branding", "Campaign"],
    cover: "./assets/images/simple-human-01.webp",
    summary: "Construction d'une campagne de communication 360° pour une marque de vêtements éco-responsable. Le projet combine réseaux sociaux, print, événementiel et webmarketing dans un même système de marque.",
    role: "Travail en équipe sur la cohérence de communication entre les différents canaux, le positionnement et la manière de traduire l'engagement de la marque sans tomber dans un discours trop générique.",
    output: "Positionnement, campagne, supports sociaux, affiche et contenu vidéo.",
    gallery: [
      ["./assets/images/simple-human-01.webp","Identité Simple Human"],
      ["./assets/images/simple-human-02.webp","Affiche de campagne"],
      ["./assets/images/simple-human-03.webp","Vidéo de campagne"]
    ]
  },
  {
    id: "urgences",
    number: "04",
    title: "URGENCES+",
    tags: ["UX/UI", "Product Design", "Dashboard"],
    cover: "./assets/images/urgences-01.webp",
    summary: "Une solution UX/UI complète pensée pour réduire le temps perdu entre le patient et l'équipe hospitalière : application patient, suivi de prise en charge et dashboard destiné au personnel hospitalier.",
    role: "Recherche, benchmark, définition des fonctionnalités, parcours utilisateurs, wireframes, maquettes, prototype et hiérarchisation des informations du dashboard.",
    output: "Application patient, parcours Apple Watch et dashboard hospitalier de suivi et triage.",
    gallery: [
      ["./assets/images/urgences-01.webp","Dashboard hospitalier"],
      ["./assets/images/urgences-02.webp","Parcours Apple Watch"],
      ["./assets/images/urgences-03.webp","Parcours application patient"]
    ]
  },
  {
    id: "the-click",
    number: "05",
    title: "THE CLICK",
    tags: ["Agence", "UX/UI", "Communication"],
    cover: "./assets/images/the-click-01.webp",
    summary: "Projet d'agence mené sur plusieurs mois pour le Comité du Chat de Sevran : refonte de l'identité, stratégie de communication digitale et refonte de site pour un commanditaire réel.",
    role: "Participation à la stratégie UX/UI et au suivi qualité : entretiens, benchmark, tests utilisateurs, maquettes, cohérence des livrables et création de contenus sociaux.",
    output: "Identité, stratégie digitale, site web, tests utilisateurs et publications réseaux sociaux.",
    gallery: [
      ["./assets/images/the-click-01.webp","Présentation finale"],
      ["./assets/images/the-click-02.webp","Maquettes du site"],
      ["./assets/images/the-click-03.webp","Propositions de posts réseaux sociaux"]
    ]
  },
  {
    id: "ayana",
    number: "06",
    title: "AYANA FOOD",
    tags: ["Entrepreneuriat", "Brand", "UX/UI"],
    cover: "./assets/images/ayana-01.webp",
    summary: "Une plateforme de livraison pensée pour valoriser les cantines et cuisines africaines, avec une sélection de restaurants, un parcours de commande dédié et un modèle de fidélisation.",
    role: "Réflexion sur la proposition de valeur, la différenciation face aux plateformes classiques, le parcours de commande, la fidélisation et la conception des maquettes.",
    output: "Proposition de valeur, parcours utilisateur, architecture de service et maquettes d'application.",
    gallery: [
      ["./assets/images/ayana-01.webp","Maquettes de l'application"],
      ["./assets/images/ayana-02.webp","Benchmark / cadrage"],
      ["./assets/images/ayana-03.webp","Architecture de l'information"]
    ]
  },
  {
    id: "smart-food",
    number: "07",
    title: "SMART FOOD",
    tags: ["Product", "UX/UI", "Business"],
    cover: "./assets/images/smart-food-01.webp",
    summary: "Application de gestion alimentaire pour les jeunes : génération de menus, gestion d'inventaire, anti-gaspillage, nutrition et fonctionnalités communautaires.",
    role: "Réflexion sur le problème, sélection des fonctionnalités clés, proposition de valeur, modèle économique, pistes de financement, maquettes et présentation devant un jury.",
    output: "Concept produit, fonctionnalités, maquettes, business model et soutenance.",
    gallery: [
      ["./assets/images/smart-food-01.webp","Identité Smart Food"],
      ["./assets/images/smart-food-02.webp","Application et fonctionnalités"],
      ["./assets/images/smart-food-03.webp","Maquettes complètes"]
    ]
  }
];

const projectList = document.getElementById("project-list");
const modal = document.getElementById("project-modal");
const modalNumber = document.getElementById("modal-number");
const modalTitle = document.getElementById("modal-title");
const modalTags = document.getElementById("modal-tags");
const modalCover = document.getElementById("modal-cover");
const modalSummary = document.getElementById("modal-summary");
const modalRole = document.getElementById("modal-role");
const modalOutput = document.getElementById("modal-output");
const modalGallery = document.getElementById("modal-gallery");
const cursor = document.querySelector(".cursor-dot");
const nav = document.querySelector(".main-nav");
const menuToggle = document.querySelector(".menu-toggle");
const lightbox = document.getElementById("image-lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxClose = lightbox.querySelector(".image-lightbox-close");
const prevProject = document.getElementById("prev-project");
const nextProject = document.getElementById("next-project");
let activeProjectIndex = 0;

function renderProjects(){
  PROJECTS.forEach((project, index) => {
    const row = document.createElement("article");
    row.className = "project-row";
    row.tabIndex = 0;
    row.dataset.project = project.id;

    row.innerHTML = `
      <span class="project-number">${project.number}</span>
      <h3 class="project-name">${project.title}</h3>
      <div class="project-meta">${project.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
      <span class="project-arrow">↗</span>
      <img class="project-preview" src="${project.cover}" alt="" aria-hidden="true">
    `;

    const preview = row.querySelector(".project-preview");
    row.addEventListener("mouseenter", () => preview.classList.add("visible"));
    row.addEventListener("mouseleave", () => preview.classList.remove("visible"));
    row.addEventListener("click", () => openProject(index));
    row.addEventListener("keydown", event => {
      if(event.key === "Enter" || event.key === " "){
        event.preventDefault();
        openProject(index);
      }
    });

    projectList.appendChild(row);
  });
}

function openProject(index){
  activeProjectIndex = (index + PROJECTS.length) % PROJECTS.length;
  const project = PROJECTS[activeProjectIndex];

  modalNumber.textContent = `${project.number} / SELECTED WORK`;
  modalTitle.textContent = project.title;
  modalTags.innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join("");
  modalCover.src = project.cover;
  modalCover.alt = `Visuel principal du projet ${project.title}`;
  modalSummary.textContent = project.summary;
  modalRole.textContent = project.role;
  modalOutput.textContent = project.output;

  modalGallery.innerHTML = project.gallery.map(([src, caption]) => `
    <figure>
      <img src="${src}" alt="${caption}" loading="lazy">
      <figcaption>${caption}</figcaption>
    </figure>
  `).join("");

  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.classList.add("modal-open");
  modal.scrollTop = 0;
}

function closeProject(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll(".modal-back, .modal-close-project").forEach(button => {
  button.addEventListener("click", closeProject);
});

document.querySelectorAll("[data-close-modal]").forEach(link => {
  link.addEventListener("click", closeProject);
});

prevProject.addEventListener("click", () => openProject(activeProjectIndex - 1));
nextProject.addEventListener("click", () => openProject(activeProjectIndex + 1));

document.addEventListener("keydown", event => {
  if(event.key === "Escape"){
    if(lightbox.classList.contains("open")){
      closeLightbox();
    }else if(modal.classList.contains("open")){
      closeProject();
    }
  }
});

modal.addEventListener("click", event => {
  const image = event.target.closest(".modal-gallery img");
  if(image){
    openLightbox(image.src, image.alt);
  }
});

function openLightbox(src, alt){
  lightboxImage.src = src;
  lightboxImage.alt = alt || "Aperçu agrandi";
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden","false");
}

function closeLightbox(){
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden","true");
  lightboxImage.src = "";
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", event => {
  if(event.target === lightbox) closeLightbox();
});

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded","false");
  });
});

document.querySelectorAll(".experience-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.xp;

    document.querySelectorAll(".experience-tab").forEach(item => {
      item.classList.toggle("active", item === tab);
      item.setAttribute("aria-selected", item === tab ? "true" : "false");
    });

    document.querySelectorAll("[data-xp-panel]").forEach(panel => {
      panel.classList.toggle("active", panel.dataset.xpPanel === target);
    });
  });
});

if(window.matchMedia("(pointer:fine)").matches){
  document.addEventListener("mousemove", event => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });

  document.addEventListener("mouseover", event => {
    if(event.target.closest("a,button,.project-row,.modal-gallery figure")){
      cursor.classList.add("big");
    }
  });

  document.addEventListener("mouseout", event => {
    if(event.target.closest("a,button,.project-row,.modal-gallery figure")){
      cursor.classList.remove("big");
    }
  });
}

renderProjects();



/* GLOBE CONTINENTS — animation fournie par l’utilisateur, réintégrée à la hero */
(function () {
  var root = document.getElementById('hero-globe');
  if (!root) return;

  var canvas = root.querySelector('canvas');
  var ctx = canvas.getContext('2d');

  var LOOP_SECONDS = 18;
  var TAU = Math.PI * 2;
  var TILT = -0.32;
  var R = 1;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var W = 0, H = 0, cx = 0, cy = 0, scale = 1, dpr = 1;

  var lines = [];
  var SEG = 120;

  function latCircle(phi) {
    var pts = [];
    var rr = Math.cos(phi) * R, yy = Math.sin(phi) * R;
    for (var i = 0; i <= SEG; i++) {
      var a = (i / SEG) * TAU;
      pts.push({ x: Math.cos(a) * rr, y: yy, z: Math.sin(a) * rr });
    }
    return pts;
  }

  function meridianCircle(theta) {
    var pts = [];
    var ct = Math.cos(theta), st = Math.sin(theta);
    for (var i = 0; i <= SEG; i++) {
      var a = (i / SEG) * TAU;
      pts.push({ x: Math.cos(a) * ct * R, y: Math.sin(a) * R, z: Math.cos(a) * st * R });
    }
    return pts;
  }

  var LAT_N = 7;
  for (var la = -LAT_N; la <= LAT_N; la++) {
    lines.push(latCircle((la / (LAT_N + 1)) * (Math.PI / 2)));
  }
  var MER_N = 12;
  for (var me = 0; me < MER_N; me++) {
    lines.push(meridianCircle((me / MER_N) * Math.PI));
  }

  var stars = [];
  var STAR_N = 90;
  for (var s = 0; s < STAR_N; s++) {
    stars.push({
      x: Math.random(),
      y: Math.random(),
      r: 0.45 + Math.random() * 1.05,
      ph: Math.random() * TAU
    });
  }

  function rotY(p, a) {
    var c = Math.cos(a), sN = Math.sin(a);
    return { x: p.x * c + p.z * sN, y: p.y, z: -p.x * sN + p.z * c };
  }

  function rotX(p, a) {
    var c = Math.cos(a), sN = Math.sin(a);
    return { x: p.x, y: p.y * c - p.z * sN, z: p.y * sN + p.z * c };
  }

  var LAND_MAP_SRC = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtAAAAFoCAAAAABbTZPFAAAXEUlEQVR42u2d23LkKgxFvbv6/395z8MkabsNGGwuEmw9nDo1SWyQFrLERWybRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSicSKQCqICaUyAW2MvTu9pDyBgB4IMrIRvOot13UIE8nbuz/mg7/F7t8gmOWhLUYX8Y6ygfIoyAX0M5RRzjSeDAS57dtfMAHdwDG7UyTx+597mkFDzUNAN+QZzOmcA8f8H+FHz2UrY9IdLhN7aHTz72jUKVhUPQT0PR3iAdPoGq+g5jDFx2ub9CUIG0dAJ7+ZPEUNp8QuHnH088zPNUhPn01+6R0COjeR5rdH+EYa6aCTnjTIUNRv1QXS+rgb16j/X9VjRoRo1v9t5mvX5mmejrtn0TIvn1CIRoccRo90ZOmH17zi6yF0o0J+P4i2Ey/TQQcGq+Qb0lAqiPBX+bI3dKTELplWnWiGWywgXBRohtjEJ5AmQtSHwuqrfnBel3A/8cSDYcDKmmiQLwzy0AgpG4xldn/hNiPZX4P9of6BZh3emumiyaoNDGk80Kqv/RuJ1UEI6GgnO6Bc/p5AElQjOIcp7SMWXDIebNzpCWfn+eFcCTup4TwJ+HgjFAY6jsOGZGT+bWgPM9HeYq6Q5rOm0bEOMMx1XPjk46/je7JoTzdRnl1QOLeMxJDflMrzO2M99LkRPFP7FTzjHFrfWY/lujyzw5QQYjFF1dDIFtCn6eWNGy4niSJ7LVHsljglzRk+cfcbvFx7bR4M1F5Ewjiew7wyPMCxW3WpMxv62IAwuKCX4/AOQO92f40guv7mLLAj03m75SJBGLdMos+r4As66ETAsQXSkn7ZGnf7Y4n6RKNsnuR5BM906HDuEk8rinmGuGwmHzulpkTz1s5oZjtE9D/VVjCGcCso4f9uoVRVf0DivqGuuETC87AOc3zqB1oS/WCfZtxL8x5d4wX5QFcJNy++8fxEwETxk7/WvEs3PKMBz009NBu+Kp6Ue0Q6xBwq4Bx7HkNfnEOMk8fzQfvxF8S+oWgDNLrB/Oh9x1mPwTHHQ3Xv0DmdLEa2mm7uUMmMc5nViePv/m3IC8w+swgF3nVTvWl+8G7GYgxfQOdF5EjOPXFgw45+HIewAzzF0og1ucGAHUrzd8aMyDDd4n6MPmOO57Mc7DrY4qlQeKNd+LQSgwOk6pjtGDhntOKUnE7I6J10PWqnvvopm9c5T1ExOg+Ch71rO+fM+06A950tZsQfV5WefHQZRw+deaSFNnC+q2Mkh/DTBMY/0MG5VXrod3ZNGjRLw54sg/NRt/nY8NN66ODHzDbI4ZXLujzHo5WvQgxojTNSkxaSH6DDSNPHYLyOknYQ4A5NBblFvcMhSL+C3avpuPLQIIK7Dq0rDCe/yGTuU5gi3Jnwq3N4D+kfEaI56aEP6htSquVhtHQdIsWX5m+Xsa3jolkYGyvOKPqinvd2EJ86XOYazu9hGT9KW7yh484el1qHq9MeGCI6BQWiyc6BatobhF/0phM+3GCqgMaK6aDiiQZAG5/pCNSAY5Tny42ejze3sTLO4vkJGkibyDbQp08KEUG66ILC1idRmPXpkdxio/5VlB1Z/t/GX68GxmYKCo9jDVsXdLMAYGAmIOIMAOc877mOhc0snbLAUJ4FdDnPH4u9k/j4OqMDhkMRVBs2klFeLHGYFQXGo8GulTT3VgXHYSG0YujUZys2/YP8j3j6Zp7ddAht8JxI75h/ynIg0CekNekRW+j7wQ4lkDC+MBVYK++wv+A+0LQUR2ScG9zdP7M0zwjpbVcS/94h2fCXnM83zVcHmimP54Fo29OlHSlmTCN4DMnVFELfyLt8UgbbwGtAwiMpWruoY6E546kRI9EGtipA//r33McOc9K17wCpATTi4VyqnAwXxjlqVmwVgd6O59duxSqLEX1pCEbqABPLAF0YR17++rsdzn19XuZHxo7RmOqjcG7/xF2R8WEX9Fw2m90VeNdB8yuKXjJ+fjAR+9BD7/dElEDRavPuzSLAfT00LrNRLr0oiWEPfXIHDXtqhLaY5oWHDhdFUbhxO4DO8dDsjsFtYLJI6OUUebFOCW5Lnz7BmOfWSADZRTk0oc5vP5Dw0TzW2L68WVQeusa0HZ+X60cfoO9X/W3I865dqfBoTUeNz6DOOfOZabJ3e8NbPKnc9maZq6q138eO1ww8+Ocyaw7od4dx2HdOIVed6NEUnt/HTTtEG47md2Oau5jO6OwXgjGzEL5hwXwDv5r7TW7bBsDTKHf4fZo7cyxQ4yQhx43NDw3dOsOHT+Sga8SKZlwITY79nr2GcI7GpdVWU7EczsnTCU15Fs6JRKuWPd7rqa/f6Dru7xfPPeS9EMJfOybaXz6P3fXGwrlPStN/PyV6X5nO7auWNHt3XzBfW6iWKd6za4u//ngIXUI5U0mo5aLRv+2jwo5gGyCiLXjoemZ49QcL4/2BxFSGY/l5lnAKlCMlDllhn+5rCF3wV3MW9TWxsk61G/f/wn7ZKbo9rvUWg2Y81xv0GEpZb/WNKgnGx1Y67KpO15SlM57/b1yoZZeZPXSQK4/ff/xVpuc1z466tRuB1Rq/2EohLDaJuYNxu7y1i8vbojfQHIeMXQ+GjIJPSN5T77Cy9HEmFbaHiSGgYaH4KK9MwBwTpe5ygmOgf+xTJ4yeHOjqs0KFHY1HAnuML27azFKjNx8dqBQloM0GzMxpGo9zF2V32tJ3DB0ufAZ/Rue2BNA5dO6Lbqdv9855h5fSeN+7+VnbWq9RI3PSBLSsfQjFJ/HfJ6P+jF54Diz+oOaGiLljaAxDNedbi3MEGZ3ACNXJC5cVMlxbOl6qn5rlcBlyHJ1q4Mor5nYrfsGZ4dMEkfQWno3OFXDOuVDvcEX5PsAMBZ0lfTYcc2RcpvJY5lwphK82/S6sHD68+F8yjI5tkFlqsepRuCk3Jw3nmddt4nnO4xD+3lgpMTV1l3tvWm0XPePmJLhsM7nh03bvd27id0aj94bWGT20RQcdcNEIOyreJdpOvQSEkl50cdDDbqOc20GzoFWM8IjbRdzHO/bgEU704HnCkAMm24A7wxuw5CgKm8IxTcag7k4eQadvI/sUrie28D3AuKUrazuUUiuhfxlwXYMtVwqsnzGZ4ox7Q7PWqLSWRTI+wlpNSLo8YudkjuPoeQu2HjG0/X1XAMpd7BdwxWxkMGyzEW1o0o6XU8O48G3n5/nbIBoAumGtnzEhR8MKAqZ4foAfQ07OKc8F6YVi6Fkj8JmuTWY0YR15eb2HoAPmzFi7vR7PWEWu6MB0CHBmntmkxT5zwg6hsxEGuDbO5Y32XHfjs2TIhgHVNEB7izbSMwLwz3P8Mmh0fatTom1lULzf/qTVfW2/CxLd2lCTzHJMMyPAoKOmw8pI4bl0zE5CpfUv7w760wee/5lf/+M5im5uKM1DWxoGIWadFCiw4nZeJvqoK7F/mFWxf/ff6t/CDLea3WgLoplUt0wnFF1WjncgvyBFePuwz0no6pbk8jxbiKHBrGl22EwArfAsMZUU8up76STK5nDfsLqMP1P4PxG68NHi+b8acPFuS3oacyPXy0y/n/WfK3zsca0CO/e6DWrIy0rX70+64+PqB097Da45wr2TXnUm1EQZAzwzAj6PwdQ8X++F4Pa/ADMw+nwAVgb6zky0vTjbRMDzOy2/bHZo5cv063x4q5X8GRKYHejryWZshwCO47ga842wtpfj3sQTjAzJ9i9BliaiNQI6Xm/OMUS/DYFMbJpKrTasBgbRI/2LrSXji3tGHvuvCSLoshVujGgl8hLYFYCOEY1LlJbJCMvK7KJ/S3E0Zm+xVX30xrH+n6lncpFNFGXDl9XK5nnxkK8Hqqmui3vT0fhrIMdiNt2rCk2B/R2Eo9YEXgVds7X9/GexG9g+9x4oocwgEkWI5nsjGC3NnUYI/WCNN5OpjGe+itch3/LEvkUlnTJ2QdJSKlYSQwPo46X55MdcYYsSci0WfQCqjFB7G0cKk0IYWlRFzHz9WwhfW4Eur6ba/Rw5JqCt4V7qPNtbL5mbM9ry03n/fpz1v/L5aS1I5v4dcxpiZkS/Gg+AWsOMOQYBfi7GM+g5/CaSyBjKdr5Q7wqwNdEpz3o7JkMhD/3ZmfN72fAGTro3uNUeAdx4U+y6AQchh51vOKK+gqeRgfHNbWC0h8cwWcBm6hXsdKWmc6CvDHZ1jSNjVQ8mADorisatJqOsdzAXiVguBXb/LtXNUdWDNkEHHgyUisO8v/KN3yQLHfdOvA5RLtGJXnvFJ8xfjYz44oDj2c/GCkPdXiSWYGPLWMNs46H6KD53CR8VRjMo9bZfi285UrENvAxzZxEmjXaBYwz3cHNo4SU+LEBo2Oz0yxfQNsffiO0jzA/PljKUM6BtEo1RowjPEmg0/HUMGujegBbRYSc9cDMyTX27/F1JgZMplxV25rlktZ3bmBP8mMGYKyaFVWzIwoeUlAHi05qFi4QcuQZY5NQsDokg2XQo8PzGy2ejsxlem3ei4/P9tDO8uqWJzXuJ7O6CHJAVOr7WDelFKmw9tzCOLvjEYc2OBBz4eXhvvbhOqYKz9+HCSx3OsAy7K+hRilyiGAZ2riYCaI5g7LV5lwyOSLofvBd968LO7qQhMhJCjFD6a5uEaPLS47Dt5j3P4wXFsQcSZ8cPkV5ntWAKmsHcjBrtG2MhU76jQWT9LkL/H49M0Hvizv1nmJY6TH88/2xZzNq4ePyl6I4/Hn6n85bICUKO308gXDBnT3Hl5bPSo+fD84hrnF4TgFw2/tkWDm8O+hhE+FfCFB76B+ncsuiclujGjS70HZ9ggwL6FtJwBIfbd18t/31+jJ/JEyiG7pFIsuXQmtZLX14gsN9CgwFnPzEdqAZ6nz6rRJOmzD2leFGzOPDjvrUM5lo9o5H+5xSbdGVKfnlnXHV8GFerA91GA/vlytM8LB1aklsO0TRAlYBu5aTTVbKq785DD80iE+gNAno2oNu0dVwnvmpv4+K7NExey/M8zJV4q/r/o+Jo+GxD+y/xPIOg2zsY1PVhcpoCeijP/sdBV2efcZcCByp5yYUVmx9L8zgfdvUzocDQHS29lCygvUdIA0JxHsZQxGX/XVrd9ysI0WGh8JGXtodmmsMFNI9TeP02RctDOz87NdyBBFZF8c1zx2a+xbOhMtPmecZ5rhl5VXb/7r7BnCPc2ue7/+1v9Gm9wG0YDAYcOJ60J7bLqzQUctS1k7vZjoHeKKErIPTdQ/10WEA/MZO+jV/Nztq4gSDrv8qmgO7gqd246dFr57xzwSwOf92AaU3bDdQMXVru7Jr53bDANiUe9+qlyz09SGgEtFeisdkheiOOM9SH7O88JX3ZmftEa5bDKdEwoG2EfrCHeF9A6XeqI/Oa5btIv8Rz56dOIMiJ6/GB96u0Y6QaAqvoXknh0EkPdP/Dps0+VGHiV6i8Zx4ZDgQOFePCmVqshgcTCk+eMkuUaWSk/Ay2v2p4P6F4eT/loa1+vY23+/89hEx2C4n6pMEQ/LO8dbvkg2JohdIPkP7Bj5Gflt8nwENVN5gptTIV0TDYdNjTeX6TiHjfz4cDsCLQTZEW0FlNR42+BxdZSh49TxkDCujhasfzriPp0gW0g7yNroH+7gL+6uhgd5lsso7HZ1IjTvSGTKjn2eAPaiAO030oON4XPED8r5hjwnzjTlQ5yWPNuM3vTHS8P9ihnXGf3t6BR38920XPVAqMLoH2HkRHu3Tr7nrGU8M8ogX0cAXN5qIPjrq0nYlDWnnPWrvguQ39cEagyzSAwGCIjJFlkkKf8cZqEpzxyFyiyTLGS/iJ554mwv9jbl/FHet9W+WhZwmU6GH8/VYHY7MCHXPttoPpxzlIgYe1mQJaDtp3Vxt5i8mAhtmHtWaFlscG+5UglYeew0HD+GDj5d48CmiJi8Alr+B5UYWfxMNmm+XAMjEpfODcu23vCQ3tCWn6Q6ZO49joqujXhA4NK62H0HTNVLLJQIw6LXLOGLoK0nDXQ3MtZhHufGwbzry4SxdAP91qR8c8n3wtHr8OWvp2ng7Cech4rP+F54+ad9ruadgBDzxLvkUeejCdE1dS4YiBroUVX/4WU/NcYcZGHnrVoWHTOfNpN+ShR+MBr9A2crSXU32Uh54486K5FjeOnK+SDnloV2OHY/OuDN/M9iOCAlrDwn6oUdDR1HtmntR0cyMPbzfNVMTBXsMztcKtGFoy1ddIQLv+YkHXCyiGnohnRYvy0M5xht2ms+7DbvZIHvoPiXGryshvo+ExCLXCkseA/aYi+rfwqPE2FlHI4T0gAqfEWUnhsl+qWT+yFNBiUiKgLX0vnWfVAlo+Mv/18uICWgNqva/mS+qQzDQq5aGNhH9wAEtnoiGgPX/vYT/hUgwtWSuMpoC2oFuI9XnaKQ9thxZIl8+fNe1ejuyt7/LPXTvSOipZfnOSeO7bidaO5i2ejYf9mEzHaOullRTaHlz+5+sCPcBNZSgp9P45d4cz8zSMS93f7vhbPKtZrbqQPHpQrZPHt6y5OxyWDi59tRtTKB7XFLIO7V8aW/S4g1aSm2oeTy1UWO8P01v2KiUU0KathMLHYPmkUHtLbeS8qG7Ol3iVOE+KD/VIX2vyrJBj1gGguhySoSyykrfhz5++lx/SEktE46ld5zQtRbM3ez1aGuCiQAtl42bDM2tj3aRQMmEkiG3TiRWJf+/1M52tq5ElpsDk579FPB//5D3lmA18jagQetpIkbt4ZZlpO9Fs3UC8Pwh2NbLfywx+ET2xs/oY9zVpDyt+0CR2v6Q8/clbapK4jTnOPK+ysCKgfZgNd2w8/YmVWvtdJPaNfDKs5qElkzitaYGWg16H57NhF0gKRfM6/nlGoCmeVxGs4L44fxclW3ypDFN2VUwvK68VeJYIaIlEUwCKoR0Hn/LQGrJumaaAFr9SkrpmIOYQ30oKZxqi4llAT58TaV5P0dQsIQfluAX0XETjbnkeiYC2ALToVQztfoxix7ICZnnoyZy0fLSAVtwhEdCOUkOJYmjHI1UwS+bx00oKJRKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgOsuBmYd0qK6DnwnkT0QJaNEsEtFiWCOh2PItmO+ZoZov3MjgrsGrtHkoobUY0VsIZaw1dPHoOrt6BwGuR5rZDASAsY+Klhu7THscjNOYzxREsYhEbYy2WA3Th/jM8ZXRrGBpLsryzcca33kSeAQG9NNGsZXNLWTMEdCqTnicj/IprWc/ohieBIKCP9uc0XeWxI6xHif1JTQho61fY73K03/+Nx0Zsw4er2XkI6G3bNpisE81IulbNBWcZ3NtqEwT02N7SavIFn0Dn2RLLwNyvtwy4XtjhZ6a7Z+AK6N0aX8HSfwokjBxNphCYZXcLXHnoe1MUTHhGLI7zdOIH6O9ZKlyFp5EQtuNdK4LZQByNroTigBqK3HMyy/u/OezzxO5RtGA2khf2zfsPMQDSDpfddCCg5+G5IdAMvovb9+TwX6zbY0G2Z3clvWFuZGFWaCh3/NuHWTgbobmSlX/oo1slCOZZcK4H9LYkzWLZnCnfqytADK9r78DBSa7EsnB2YFPMZ03FFysjPWHIcbcYY3yhRyjPFHJ89p1zmj6liIVg9mzid56tucED1TejDUG7VlJ4LG3B2XmGYHcMbB4DfsLLqw1PGfM02Lx0Vii3mRKg8c5Hd5CyWCVCen6gaV8BzPjnhC5EsaN4EpPQm802sgIqMewV6RsemtPp4+ssgWh2TPR6E12YoheCuirQdK4TkTwt0ysCLZmY69cdXsWzZLzw4vN7TIdw+4kSyUCnjYzy7+Ja4ofpGnWzhbRkBqAlEnPykgokAloiEdASiYCWSAS0REBLJAJaIhHQEklD+QfwVh89neW5VwAAAABJRU5ErkJggg==';

  var landReady = false, landData = null, landW = 0, landH = 0;
  var landImg = new Image();
  landImg.onload = function () {
    landW = landImg.naturalWidth;
    landH = landImg.naturalHeight;
    var off = document.createElement('canvas');
    off.width = landW;
    off.height = landH;
    var octx = off.getContext('2d');
    octx.drawImage(landImg, 0, 0);
    landData = octx.getImageData(0, 0, landW, landH).data;
    landReady = true;
  };
  landImg.src = LAND_MAP_SRC;

  function isLand(lon, lat) {
    var mx = Math.floor((lon / TAU + 0.5) * landW) % landW;
    if (mx < 0) mx += landW;
    var my = Math.floor((0.5 - lat / Math.PI) * landH);
    if (my < 0) my = 0;
    if (my >= landH) my = landH - 1;
    return landData[(my * landW + mx) * 4] > 128;
  }

  var LAND_RES = 240;
  var landCanvas = document.createElement('canvas');
  landCanvas.width = LAND_RES;
  landCanvas.height = LAND_RES;
  var landCtx = landCanvas.getContext('2d');
  var landBuf = landCtx.createImageData(LAND_RES, LAND_RES);

  function renderLand(spin) {
    var cSpin = Math.cos(spin), sSpin = Math.sin(spin);
    var cTilt = Math.cos(TILT), sTilt = Math.sin(TILT);
    var data = landBuf.data;
    var half = LAND_RES / 2;

    for (var j = 0; j < LAND_RES; j++) {
      var ndcY = 1 - (j + 0.5) / half;
      for (var i = 0; i < LAND_RES; i++) {
        var idx = (j * LAND_RES + i) * 4;
        var ndcX = (i + 0.5) / half - 1;
        var r2 = ndcX * ndcX + ndcY * ndcY;

        if (r2 > 1) {
          data[idx + 3] = 0;
          continue;
        }

        var camZ = Math.sqrt(1 - r2);
        var y1 = ndcY * cTilt + camZ * sTilt;
        var z1 = -ndcY * sTilt + camZ * cTilt;
        var x0 = ndcX * cSpin - z1 * sSpin;
        var z0 = ndcX * sSpin + z1 * cSpin;
        var y0 = y1;

        var lat = Math.asin(Math.max(-1, Math.min(1, y0)));
        var lon = Math.atan2(z0, x0);

        if (isLand(lon, lat)) {
          data[idx] = 227;
          data[idx + 1] = 239;
          data[idx + 2] = 255;
          data[idx + 3] = 255;
        } else {
          data[idx + 3] = 0;
        }
      }
    }

    landCtx.putImageData(landBuf, 0, 0);
  }

  function resize() {
    var rect = root.getBoundingClientRect();
    W = rect.width;
    H = rect.height;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cx = W / 2;
    cy = H / 2;
    scale = Math.min(W, H) * 0.37;
  }

  function draw(elapsedMs) {
    var t = (elapsedMs / 1000) % LOOP_SECONDS;
    var spin = (t / LOOP_SECONDS) * TAU;

    ctx.clearRect(0, 0, W, H);

    var glow = ctx.createRadialGradient(cx, cy, scale * 0.16, cx, cy, scale * 1.75);
    glow.addColorStop(0, 'rgba(54,130,219,0.14)');
    glow.addColorStop(1, 'rgba(54,130,219,0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, W, H);

    for (var s = 0; s < stars.length; s++) {
      var st = stars[s];
      var tw = 0.55 + 0.45 * Math.sin(spin * 4 + st.ph);
      ctx.fillStyle = 'rgba(160,195,245,' + (0.18 + 0.35 * tw).toFixed(2) + ')';
      ctx.beginPath();
      ctx.arc(st.x * W, st.y * H, st.r, 0, TAU);
      ctx.fill();
    }

    ctx.strokeStyle = 'rgba(227,239,255,0.9)';
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.arc(cx, cy, R * scale, 0, TAU);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(97,150,225,0.34)';
    ctx.lineWidth = 1;
    for (var l = 0; l < lines.length; l++) {
      var line = lines[l];
      var drawing = false;
      ctx.beginPath();
      for (var p = 0; p < line.length; p++) {
        var rp = rotX(rotY(line[p], spin), TILT);
        if (rp.z <= 0) {
          drawing = false;
          continue;
        }
        var sx = cx + rp.x * scale;
        var sy = cy - rp.y * scale;
        if (!drawing) {
          ctx.moveTo(sx, sy);
          drawing = true;
        } else {
          ctx.lineTo(sx, sy);
        }
      }
      ctx.stroke();
    }

    if (landReady) {
      renderLand(spin);
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(landCanvas, cx - R * scale, cy - R * scale, R * scale * 2, R * scale * 2);
    }
  }

  var raf = null;
  function loop(ts) {
    draw(ts);
    raf = requestAnimationFrame(loop);
  }

  function start() {
    resize();
    if (reduceMotion) {
      draw(0);
      return;
    }
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(loop);
  }

  window.addEventListener('resize', function () {
    resize();
    if (reduceMotion) draw(0);
  });

  document.addEventListener('visibilitychange', function () {
    if (reduceMotion) return;
    if (document.hidden) {
      if (raf) cancelAnimationFrame(raf);
      raf = null;
    } else if (!raf) {
      raf = requestAnimationFrame(loop);
    }
  });

  start();
})();
