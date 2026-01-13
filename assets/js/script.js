document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MANIPULAÇÃO DO FORMULÁRIO (AJAX)
    const contactForm = document.querySelector('.contact-form');
    const submitBtn = document.querySelector('.btn-submit');
    const originalBtnText = submitBtn.innerText;

    if (contactForm) {
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

                    alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
                    contactForm.reset();
                } else {
                    
                    alert('Ops! Houve um erro ao enviar. Tente novamente mais tarde.');
                }
            } catch (error) {
                alert('Erro de conexão. Verifique sua internet.');
            } finally {
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }

    const cards = document.querySelectorAll('.bento-box');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });

});