document.querySelectorAll('.single-seat').forEach(seat => {
    seat.addEventListener('click', (e) => {
        e.preventDefault()
        seat.classList.add('sit-booked')
        const seatCount = getById('seat-count');
        let seatCountNumber = parseInt(seatCount.innerText);
        seatCountNumber += 1;
        seatCount.innerText = seatCountNumber;
        const singleDetails = getById('single-price-details')
        const newDiv = document.createElement('div')
        newDiv.innerHTML = `
        <div class="flex justify-between py-2 text-third-color">
        <p>${seat.innerText}</p>
        <p>Economy</p>
        <p>550</p>
         </div>
          `
        singleDetails.appendChild(newDiv)
        const totalPrice = getById('totalPrice')
        let convertTotalPrice = parseInt(totalPrice.innerText)
        convertTotalPrice = seatCountNumber * 550
        totalPrice.innerText = convertTotalPrice
        const totalGrand = getById('totalGrand')
        totalGrand.innerText = convertTotalPrice
    });

});

