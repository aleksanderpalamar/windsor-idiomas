export function renderFooter() {
    const footer = document.getElementById('footer');
    if (!footer) {
      console.error('Footer element not found');
      return;
    }
    
    footer.innerHTML = `
        <div class="bg-darkBlue text-white py-8">
            <div class="max-w-6xl mx-auto px-4">
                <div class="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="text-xl font-bold mb-4">Contato</h3>
                        <p>Av. Antônio C. Costa, 793 - Bela Vista - Osasco - SP</p>
                        <p>(11) 3699-0011 / 11 3682-6681</p>
                        <p><a href="mailto:windsor@windsoridiomas.com.br">windsor@windsoridiomas.com.br</a></p>
                    </div>
                    <div class="text-right">
                        <p>© ${new Date().getFullYear()} Windsor School of Language. Todos os direitos reservados.</p>
                        <p>
                            desenvolvido por
                            <a href="https://aleksanderpalamar.dev" target="_blank" rel="noopener noreferrer" class="text-primaryBlue">
                                Aleksander Palamar
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
  }  