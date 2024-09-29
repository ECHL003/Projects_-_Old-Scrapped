document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const trackTitle = document.getElementById('track-title');

    const tracks = [
        {
            title: "Track 1",
            src: "path/to/your/music1.mp3"
        },
        {
            title: "Track 2",
            src: "path/to/your/music2.mp3"
        },
        {
            title: "Track 3",
            src: "path/to/your/music3.mp3"
        }
    ];

    let currentTrackIndex = 0;

    function loadTrack(index) {
        audio.src = tracks[index].src;
        trackTitle.textContent = tracks[index].title;
    }

    playButton.addEventListener('click', () => {
        audio.play();
    });

    pauseButton.addEventListener('click', () => {
        audio.pause();
    });

    prevButton.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex > 0) ? currentTrackIndex - 1 : tracks.length - 1;
        loadTrack(currentTrackIndex);
        audio.play();
    });

    nextButton.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex < tracks.length - 1) ? currentTrackIndex + 1 : 0;
        loadTrack(currentTrackIndex);
        audio.play();
    });

    // Load the initial track
    loadTrack(currentTrackIndex);
});
