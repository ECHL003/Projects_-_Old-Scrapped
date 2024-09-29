document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.getElementsByClassName('close')[0];

    const gameDetails = {
        1: {
            image: 'game1.jpg',
            description: 'Game Title 1 is an exciting adventure game that takes you on a thrilling journey through fantastical landscapes. Enjoy immersive gameplay and captivating storylines.'
        },
        2: {
            image: 'game2.jpg',
            description: 'Game Title 2 is a thrilling action game filled with fast-paced combat and intense missions. Experience the adrenaline rush as you battle your way to victory.'
        },
        3: {
            image: 'game3.jpg',
            description: 'Game Title 3 offers an immersive RPG experience where you can explore vast worlds, build your character, and engage in epic quests. Embark on an unforgettable adventure.'
        }
    };

    document.querySelectorAll('.game-card button').forEach(button => {
        button.addEventListener('click', function() {
            const gameId = this.parentElement.getAttribute('data-game');
            console.log('Game ID:', gameId); // Debug log
            modalImage.src = gameDetails[gameId].image;
            modalDescription.textContent = gameDetails[gameId].description;
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
