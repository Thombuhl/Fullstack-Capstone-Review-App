import React, {
    useEffect,
    useRef,
    useState,
    isValidElement,
    cloneElement,
    Children,
} from 'react';

const GoogleMap = ({ children }) => {
    const ref = useRef();
    const [map, setMap] = useState();

    useEffect(() => {
        if (ref.current && !map) {
            setMap(
                new window.google.maps.Map(ref.current, {
                    center: { lat: 40.75323476064019, lng: -73.98270684615821 },
                    zoom: 14,
                    mapId: 'bb7aca8ebbd95d8e',
                })
            );
        }
    }, [ref, map]);

    return (
        <div ref={ref} id="map">
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
