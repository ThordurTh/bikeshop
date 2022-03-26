// window.addEventListener("DOMContentLoaded", init);

// function init() {
//     getData();
// }

// async function getData() {
//     const response = await fetch("http://thordurfrimann.dk/wp-bikes/wp-json/wp/v2/bike?_embed");
//     console.log("response2", response);
//     const bikeData = await response.json();

//     displayBike(bikeData);
// }

// async function displayBike(bike) {
//     let singleBike = bike[0];
//     console.log(singleBike.title.rendered);
//     document.querySelector(".brand").textContent = singleBike.instock;
//     document.querySelector(".name").textContent = singleBike.title.rendered;
//     console.log(singleBike.categories.price);
//     document.querySelector(".price").textContent = singleBike.price;
//     document.querySelector(".inStock").textContent = singleBike.instock;
    
// }


const endpoint = "http://thordurfrimann.dk/wp-bikes/wp-json/wp/v2/";

getBikes();

function getBikes(){
    fetch(endpoint+"bike")
    .then(res=>res.json())
    .then(setupBikes);
}

function setupBikes(bikes){
    const template = document.querySelector("template").content;
    const parentElement = document.querySelector("main");
    bikes.forEach(bike=>{
        const copy = template.cloneNode(true);
        copy.querySelector("img").src = bike.image.guid;
        copy.querySelector(".name").textContent = bike.title.rendered;
        // copy.querySelector(".brand").textContent = 
        copy.querySelector(".price").textContent = `$${bike.price}`;
        copy.querySelector(".inStock").textContent = bike.instock;

        // if (bike.categories.1 = 8) {
        //     copy.querySelector(".brand").textContent = "state";
        // } else {
        //     copy.querySelector(".brand").textContent = "linus";
        // };
console.log(bike.categories)
        

       
        parentElement.appendChild(copy);
    })
}



// getCategory();

// function getCategory(){
//             fetch(endpoint+"categories?parent=9")
//             .then(res=>res.json())
//             .then(json => document.querySelector(".brand").textContent = json[0].name);
//         };

