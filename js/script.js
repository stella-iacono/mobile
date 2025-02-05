const tasks = [
    "Find a squirrel", "Touch some grass", "High-five a classmate",
    "Spot a red backpack", "High-five a stranger", "Breathe deeply",
    "Walk on the stairs", "Find a shape in the clouds", "Jump in the air",
    "Find a cool shadow", "Close eyes for 10 sec", "Recognize a smell",
    "Touch something cold", "Find a heart shape", "Find something purple",
    "Find a pinecone", "Spot a utility vehicle", "Find a bug",
    "Find an interesting sign", "Walk backwards for 5 steps", "Find a leaf",
    "Find a bird", "Find a stick", "Find a flower", "FREE SPACE"

];

function generateBingo() {
    
    let board = document.getElementById("bingoBoard");
    board.innerHTML = ""; //clear
    tasks.sort(() => Math.random() - 0.5); //shuffle

    for (let i = 0; i < 25; i++) {
        let cell = document.createElement("div");
        cell.classList.add("bingo-cell");
        cell.innerText = tasks[i];
        cell.addEventListener("click", () => cell.classList.toggle("marked"));
        board.appendChild(cell);
    };

};

function resetBingo() {
    generateBingo();
};

generateBingo();


