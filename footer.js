(function() {
    // Весь HTML-код футера
    const footerHTML = `
    <footer class="w-full flex flex-col mt-16 md:mt-24 text-[10px] md:text-xs uppercase tracking-widest border-t border-line font-sans">
        
        <!-- Полоса 1: Время (Сдвиг слева) -->
        <div class="w-full bg-[#262626] text-[#e0e0e0] reveal">
            <div class="max-w-[1600px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-x-8 py-4 md:py-5 items-center">
                <div class="col-span-1 md:col-span-3 text-[#888] mb-1 md:mb-0">Local Time</div>
                <div class="col-span-1 md:col-start-4 md:col-span-9 flex items-center gap-3">
                    <span id="almaty-clock" class="font-mono text-[#fff]">00:00:00</span>
                    <span class="text-[#888]">/ Almaty (UTC+5)</span>
                </div>
            </div>
        </div>

        <!-- Полоса 2: Email (Сдвиг по центру) -->
        <div class="w-full bg-[#1c1c1c] text-[#e0e0e0] reveal delay-100">
            <div class="max-w-[1600px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-x-8 py-4 md:py-5 items-center">
                <div class="col-span-1 md:col-start-4 md:col-span-3 text-[#888] mb-1 md:mb-0">Inquiries</div>
                <div class="col-span-1 md:col-start-7 md:col-span-6">
                    <a href="mailto:baskove33@mail.ru" class="hover:text-white transition-colors duration-300">baskove33@mail.ru</a>
                </div>
            </div>
        </div>

        <!-- Полоса 3: Telegram (Сдвиг вправо) -->
        <div class="w-full bg-[#111111] text-[#e0e0e0] reveal delay-200">
            <div class="max-w-[1600px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-x-8 py-4 md:py-5 items-center">
                <div class="col-span-1 md:col-start-7 md:col-span-3 text-[#888] mb-1 md:mb-0">Network</div>
                <div class="col-span-1 md:col-start-10 md:col-span-3">
                    <a href="https://t.me/zorochik" target="_blank" rel="noopener noreferrer" class="group hover:text-white transition-colors duration-300 flex items-center gap-2 w-fit">
                        Telegram
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 transform -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>

    </footer>
    `;

    // Вставляем HTML в нужное место на странице
    const container = document.getElementById('global-footer');
    if (container) {
        container.innerHTML = footerHTML;
    }

    // --- ЛОГИКА ЭЛЕКТРОННЫХ ЧАСОВ (АЛМАТЫ) ---
    function updateClock() {
        const clockEl = document.getElementById('almaty-clock');
        if (!clockEl) return;
        
        const now = new Date();
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        // Алматы (UTC+5)
        const almatyTime = new Date(utc + (3600000 * 5)); 
        
        const hours = String(almatyTime.getHours()).padStart(2, '0');
        const minutes = String(almatyTime.getMinutes()).padStart(2, '0');
        const seconds = String(almatyTime.getSeconds()).padStart(2, '0');
        
        clockEl.innerHTML = `${hours}<span class="opacity-50">:</span>${minutes}<span class="opacity-50">:</span>${seconds}`;
    }
    
    // Запускаем часы
    setInterval(updateClock, 1000);
    updateClock(); // Первичный вызов без задержки
})();
