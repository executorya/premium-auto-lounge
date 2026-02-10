// Скрипты для страницы контактов
document.addEventListener('DOMContentLoaded', () => {
    // Обработка формы обратной связи
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Валидация формы
            const name = feedbackForm.querySelector('input[type="text"]').value;
            const email = feedbackForm.querySelector('input[type="email"]').value;
            const message = feedbackForm.querySelector('textarea').value;
            const agreement = feedbackForm.querySelector('input[type="checkbox"]').checked;
            
            if (!name || !email || !message || !agreement) {
                alert('Пожалуйста, заполните все поля и согласитесь на обработку данных');
                return;
            }
            
            // В реальном проекте здесь был бы AJAX запрос
            alert('Спасибо за ваш отзыв! Мы свяжемся с вами в ближайшее время.');
            feedbackForm.reset();
        });
    }
});