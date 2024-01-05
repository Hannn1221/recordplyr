// Define constants for total duration and average song length
const TOTAL_DURATION = 3600; // Total duration of the audio file in seconds
const AVG_SONG_LENGTH = 90; // Average length of each song in seconds

// Calculate number of songs
const NUM_SONGS = TOTAL_DURATION / AVG_SONG_LENGTH;

// Function to get a random song start time
function getRandomSongStartTime() {
   const randomSongNumber = Math.floor(Math.random() * NUM_SONGS);
   return randomSongNumber * AVG_SONG_LENGTH;
}

// Get audio player and button elements
const audioPlayer = document.getElementById('audioPlayer');
const button = document.getElementById('bu2');

// Add click event listener to button
button.addEventListener('click', () => {
   audioPlayer.currentTime = getRandomSongStartTime();
   audioPlayer.play();
});
