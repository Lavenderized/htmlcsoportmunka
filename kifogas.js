const kifogasok = [
    "A kutyám megette a tankönyvemet.",
    "Eltévedtem az iskolába vezető úton.",
    "Egy titkos küldetésre kellett mennem.",
    "Az óraátállítás miatt azt hittem, még csak reggel 7 van.",
    "A számítógépem meghibásodott pont, amikor nekiálltam a feladatnak.",
    "A szomszéd kutyája megugatott, és nem tudtam aludni a múlt éjjel.",
    "A vírusírtom letiltota a programot amivel épp dolgoznom kellet volna.",
    "A barátnőm megtilttota nekem.",
    "Édesanyám megtiltotta nekem."
];

let elsoLenyomas = true;
let currentKifogasIndex = null;

function generateKifogas() {
    const randomIndex = Math.floor(Math.random() * kifogasok.length);
    const kifogasText = kifogasok[randomIndex];
    document.getElementById("kifogas").textContent = kifogasText;
    currentKifogasIndex = randomIndex; 

    if (elsoLenyomas) {
        document.getElementById("kifogasGomb").textContent = "Új Kifogás";
        elsoLenyomas = false;
    }

    resetStars(); 

    document.getElementById("starRating").style.display = "flex"; 
}

function rateKifogas(starCount) {
    const stars = document.querySelectorAll(".star");
    stars.forEach((star, index) => {
        star.classList.toggle("rated", index < starCount);
    });

    
    console.log(`A "${kifogasok[currentKifogasIndex]}" kifogás ${starCount} csillagot kapott.`);
}

function resetStars() {
    const stars = document.querySelectorAll(".star");
    stars.forEach(star => {
        star.classList.remove("rated");
    });
}
