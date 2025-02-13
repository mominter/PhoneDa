import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "500px",
    height: "500px",
    marginRight: "50px",
};

const center = {
    lat: 37.5665,
    lng: 126.978,
};

const GoogleMapComponent = () => {
    return (
        <LoadScript googleMapsApikey="AIzaSyDb3qWAGWZW1ftcrE8CczuswVt-4MBQQNM">
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
                {/* 마커 추가 기능 */}
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMapComponent;