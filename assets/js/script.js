document.addEventListener('DOMContentLoaded', () => {

    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');

    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });

    document.querySelectorAll('.main-nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });
    });

    function initScrollReveal() {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else if (entry.boundingClientRect.top > 0) {
                    entry.target.classList.remove('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(element => {
            observer.observe(element);
        });
    }

    const textToType = "Olá, eu sou Rafael.";
    const typingSpeed = 60;
    const typewriterElement = document.getElementById('typewriter');
    let typeIndex = 0;

    function typeWriter() {
        if (typeIndex < textToType.length) {
            typewriterElement.textContent += textToType.charAt(typeIndex);
            typeIndex++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            setTimeout(() => {
                initScrollReveal();
            }, 400);
        }
    }

    if (typewriterElement) {
        typewriterElement.classList.add('typing-cursor');
        setTimeout(typeWriter, 400);
    } else {
        initScrollReveal();
    }

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            timelineItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    const timelineScroll = document.getElementById('timelineScroll');
    const timelineBtnUp = document.querySelector('.timeline-wrapper .up-btn');
    const timelineBtnDown = document.querySelector('.timeline-wrapper .down-btn');

    if (timelineScroll && timelineBtnUp && timelineBtnDown) {
        timelineBtnDown.addEventListener('click', () => {
            timelineScroll.scrollBy({ top: 150, behavior: 'smooth' });
        });
        
        timelineBtnUp.addEventListener('click', () => {
            timelineScroll.scrollBy({ top: -150, behavior: 'smooth' });
        });
    }

    const carouselCards = document.querySelectorAll('.carousel-card');
    const btnPrev = document.querySelector('.carousel-wrapper .prev-btn');
    const btnNext = document.querySelector('.carousel-wrapper .next-btn');
    let currentCardIndex = 0;

    function renderCarousel() {
        const total = carouselCards.length;
        carouselCards.forEach((card, index) => {
            card.className = 'carousel-card';
            
            let offset = (index - currentCardIndex + total) % total;

            if (offset === 0) {
                card.classList.add('active');
            } else if (offset === 1) {
                card.classList.add('next-1');
            } else if (offset === 2) {
                card.classList.add('next-2');
            } else if (offset === total - 1) {
                card.classList.add('prev-1');
            } else {
                card.classList.add('hidden');
            }
        });
    }

    if (btnNext && btnPrev && carouselCards.length > 0) {
        btnNext.addEventListener('click', () => {
            currentCardIndex = (currentCardIndex + 1) % carouselCards.length;
            renderCarousel();
        });
        
        btnPrev.addEventListener('click', () => {
            currentCardIndex = (currentCardIndex - 1 + carouselCards.length) % carouselCards.length;
            renderCarousel();
        });
        
        renderCarousel();
    }

    const contactForm = document.querySelector('.gold-form');
    const submitBtn = document.querySelector('.btn-gold');
    const messageInput = document.querySelector('.gold-form textarea');

    if (messageInput) {
        messageInput.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        });
    }
    
    if (submitBtn && contactForm) {
        const originalBtnText = submitBtn.innerText;

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            submitBtn.innerText = 'Enviando...';
            submitBtn.disabled = true;

            const data = new FormData(contactForm);

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    alert('Mensagem enviada com sucesso!');
                    contactForm.reset();
                    if (messageInput) {
                        messageInput.style.height = 'auto';
                    }
                } else {
                    alert('Houve um erro ao enviar.');
                }
            } catch (error) {
                alert('Erro de conexão.');
            } finally {
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("img01");
    const closeBtn = document.querySelector(".close");

    if (modal && modalImg) {
        carouselCards.forEach(img => {
            img.addEventListener('click', function(e) {
                if (!this.classList.contains('active')) {
                    e.preventDefault();
                    return;
                }
                modal.style.display = "block";
                modalImg.src = this.src;
            });
        });

        if (closeBtn) {
            closeBtn.onclick = function() {
                modal.style.display = "none";
            }
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
});