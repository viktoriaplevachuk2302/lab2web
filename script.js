// Історичні події
const timelineEvents = [
    { date: "1648-1657", title: "Національно-визвольна війна", img: "images/khmelnytsky.jpg", details: "Боротьба під проводом Б. Хмельницького за автономію." },
    { date: "1914-1918", title: "Перша світова війна", img: "images/1914-1918.jpg", details: "Глобальний збройний конфлікт." },
    { date: "1939-1945", title: "Друга світова війна", img: "images/3poland.jpg", details: "Наймасштабніший конфлікт в історії." },
    { date: "1986", title: "Чорнобильська катастрофа", img: "images/IAEA_02790015_(5613115146).jpg", details: "Найбільша техногенна аварія." },
    { date: "2022", title: "Повномасштабне вторгнення", img: "images/ukraine_invasion_2022.jpg", details: "Початок великої війни Росії проти України." }
];

// Генерація подій на хронології через цикл while
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

// Перехід до блоку тесту
function scrollToQuiz() {
    const quiz = document.getElementById('quiz');
    if (quiz) {
        quiz.scrollIntoView({ behavior: 'smooth' });
    }
}

// Завдання 1: Зміна стилю елементів списку з умовною логікою
const listItems = document.querySelectorAll('#myList li');
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.backgroundColor = i % 2 === 0 ? '#e0f7fa' : '#fce4ec';
    if (listItems[i].dataset.type === 'важливий') {
        listItems[i].style.fontWeight = 'bold';
        listItems[i].textContent += ' (ВАЖЛИВО)';
    }
}

// Завдання 2: Показ/сховати блок
const toggleBtn = document.getElementById('toggleBtn');
const description = document.getElementById('description');
toggleBtn.addEventListener('click', () => {
    if (description.style.display === 'none') {
        description.style.display = 'block';
    } else {
        description.style.display = 'none';
    }
});

// Завдання 2: Обробка кнопок навігації
const navButtons = document.querySelectorAll('.nav-btn');
const section = document.getElementById('section');
navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        section.textContent = `Ви обрали: ${btn.textContent}`;
    });
    btn.addEventListener('mouseover', () => {
        btn.style.backgroundColor = '#ffd54f';
    });
    btn.addEventListener('mouseout', () => {
        btn.style.backgroundColor = '';
    });
});

// Завдання 3: Коментарі
const form = document.getElementById('commentForm');
const nameInput = document.getElementById('name');
const commentInput = document.getElementById('comment');
const commentSection = document.getElementById('commentSection');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const comment = commentInput.value.trim();

    if (name === '' || comment === '') {
        alert('Будь ласка, заповніть усі поля!');
        return;
    }

    const newComment = document.createElement('div');
    newComment.innerHTML = `<strong>${name}:</strong><p>${comment}</p>`;
    commentSection.appendChild(newComment);

    form.reset();
});
