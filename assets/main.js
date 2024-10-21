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
let photoElement = document.getElementById('photo');
// let closingArray = [document.querySelectorAll('.close')];

// #endregion variabili

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
                        <img src="${url}" id="photo" alt="foto casuale">
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

    })
    .catch(err => console.error(err))


// attacca event listener al bottone e foto?

// event listener foto:
// togli classe d-none all'overlay
// destruttura card?
// associa img all'img dell'overlay (sostituisci lorem picsum a img della card)

photoElement.addEventListener('click', () => {
    const overlay = overlayElement.classList;
    overlay.add('d-none');
})

// event listener bottone:
// metti classe d-none

// closeElement.addEventListener('click', () => {
//     const overlay = overlayElement.classList;
//     overlay.toggle('d-none');
// })

closeElement.addEventListener('click', () => {
    const overlay = overlayElement.classList;
    overlay.toggle('d-none');
})

// ora non funziona più col bottone, come farle funzionare entrambe?

// fai prima una funzione?

// foreach?