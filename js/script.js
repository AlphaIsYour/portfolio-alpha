// Array berisi kata-kata yang ingin ditampilkan
const words = ["Bagus", "Rahmat", "Farhan", "Budi", "Rian", "Dimas", "Fikri", "Nurul", "Ilham", "Alomani", "Amonali", "Anolami", "Anomali", "Wowo", "Owi"];

// Fungsi untuk memilih kata acak
function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

// Tampilkan kata acak di elemen dengan id "changing-word"
document.getElementById("changing-word").textContent = getRandomWord();
