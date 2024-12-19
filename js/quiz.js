export function initializeQuiz() {
  const quiz = document.getElementById("quiz");
  quiz.innerHTML = `
      <div class="py-16 bg-lightGray">
          <div class="max-w-6xl mx-auto px-4 z-10 relative min-h-screen flex flex-col items-center justify-center">
              <h1 class="text-4xl font-bold mb-4 text-darkBlue px-3 py-4">Quiz</h1>
              <p class="text-xl text-zinc-600 mb-8">Teste os seus conhecimentos</p>
              <form id="quizForm" class="space-y-8">
                  <div class="bg-white shadow-md rounded-lg p-6 relative w-full max-w-lg">
                      <div id="levelSeal" class="hidden absolute top-4 right-4 bg-primaryBlue text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold"></div>
                      <h2 class="text-2xl font-bold mb-6">Teste - Basic I</h2>
                      <div id="questionsContainer" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <!-- Questions will be dynamically inserted here -->
                      </div>
                      <div class="mt-8">
                          <button type="submit" class="bg-primaryBlue hover:bg-darkBlue text-white font-bold py-2 px-4 rounded">
                              Validar teste
                          </button>
                      </div>
                  </div>
              </form>
              <div id="congratsDialog" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div class="bg-white p-8 rounded-lg max-w-md w-full">
                      <h2 class="text-2xl font-bold mb-4">Parabéns!</h2>
                      <p class="mb-4">Seu nível é: <span id="resultLevel" class="font-bold"></span></p>
                      <p class="mb-4">Sua pontuação: <span id="resultScore" class="font-bold"></span>%</p>
                      <button id="closeDialog" class="bg-primaryBlue hover:bg-darkBlue text-white font-bold py-2 px-4 rounded">
                          Fechar
                      </button>
                  </div>
              </div>
          </div>
      </div>
  `;

  const questions = [
    {
      id: 1,
      text: "That's David's friend. His name __________ John.",
      options: ["is", "to", "it", "are"]
    },
    {
      id: 2,
      text: "What _________ these colors in English?",
      options: ["are", "to", "it", "is"]
    },
    {
      id: 3,
      text: "I ________ not from the United States.",
      options: ["is", "to be", "am", "are"]
    },
    {
      id: 4,
      text: "Karina is _________ Asia.",
      options: ["in", "to", "on", "from"]
    },
    {
      id: 5,
      text: "Maria isn't Brazilian. She's _________ Mexico.",
      options: ["in", "of", "from", "to"]
    },
    {
      id: 6,
      text: "The chair is _________ the sofa.",
      options: ["to", "in", "from", "of"]
    },
    {
      id: 7,
      text: "My credit cards are _________ my wallet.",
      options: ["from", "in", "to", "on"]
    },
    {
      id: 8,
      text: "My parents _________ downtown.",
      options: ["live", "lives"]
    },
    {
      id: 9,
      text: "My mother _________ glasses.",
      options: ["wear", "wears"]
    },
    {
      id: 10,
      text: "I don't _________ downtown.",
      options: ["live", "lives", "living"]
    },
    {
      id: 11,
      text: "What time _________ it in Chicago now?",
      options: ["is", "to", "it", "are"]
    },
    {
      id: 12,
      text: "What _________ they doing?",
      options: ["are", "to do", "am", "is"]
    },
    {
      id: 13,
      text: "Where _________ he live?",
      options: ["is", "to", "do", "does"]
    },
    {
      id: 14,
      text: "I have breakfast _________ 7:45.",
      options: ["at", "in", "on", "to"]
    },
    {
      id: 15,
      text: "I don't work _________ Saturdays.",
      options: ["in", "on", "at", "to"]
    }
  ];

  const questionsContainer = document.getElementById("questionsContainer");
  const quizForm = document.getElementById("quizForm");
  const congratsDialog = document.getElementById("congratsDialog");
  const resultLevel = document.getElementById("resultLevel");
  const resultScore = document.getElementById("resultScore");
  const closeDialog = document.getElementById("closeDialog");
  const levelSeal = document.getElementById("levelSeal");

  // Render questions
  questions.forEach((question) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "space-y-2";
    questionDiv.innerHTML = `
          <label class="text-base font-medium">
              ${question.id}. ${question.text}
          </label>
          <div class="space-y-2">
              ${question.options
                .map(
                  (option) => `
                  <div class="flex items-center space-x-2 bg-softBlue p-4 rounded-md">
                      <input type="radio" id="q${question.id}-${option}" name="q${question.id}" value="${option}" class="w-4 h-4">
                      <label for="q${question.id}-${option}">${option}</label>
                  </div>
              `
                )
                .join("")}
          </div>
      `;
    questionsContainer.appendChild(questionDiv);
  });

  // Form submission
  quizForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(quizForm);
    const answers = Object.fromEntries(formData.entries());

    const correctAnswers = questions.filter(
      (question) => answers[`q${question.id}`] === question.options[0]
    );
    const score = (correctAnswers.length / questions.length) * 100;

    let level;
    if (score >= 95) level = "C2";
    else if (score >= 80) level = "C1";
    else if (score >= 65) level = "B2";
    else if (score >= 50) level = "B1";
    else if (score >= 35) level = "A2";
    else level = "A1";

    resultLevel.textContent = level;
    resultScore.textContent = score.toFixed(2);
    congratsDialog.classList.remove("hidden");
    levelSeal.textContent = level;
    levelSeal.classList.remove("hidden");
  });

  // Close dialog
  closeDialog.addEventListener("click", function () {
    congratsDialog.classList.add("hidden");
  });

  // Highlight selected option
  questionsContainer.addEventListener("change", function (e) {
    if (e.target.type === "radio") {
      const options = e.target
        .closest(".space-y-2")
        .querySelectorAll(".bg-softBlue");
      options.forEach((option) => {
        option.classList.remove("text-vibrantRed");
        option.querySelector("input").classList.remove("bg-vibrantRed");
      });
      const selectedOption = e.target.closest(".bg-softBlue");
      selectedOption.classList.add("text-vibrantRed");
      e.target.classList.add("bg-vibrantRed");
    }
  });
}

document.addEventListener("DOMContentLoaded", initializeQuiz);

// Verifica se estamos na página do quiz e inicializa se necessário
if (document.getElementById("quiz")) {
  initializeQuiz();
}
