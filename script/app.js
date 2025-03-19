const totalGrand = getById('totalGrand')
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
        <p>Higher</p>
        <p>550</p>
         </div>
          `
        singleDetails.appendChild(newDiv)
        const totalPrice = getById('totalPrice')
        let convertTotalPrice = parseInt(totalPrice.innerText)
        convertTotalPrice = seatCountNumber * 550
        totalPrice.innerText = convertTotalPrice
        totalGrand.innerText = convertTotalPrice
    });

});

getById('apply-btn').addEventListener('click', (e) => {
    e.preventDefault()
    const couponInp = getById('couponInput').value
    let convertGrandTotal = parseInt(totalGrand.innerText)
    if (couponInp === 'Shihab') {
        discountPrice = (convertGrandTotal * 50) / 100
        totalGrand.innerText = discountPrice
    }
    else {
        const noDiscount = getById('no-discount')
        noDiscount.innerText = 'No Discount!!'
    }
})
getById('next-btn').addEventListener('click', (e) => {
    e.preventDefault()
    const inpName = getById('inputName').value
    const inpNumber = getById('inputNumber').value
    const inpMail = getById('inputMail').value
    getById('inputName').value = ''
    getById('inputNumber').value = ''
    getById('inputMail').value = ''
    if (inpName) {
        if (inpNumber) {
            if (inpMail) {
                Swal.fire({
                    title: "Are you sure?",
                    text: "Do You Want to Process This order!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: "Successful!",
                            text: "Your ticket has been Booked!",
                            icon: "success"
                        });
                    }
                });
            } else {
                Swal.fire({
                    title: "Input Email",
                    text: "Please enter a valid Email Address",
                    icon: "warning"
                });
            }
        } else {
            Swal.fire({
                title: "Input Number",
                text: "Please enter a valid Phone Number",
                icon: "warning"
            });
        }
    } else {
        Swal.fire({
            title: "Input Name",
            text: "You didn't enter Passenger Name",
            icon: "warning"
        });
    }

})
