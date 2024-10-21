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
