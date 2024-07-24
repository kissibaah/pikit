let map;

function initMap() {
    // Retrieve task details from localStorage
    const taskDetails = JSON.parse(localStorage.getItem('taskDetails'));

    if (!taskDetails) {
        console.error('No task details found');
        return;
    }

    // Get the coordinates of the pickup location
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: taskDetails.pickupLocation }, function(results, status) {
        if (status === 'OK') {
            const pickupLocation = results[0].geometry.location;

            // Initialize the map centered on the pickup location
            map = new google.maps.Map(document.getElementById('map'), {
                center: pickupLocation,
                zoom: 15
            });

            // Add a marker for the pickup location
            new google.maps.Marker({
                position: pickupLocation,
                map: map,
                title: 'Pickup Location'
            });

            // Add markers for nearby riders (static example data)
            const riders = [
                { lat: pickupLocation.lat() + 0.01, lng: pickupLocation.lng() },
                { lat: pickupLocation.lat() - 0.01, lng: pickupLocation.lng() + 0.01 },
                { lat: pickupLocation.lat(), lng: pickupLocation.lng() - 0.01 }
            ];

            riders.forEach((riderLocation) => {
                new google.maps.Marker({
                    position: riderLocation,
                    map: map,
                    icon: 'rider-icon.png', // Add a custom icon for riders if you have one
                    title: 'Rider'
                });
            });
        } else {
            console.error('Geocode was not successful for the following reason: ' + status);
        }
    });
}

function goBack() {
    window.history.back();
}