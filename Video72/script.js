console.log("Script.js initializing")
// let boxes = document.getElementsByClassName("box")


// Using the rgb colour format 


/* let boxes = document.querySelector(".container").children 


function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
}) */




// Using the hex colour code format



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
    





