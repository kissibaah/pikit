document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userProfile = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        paymentInfo: document.getElementById('paymentInfo').value,
    };

    // Basic client-side validation
    if (!validateForm(userProfile)) {
        document.getElementById('message').innerHTML = '<p style="color: red;">Please enter valid information.</p>';
        return;
    }

    console.log('User Profile:', userProfile);

    // Store the user profile data in localStorage or sessionStorage
    localStorage.setItem('userProfile', JSON.stringify(userProfile));

    // Navigate to the pickup page
    window.location.href = 'pickup.html';
});

function validateForm(userProfile) {
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const phonePattern = /^\d{3} \d{3} \d{4}$/; // Pattern to match phone numbers like "123 456 7890"

    console.log("Validating email:", userProfile.email);
    console.log("Email valid:", emailPattern.test(userProfile.email));
    console.log("Validating phone:", userProfile.phone);
    console.log("Phone valid:", phonePattern.test(userProfile.phone));

    if (!emailPattern.test(userProfile.email)) {
        return false;
    }
    if (!phonePattern.test(userProfile.phone)) {
        return false;
    }
    return true;
}

// Add an input event listener to format the phone number as the user types
document.getElementById('phone').addEventListener('input', function(event) {
    let input = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (input.length > 3 && input.length <= 6) {
        input = `${input.slice(0, 3)} ${input.slice(3)}`;
    } else if (input.length > 6) {
        input = `${input.slice(0, 3)} ${input.slice(3, 6)} ${input.slice(6, 10)}`;
    }
    event.target.value = input;
});
