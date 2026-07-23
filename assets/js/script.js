document.addEventListener('DOMContentLoaded', () => {

    const i18n = {
        pt: {
            nav_about: "Sobre",
            nav_experience: "Experiência",
            nav_stack: "Stack",
            nav_projects: "Projetos",
            nav_contact: "Contato",
            subtitle: "&lt;/&gt; Engenharia de Software, Desenvolvedor Web",
            hero_bio: "Construindo a ponte entre regras de negócio complexas e interfaces intuitivas. Foco em arquitetura de sistemas e soluções web responsivas de alto impacto.",
            about_title: "Sobre e Visão",
            about_text: "Atualmente cursando Engenharia de Software na FAMETRO. Minha jornada no desenvolvimento me permite criar desde APIs robustas no backend até interfaces dinâmicas, reaproveitando conceitos sólidos de web dev para entregar produtos completos.",
            status_aria: "Status atual: Localizado em Manaus, disponível para trabalhos remotos no mundo todo.",
            status_text: "Baseado em Manaus. Disponível Globalmente.",
            exp_title: "Experiência",
            exp_role: "Desenvolvedor e Estagiário",
            exp_desc: "Atuação direta na modernização de processos internos, substituindo fluxos manuais por soluções digitais automatizadas e seguras, com foco em controle de patrimônio.",
            stack_title: "Evolução Tecnológica",
            stack_web: "Fundação Web",
            stack_db: "Banco de Dados",
            stack_fw: "Frameworks e Tecnologias",
            stack_infra: "Infraestrutura e Deploy",
            stack_legacy: "Sistemas Legados e Arquitetura",
            stack_legacy_1: "Refatoração de SGC",
            stack_legacy_2: "Modernização de Código",
            stack_legacy_3: "Otimização de Performance",
            stack_focus: "Foco Atual e Perfil Profissional",
            stack_focus_desc: "Aproveitando a flexibilidade e o meu conhecimento prévio em desenvolvimento web para construir experiências mobile nativas de forma orgânica. Destaco-me pela fácil adaptação a diferentes ambientes e pelo ótimo trabalho em equipe, sempre disposto a aprender novas tecnologias para solucionar os mais diversos problemas e aprimorar minha visão sistêmica.",
            proj_title: "Projeto Destaque",
            proj_name: "Sistema de Gestão de Inventário",
            proj_desc: "Plataforma Full-Stack desenvolvida para a FAPEAM. O sistema elimina a dependência de planilhas locais, oferecendo controle de acesso, rastreabilidade de itens e um dashboard executivo em tempo real.",
            contact_title: "Vamos Conversar",
            form_name: "Nome",
            form_name_label: "Nome",
            form_email: "E-mail",
            form_email_label: "E-mail",
            form_msg: "Mensagem",
            form_msg_label: "Mensagem",
            form_btn: "Enviar",
            typing_text: "Olá, eu sou Rafael."
        },
        en: {
            nav_about: "About",
            nav_experience: "Experience",
            nav_stack: "Stack",
            nav_projects: "Projects",
            nav_contact: "Contact",
            subtitle: "&lt;/&gt; Software Engineering, Web Developer",
            hero_bio: "Building the bridge between complex business rules and intuitive interfaces. Focused on system architecture and high-impact responsive web solutions.",
            about_title: "About & Vision",
            about_text: "Currently studying Software Engineering at FAMETRO. My development journey allows me to create everything from robust backend APIs to dynamic interfaces, leveraging solid web dev concepts to deliver complete products.",
            status_aria: "Current status: Based in Manaus, available for remote work worldwide.",
            status_text: "Based in Manaus. Available Worldwide.",
            exp_title: "Experience",
            exp_role: "Developer & Intern",
            exp_desc: "Direct involvement in modernizing internal processes, replacing manual workflows with secure and automated digital solutions, focusing on asset management.",
            stack_title: "Technological Evolution",
            stack_web: "Web Foundation",
            stack_db: "Databases",
            stack_fw: "Frameworks & Technologies",
            stack_infra: "Infrastructure & Deployment",
            stack_legacy: "Legacy Systems & Architecture",
            stack_legacy_1: "SGC Refactoring",
            stack_legacy_2: "Code Modernization",
            stack_legacy_3: "Performance Optimization",
            stack_focus: "Current Focus & Profile",
            stack_focus_desc: "Leveraging flexibility and my previous web development knowledge to organically build native mobile experiences. I stand out for my easy adaptation to different environments and great teamwork, always willing to learn new technologies to solve diverse problems and improve my systemic vision.",
            proj_title: "Featured Project",
            proj_name: "Inventory Management System",
            proj_desc: "Full-Stack platform developed for FAPEAM. The system eliminates reliance on local spreadsheets, offering access control, item traceability, and a real-time executive dashboard.",
            contact_title: "Let's Talk",
            form_name: "Name",
            form_name_label: "Name",
            form_email: "Email",
            form_email_label: "Email",
            form_msg: "Message",
            form_msg_label: "Message",
            form_btn: "Send",
            typing_text: "Hi, I'm Rafael."
        }
    };

    let currentLang = localStorage.getItem('language') || 'pt';
    const langToggle = document.getElementById('langToggle');

    function updateLanguage() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[currentLang][key]) {
                el.innerHTML = i18n[currentLang][key];
            }
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (i18n[currentLang][key]) {
                el.setAttribute('placeholder', i18n[currentLang][key]);
            }
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const key = el.getAttribute('data-i18n-aria');
            if (i18n[currentLang][key]) {
                el.setAttribute('aria-label', i18n[currentLang][key]);
            }
        });
        
        langToggle.innerText = currentLang === 'pt' ? 'EN' : 'PT';
        
        if (typeIndex >= textToType.length) {
            textToType = i18n[currentLang].typing_text;
            typewriterElement.textContent = textToType;
        }
    }

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'pt' ? 'en' : 'pt';
        localStorage.setItem('language', currentLang);
        updateLanguage();
    });

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

    function updateLiveTime() {
        const timeElement = document.getElementById('liveTime');
        if (!timeElement) return;
        
        const now = new Date();
        const options = { 
            timeZone: 'America/Manaus', 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true
        };
        
        const timeString = now.toLocaleTimeString('en-US', options);
        timeElement.innerText = `${timeString} (AMT)`;
    }
    
    setInterval(updateLiveTime, 1000);
    updateLiveTime();

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

    let textToType = i18n[currentLang].typing_text;
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

    updateLanguage();

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
                card.setAttribute('tabindex', '0');
            } else if (offset === 1) {
                card.classList.add('next-1');
                card.setAttribute('tabindex', '-1');
            } else if (offset === 2) {
                card.classList.add('next-2');
                card.setAttribute('tabindex', '-1');
            } else if (offset === total - 1) {
                card.classList.add('prev-1');
                card.setAttribute('tabindex', '-1');
            } else {
                card.classList.add('hidden');
                card.setAttribute('tabindex', '-1');
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
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = currentLang === 'pt' ? 'Enviando...' : 'Sending...';
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
                    alert(currentLang === 'pt' ? 'Mensagem enviada com sucesso!' : 'Message sent successfully!');
                    contactForm.reset();
                    if (messageInput) {
                        messageInput.style.height = 'auto';
                    }
                } else {
                    alert(currentLang === 'pt' ? 'Houve um erro ao enviar.' : 'There was an error sending.');
                }
            } catch (error) {
                alert(currentLang === 'pt' ? 'Erro de conexão.' : 'Connection error.');
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
                closeBtn.focus();
            });
            
            img.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
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
        
        modal.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                modal.style.display = "none";
            }
            if (e.key === 'Tab') {
                e.preventDefault();
                closeBtn.focus();
            }
        });
    }
});