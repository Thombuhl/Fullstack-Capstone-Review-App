import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Wrapper } from '@googlemaps/react-wrapper';
import GoogleMap from '../components/GoogleMap';
import Marker from '../components/Marker';
import Pagination from '../components/Pagination';
import RestaurantsList from '../components/RestaurantsList';
import '../styles/Home.css';
import { fetchPrefLabel, setPreferenceLabel } from '../store/preference';

/**
 * COMPONENT
 */
export const Home = () => {
    const { auth } = useSelector((state) => state.auth);
    const { restaurants } = useSelector((state) => state);

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            const prefLabels = await dispatch(fetchPrefLabel());
            dispatch(setPreferenceLabel(prefLabels.payload));
        };
        fetchData();
    }, []);

    const render = (status) => {
        return <h1>{status}</h1>;
    };

    return (
        <div className="Home">
            {/* <h3>Welcome, {auth.username}</h3> */}
            <RestaurantsList itemPerPage={10} />
            <Wrapper
                apiKey="AIzaSyAUnodcwAgear2MI8lHnPEwwCdjh-8AKrM"
                render={render}
            >
                <GoogleMap>
                    {restaurants.map((res) => {
                        const position = {
                            lat: Number.parseFloat(res.latitude),
                            lng: Number.parseFloat(res.longitude),
                        };
                        return <Marker position={position} key={res.id} />;
                    })}
                </GoogleMap>
            </Wrapper>
            <Pagination itemPerPage={10} />
        </div>
    );
};

export default Home;
