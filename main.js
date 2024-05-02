document.addEventListener("DOMContentLoaded", function() {
    const reservationForm = document.getElementById('reservationForm');
    const reservationSection = document.getElementById('reservationSection');

    reservationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Show the reservation section
        reservationSection.classList.remove('d-none');
    });
});
