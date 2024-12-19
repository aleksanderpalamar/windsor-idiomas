export function renderHeader() {
    const isQuizPage = window.location.pathname.includes('quiz.html');
    const header = document.getElementById('header');
    header.innerHTML = `
        <nav class="bg-darkBlue fixed w-full top-0 z-50">
            <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center relative">
                <a href="/" class="text-vibrantRed text-2xl font-bold">Windsor</a>
                <div class="hidden md:flex space-x-6">
                    ${isQuizPage 
                        ? `<a href="/" class="text-white hover:text-primaryBlue transition-colors flex items-center">
                             <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                             </svg>
                             Voltar
                           </a>`
                        : ['Home', 'Sobre', 'Curso de Inglês', 'Curso de Espanhol', 'Contato'].map(item => `
                            <a href="#${item.toLowerCase().replace(/ /g, '-')}" class="text-white hover:text-primaryBlue transition-colors">${item}</a>
                          `).join('')
                    }
                    ${!isQuizPage ? `<a href="quiz.html" class="text-white hover:text-primaryBlue transition-colors">Quiz</a>` : ''}
                </div>
                <button id="mobileMenuButton" class="md:hidden text-white">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            <div id="mobileMenu" class="hidden md:hidden bg-darkBlue">
                ${isQuizPage
                    ? `<a href="/" class="block px-4 py-2 text-white hover:bg-primaryBlue">
                         <svg class="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                         </svg>
                         Voltar
                       </a>`
                    : ['Home', 'Sobre', 'Curso de Inglês', 'Curso de Espanhol', 'Contato'].map(item => `
                        <a href="#${item.toLowerCase().replace(/ /g, '-')}" class="block px-4 py-2 text-white hover:bg-primaryBlue">${item}</a>
                      `).join('')
                }
                ${!isQuizPage ? `<a href="quiz.html" class="block px-4 py-2 text-white hover:bg-primaryBlue">Quiz</a>` : ''}
            </div>
        </nav>
    `;

    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

