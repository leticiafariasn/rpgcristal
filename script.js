document.addEventListener('DOMContentLoaded', function() {
    // Navegação da Timeline de Sessões
    setupSessionTimeline();
    
    // Área Secreta do Mestre
    setupMasterArea();
    
    // Linha do Tempo Interativa
    setupInteractiveTimeline();
    
    // Galeria de Imagens
    setupGallery();
});

// Função para configurar a timeline de sessões
function setupSessionTimeline() {
    const prevButton = document.getElementById('prev-session');
    const nextButton = document.getElementById('next-session');
    const currentYearSpan = document.getElementById('current-year');
    const timelineYears = document.querySelectorAll('.timeline-year');
    
    let currentYearIndex = 0;
    
    if (prevButton && nextButton && currentYearSpan && timelineYears.length > 0) {
        // Mostrar apenas o primeiro ano inicialmente
        timelineYears.forEach((year, index) => {
            year.style.display = index === currentYearIndex ? 'block' : 'none';
        });
        
        // Atualizar o texto do ano atual
        currentYearSpan.textContent = `Ano ${currentYearIndex + 1}`;
        
        // Configurar botões de navegação
        prevButton.addEventListener('click', function() {
            if (currentYearIndex > 0) {
                timelineYears[currentYearIndex].style.display = 'none';
                currentYearIndex--;
                timelineYears[currentYearIndex].style.display = 'block';
                currentYearSpan.textContent = `Ano ${currentYearIndex + 1}`;
            }
        });
        
        nextButton.addEventListener('click', function() {
            if (currentYearIndex < timelineYears.length - 1) {
                timelineYears[currentYearIndex].style.display = 'none';
                currentYearIndex++;
                timelineYears[currentYearIndex].style.display = 'block';
                currentYearSpan.textContent = `Ano ${currentYearIndex + 1}`;
            }
        });
    }
}

// Função para configurar a área secreta do mestre
function setupMasterArea() {
    const secretLink = document.querySelector('.secret-link');
    const masterSection = document.getElementById('area-mestre');
    const passwordForm = document.querySelector('.password-form');
    const passwordInput = document.getElementById('master-password');
    const passwordSubmit = document.getElementById('password-submit');
    const passwordError = document.getElementById('password-error');
    const masterContent = document.getElementById('master-content');
    
    // Senha do mestre (substitua por uma senha mais segura)
    const MASTER_PASSWORD = "tormenta20";
    
    if (secretLink && masterSection) {
        // Mostrar a seção do mestre quando o link for clicado
        secretLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Esconder todas as outras seções
            document.querySelectorAll('.section').forEach(section => {
                section.style.display = 'none';
            });
            
            // Mostrar a seção do mestre
            masterSection.style.display = 'block';
            
            // Rolar para o topo da seção
            masterSection.scrollIntoView({ behavior: 'smooth' });
        });
        
        // Verificar a senha quando o formulário for enviado
        if (passwordForm && passwordSubmit) {
            passwordSubmit.addEventListener('click', function() {
                if (passwordInput.value === MASTER_PASSWORD) {
                    // Esconder o formulário de senha
                    document.querySelector('.login-container').style.display = 'none';
                    
                    // Mostrar o conteúdo do mestre
                    masterContent.style.display = 'block';
                    
                    // Limpar a senha
                    passwordInput.value = '';
                    
                    // Esconder mensagem de erro
                    passwordError.style.display = 'none';
                } else {
                    // Mostrar mensagem de erro
                    passwordError.style.display = 'block';
                    
                    // Limpar a senha
                    passwordInput.value = '';
                }
            });
            
            // Permitir envio do formulário com a tecla Enter
            passwordInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    passwordSubmit.click();
                }
            });
        }
    }
}

// Função para configurar a linha do tempo interativa
function setupInteractiveTimeline() {
    const timelinePrev = document.getElementById('timeline-prev');
    const timelineNext = document.getElementById('timeline-next');
    const timelineYearDisplay = document.getElementById('timeline-year-display');
    const timelineEventsContainer = document.querySelector('.timeline-events-container');
    
    // Dados da linha do tempo
    const timelineData = [
        {
            year: "1420 D.C.",
            events: [
                {
                    title: "Formação do Grupo",
                    description: "Os seis heróis se encontram pela primeira vez na Taverna do Dragão Caolho em Valkaria.",
                    date: "15 de Lemnor"
                },
                {
                    title: "Profecia Revelada",
                    description: "O Oráculo de Olhos Vendados compartilha uma antiga profecia sobre a Tormenta e seis pilares.",
                    date: "22 de Lemnor"
                },
                {
                    title: "Primeira Batalha",
                    description: "O grupo enfrenta cultistas da Tormenta nas ruínas de Tyr-Sog e descobre um pergaminho antigo.",
                    date: "5 de Galatia"
                }
            ]
        },
        {
            year: "1421 D.C.",
            events: [
                {
                    title: "Travessia do Pântano",
                    description: "O grupo atravessa o Pântano Pútrido, com Callon quase sucumbindo ao veneno de uma serpente espectral.",
                    date: "18 de Ramnon"
                },
                {
                    title: "Aliança com Wulfbrak",
                    description: "Após derrotar um dragão branco, o grupo forma uma aliança com o Clã Lobo de Prata.",
                    date: "3 de Behter"
                },
                {
                    title: "Descobertas em Arkadia",
                    description: "Na biblioteca proibida, o grupo descobre a verdadeira natureza da Tormenta como uma entidade consciente.",
                    date: "27 de Galatia"
                }
            ]
        },
        {
            year: "1422 D.C.",
            events: [
                {
                    title: "Traição em Delavon",
                    description: "O grupo descobre que três conselheiros foram corrompidos pela Tormenta. Callon fica para trás durante a fuga.",
                    date: "12 de Lemnor"
                },
                {
                    title: "Retorno de Callon",
                    description: "Callon Aesir retorna, mudado pela experiência, trazendo informações sobre o Templo Submerso.",
                    date: "1 de Behter"
                },
                {
                    title: "Templo Submerso",
                    description: "O grupo recupera o Orbe de Contenção após uma batalha subaquática contra um kraken corrompido.",
                    date: "19 de Galatia"
                }
            ]
        },
        {
            year: "1423 D.C.",
            events: [
                {
                    title: "Aliança das Três Nações",
                    description: "Arkadia, Wulfbrak e os sobreviventes de Delavon formam uma aliança sem precedentes contra a Tormenta.",
                    date: "7 de Ramnon"
                },
                {
                    title: "Ritual das Seis Chamas",
                    description: "Cada herói sacrifica algo precioso para canalizar sua essência para o Orbe de Contenção.",
                    date: "21 de Behter"
                },
                {
                    title: "Batalha do Vale Carmesim",
                    description: "O grupo enfrenta o Avatar da Tormenta e consegue conter temporariamente a tempestade.",
                    date: "3 de Galatia"
                }
            ]
        }
    ];
    
    let currentTimelineIndex = 0;
    
    if (timelinePrev && timelineNext && timelineYearDisplay && timelineEventsContainer) {
        // Função para renderizar os eventos do ano atual
        function renderTimelineEvents(yearIndex) {
            const yearData = timelineData[yearIndex];
            
            // Atualizar o display do ano
            timelineYearDisplay.textContent = yearData.year;
            
            // Limpar o container de eventos
            timelineEventsContainer.innerHTML = '';
            
            // Adicionar os eventos do ano atual
            yearData.events.forEach(event => {
                const eventElement = document.createElement('div');
                eventElement.className = 'timeline-event scroll';
                eventElement.innerHTML = `
                    <h4 class="event-title">${event.title}</h4>
                    <p class="event-date">${event.date}, ${yearData.year}</p>
                    <p class="event-description">${event.description}</p>
                `;
                timelineEventsContainer.appendChild(eventElement);
            });
        }
        
        // Renderizar os eventos do primeiro ano
        renderTimelineEvents(currentTimelineIndex);
        
        // Configurar botões de navegação
        timelinePrev.addEventListener('click', function() {
            if (currentTimelineIndex > 0) {
                currentTimelineIndex--;
                renderTimelineEvents(currentTimelineIndex);
            }
        });
        
        timelineNext.addEventListener('click', function() {
            if (currentTimelineIndex < timelineData.length - 1) {
                currentTimelineIndex++;
                renderTimelineEvents(currentTimelineIndex);
            }
        });
    }
}

// Função para configurar a galeria de imagens
function setupGallery() {
    const galleryImages = document.querySelectorAll('.gallery-image');
    
    if (galleryImages.length > 0) {
        galleryImages.forEach(image => {
            image.addEventListener('click', function() {
                // Criar um overlay para a imagem ampliada
                const overlay = document.createElement('div');
                overlay.className = 'gallery-overlay';
                
                // Criar um container para a imagem
                const imageContainer = document.createElement('div');
                imageContainer.className = 'gallery-overlay-content';
                
                // Criar a imagem ampliada
                const enlargedImage = document.createElement('img');
                enlargedImage.src = this.src;
                enlargedImage.alt = this.alt;
                enlargedImage.className = 'gallery-overlay-image';
                
                // Criar o botão de fechar
                const closeButton = document.createElement('button');
                closeButton.className = 'gallery-overlay-close';
                closeButton.innerHTML = '&times;';
                
                // Adicionar a imagem e o botão ao container
                imageContainer.appendChild(enlargedImage);
                imageContainer.appendChild(closeButton);
                
                // Adicionar o container ao overlay
                overlay.appendChild(imageContainer);
                
                // Adicionar o overlay ao body
                document.body.appendChild(overlay);
                
                // Impedir o scroll do body
                document.body.style.overflow = 'hidden';
                
                // Configurar o botão de fechar
                closeButton.addEventListener('click', function() {
                    document.body.removeChild(overlay);
                    document.body.style.overflow = '';
                });
                
                // Fechar o overlay ao clicar fora da imagem
                overlay.addEventListener('click', function(e) {
                    if (e.target === overlay) {
                        document.body.removeChild(overlay);
                        document.body.style.overflow = '';
                    }
                });
            });
        });
        
        // Adicionar estilos para o overlay
        const style = document.createElement('style');
        style.textContent = `
            .gallery-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
            }
            
            .gallery-overlay-content {
                position: relative;
                max-width: 90%;
                max-height: 90%;
            }
            
            .gallery-overlay-image {
                max-width: 100%;
                max-height: 90vh;
                display: block;
                border: 3px solid white;
            }
            
            .gallery-overlay-close {
                position: absolute;
                top: -20px;
                right: -20px;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: white;
                color: black;
                font-size: 24px;
                border: none;
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        `;
        document.head.appendChild(style);
    }
}