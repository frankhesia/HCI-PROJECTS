const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const days = ["S", "M", "T", "W", "T", "F", "S"];

const calendar = document.getElementById("calendar");

function generateCalendar(year) {
  for (let m = 0; m < 12; m++) {
    const month = document.createElement("div");
    month.className = "month";
    month.id = months[m].toLowerCase();

    const header = document.createElement("h2");
    header.textContent = months[m];
    month.appendChild(header);

    const daysRow = document.createElement("div");
    daysRow.className = "days";
    days.forEach(d => {
      const day = document.createElement("div");
      day.textContent = d;
      daysRow.appendChild(day);
    });
    month.appendChild(daysRow);

    const datesGrid = document.createElement("div");
    datesGrid.className = "dates";

    const firstDay = new Date(year, m, 1).getDay();
    const daysInMonth = new Date(year, m + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
      const empty = document.createElement("div");
      datesGrid.appendChild(empty);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const date = document.createElement("div");
      date.textContent = d;
      datesGrid.appendChild(date);
    }

    month.appendChild(datesGrid);
    calendar.appendChild(month);
  }

  const monthElements = document.querySelectorAll('.month');
  monthElements.forEach(month => {
    month.addEventListener('click', () => {
      monthElements.forEach(m => {
        m.classList.remove('expanded'); 
        m.style.display = 'none'; 
      });
      month.classList.add('expanded');
      month.style.display = 'block'; 
    });
  });
}

generateCalendar(2026);