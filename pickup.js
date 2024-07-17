document.getElementById('pickupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const pickupDetails = {
        pickupLocation: document.getElementById('pickupLocation').value,
        contactName: document.getElementById('contactName').value,
        contactPhone: document.getElementById('contactPhone').value,
    };

    console.log('Pickup Details:', pickupDetails);

    // Store the pickup details in localStorage or sessionStorage
    localStorage.setItem('pickupDetails', JSON.stringify(pickupDetails));

    // Display the pickup details on the webpage
    document.getElementById('output').innerHTML = `
        <h3>Pickup Details Submitted</h3>
        <p><strong>Pickup Location:</strong> ${pickupDetails.pickupLocation}</p>
        <p><strong>Contact Name:</strong> ${pickupDetails.contactName}</p>
        <p><strong>Contact Phone:</strong> ${pickupDetails.contactPhone}</p>
    `;
});

// Add an input event listener to format the phone number as the user types
document.getElementById('contactPhone').addEventListener('input', function(event) {
    let input = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (input.length > 3 && input.length <= 6) {
        input = `${input.slice(0, 3)} ${input.slice(3)}`;
    } else if (input.length > 6) {
        input = `${input.slice(0, 3)} ${input.slice(3, 6)} ${input.slice(6, 10)}`;
    }
    event.target.value = input;
});
