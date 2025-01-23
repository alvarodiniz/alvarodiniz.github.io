window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    const loaderBg = document.querySelector(".loader-bg");

    // Adiciona um atraso de 3 segundos antes de começar o fade-out
    setTimeout(function () {
        loader.classList.add('invisible'); // Inicia transição de opacidade
        loaderBg.classList.add('invisible');

        // Remove o elemento completamente após a transição mais longa (2s)
        setTimeout(function () {
            loader.classList.add('hidden');
            loaderBg.classList.add('hidden');
        }, 2000); // Aguarda o tempo da transição (2s)
    }, 4000); // Mantém o loader visível por 4 segundos antes de iniciar a transição
});
