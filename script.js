const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');
const monthYearDisplay = document.getElementById('monthYear');
const calendarGrid = document.getElementById('calendarGrid');

let currentDate = new Date();

function renderCalendar(date) {
    const month = date.getMonth();
    const year = date.getFullYear();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const startDay = (firstDay === 0) ? 6 : firstDay - 1;
    const totalCells = 42;

    calendarGrid.innerHTML = '';

    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.className = 'day-cell';
        
        const dayNumber = i - startDay + 1;
        if (i >= startDay && dayNumber <= daysInMonth) {
            cell.textContent = dayNumber;
        } else {
            cell.classList.add('other-month');
        }
        
        calendarGrid.appendChild(cell);
    }

    monthYearDisplay.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;
}

prevMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

renderCalendar(currentDate);
