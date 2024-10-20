// Função para salvar os dados do formulário no LocalStorage
const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que a página recarregue ao enviar o formulário

    // Capturando os valores dos campos do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Criando um objeto para armazenar os dados
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Salvando os dados no LocalStorage
    localStorage.setItem('contactData', JSON.stringify(formData));

    // Exibindo mensagem de sucesso e limpando o formulário
    successMessage.style.display = 'block';
    form.reset();
});

// Menu lateral em dispositivos móveis
document.getElementById('mobile-menu').addEventListener('click', function() {
    const sideMenu = document.getElementById('side-menu');
    sideMenu.classList.toggle('active'); // Ativa ou desativa o menu lateral
});

// Efeito do site
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero-section');
    const header = document.querySelector('header');
    const content = document.querySelector('.content');
    
    // Função para verificar a posição de rolagem
    function onScroll() {
        const scrollTop = window.scrollY;
        const heroHeight = heroSection.clientHeight;

        // Verifica se a rolagem está na seção hero
        if (scrollTop > heroHeight / 2) {
            header.classList.add('visible');
            content.classList.add('visible');
        } else {
            header.classList.remove('visible');
            content.classList.remove('visible');
        }
    }

    // Adiciona a classe 'visible' ao hero na carga
    heroSection.classList.add('visible');

    // Adiciona o evento de rolagem
    window.addEventListener('scroll', onScroll);
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".content");

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1 
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
// Aguarda o carregamento do DOM
document.addEventListener("DOMContentLoaded", function() {
    const scrollArrow = document.getElementById("scrollArrow");

    scrollArrow.addEventListener("click", function() {
        // Desloca suavemente para a seção de curiosidades
        document.getElementById("curiosidades").scrollIntoView({ behavior: "smooth" });
    });
});
