const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
console.log(seats)
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

//Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    console.log(selectedSeats);

    // const seats

    //copy selected seats into arr
    //Map through array
    // return a new Array indexex
    // this seatIndex variable is for localStorage
    const seatsIndex = [...selectedSeats].map(seat => 
         [...seats].indexOf(seat)
    );

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    console.log(seatsIndex);


    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
    
}

//Movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = e.target.value;
    console.log(e.target.selectedIndex);
    setMovieData(e.target.selectedIndex, e.target.value);
    console.log(selectedIndex)
    updateSelectedCount();
})

// seat click event
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && 
    !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});

