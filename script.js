const originalData = {
    A: ["My Biggest Fear", "My Favorite Film", "My Favorite School Subject", "My Favorite Invention", "My Perfect Weekend"],
    B: ["Past Simple", "Present Perfect", "Used to", "Passive Voice"]
};
let currentData = { A: [...originalData.A], B: [...originalData.B] };

function drawCard(type) {
    const deckElement = document.getElementById('deck' + type);
    
    // Если карта уже перевернута (класс .flipped есть), значит, мы хотим её закрыть
    if (deckElement.classList.contains('flipped')) {
        deckElement.classList.remove('flipped');
    } else {
        // Если карта закрыта, тянем новую
        const list = currentData[type];
        if (list.length === 0) {
            alert("Колода пуста! Нажмите Reset.");
            return;
        }

        const resElement = document.getElementById('res' + type);
        const randomIndex = Math.floor(Math.random() * list.length);
        resElement.innerText = list.splice(randomIndex, 1)[0];
        
        deckElement.classList.add('flipped');
    }
}

// Кнопка Reset остается для полного обновления
function resetDeck(type) {
    const deckElement = document.getElementById('deck' + type);
    deckElement.classList.remove('flipped');
    currentData[type] = [...originalData[type]];
}
