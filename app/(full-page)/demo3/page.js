"use client"
import React, { useState, useCallback, useRef } from 'react';
import { GoogleMap, LoadScript, Polyline } from '@react-google-maps/api';
 
const mapContainerStyle = {
  width: '100%',
  height: '100vh'
};
 
const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const center = {
  lat: 12.9716,
  lng: 77.5946
};
 
const libraries = ['places'];
 
function MyMap() {
  const [map, setMap] = useState(null);
  const [query, setQuery] = useState('');
  const [areaBorders, setAreaBorders] = useState([]);
  const geocoder = useRef(null);
 
  const onLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
    geocoder.current = new window.google.maps.Geocoder();
  }, []);
 
  const handleSearch = () => {
    if (geocoder.current && query) {
      geocoder.current.geocode({ address: query }, (results, status) => {
        if (status === 'OK' && results[0]) {
          const location = results[0].geometry.location;
          map.panTo(location);
          map.setZoom(15);
 
          // Generate or fetch the polygon paths for the searched area
          const paths = generatePolygonPaths(location); // Example function to generate polygon paths
          setAreaBorders([...areaBorders, paths]);
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    }
  };
 
  // Function to generate polygon paths (example: rectangular area)
  const generatePolygonPaths = (center) => {
    // Example: Define a rectangular area around the center
    const halfSize = 0.01; // Example size in degrees
 
    const paths = [
      [
        { lat: center.lat() + halfSize, lng: center.lng() - halfSize },
        { lat: center.lat() + halfSize, lng: center.lng() + halfSize },
        { lat: center.lat() - halfSize, lng: center.lng() + halfSize },
        { lat: center.lat() - halfSize, lng: center.lng() - halfSize },
        { lat: center.lat() + halfSize, lng: center.lng() - halfSize } // Close the loop
      ]
    ];
 
    return paths;
  };
 
  return (
    <LoadScript googleMapsApiKey={GOOGLE_API_KEY} libraries={libraries}>
      <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          style={{
            boxSizing: 'border-box',
            border: '1px solid transparent',
            width: '240px',
            height: '32px',
            padding: '0 12px',
            borderRadius: '3px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
            fontSize: '14px',
            outline: 'none',
            textOverflow: 'ellipses',
            position: 'absolute',
            left: '50%',
            top: '10px',
            marginLeft: '-120px',
            zIndex: 10
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50px',
            marginLeft: '-60px',
            zIndex: 10
          }}
        >
          Search
        </button>
        <GoogleMap
          id="map"
          mapContainerStyle={mapContainerStyle}
          zoom={12}
          center={center}
          onLoad={onLoad}
        >
          {areaBorders.map((paths, index) => (
            <React.Fragment key={index}>
              {paths.map((path, i) => (
                <Polyline
                  key={i}
                  path={path}
                  options={{
                    strokeColor: 'blue',
                    strokeOpacity: 1,
                    strokeWeight: 2,
                    strokeDashArray: [10, 10] // Example: Dotted line style
                  }}
                />
              ))}
            </React.Fragment>
          ))}
        </GoogleMap>
      </div>
    </LoadScript>
  );
}
 
export default MyMap;