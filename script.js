// Історичні події
const timelineEvents = [
    { date: "1648-1657", title: "Національно-визвольна війна", img: "images/khmelnytsky.jpg", details: "Боротьба під проводом Б. Хмельницького за автономію." },
    { date: "1914-1918", title: "Перша світова війна", img: "images/1914-1918.jpg", details: "Глобальний збройний конфлікт." },
    { date: "1939-1945", title: "Друга світова війна", img: "images/3poland.jpg", details: "Наймасштабніший конфлікт в історії." },
    { date: "1986", title: "Чорнобильська катастрофа", img: "images/IAEA_02790015_(5613115146).jpg", details: "Найбільша техногенна аварія." },
    { date: "2022", title: "Повномасштабне вторгнення", img: "images/ukraine_invasion_2022.jpg", details: "Початок великої війни Росії проти України." }
];

// Генерація подій на хронології
const timelineContainer = document.querySelector('.timeline-container');
let i = 0;
while (i < timelineEvents.length) {
    const ev = timelineEvents[i];
    const block = document.createElement('div');
    block.className = 'timeline-item';
    block.innerHTML = `
        <div class="date">${ev.date}</div>
        <div class="content">
            <p>${ev.title}</p>
            <img src="${ev.img}" alt="${ev.title}">
            <button onclick="showModal('${ev.title}', \`${ev.details}\`)">Дізнатися більше</button>
        </div>
    `;
    timelineContainer.appendChild(block);
    i++;
}

// Модальне вікно
function showModal(title, text) {
    const modal = document.getElementById('modal');
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-text').innerText = text;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Перехід до тесту
function scrollToQuiz() {
    document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
}
