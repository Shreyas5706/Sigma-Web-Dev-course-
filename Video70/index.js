// // document.body.querySelector(".box").style.color="black"

// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//  }
// const col=getRandomColor()
// console.log(col)
// document.querySelectorAll(".box").style.backgroundColor = col;
// document.body.getElementsByClassName("box").style.color="red";  
// document.body.style.backgroundColor="green"
function randomcolorGenrator(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color 
}
document.querySelectorAll(".box").forEach(e=>{
    console.log(randomcolorGenrator())
    e.style.backgroundColor=randomcolorGenrator()
    e.style.color=randomcolorGenrator()
})