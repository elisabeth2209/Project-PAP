.wkwk{
    padding-left: 200px;
   }

document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("galleryContainer");
    const imageUrls = [
        "gambar1.jpg",
        "gambar2.jpg",
        "gambar3.jpg",
        // Tambahkan URL gambar sesuai kebutuhan
    ];

    imageUrls.forEach((imageUrl, index) => {
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");

        const image = document.createElement("img");
        image.src = imageUrl;
        image.alt = `Image ${index + 1}`;

        galleryItem.appendChild(image);
        galleryContainer.appendChild(galleryItem);
    });
});
