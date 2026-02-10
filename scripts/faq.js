// Скрипты для FAQ страницы
document.addEventListener('DOMContentLoaded', () => {
    // Инициализация аккордеона FAQ
    initFAQAccordion();
});

function initFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('.icon i');
            
            // Закрываем все другие ответы
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    otherQuestion.classList.remove('active');
                    otherQuestion.nextElementSibling.classList.remove('active');
                    otherQuestion.querySelector('.icon i').classList.remove('fa-chevron-up');
                    otherQuestion.querySelector('.icon i').classList.add('fa-chevron-down');
                }
            });
            
            // Переключаем текущий ответ
            question.classList.toggle('active');
            answer.classList.toggle('active');
            
            // Меняем иконку
            if (question.classList.contains('active')) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });
    
    // Открываем первый вопрос по умолчанию
    if (faqQuestions.length > 0) {
        faqQuestions[0].click();
    }
}