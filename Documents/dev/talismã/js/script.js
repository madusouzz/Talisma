// Pega o elemento com o ID 'current-year'
        const yearElement = document.getElementById('current-year');
        // Pega o ano atual e o define como o texto do elemento
        yearElement.textContent = new Date().getFullYear();