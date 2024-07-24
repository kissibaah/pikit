document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskDetails = {
        pickupLocation: document.getElementById('pickupLocation').value,
        pickupContactName: document.getElementById('pickupContactName').value,
        pickupContactPhone: document.getElementById('pickupContactPhone').value,
        deliveryLocation: document.getElementById('deliveryLocation').value,
        deliveryContactName: document.getElementById('deliveryContactName').value,
        deliveryContactPhone: document.getElementById('deliveryContactPhone').value,
    };

    console.log('Task Details:', taskDetails);

    // Store the task details in localStorage
    localStorage.setItem('taskDetails', JSON.stringify(taskDetails));

    // Navigate to the map page
    window.location.href = 'map.html';
});

// Add input event listeners to format phone numbers as the user types
document.getElementById('pickupContactPhone').addEventListener('input', formatPhoneNumber);
document.getElementById('deliveryContactPhone').addEventListener('input', formatPhoneNumber);

function formatPhoneNumber(event) {
    let input = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (input.length > 3 && input.length <= 6) {
        input = `${input.slice(0, 3)} ${input.slice(3)}`;
    } else if (input.length > 6) {
        input = `${input.slice(0, 3)} ${input.slice(3, 6)} ${input.slice(6, 10)}`;
    }
    event.target.value = input;
}