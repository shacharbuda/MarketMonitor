const nyseHolidays = [
    // 2025 Holidays
    { date: '2025-01-01', name: "New Year's Day" },
    { date: '2025-01-20', name: "Martin Luther King Jr. Day" },
    { date: '2025-02-17', name: "Presidents' Day" },
    { date: '2025-04-18', name: "Good Friday" },
    { date: '2025-05-26', name: "Memorial Day" },
    { date: '2025-06-19', name: "Juneteenth National Independence Day" },
    { date: '2025-07-04', name: "Independence Day" },
    { date: '2025-09-01', name: "Labor Day" },
    { date: '2025-11-27', name: "Thanksgiving Day" },
    { date: '2025-12-25', name: "Christmas Day" },

    // 2026 Holidays
    { date: '2026-01-01', name: "New Year's Day" },
    { date: '2026-01-19', name: "Martin Luther King Jr. Day" },
    { date: '2026-02-16', name: "Presidents' Day" },
    { date: '2026-04-03', name: "Good Friday" },
    { date: '2026-05-25', name: "Memorial Day" },
    { date: '2026-06-19', name: "Juneteenth National Independence Day" },
    { date: '2026-07-03', name: "Independence Day (Observed)" },
    { date: '2026-09-07', name: "Labor Day" },
    { date: '2026-11-26', name: "Thanksgiving Day" },
    { date: '2026-12-25', name: "Christmas Day" },

    // 2027 Holidays
    { date: '2027-01-01', name: "New Year's Day" },
    { date: '2027-01-18', name: "Martin Luther King Jr. Day" },
    { date: '2027-02-15', name: "Presidents' Day" },
    { date: '2027-03-26', name: "Good Friday" },
    { date: '2027-05-31', name: "Memorial Day" },
    { date: '2027-06-18', name: "Juneteenth National Independence Day (Observed)" },
    { date: '2027-07-05', name: "Independence Day (Observed)" },
    { date: '2027-09-06', name: "Labor Day" },
    { date: '2027-11-25', name: "Thanksgiving Day" },
    { date: '2027-12-24', name: "Christmas Day (Observed)" },

    // 2028 Holidays
    { date: '2028-01-17', name: "Martin Luther King Jr. Day" },
    { date: '2028-02-21', name: "Presidents' Day" },
    { date: '2028-04-14', name: "Good Friday" },
    { date: '2028-05-29', name: "Memorial Day" },
    { date: '2028-06-19', name: "Juneteenth National Independence Day" },
    { date: '2028-07-04', name: "Independence Day" },
    { date: '2028-09-04', name: "Labor Day" },
    { date: '2028-11-23', name: "Thanksgiving Day" },
    { date: '2028-12-25', name: "Christmas Day" },

    // 2029 Holidays
    { date: '2029-01-01', name: "New Year's Day" },
    { date: '2029-01-15', name: "Martin Luther King Jr. Day" },
    { date: '2029-02-19', name: "Presidents' Day" },
    { date: '2029-03-30', name: "Good Friday" },
    { date: '2029-05-28', name: "Memorial Day" },
    { date: '2029-06-19', name: "Juneteenth National Independence Day" },
    { date: '2029-07-04', name: "Independence Day" },
    { date: '2029-09-03', name: "Labor Day" },
    { date: '2029-11-22', name: "Thanksgiving Day" },
    { date: '2029-12-25', name: "Christmas Day" }
];

const taseHolidays = [
    // 2025 Holidays
    { date: '2025-04-13', name: "Passover" },
    { date: '2025-04-30', name: "Memorial Day" },
    { date: '2025-05-01', name: "Independence Day" },
    { date: '2025-06-01', name: "Pentecost (Shavuot)" },
    { date: '2025-06-02', name: "Pentecost (Shavuot)" },
    { date: '2025-08-03', name: "Fast Day (Tisha B'Av)" },
    { date: '2025-09-22', name: "Rosh Hashanah" },
    { date: '2025-09-23', name: "Rosh Hashanah" },
    { date: '2025-09-24', name: "Rosh Hashanah" },
    { date: '2025-10-01', name: "Yom Kippur" },
    { date: '2025-10-02', name: "Yom Kippur" },
    { date: '2025-10-06', name: "Festival of Tabernacles (Sukkot)" },
    { date: '2025-10-07', name: "Festival of Tabernacles (Sukkot)" },
    { date: '2025-10-13', name: "Simchat Torah" },
    { date: '2025-10-14', name: "Simchat Torah" },

    // 2026 Holidays
    { date: '2026-04-02', name: "Passover" },
    { date: '2026-04-22', name: "Memorial Day" },
    { date: '2026-04-23', name: "Independence Day" },
    { date: '2026-05-21', name: "Pentecost (Shavuot)" },
    { date: '2026-07-22', name: "Fast Day (Tisha B'Av)" },
    { date: '2026-09-11', name: "Rosh Hashanah" },
    { date: '2026-09-12', name: "Rosh Hashanah" },
    { date: '2026-09-19', name: "Yom Kippur" },
    { date: '2026-09-24', name: "Festival of Tabernacles (Sukkot)" },
    { date: '2026-09-25', name: "Festival of Tabernacles (Sukkot)" },
    { date: '2026-10-01', name: "Simchat Torah" },

    // 2027 Holidays
    { date: '2027-03-22', name: "Passover" },
    { date: '2027-04-12', name: "Memorial Day" },
    { date: '2027-04-13', name: "Independence Day" },
    { date: '2027-06-10', name: "Pentecost (Shavuot)" },
    { date: '2027-08-11', name: "Fast Day (Tisha B'Av)" },
    { date: '2027-10-01', name: "Rosh Hashanah" },
    { date: '2027-10-02', name: "Rosh Hashanah" },
    { date: '2027-10-10', name: "Yom Kippur" },
    { date: '2027-10-15', name: "Festival of Tabernacles (Sukkot)" },
    { date: '2027-10-16', name: "Festival of Tabernacles (Sukkot)" },
    { date: '2027-10-22', name: "Simchat Torah" },

    // 2028 Holidays
    { date: '2028-04-10', name: "Passover" },
    { date: '2028-05-01', name: "Memorial Day" },
    { date: '2028-05-02', name: "Independence Day" },
    { date: '2028-06-29', name: "Pentecost (Shavuot)" },
    { date: '2028-08-30', name: "Fast Day (Tisha B'Av)" },
    { date: '2028-09-20', name: "Rosh Hashanah" },
    { date: '2028-09-21', name: "Rosh Hashanah" },
    { date: '2028-09-29', name: "Yom Kippur" },
    { date: '2028-10-04', name: "Festival of Tabernacles (Sukkot)" },
    { date: '2028-10-05', name: "Festival of Tabernacles (Sukkot)" },
    { date: '2028-10-11', name: "Simchat Torah" },

    // 2029 Holidays
    { date: '2029-03-31', name: "Passover" },
    { date: '2029-04-18', name: "Memorial Day" },
    { date: '2029-04-19', name: "Independence Day" },
    { date: '2029-06-18', name: "Pentecost (Shavuot)" },
    { date: '2029-08-20', name: "Fast Day (Tisha B'Av)" },
    { date: '2029-09-09', name: "Rosh Hashanah" },
    { date: '2029-09-10', name: "Rosh Hashanah" },
    { date: '2029-09-18', name: "Yom Kippur" },
    { date: '2029-09-23', name: "Festival of Tabernacles (Sukkot)" },
    { date: '2029-09-24', name: "Festival of Tabernacles (Sukkot)" },
    { date: '2029-09-30', name: "Simchat Torah" }
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
