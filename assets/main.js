// Milestone 1
// Facciamo in modo di creare un overlay che copra l’intera pagina e all’interno, centrata, disponiamo un’immagine qualunque ed un button di chiusura.
// Milestone 2
// Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il display: none .
// Dopodichè facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
// Cliccando invece il button di chiusura, l’overlay scompare nuovamente.
// Milestone 3
// Inseriamo il pezzo di logica finale: quando una foto viene cliccata, dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.
// Ci sono diversi modi di farlo, prova a sperimentare :slightly_smiling_face:
// Bonus
// Spostandosi col mouse sopra le foto, il mouse diventa un puntatore, per far capire all’utente che può cliccare

// #region variabili
let rowElement = document.querySelector('.row');
let cardElements = '';
let closeElement = document.getElementById('close'); // bottone di chiusura
let overlayElement = document.querySelector('.overlay');
let imgContElement = document.querySelector('.image');

// #endregion variabili

// funzione bottone
function buttonClassToggle(element, url) {
    element.addEventListener('click', () => {
        
        if (url) {
            imgContElement.innerHTML = `<img src="${url}" alt="">`
        }

        const overlay = overlayElement.classList;
        overlay.toggle('d-none');
    })
}

// chiamata
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then(response => {
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

        // event listener qui?
        let imgElements = document.querySelectorAll('.api-img');

        imgElements.forEach(img => {

            // destrutturazione card
            // const { url } = img;
            console.log(img.src);
            
            // perchè url dà undefined?

            // creazione markup
            // const markup = `<img src="${url}" alt="">`
            // const markup = `<img src="${img.src}" alt="">`
            
            // associa img all'img dell'overlay (sostituisci lorem picsum a img della card)
            // imgElements += markup;
            // imgContElement.innerHTML = imgElements;

            // richiamo funzione
            buttonClassToggle(img, img.src);
        })
    })
    .catch(err => console.error(err))

// event listener bottone:
buttonClassToggle(closeElement);
