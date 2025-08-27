// js/script.js
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona os elementos do menu
    const menuBtn = document.querySelector('#menu-btn');
    const navbar = document.querySelector('.navbar');

    // Função para alternar a visibilidade do menu
    if (menuBtn && navbar) {
        menuBtn.onclick = () => {
            // Adiciona ou remove a classe 'active' da navbar
            navbar.classList.toggle('active');
        };
    }

    // Fecha o menu ao clicar em um dos links
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
            }
        });
    });
    
    // Bônus: Fecha o menu se o usuário clicar fora dele
    window.addEventListener('click', (e) => {
        // Verifica se o clique não foi no menu nem no botão que o abre
        if (!navbar.contains(e.target) && !menuBtn.contains(e.target) && navbar.classList.contains('active')) {
             navbar.classList.remove('active');
        }
    });

    // Atualiza o ano no rodapé automaticamente
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});


        