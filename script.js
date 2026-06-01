const originalData = {
    A: ["My Biggest Fear", "My Favorite Film", "My Favorite School Subject", "My Favorite Invention", "My Perfect Weekend"],
    B: ["Past Simple", "Present Perfect", "Used to", "Passive Voice"]
};
let currentData = { A: [...originalData.A], B: [...originalData.B] };

function drawCard(type) {
    const list = currentData[type];
    if (list.length === 0) return;

    const deckElement = document.getElementById('deck' + type);
    const resElement = document.getElementById('res' + type);
    
    // Берем случайную карту
    const randomIndex = Math.floor(Math.random() * list.length);
    resElement.innerText = list.splice(randomIndex, 1)[0];
    
    // Переворачиваем
    deckElement.classList.add('flipped');
}

function resetDeck(type) {
    const deckElement = document.getElementById('deck' + type);
    deckElement.classList.remove('flipped');
    currentData[type] = [...originalData[type]];
}
