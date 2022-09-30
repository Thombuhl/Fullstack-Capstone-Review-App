import React, {
    useEffect,
    useRef,
    useState,
    isValidElement,
    cloneElement,
    Children,
} from 'react';
import { useSelector } from 'react-redux';

const GoogleMap = ({ children }) => {
    const ref = useRef();
    const [map, setMap] = useState();
    const { mapPosition } = useSelector((state) => state.maps);

    useEffect(() => {
        if (ref.current && !map) {
            setMap(
                new window.google.maps.Map(ref.current, {
                    center: mapPosition,
                    zoom: 14,
                    mapId: 'bb7aca8ebbd95d8e',
                    mapTypeControl: false,
                    fullScreenControl: false,
                    streetViewControl: false,
                })
            );
        }
    }, [ref, map]);

    useEffect(() => {
        if (map) {
            map.setCenter({ lat: mapPosition.lat, lng: mapPosition.lng });
        }
    }, [mapPosition]);

    return (
    
        <div ref={ref} className="map col-4 container-fluid" >
            {' '}
            {Children.map(children, (child) => {
                if (isValidElement(child)) {
                    return cloneElement(child, { map });
                }
            })}
        </div>

    );
};

export default GoogleMap;
