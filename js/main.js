function initMap() {
    const loc = { lat: 47.908522, lng: 106.940357 };

    const map = new google.map.Map (document.querySelector('.map'),{
        zoom: 14,
        center: loc
    });


    const marker = new google.maps.Marker({position: loc, loc:map});
}
