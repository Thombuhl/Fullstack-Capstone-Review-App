import React, { useEffect } from 'react';

const GoogleMap = () => {
    useEffect(() => {
        var script = document.createElement('script');
        script.src =
            'https://maps.googleapis.com/maps/api/js?key=AIzaSyAUnodcwAgear2MI8lHnPEwwCdjh-8AKrM&callback=initMap';
        script.async = true;

        window.initMap = function () {
            var googleMap = new google.maps.Map(
                document.getElementById('map'),
                {
                    center: { lat: 40.75323476064019, lng: -73.98270684615821 },
                    zoom: 14,
                    mapId: 'bb7aca8ebbd95d8e',
                }
            );
        };

        document.head.appendChild(script);
    }, []);
    return <div id="map"></div>;
};

export default GoogleMap;
