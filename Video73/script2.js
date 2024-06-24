// function createCard(title, cName, views, monthsOld, duration, thumbnail){
//     // Finish this function
// }


// createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"



// function createCard(title, cName, views, monthsOld, duration, thumbnail) {
//     const cardTemplate = document.getElementById('card-template');
//     const card = cardTemplate.content.cloneNode(true);
  
//     card.querySelector('.title').textContent = title;
//     card.querySelector('.information ul li:nth-child(1)').textContent = cName;
//     card.querySelector('.information ul li:nth-child(2)').textContent = `${views} views`;
//     card.querySelector('.information ul li:nth-child(3)').textContent = `${monthsOld} months ago`;
//     card.querySelector('.duration .txt').textContent = duration;
//     card.querySelector('.thumbnail img').src = thumbnail;
  
//     document.body.appendChild(card);
//   }

//   createCard("Installing Vs Code & How website Work | Sigma web Development Course - Tutorial #1", "CodeWithHarry", "727K", "2", "10:45", "https://i.ytimg.com/vi/KB7GzBv5p4Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDVLIUfmrskNAha1yNa-7ygsEeNEA");
//   createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", "320000", "5", "11:38", "card.png");


function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    const cardTemplate = document.getElementById('card-template');
    const card = cardTemplate.content.cloneNode(true);

    card.querySelector('.title').textContent = title;
    card.querySelector('.information ul li:nth-child(1)').textContent = cName;
    card.querySelector('.information ul li:nth-child(2)').textContent = formatViews(views)+ "Views";
    card.querySelector('.information ul li:nth-child(3)').textContent = `${monthsOld} months ago`;
    card.querySelector('.duration .txt').textContent = duration;
    card.querySelector('.thumbnail img').src = thumbnail;

    document.body.appendChild(card);
}

function formatViews(views) {
    if (views >= 1000000) {
        return `${Math.floor(views / 1000000)}m`;
    } else if (views >= 1000) {
        return `${Math.floor(views / 1000)}k`;
    } else {
        return views;
    }
}

createCard("Installing Vs Code & How website Work | Sigma web Development Course - Tutorial #1", "CodeWithHarry", 727000, "2", "10:45", "https://i.ytimg.com/vi/KB7GzBv5p4Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDVLIUfmrskNAha1yNa-7ygsEeNEA");
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 320000, "5", "11:38", "card.png");