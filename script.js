const nyseHolidays = [
    { date: '2025-01-01', name: "New Year's Day" },
    { date: '2025-01-20', name: "Martin Luther King Jr. Day" },
    { date: '2025-02-17', name: "Presidents Day" },
    { date: '2025-04-18', name: "Good Friday" },
    { date: '2025-05-26', name: "Memorial Day" },
    { date: '2025-06-19', name: "Juneteenth" },
    { date: '2025-07-04', name: "Independence Day" },
    // Add more holidays as needed
];

const taseHolidays = [
    { date: '2025-03-14', name: "Purim" },
    { date: '2025-04-13', name: "Passover Eve" },
    { date: '2025-04-14', name: "Passover" },
    { date: '2025-04-20', name: "Last Day of Passover" },
    { date: '2025-05-14', name: "Independence Day" },
    // Add more holidays as needed
];

function isHoliday(date, holidays) {
    const dateString = date.toISOString().split('T')[0];
    const holiday = holidays.find(h => h.date === dateString);
    return holiday ? holiday.name : null;
}

function getMarketInfo(nyTime, jlmTime) {
    const markets = [];

    // NYSE Status
    const nyHours = nyTime.getHours();
    const nyMinutes = nyTime.getMinutes();
    const nyTotalMinutes = nyHours * 60 + nyMinutes;
    const nyseHoliday = isHoliday(nyTime, nyseHolidays);

    let nyseStatus = {
        name: 'NYSE',
        icon: 'fa-dollar-sign',
        isOpen: false,
        holiday: nyseHoliday,
        nextOpenTime: null,
        closeTime: null,
        timeRemaining: null,
        sortPriority: 0,
        timezone: 'NY'
    };

    if (!nyseHoliday) {
        const isNyseWeekend = nyTime.getDay() == 0 || nyTime.getDay() == 6
        nyseStatus.isOpen = !isNyseWeekend && nyTotalMinutes >= 570 && nyTotalMinutes < 960; // 9:30 AM - 4:00 PM
        if (nyseStatus.isOpen) {
            const closeTime = new Date(nyTime);
            closeTime.setHours(16, 0, 0, 0);
            nyseStatus.closeTime = closeTime;
            nyseStatus.timeRemaining = closeTime - nyTime;
        } else {
            let nextOpen = new Date(nyTime);
            nextOpen.setHours(9, 30, 0, 0);
            if (nyTotalMinutes >= 960) {
                nextOpen.setDate(nextOpen.getDate() + 1);
            }
            while (nextOpen.getDay() === 0 || nextOpen.getDay() === 6 || isHoliday(nextOpen, nyseHolidays)) {
                nextOpen.setDate(nextOpen.getDate() + 1);
            }
            nyseStatus.nextOpenTime = nextOpen;
            nyseStatus.timeRemaining = nextOpen - nyTime;
        }
    }

    // TASE Status
    const taseHours = jlmTime.getHours();
    const taseMinutes = jlmTime.getMinutes();
    const taseTotalMinutes = taseHours * 60 + taseMinutes;
    const taseHoliday = isHoliday(jlmTime, taseHolidays);

    let taseStatus = {
        name: 'TASE',
        icon: 'fa-shekel-sign',
        isOpen: false,
        holiday: taseHoliday,
        nextOpenTime: null,
        closeTime: null,
        timeRemaining: null,
        sortPriority: 0,
        timezone: 'TLV'
    };

    if (!taseHoliday) {
        const isTaseWeekend = jlmTime.getDay() == 5 || jlmTime.getDay() == 6;
        const closeTime = new Date(jlmTime);
        if (jlmTime.getDay() == 0) // Sunday
            closeTime.setHours(15, 50, 0, 0);
        else
            closeTime.setHours(17, 25, 0, 0);
        taseStatus.isOpen = !isTaseWeekend && taseTotalMinutes >= 600 && taseTotalMinutes < (closeTime.getHours() * 60 + closeTime.getMinutes()); // 10:00 AM - closeTime
        if (taseStatus.isOpen) {
            taseStatus.closeTime = closeTime;
            taseStatus.timeRemaining = closeTime - jlmTime;
        } else {
            let nextOpen = new Date(jlmTime);
            nextOpen.setHours(10, 0, 0, 0);
            if (taseTotalMinutes >= 990) {
                nextOpen.setDate(nextOpen.getDate() + 1);
            }
            while (nextOpen.getDay() === 5 || nextOpen.getDay() === 6 || isHoliday(nextOpen, taseHolidays)) {
                nextOpen.setDate(nextOpen.getDate() + 1);
            }
            taseStatus.nextOpenTime = nextOpen;
            taseStatus.timeRemaining = nextOpen - jlmTime;
        }
    }

    // Set sort priorities
    nyseStatus.sortPriority = nyseStatus.isOpen ? 0 : (nyseStatus.timeRemaining || Infinity);
    taseStatus.sortPriority = taseStatus.isOpen ? 0 : (taseStatus.timeRemaining || Infinity);

    return [nyseStatus, taseStatus].sort((a, b) => a.sortPriority - b.sortPriority);
}

function formatTimeRemaining(ms) {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
}

function formatTime(date, timezone) {
    const tz = timezone === 'NY' ? 'America/New_York' : 'Asia/Jerusalem';
    const date_with_offset = new Date(date.toLocaleString('en-US', { timeZone: tz }))
    const offset = date_with_offset - date;

    const utc_time = date.getTime() - offset;
    const utc_date = new Date(utc_time);

    // Show date only if it's not today
    const isShowDate = new Date().getDate() !== utc_date.getDate();
    const isTomorrow = new Date().getDate() + 1 === utc_date.getDate();
    let extra_str = '';
    if (isShowDate) {
        if (isTomorrow)
            extra_str = "tomorrow";
        else
            extra_str = `on ${utc_date.toLocaleDateString('en-IL', { day: "2-digit", month: "2-digit" })}`;
        extra_str = `${extra_str} at `;
    }


    return extra_str + utc_date.toLocaleTimeString('en-IL', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: "Asia/Jerusalem",
    });
}

function updateMarkets() {
    const jlmTime = new Date();
    const nyTime = new Date(jlmTime.toLocaleString('en-US', { timeZone: 'America/New_York' }));
    const markets = getMarketInfo(nyTime, jlmTime);

    const container = document.getElementById('marketsContainer');
    container.innerHTML = '';

    markets.forEach(market => {
        const timeDisplay = market.isOpen
            ? `Closes ${formatTime(market.closeTime, market.timezone)} (${formatTimeRemaining(market.timeRemaining)} remaining)`
            : market.nextOpenTime
                ? `Opens ${formatTime(market.nextOpenTime, market.timezone)} (in ${formatTimeRemaining(market.timeRemaining)})`
                : 'Closed';

        const html = `
                    <div class="col-md-6 mb-3">
                        <div class="card market-card h-100">
                            <div class="card-body">
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas ${market.icon} fa-lg me-2"></i>
                                    <h5 class="mb-0">${market.name}</h5>
                                </div>
                                <div class="market-info">
                                    <div class="d-flex align-items-center mb-2">
                                        <span class="status-indicator ${market.isOpen ? 'bg-success' : 'bg-danger'}"></span>
                                        <span class="badge ${market.isOpen ? 'bg-success' : 'bg-danger'} me-2">
                                            ${market.isOpen ? 'Open' : 'Closed'}
                                        </span>
                                        ${market.holiday ? `<span class="badge bg-warning text-dark">${market.holiday}</span>` : ''}
                                    </div>
                                    <div class="ms-1">
                                        ${timeDisplay}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
        container.innerHTML += html;
    });
}

function updateClock() {
    const jlmTime = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Jerusalem',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('jlmClock').textContent = jlmTime;
}

// Update immediately and then every second
updateClock();
updateMarkets();
setInterval(() => {
    updateClock();
    updateMarkets();
}, 1000);
