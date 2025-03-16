# Music Player

A simple and elegant music player built using **HTML**, **CSS**, and **JavaScript**. This project allows users to play, pause, skip tracks, adjust volume, and manage a playlist. It also supports uploading songs with custom album art and artist names.

---

## Features

- **Play/Pause**: Toggle between playing and pausing the current song.
- **Next/Previous**: Skip to the next or previous song in the playlist.
- **Volume Control**: Adjust the volume using a slider.
- **Upload Songs**: Add songs with custom album art and artist names.
- **Edit and Remove Songs**: Edit the artist name or remove songs from the playlist.
- **Responsive Design**: Works seamlessly on all devices (desktop, tablet, mobile).
- **Attractive Animations**:
  - Floating animation for the music player.
  - Rotating album art when a song is playing.
  - Gradient background animation.

---

## Technologies Used

- **HTML**: For structuring the music player.
- **CSS**: For styling the player and adding animations.
- **JavaScript**: For adding functionality (play/pause, skip tracks, upload songs, etc.).
- **Bootstrap**: For responsive design and layout.
- **Font Awesome**: For icons used in the player controls.

---

## Setup Instructions

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).
- Basic knowledge of HTML, CSS, and JavaScript.

### Steps to Run the Project
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/music-player.git
   cd music-player
   ```

2. **Open the Project**:
   - Open the `index.html` file in your web browser.

3. **Add Songs**:
   - Use the "Upload Audio" and "Upload Image" inputs to add songs and their cover art.
   - Enter the artist name in the "Artist Name" input.
   - Click the "Add Song" button to add the song to the playlist.

4. **Play Music**:
   - Click on a song in the sidebar to play it.
   - Use the play/pause, next, and previous buttons to control playback.

---

## Project Structure

```
music-player/
│
├── index.html          # Main HTML file for the music player
├── styles.css          # CSS file for styling and animations
├── script.js           # JavaScript file for player functionality
├── README.md           # This file
└── assets/             # Folder for storing uploaded songs and images (optional)
```

---

## Usage

1. **Upload Songs**:
   - Use the "Upload Audio" and "Upload Image" inputs to add songs and their cover art.
   - Enter the artist name in the "Artist Name" input.
   - Click the "Add Song" button to add the song to the playlist.

2. **Play Music**:
   - Click on a song in the sidebar to play it.
   - Use the play/pause, next, and previous buttons to control playback.

3. **Edit or Remove Songs**:
   - Click the edit (`fa-edit`) button to update the artist name.
   - Click the remove (`fa-trash`) button to delete a song from the playlist.

4. **Adjust Volume**:
   - Use the volume slider to increase or decrease the volume.

---

## Screenshots

![Screenshot 2025-03-16 130729](https://github.com/user-attachments/assets/6710b4f1-bd57-4128-9e40-dc604cd94ec2)
![Screenshot 2025-03-16 130951](https://github.com/user-attachments/assets/892267f1-399f-470e-8023-e9a4bc20c0fe)
![Screenshot 2025-03-16 130951](https://github.com/user-attachments/assets/92f01780-1480-4a3d-8e10-3ca3a8db031c)
![Screenshot 2025-03-16 130825](https://github.com/user-attachments/assets/56671089-9f8e-426d-a144-a2976007bde8)
![Screenshot 2025-03-16 130806](https://github.com/user-attachments/assets/96e4eb39-30b4-4cc9-b249-8a77fb6b1c12)
![Screenshot 2025-03-16 130738](https://github.com/user-attachments/assets/8c5cd6d8-094a-414b-81df-ce851c08ee86)
![Screenshot 2025-03-16 130729](https://github.com/user-attachments/assets/e5be7787-2cd2-4a0c-9e97-851a795b505a)



---

## Customization

- **Change Colors**:
  - Modify the gradient colors in the `styles.css` file under the `body` selector.
  - Update the button colors in the `.controls button` and `.upload-section button` selectors.

- **Add More Animations**:
  - Add new keyframes in the `styles.css` file for additional animations.

- **Extend Functionality**:
  - Add features like shuffle, repeat, or a progress bar by modifying the `script.js` file.

---

## Future Enhancements

- **Progress Bar**: Add a progress bar to show the current playback position.
- **Shuffle/Repeat**: Add shuffle and repeat functionality.
- **Playlist Management**: Allow users to create and manage multiple playlists.
- **Backend Integration**: Store uploaded songs and images on a server for persistence.

---

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch and submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Bootstrap](https://getbootstrap.com/) for responsive design.
- [Font Awesome](https://fontawesome.com/) for icons.
- Inspired by various online tutorials and music player designs.

---

Enjoy your music! 🎵
