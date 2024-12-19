export function renderCursoIngles() {
  const cursoIngles = document.getElementById("curso-de-inglês");
  cursoIngles.innerHTML = `
      <div class="py-16 bg-lightGray">
          <div class="max-w-6xl mx-auto px-4 z-10 relative min-h-screen flex flex-col items-center justify-center">
              <h2 class="text-4xl font-bold text-center mb-12 text-darkBlue">Cursos de Inglês</h2>
              <div class="grid md:grid-cols-2 gap-8">
                  ${renderCourseSection("Inglês para Adultos", [
                    {
                      title: "Basic I, II, III",
                      description:
                        "Aulas dinâmicas aprendendo a ouvir e falar corretamente, com o curso voltado à conversação, aulas de gramática, pronúncia e audiovisuais."
                    },
                    {
                      title: "Pré-intermediário",
                      description:
                        "Aulas dinâmicas aprendendo a ouvir e falar corretamente, com o curso voltado à conversação, aulas de gramática, pronúncia e audiovisuais."
                    },
                    {
                      title: "Intermediário",
                      description:
                        "O professor com sua larga experiência, estende aos alunos a oportunidade da fluência verbal, com atividades comunicativas que encorajam a criatividade."
                    },
                    {
                      title: "Avançado",
                      description:
                        "É o estágio onde o aluno já desenvolvido na língua, falando e escrevendo em inglês fará sua reciclagem gramatical, conversação, e o aprimoramento do vocabulário para prestar exames de Cambridge (England)."
                    }
                  ])}
                  ${renderCourseSection(
                    "Inglês para Crianças",
                    [
                      {
                        title: "Windsor Kids",
                        subtitle: "A partir de 7 anos",
                        description:
                          "Crianças a partir de 7 anos, são alfabetizadas em inglês de maneira descontraída, cantando, brincando e desenvolvendo sua nova língua com rotinas do dia a dia. As noções básicas da gramática são desenvolvidas de uma forma dinâmica e o vocabulário ensinado numa linguagem adequada à idade."
                      },
                      {
                        title: "Windsor Teens",
                        subtitle: "A partir de 12 anos à 15 anos",
                        description:
                          "As aulas para adolescentes, são ministradas com a experiência de professores que passam a falar a linguagem deles, dando maior ênfase as 4 habilidades: conversação, escrita, compreensão e leitura."
                      }
                    ],
                    true
                  )}
              </div>
          </div>
      </div>
  `;
}

function renderCourseSection(title, courses, isYellow = false) {
  return `
      <div>
          <h3 class="text-2xl font-semibold mb-6 text-darkGray">${title}</h3>
          ${courses
            .map(
              (course) => `
              <div class="relative bg-${
                isYellow ? "softYellow" : "softBlue"
              } rounded-lg p-6 mb-6 overflow-hidden">
                  <div class="absolute right-0 top-1/2 transform -translate-y-1/2 w-32 h-32 bg-${
                    isYellow ? "darkYellow" : "primaryBlue"
                  } rounded-full opacity-20"></div>
                  <h4 class="text-xl font-bold mb-2 ${
                    isYellow ? "text-vibrantRed" : ""
                  }">${course.title}</h4>
                  ${
                    course.subtitle
                      ? `<p class="text-sm text-right mb-1">${course.subtitle}</p>`
                      : ""
                  }
                  <p class="text-darkGray text-sm">${course.description}</p>
              </div>
          `
            )
            .join("")}
          ${
            isYellow
              ? `
              <div class="bg-softGreen rounded-lg p-6">
                  <p class="text-darkGreen font-medium">
                      KIDS, TEENS BASIC I, II E III, PRÉ-INTERMEDIATE, INTERMEDIATE, UPPER INTERMEDIATE E ADVANCED
                  </p>
              </div>
          `
              : ""
          }
      </div>
  `;
}
