// #region variabili globali
let rowElement = document.querySelector('.row');
let cardElements = '';
let closeElement = document.getElementById('close'); // bottone di chiusura
let overlayElement = document.querySelector('.overlay');
let imgContElement = document.querySelector('.image');

// #endregion variabili globali

// funzione bottone
function buttonClassToggle(element, url) {
    element.addEventListener('click', () => {

        if (url) {
            imgContElement.innerHTML = `<img src="${url}" alt="">`
        }
        
        overlayElement.classList.toggle('d-none');
    })
}

// chiamata
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then(response => {

        // creazione cards
        let cards = response.data;

        cards.forEach(card => {

            // destrutturazione card
            const { title, url } = card;

            // creazione markup
            const markup = `
                <div class="card">
                    <img src="./assets/img/pin.svg" class="pin" alt="">
                    <div class="card-img">

                        <!-- lorem picsum? -->
                        <img src="${url}" class="api-img" alt="foto casuale">
                    </div>

                    <!-- desc significa description -->
                    <div class="card-desc">
                        <p>
                            ${title}
                        </p>
                    </div>
                </div>`

            // assegnazione e stampa markup
            cardElements += markup;
            rowElement.innerHTML = cardElements;
        })

        // creazione immagine overlay
        let imgElements = document.querySelectorAll('.api-img');

        imgElements.forEach(img => {

            // richiamo funzione
            buttonClassToggle(img, img.src);
        })
    })
    .catch(err => console.error(err))

// event listener per la chiusura
buttonClassToggle(closeElement);
