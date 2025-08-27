// js/script.js
function ajustarBodyPeloHeader() {
        const header = document.querySelector('.header');
        const sections = document.querySelectorAll('section');

        if (!header) return;

        const alturaHeader = header.offsetHeight;

        // Ajusta o padding do body
        document.body.style.paddingTop = alturaHeader + 'px';

        // Ajusta scroll-margin-top de todas as sections
        sections.forEach(section => {
                section.style.scrollMarginTop = alturaHeader + 'px';
        });
}

// Executa ao carregar a página
window.addEventListener('load', ajustarBodyPeloHeader);

// Executa ao redimensionar a tela
window.addEventListener('resize', ajustarBodyPeloHeader);

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


