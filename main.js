document.addEventListener("DOMContentLoaded", function() {
    const reservationForm = document.getElementById('reservationForm');
    const reservationSection = document.getElementById('reservationSection');

    reservationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Show the reservation section
        reservationSection.classList.remove('d-none');
    });
});


// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get the form element
    const reservationForm = document.getElementById("reservationForm");

    // Add event listener for form submission
    reservationForm.addEventListener("submit", function (event) {
        // Prevent default form submission behavior
        event.preventDefault();

        // Check if all required fields are filled out
        const firmName = document.getElementById("firmName").value.trim();
        const yourName = document.getElementById("yourName").value.trim();
        const email = document.getElementById("email").value.trim();
        const mobileNumber = document.getElementById("mobileNumber").value.trim();

        if (firmName === "" || yourName === "" || email === "" || mobileNumber === "") {
            // If any required field is empty, display an error message or perform other actions as needed
            alert("Please fill out all required fields.");
            return;
        }

        // If all required fields are filled out, proceed with form submission
        // Show the reservation section
        const reservationSection = document.getElementById("reservationSection");
        reservationSection.classList.remove("d-none");
    });
});
