const seatNumberEl = document.getElementById('seatNumber');
let seatNumber = parseInt(document.getElementById('seatNumber').innerText);
const totalSeat = document.getElementById('total-seat');
let totalSeatNumber = parseInt(totalSeat.innerText);
const seatContainer = document.getElementById('seatContainer');
let totalPrice = 0;

let seatName = [];

function selectSeat(event) {
  seatName.push(event.innerText);
  if (seatName.length == 4) {
    document.getElementById('couponEl').removeAttribute('disabled');
    document.getElementById('copuonBtn').removeAttribute('disabled');
    
  }
  event.classList.add('text-white', 'bg-green-500');
  seatNumber++;
  seatNumberEl.innerText = seatNumber;
  totalSeatNumber--;
  totalSeat.innerText = totalSeatNumber;
  seatContainer.innerHTML += `
  <div class="flex justify-between">

                  <p class="text-lg font-medium">${event.innerText}</p>
                  <p class="text-lg font-medium">Economy</p>
                  <p class="text-lg font-medium">550 TK</p>
    </div>
  `;

  document.getElementById('seatPrices').classList.remove('hidden');
  document.getElementById('worningText').classList.add('hidden');

  totalPrice += 550;
  document.getElementById('totalPrice').innerText = totalPrice;
}
