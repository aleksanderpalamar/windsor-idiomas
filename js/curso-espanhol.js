export function renderCursoEspanhol() {
  const cursoEspanhol = document.getElementById("curso-de-espanhol");
  cursoEspanhol.innerHTML = `
      <div class="py-16 bg-white">
          <div class="max-w-6xl mx-auto px-4 z-10 relative min-h-screen flex flex-col items-center justify-center">
              <h2 class="text-4xl font-bold text-center mb-12 text-darkBlue">Cursos de Espanhol</h2>
              <div class="max-w-4xl mx-auto">
                  <h3 class="text-2xl font-semibold mb-6 text-darkGray">Espanhol para Adultos</h3>
                  ${["Basic I, II", "Intermediário I, II", "Avançado I, II"]
                    .map(
                      (level, index) => `
                      <div class="relative bg-softYellow rounded-lg p-6 mb-6 overflow-hidden">
                          <div class="absolute right-0 top-1/2 transform -translate-y-1/2 w-32 h-32 bg-darkYellow rounded-full opacity-20"></div>
                          <h4 class="text-xl font-bold mb-2 text-vibrantRed">Windsor</h4>
                          <p class="text-sm text-right mb-1">${level}</p>
                          <p class="text-darkGray text-sm">
                              ${
                                index === 0
                                  ? "O aluno aprende a comunicar-se com situações do dia a dia progressivamente. Incorpora a gramática automaticamente com exercícios orais, escritos e auditivos."
                                  : index === 1
                                  ? "O aluno reforça a aprendizagem comunicativa e auditiva, conhecendo textos literários de grandes escritores espanhóis e latino americanos, adquirindo novas estruturas orais e escritas com situações de acordo com a realidade."
                                  : "Nesta etapa, o aluno além de aprimorar a pronúncia dos diálogos do básico I e II e do intermediário I e II, aumenta seu vocabulário com a linguagem escrita com temas de autores espanhóis e de latino americanos. Aprende a comunicar-se com situações reais que se produzem na rua, incorporando as estruturas gramaticais com exercícios e atividades dos novos elementos."
                              }
                          </p>
                      </div>
                  `
                    )
                    .join("")}
              </div>
          </div>
      </div>
  `;
}
