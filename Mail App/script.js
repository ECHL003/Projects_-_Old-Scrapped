document.addEventListener('DOMContentLoaded', () => {
    const emailList = document.getElementById('email-list');
    const composeForm = document.getElementById('compose-form');

    // Sample emails
    const emails = [
        { to: 'user1@example.com', subject: 'Hello', body: 'Hi there!' },
        { to: 'user2@example.com', subject: 'Greetings', body: 'How are you?' }
    ];

    // Display emails in the inbox
    emails.forEach((email, index) => {
        const li = document.createElement('li');
        li.textContent = `${email.subject} - ${email.to}`;
        li.addEventListener('click', () => showEmail(email));
        emailList.appendChild(li);
    });

    // Handle form submission
    composeForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const to = document.getElementById('to').value;
        const subject = document.getElementById('subject').value;
        const body = document.getElementById('body').value;
        const newEmail = { to, subject, body };
        emails.push(newEmail);
        const li = document.createElement('li');
        li.textContent = `${subject} - ${to}`;
        li.addEventListener('click', () => showEmail(newEmail));
        emailList.appendChild(li);
        composeForm.reset();
        alert('Email sent!');
    });

    // Show email details
    function showEmail(email) {
        alert(`To: ${email.to}\nSubject: ${email.subject}\n\n${email.body}`);
    }
});
