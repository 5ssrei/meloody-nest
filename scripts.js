const songs = [
  { title: "Dreamscape", artist: "Nova", cover: "covers/dreamscape.jpg", audio: "audio/dreamscape.mp3" },
  { title: "Echoes", artist: "Luna", cover: "covers/echoes.jpg", audio: "audio/echoes.mp3" },
  { title: "Velvia", artist: "Aria", cover: "covers/velvia.jpg", audio: "audio/velvia.mp3" }
];

const wheel = document.getElementById("musicWheel");
const currentSong = document.getElementById("currentSong");
const audioPlayer = document.getElementById("audioPlayer");

songs.forEach((song, index) => {
  const angle = (360 / songs.length) * index;
  const songDiv = document.createElement("div");
  songDiv.className = "song";
  songDiv.style.backgroundImage = `url(${song.cover})`;
  songDiv.style.transform = `rotate(${angle}deg) translate(120px) rotate(-${angle}deg)`;
  
  songDiv.onclick = () => {
    currentSong.textContent = `${song.title} - ${song.artist}`;
    audioPlayer.src = song.audio;
    audioPlayer.play();
  };

  wheel.appendChild(songDiv);
});
