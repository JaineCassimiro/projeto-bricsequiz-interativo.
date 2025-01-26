
document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".question");
    let currentQuestionIndex = 0;

    // Configura os botões de opções
    document.querySelectorAll(".option").forEach((button) => {
        button.addEventListener("click", () => {
            const info = button.getAttribute("data-info");

            // Exibe explicação ao responder
            alert(info);

            // Avança para a próxima pergunta se for correta
            if (button.classList.contains("correct")) {
                questions[currentQuestionIndex].style.display = "none";
                currentQuestionIndex++;

                if (currentQuestionIndex < questions.length) {
                    questions[currentQuestionIndex].style.display = "block";
                } else {
                    alert("Parabéns! Você completou o quiz!");
                }
            }
        });
    });
});
