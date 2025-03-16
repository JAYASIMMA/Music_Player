// Initialize songs array from localStorage or as empty array
let songs = JSON.parse(localStorage.getItem('songs')) || [];

let currentSongIndex = 0;
const audio = document.getElementById('audio');
const songTitle = document.getElementById('song-title');
const artist = document.getElementById('artist');
const currentSongArt = document.getElementById('current-song-art');
const playPauseButton = document.getElementById('play-pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const volumeControl = document.getElementById('volume');
const uploadAudio = document.getElementById('upload-audio');
const uploadImage = document.getElementById('upload-image');
const artistNameInput = document.getElementById('artist-name');
const addSongButton = document.getElementById('add-song');
const songList = document.getElementById('song-list');

// Load song
function loadSong(song) {
    songTitle.textContent = song.title;
    artist.textContent = song.artist;
    currentSongArt.src = song.cover;
    audio.src = song.src;
}

// Play or pause song
function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        currentSongArt.style.animationPlayState = 'running'; // Start rotation
    } else {
        audio.pause();
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
        currentSongArt.style.animationPlayState = 'paused'; // Pause rotation
    }
}

// Next song
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    audio.play();
    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    currentSongArt.style.animationPlayState = 'running'; // Start rotation
}

// Previous song
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    audio.play();
    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    currentSongArt.style.animationPlayState = 'running'; // Start rotation
}

// Update volume
function updateVolume() {
    audio.volume = volumeControl.value;
}

// Add song to playlist
addSongButton.addEventListener('click', () => {
    const audioFile = uploadAudio.files[0];
    const imageFile = uploadImage.files[0];
    const artistName = artistNameInput.value;

    if (audioFile && imageFile && artistName) {
        const song = {
            title: audioFile.name,
            artist: artistName,
            src: URL.createObjectURL(audioFile),
            cover: URL.createObjectURL(imageFile)
        };
        songs.push(song);
        localStorage.setItem('songs', JSON.stringify(songs)); // Save to localStorage
        renderSongList();
        loadSong(songs[currentSongIndex]);
        uploadAudio.value = '';
        uploadImage.value = '';
        artistNameInput.value = '';
    } else {
        alert('Please upload both an audio file and an image, and enter the artist name.');
    }
});

// Render song list
function renderSongList() {
    songList.innerHTML = '';
    songs.forEach((song, index) => {
        const songItem = document.createElement('div');
        songItem.className = 'song-item';
        songItem.innerHTML = `
            <img src="${song.cover}" alt="Album Art">
            <p>${song.title} - ${song.artist}</p>
            <div class="menu-buttons">
                <button onclick="editSong(${index})"><i class="fas fa-edit"></i></button>
                <button onclick="removeSong(${index})"><i class="fas fa-trash"></i></button>
            </div>
        `;
        songItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            audio.play();
            playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
            currentSongArt.style.animationPlayState = 'running'; // Start rotation
        });
        songList.appendChild(songItem);
    });
}

// Edit song
function editSong(index) {
    const song = songs[index];
    const newArtistName = prompt('Enter new artist name:', song.artist);
    if (newArtistName !== null) {
        song.artist = newArtistName;
        localStorage.setItem('songs', JSON.stringify(songs));
        renderSongList();
    }
}

// Remove song
function removeSong(index) {
    const confirmDelete = confirm('Are you sure you want to remove this song?');
    if (confirmDelete) {
        songs.splice(index, 1);
        localStorage.setItem('songs', JSON.stringify(songs));
        renderSongList();
        if (songs.length > 0) {
            currentSongIndex = 0;
            loadSong(songs[currentSongIndex]);
        } else {
            songTitle.textContent = 'Song Title';
            artist.textContent = 'Artist';
            currentSongArt.src = 'https://via.placeholder.com/150';
            audio.src = '';
        }
    }
}

// Event listeners
playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', nextSong);
prevButton.addEventListener('click', prevSong);
volumeControl.addEventListener('input', updateVolume);

// Load the first song on page load
renderSongList();
if (songs.length > 0) {
    loadSong(songs[currentSongIndex]);
}