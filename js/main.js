// console.log("funziona");

// da rivedere questa funzione 
function slideToNext(mainImg, smallImg) {
    mainImg[currentIndex].classList.remove("active");
    // miniature 
    smallImg[currentIndex].classList.remove("active");
    // prima incremento index
    // poi controllo l indice a cosa coincide e lo resetto in caso di fine
    if (currentIndex === mainImg.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex = currentIndex + 1;
    }
    // console.log(index);
    mainImg[currentIndex].classList.add("active")
    smallImg[currentIndex].classList.add("active");

}
const imgWrapperDOMElement = document.querySelector(".img-wrapper");
// console.log(imgWrapperDOMElement);


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

let currentIndex = 0;
wrapperItemDOMElements[currentIndex].classList.add("active");
console.log(wrapperItemDOMElements.length);

// recuperiamo le frecce dal DOM 
const arrowUpDOMElement = document.querySelector(".arrow-up");
// console.log(arrowUpDOMElement);
const arrowDownDOMElement = document.querySelector(".arrow-down");
// console.log(arrowDownDOMElement);

// prendiamo dal DOM tutte gli elementi delle miniature 
const imgThumbnailsDOMElements = document.getElementsByClassName("img-thumbnails-wrapper__item");
console.log(imgThumbnailsDOMElements)
imgThumbnailsDOMElements[currentIndex].classList.add("active");

const timer = setInterval(function () {
    slideToNext(wrapperItemDOMElements, imgThumbnailsDOMElements);
}, 3000)



// console.log(currentIndex)
arrowDownDOMElement.addEventListener("click", function () {
    slideToNext(wrapperItemDOMElements, imgThumbnailsDOMElements);
})

arrowDownDOMElement.addEventListener("click", slideToNext)
// evento click freccia giu che mostra la slide successiva
// console.log(currentWrapperItem);
// arrowDownDOMElement.addEventListener("click", function () {
//     console.log("click giu");
//         // immagini del carosello 
//         wrapperItemDOMElements[currentIndex].classList.remove("active");
//         // miniature 
//         imgThumbnailsDOMElements[currentIndex].classList.remove("active");
//         // prima incremento 
//         currentIndex = currentIndex + 1;
//         // poi controllo l indice a cosa coincide e lo resetto in caso di fine
//         if(currentIndex === wrapperItemDOMElements.length) {
//             currentIndex = 0;
//         }
//         console.log(currentIndex);
//         wrapperItemDOMElements[currentIndex].classList.add("active")
//         imgThumbnailsDOMElements[currentIndex].classList.add("active");


// })

// evento click freccia su che mostra la slide precendete 

arrowUpDOMElement.addEventListener("click", function () {
    console.log("click su");
    wrapperItemDOMElements[currentIndex].classList.remove("active");
    imgThumbnailsDOMElements[currentIndex].classList.remove("active");

    // prima decremento
    currentIndex = currentIndex - 1;
    // poi controllo l indice a cosa coincide e lo resetto in caso di fine
    if (currentIndex === -1) {
        currentIndex = wrapperItemDOMElements.length - 1;
    }

    console.log(currentIndex);
    wrapperItemDOMElements[currentIndex].classList.add("active");
    imgThumbnailsDOMElements[currentIndex].classList.add("active");


})



