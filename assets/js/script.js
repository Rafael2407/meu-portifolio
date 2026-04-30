document.addEventListener('DOMContentLoaded', () => {
    
    const contactForm = document.querySelector('.contact-form');
    const submitBtn = document.querySelector('.btn-submit');
    
    if (submitBtn) {
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

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");

    const galleryImages = document.querySelectorAll('.gallery-item img');

    if (modal && modalImg) {
        galleryImages.forEach(img => {
            img.addEventListener('click', function() {
                modal.style.display = "block";
                modalImg.src = this.src;
                
                const figcaption = this.nextElementSibling;
                if (figcaption) {
                    captionText.innerHTML = figcaption.innerHTML;
                } else {
                    captionText.innerHTML = this.alt;
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
    }
});