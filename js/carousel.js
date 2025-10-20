

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {
    constructor(imagem, title, url) {
        this.imagem = imagem;
        this.title = title;
        this.url = url;
    }


    static Start(arr) {

        if (Carousel._interval) {
            clearInterval(Carousel._interval);
        }

        if (arr) {

            if (arr.length > 0) {
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel._arr = arr;
                Carousel._elCarousel = document.getElementById("carousel");
                Carousel._elTitle = document.getElementById("carousel-title");


                Carousel.Next(); //start
                Carousel._interval = setInterval(function () { Carousel.Next(); }, 3000);
            }

        } else {
            throw "Method Start need a Array Variable.";
        }
        
    }

    static Next() {
        if (!Carousel._arr || Carousel._size === 0) return;

        const item = Carousel._arr[Carousel._sequence];

        Carousel._elCarousel.innerHTML = "";
        Carousel._elTitle.innerHTML = "";

        const img = document.createElement("img");
        img.src = item.imagem;
        img.alt = item.title || "Imagem do carrossel";
        img.style.maxWidth = "100%";
        img.style.display = "block";
        img.style.margin = "0 auto";
        Carousel._elCarousel.appendChild(img);

        const a = document.createElement("a");
        a.href = item.url || "#";
        a.textContent = item.title || "";
        a.style.textDecoration = "none";
        Carousel._elTitle.appendChild(a);

        Carousel._sequence++;
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
    }
};
