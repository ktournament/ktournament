const sheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRSD669plzeoZYAlPew2_6sS5PrxJSDDewMZBCuNZATSfa8qW9ujkFndwIREbvb5MISfqLEszlM7o7z/pubhtml';
const eventList = document.getElementById('event-list');

Papa.parse(sheetURL, {
    download: true,
    header: true,
    complete: function(results) {
        const events = results.data;
        events.forEach(e => {
            if(e.Title){ // Evitar filas vacías
                const li = document.createElement('li');
                li.innerHTML = `<h3>${e.Title}</h3><p>Fecha: ${e.Date}</p><p>${e.Description || ''}</p>`;
                eventList.appendChild(li);
            }
        });
    }
});