(function() {
    // HTML-код плавающей кнопки "Назад" (светлая тема)
    const headerHTML = `
    <div class="fixed top-6 left-6 md:top-8 md:left-8 z-[100]">
        <a href="index.html" id="back-button" class="group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-[#F9F9F9]/80 backdrop-blur-md border border-line rounded-full hover:bg-[#E5E5E5] transition-all duration-300 shadow-sm cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 md:w-5 md:h-5 text-primary transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
        </a>
    </div>
    `;

    const container = document.getElementById('global-header');
    if (container) {
        container.innerHTML = headerHTML;
    }

    const overlay = document.getElementById('transition-overlay');
    
    // На всякий случай динамически перекрашиваем оверлей в цвет фона на странице кейса
    if (overlay) {
        overlay.classList.remove('bg-primary');
        overlay.classList.add('bg-[#F9F9F9]');
    }

    // Логика плавной анимации при нажатии на кнопку "Назад"
    const backBtn = document.getElementById('back-button');
    if (backBtn) {
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Берем точную ссылку из атрибута, чтобы не было багов с путями
            const target = this.getAttribute('href'); 
            
            if (overlay) {
                // Запускаем шторку вниз (перекрываем экран)
                overlay.style.transform = 'translateY(0)';
                
                // Ждем окончания анимации (600ms) и надежно переходим
                setTimeout(() => {
                    window.location.assign(target);
                }, 600);
            } else {
                window.location.assign(target);
            }
        });
    }
})();
