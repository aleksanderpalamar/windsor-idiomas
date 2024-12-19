export function renderContato() {
  const contato = document.getElementById("contato");
  contato.innerHTML = `
      <div class="py-16 bg-lightGray">
          <div class="max-w-6xl mx-auto px-4 z-10 relative min-h-screen flex flex-col items-center justify-center">
              <div class="max-w-4xl mx-auto text-center mb-8">
                  <div class="inline-block mb-4">
                      <svg class="w-16 h-16 text-primaryBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                  </div>
                  <h2 class="text-4xl font-bold text-darkGray">Contact Us</h2>
              </div>
              <div class="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
                  <div class="md:w-1/3">
                      <div class="bg-softBlue rounded-lg p-4">
                          <a href="https://www.facebook.com/pages/Windsor-Idiomas/242835865771306?fref=ts" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-primaryBlue hover:text-darkBlue transition-colors">
                              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                              </svg>
                              <span>Facebook</span>
                          </a>
                      </div>
                  </div>
                  <div class="md:w-2/3">
                      <form id="contactForm" class="bg-softBlue rounded-lg p-6 space-y-4">
                          ${["Nome", "Email", "Telefone", "Celular", "Assunto"]
                            .map(
                              (field) => `
                              <div>
                                  <label for="${field.toLowerCase()}" class="block text-sm font-medium text-darkGray mb-1">${field}</label>
                                  <input type="${
                                    field === "Email" ? "email" : "text"
                                  }" id="${field.toLowerCase()}" name="${field.toLowerCase()}" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryBlue" />
                              </div>
                          `
                            )
                            .join("")}
                          <div>
                              <label for="message" class="block text-sm font-medium text-darkGray mb-1">Mensagem</label>
                              <textarea id="message" name="message" rows="4" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryBlue"></textarea>
                          </div>
                          <div>
                              <label class="block text-sm font-medium text-darkGray mb-1">Anexo (opcional)</label>
                              <div class="flex items-center space-x-2">
                                  <label for="file" class="cursor-pointer bg-white px-4 py-2 rounded border border-gray-300 hover:bg-gray-50">
                                      Escolher Arquivo
                                  </label>
                                  <span id="fileName" class="text-sm text-gray-500">Nenhum arquivo escolhido</span>
                                  <input type="file" id="file" name="file" class="hidden" />
                              </div>
                          </div>
                          <div class="text-right">
                              <button type="submit" class="bg-primaryBlue text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors flex items-center space-x-2 ml-auto">
                                  <span>Enviar Mensagem</span>
                                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                  </svg>
                              </button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  `;

  initializeContactForm();
}

function initializeContactForm() {
  const contactForm = document.getElementById("contactForm");
  const fileInput = document.getElementById("file");
  const fileName = document.getElementById("fileName");

  fileInput.addEventListener("change", function () {
    fileName.textContent =
      this.files.length > 0 ? this.files[0].name : "Nenhum arquivo escolhido";
  });

  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(this);

    try {
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.innerHTML;
      submitButton.innerHTML = `
              <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
          `;
      submitButton.disabled = true;

      const response = await fetch("/api/send-email", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        contactForm.reset();
        fileName.textContent = "Nenhum arquivo escolhido";
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Erro ao enviar o e-mail. Por favor, tente novamente.");
    } finally {
      const submitButton = contactForm.querySelector('button[type="submit"]');
      submitButton.innerHTML = originalText;
      submitButton.disabled = false;
    }
  });
}
