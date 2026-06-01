const data = {
    A: ["My Biggest Fear", "My Favorite Film", "My Favorite School Subject", "My Favorite Invention", "My Perfect Weekend"],
    B: ["Past Simple", "Present Perfect", "Used to", "Passive Voice"]
};

function drawCard(type) {
    const list = data[type];
    if (list.length === 0) {
        document.getElementById('res' + type).innerText = "Карты закончились!";
        return;
    }
    const randomIndex = Math.floor(Math.random() * list.length);
    const card = list.splice(randomIndex, 1)[0];
    document.getElementById('res' + type).innerText = card;
}
