function scrollToBooking() {
document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('bookingForm').addEventListener('submit', function(e) {
e.preventDefault();

const name = document.getElementById('name').value;
const room = document.getElementById('roomType').value;
const checkin = document.getElementById('checkin').value;
const checkout = document.getElementById('checkout').value;

document.getElementById('confirmation').innerHTML = `
<h3>Booking Confirmed 🎉</h3>
<p>Thank you, <b>${name}</b></p>
<p>Room: ${room}</p>
<p>Check-in: ${checkin}</p>
<p>Check-out: ${checkout}</p>
`;

this.reset();
});
