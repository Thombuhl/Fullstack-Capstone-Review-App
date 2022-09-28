import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMapPosition } from '../store';

const AddressPicker = () => {
    const [geocoder, setGeocoder] = useState();
    const dispatch = useDispatch();
    useEffect(() => {
        setGeocoder(new window.google.maps.Geocoder());
    }, []);
    const handleSubmit = (ev) => {
        ev.preventDefault();
        geocoder.geocode(
            { address: ev.target.location.value },
            function (results, status) {
                if (status == 'OK') {
                    console.log(results[0].geometry.location);
                    dispatch(
                        setMapPosition({
                            lat: results[0].geometry.location.lat(),
                            lng: results[0].geometry.location.lng(),
                        })
                    );
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    console.log('There was an error' + status);
                }
            }
        );
    };
    return (
        <form onSubmit={handleSubmit}>
            <input name="location" placeholder="Address or Zip Code" />
        </form>
    );
};
export default AddressPicker;
