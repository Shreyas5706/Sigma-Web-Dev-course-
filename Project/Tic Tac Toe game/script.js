alert("Welcome to Tic Tac Toe Game");
let music = new Audio("music.mp3")
let aturn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")

let turn = "X"
let changeturn = () => {
    return turn === "X" ? "0" : "X";
}

const checkwin = () => {

}

let box = document.querySelector(".box")


Array.from(box).forEach(element => {
    let bt = document.querySelector(".boxtext")
    bt.addEventListener('click', (e) => {
        if (e.innertext === '') {
            e.innertext = turn
            changeturn();
            aturn.play();
            checkwin();
            document.getElementsByClassName(turn)[0].innertext = "Turn for " + turn;
        }
    })
})