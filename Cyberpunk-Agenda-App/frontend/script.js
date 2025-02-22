document.addEventListener('DOMContentLoaded', () => {
    // Event listeners for forms
    document.getElementById('login-form').addEventListener('submit', login);
    document.getElementById('register-form').addEventListener('submit', register);
    document.getElementById('agenda-form').addEventListener('submit', addItem);

    // Check authentication status
    checkAuthentication();
});

function checkAuthentication() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('profile-section').style.display = 'block';
        document.getElementById('agenda-section').style.display = 'block';
        fetchUserProfile();
        fetchAgendaItems();
    } else {
        document.getElementById('auth-section').style.display = 'block';
        document.getElementById('profile-section').style.display = 'none';
        document.getElementById('agenda-section').style.display = 'none';
    }
}

function login(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Mock login
    if (username === 'user' && password === 'password') {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        checkAuthentication();
    } else {
        alert('Invalid credentials');
    }
}

function register(e) {
    e.preventDefault();
    alert('Registration is not implemented in this mock version.');
}

function fetchUserProfile() {
    const username = localStorage.getItem('username');
    const profileDiv = document.getElementById('user-profile');
    profileDiv.innerHTML = `Username: ${username}`;
}

function fetchAgendaItems() {
    const agendaItems = JSON.parse(localStorage.getItem('agendaItems') || '[]');
    const agendaList = document.getElementById('agenda-list');
    const historyList = document.getElementById('history-list');
    agendaList.innerHTML = '';
    historyList.innerHTML = '';

    agendaItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.item;

        // Edit Button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.onclick = () => editItem(item.id, item.item);
        li.appendChild(editButton);

        // Delete Button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.onclick = () => deleteItem(item.id);
        li.appendChild(deleteButton);

        agendaList.appendChild(li);

        // History
        const historyItem = document.createElement('li');
        historyItem.textContent = `${item.item} (Added: ${new Date(item.date).toLocaleString()})`;
        historyList.appendChild(historyItem);
    });
}

function addItem(e) {
    e.preventDefault();
    const input = document.getElementById('agenda-input');
    const value = input.value;

    if (value.trim() === '') return;

    const agendaItems = JSON.parse(localStorage.getItem('agendaItems') || '[]');
    const newItem = { id: Date.now(), item: value, date: new Date() };
    agendaItems.push(newItem);
    localStorage.setItem('agendaItems', JSON.stringify(agendaItems));

    fetchAgendaItems();
    input.value = '';
}

function editItem(id, currentItem) {
    const newItem = prompt('Edit item:', currentItem);
    if (newItem && newItem.trim() !== '') {
        const agendaItems = JSON.parse(localStorage.getItem('agendaItems') || '[]');
        const updatedItems = agendaItems.map(item => 
            item.id === id ? { ...item, item: newItem } : item
        );
        localStorage.setItem('agendaItems', JSON.stringify(updatedItems));
        fetchAgendaItems();
    }
}

function deleteItem(id) {
    const agendaItems = JSON.parse(localStorage.getItem('agendaItems') || '[]');
    const updatedItems = agendaItems.filter(item => item.id !== id);
    localStorage.setItem('agendaItems', JSON.stringify(updatedItems));
    fetchAgendaItems();
}
