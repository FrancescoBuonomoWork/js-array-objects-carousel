// console.log("funziona");

const imgWrapperDOMElement = document.querySelector(".img-wrapper");
// console.log(imgWrapperDOMElement);

const arrowUpDOMElement = document.querySelector(".arrow-up");
// console.log(arrowUpDOMElement);
const arrowDownDOMElement = document.querySelector(".arrow-down");
console.log(arrowDownDOMElement);

const images = [
    {
        image: 'img/01.webp',
        title: "Marvel's Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    },
]

console.log(images);

// ciclo per generare la struttura html 
for (let i = 0; i < images.length; i++) {
    const currentImgSRC = images[i].image;
    // console.log(currentImgSRC);
    const currentTitle = images[i].title;
    // console.log(currentTitle);
    const currentText = images[i].text;
    // console.log(currentText);

    const html = `
   <div class="wrapper__item">
                    <img class="img-wrapper__item" src="./${currentImgSRC}">
                    <div class="text-wrapper">
                        <h3>${currentTitle}</h3>
                        <p>${currentText}</p>
                    </div>
    </div>
   `
    imgWrapperDOMElement.innerHTML += html;

};

// aggiugniamo la classe active al primo elemento 
// recuperiamo il wrapper__item da DOM 
const wrapperItemDOMElements = document.querySelectorAll(".wrapper__item");
console.log(wrapperItemDOMElements);
// diamo al primo elemento la classe active 
console.log(wrapperItemDOMElements[0]);

const currentWrapperItem = wrapperItemDOMElements[0].classList.add("active");
console.log(wrapperItemDOMElements.length);

// evento click freccia giu

arrowDownDOMElement.addEventListener("click", function () {
    console.log("click giu");
})

//     for(i=0 ; i < wrapperItemDOMElements.length;i++){

//     }
// evento click freccia su

arrowUpDOMElement.addEventListener("click", function () {
    console.log("click su");
})

