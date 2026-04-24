(function() {
    // HTML-код плавающей кнопки "Назад" со всплывающей подсказкой
    const headerHTML = `
    <div class="fixed top-20 left-6 md:top-24 md:left-8 z-[100] flex items-center group">
        <a href="https://baskove33.github.io/nikproduct/" class="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-[#F9F9F9]/80 backdrop-blur-md border border-line rounded-full hover:bg-[#E5E5E5] transition-all duration-300 shadow-sm cursor-pointer relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 md:w-5 md:h-5 text-primary transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
        </a>
        <!-- Подсказка, которая появляется при наведении -->
        <span class="absolute left-full ml-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#888] text-[10px] md:text-xs font-semibold uppercase tracking-widest pointer-events-none whitespace-nowrap">
            На главную
        </span>
    </div>
    `;

    const container = document.getElementById('global-header');
    if (container) {
        container.innerHTML = headerHTML;
    }
    
    // Вся сложная логика со шторкой удалена. Ссылка работает по дефолту.
})();
