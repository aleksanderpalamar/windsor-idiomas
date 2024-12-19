export function renderHome() {
    const home = document.getElementById('home');
    home.innerHTML = `
        <div class="px-3 py-20 flex items-center bg-lightGray">
            <div class="flex items-center justify-center max-w-6xl mx-auto bg-gradient-to-r from-softBlue to-darkBlue rounded-3xl">
                <div class="max-w-6xl mx-auto px-4 py-16 z-10 relative">
                    <div class="grid md:grid-cols-2 gap-8 items-center">
                        <div class="slide-in">
                            <h1 class="text-4xl md:text-6xl font-bold mb-4">
                                <span class="text-vibrantRed">Windsor</span>
                                <span class="text-darkBlue">Idiomas</span>
                            </h1>
                            <p class="text-darkGray text-lg mb-8">
                                Aprenda inglês e espanhol com os melhores professores
                            </p>
                        </div>
                        <div class="carousel-container overflow-hidden rounded-xl shadow-xl">
                            <div class="carousel flex transition-transform duration-500">
                                ${['Estudantes', 'Aula', 'Professores'].map((alt, index) => `
                                    <img src="images/carousel-${index + 1}.jpg" alt="${alt}" class="w-full h-auto" />
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
  }
  
  