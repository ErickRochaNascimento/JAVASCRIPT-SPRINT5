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
                
                // Novos elementos: botões de navegação
                const prevBtn = document.getElementById("prevBtn");
                const nextBtn = document.getElementById("nextBtn");


                Carousel.UpdateContent(); // start com a nova função
                Carousel._interval = setInterval(function () { Carousel.Next(); }, 3000);

                // Adicionar Event Listeners para os botões
                if (prevBtn) {
                    prevBtn.addEventListener('click', () => {
                        clearInterval(Carousel._interval); // Para o carrossel automático
                        Carousel.Previous();
                        // Reinicia o carrossel automático (opcional, mas recomendado)
                        Carousel._interval = setInterval(function () { Carousel.Next(); }, 3000); 
                    });
                }
                
                if (nextBtn) {
                    nextBtn.addEventListener('click', () => {
                        clearInterval(Carousel._interval); // Para o carrossel automático
                        Carousel.Next();
                        // Reinicia o carrossel automático (opcional, mas recomendado)
                        Carousel._interval = setInterval(function () { Carousel.Next(); }, 3000); 
                    });
                }

            }

        } else {
            throw "Method Start need a Array Variable.";
        }
        
    }

    // Função separada para atualizar a exibição do carrossel
    static UpdateContent() {
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
    }

    // Modifica Next para apenas atualizar o índice e chamar UpdateContent
    static Next() {
        if (!Carousel._arr || Carousel._size === 0) return;

        Carousel._sequence++;
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
        Carousel.UpdateContent();
    }

    // Novo método para voltar ao item anterior
    static Previous() {
        if (!Carousel._arr || Carousel._size === 0) return;

        Carousel._sequence--;
        if (Carousel._sequence < 0) {
            Carousel._sequence = Carousel._size - 1; // Volta para o último item
        }
        Carousel.UpdateContent();
    }
};