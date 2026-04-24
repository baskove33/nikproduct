(function() {
    // HTML-код плавающей кнопки "Назад"
    const headerHTML = `
    <div class="fixed top-6 left-6 md:top-8 md:left-8 z-[100]">
        <a href="main.html" id="back-button" class="group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-md border border-line rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-sm cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 md:w-5 md:h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
        </a>
    </div>
    `;

    const container = document.getElementById('global-header');
    if (container) {
        container.innerHTML = headerHTML;
    }

    // Логика плавной анимации при нажатии на кнопку "Назад"
    const backBtn = document.getElementById('back-button');
    if (backBtn) {
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.href;
            const overlay = document.getElementById('transition-overlay');
            
            if (overlay) {
                // Запускаем шторку вниз
                overlay.style.transform = 'translateY(0)';
                // Ждем окончания анимации и переходим
                setTimeout(() => {
                    window.location.href = target;
                }, 600);
            } else {
                window.location.href = target;
            }
        });
    }
})();
