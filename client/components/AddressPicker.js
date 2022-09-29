import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMapPosition, filterRestaurants } from '../store';
import { fetchAllRes } from '../apiCalls';

const getNearbyRes = (restaurantArray, center, miles = 15) => {
    const lat = miles / 69,
        lng = miles / 54.6;
    return restaurantArray.filter((res) => {
        return (
            Number.parseFloat(res.latitude) <= center.lat + lat &&
            Number.parseFloat(res.latitude) >= center.lat - lat &&
            Number.parseFloat(res.longitude) <= center.lng + lng &&
            Number.parseInt(res.longitude) >= center.lng - lng
        );
    });
};

const AddressPicker = () => {
    const [geocoder, setGeocoder] = useState();
    const dispatch = useDispatch();
    const history = useHistory();
    const { mapPosition } = useSelector((state) => state.maps);
    useEffect(() => {
        setGeocoder(new window.google.maps.Geocoder());
    }, []);
    useEffect(() => {
        const fetchRes = async () => {
            let res = await fetchAllRes();
            dispatch(filterRestaurants(getNearbyRes(res, mapPosition, 5)));
        };
        fetchRes();
    }, [mapPosition]);
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
                    history.push('/home/1');
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
