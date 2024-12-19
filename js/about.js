export function renderAbout() {
  const about = document.getElementById("sobre");
  about.innerHTML = `
      <div class="py-16 bg-white">
          <div class="max-w-6xl mx-auto px-4 z-10 relative min-h-screen flex items-center justify-center">
              <div class="grid md:grid-cols-2 gap-12 items-center">
                  <div class="slide-in">
                      <img src="images/illustrations.png" alt="Sobre nós ilustração" class="w-full max-w-md mx-auto" />
                  </div>
                  <div class="slide-in">
                      <h2 class="text-3xl font-bold mb-6 text-darkBlue">Sobre Nós</h2>
                      <p class="text-darkGray mb-6 text-justify">
                          A Windsor Idiomas estabelece como método no ensino de inglês o aprendizado de uma forma dinâmica, com alto índice de exclusividade, já que todo aluno desde o seu primeiro dia de curso estará ouvindo, escrevendo, lendo e falando somente em inglês. A experiência não é por acaso, pois o curso é elaborado e executado por coordenadores de larga experiência internacional, especialmente na Inglaterra e nos Estados Unidos, onde a língua é ensinada de uma forma exemplar nas melhores escolas. A Windsor Idiomas orgulha-se de não ser apenas mais uma escola no ensino de inglês, mas de ser diferente com métodos próprios, diversificado, dinâmico e instrutivo.
                      </p>
                      <div class="grid grid-cols-2 gap-4">
                          ${[
                            {
                              title: "Material Importado",
                              items: [
                                "Material Importado",
                                "Salas com máximo de 12 alunos",
                                "Aulas de conversação",
                                "Gramática"
                              ]
                            },
                            {
                              title: "Aulas de pronúncia",
                              items: [
                                "Aulas de pronúncia",
                                "Aulas audiovisuais",
                                "Professores com experiência",
                                "Help sessions - plantão de dúvidas"
                              ]
                            }
                          ]
                            .map(
                              ({ title, items }) => `
                              <div class="bg-softYellow p-4 rounded-lg">
                                  <h3 class="font-semibold mb-2">${title}</h3>
                                  ${items
                                    .map((item) => `<p>${item}</p>`)
                                    .join("")}
                              </div>
                          `
                            )
                            .join("")}
                      </div>
                  </div>
              </div>
          </div>
      </div>
  `;
}
