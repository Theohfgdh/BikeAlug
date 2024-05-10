JavaScript

let bikes = [
    {id : 1, model: "Bike de Montanha", available: true },
    {id : 2, model: "Bike de Passeio", available: true },
];

function bikesNaLista() {
    const listaDeBikes = document.getElementById('listaDeBikes');
    listaDeBikes.innerHTML = '';
    bikes.forEach(Bike => {
        const bikeItem = document.createElement('div')
        bikeItem.innerHTML = <p>${Bike.model} - ${bike.available ? 'Disponivel' : 'Indisponivel'} </p>;
        listaDeBikes.appendChild(bikeItem);
    });

}

function alugarBike(id) {
    const bike = bikes.find(Bike => bike.id === id);
    if (bike && bike.available) {
        bike.available = false;
        bikesNaLista();
        alert('Você alugou a ${bike.model}');
    } else {
        alert('Essa bike não está disponivel para aluguel');
    }
}

window.onload = function()
    {bikesNaLista();}

    document.getElementById('listaDeBikes').addEventListener('click', function(event) {
        const bikeId = parseInt(event.target.getAttribute('data-id'));
        if (!isNaN(bikeId)) {
            alugarBike(bikeId);
        }
    });

