console.log('im alive');

// CONSEGNA
// Milestone 1
// Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)
// Milestone 2
// Utilizzando Postman, testiamo una chiamata all’endpoint di JSON Placeholder:
// https://jsonplaceholder.typicode.com/photos?_limit=6
// Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.
// Milestone 3
// Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API di JSON Placeholder, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
// Bonus
// rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata

// si possono sfruttare title: (su card desc) e url: (su card img)

// #region variabili
let rowElement = document.querySelector('.row');
let cardElements = '';

// #endregion variabili

// chiamata
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then(response => {
        let cards = response.data;

        
        cards.forEach(card => {
            
            // destrutturazione card
            const { title, url } = card;
            console.log(card);

            // creazione markup
            const markup = `
                <div class="card">
                    <img src="./assets/img/pin.svg" class="pin" alt="">
                    <div class="card-img">

                        <!-- lorem picsum? -->
                        <img src="${url}" alt="foto casuale">
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
