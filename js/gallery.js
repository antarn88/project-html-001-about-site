let imageContainer = document.querySelector(".image-container");

function photoBoxGenerator(amount) {
    for (let i = 0; i < amount; i++) {
        let photoBoxDiv = document.createElement("div");
        photoBoxDiv.classList.add("image-box");

        let randomPhoto = document.createElement("img");
        randomPhoto.setAttribute("src", `https://source.unsplash.com/800x600/?computer,programming${i}`);
        randomPhoto.setAttribute("alt", "Számítógép vagy programozós kép");
        randomPhoto.setAttribute("width", "400px");

        photoBoxDiv.appendChild(randomPhoto);
        imageContainer.appendChild(photoBoxDiv);
    }
}

photoBoxGenerator(21);