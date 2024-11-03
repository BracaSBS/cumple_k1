// Código para manejar el reproductor de música si es necesario
function toggleLyrics() {
    const lyricsDiv = document.getElementById("lyrics");
    if (lyricsDiv.classList.contains("hidden")) {
        lyricsDiv.classList.remove("hidden");
    } else {
        lyricsDiv.classList.add("hidden");
    }
}
