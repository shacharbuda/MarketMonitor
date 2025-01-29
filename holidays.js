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

export { nyseHolidays, taseHolidays };
