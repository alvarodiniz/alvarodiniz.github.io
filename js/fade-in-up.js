// Seleciona todos os elementos que têm a classe fade-in-up
const elementsToReveal = document.querySelectorAll('.fade-in-up');

const revealElements = () => {
    elementsToReveal.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            element.classList.add('visible');
        }
    });
};

// Chama a função no scroll e ao carregar a página
window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);


// Seleciona todos os elementos que têm a classe fade-in-up -first
const nontextelementsToReveal = document.querySelectorAll('.fade-in-up.-first');

const revealnontextElements = () => {
    nontextelementsToReveal.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            element.classList.add('visible');
        }
    });
};

// Chama a função no scroll e ao carregar a página
window.addEventListener('scroll', revealnontextElements);
window.addEventListener('load', revealnontextElements);



// Seleciona todos os elementos que têm a classe fade-in-first
const bannerelementsToReveal = document.querySelectorAll('.fade-in-first');

const revealbannerElements = () => {
    bannerelementsToReveal.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            element.classList.add('visible');
        }
    });
};

// Chama a função no scroll e ao carregar a página
window.addEventListener('scroll', revealbannerElements);
window.addEventListener('load', revealbannerElements);