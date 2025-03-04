"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

export default function Map() {
    const [rectangleDrawn, setRectangleDrawn] = useState(false);

    const handleCreated = (e) => {
        if (e.layerType === "rectangle") {
            setRectangleDrawn(true);
        }
    };

    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <FeatureGroup>
                    <EditControl
                        position="topleft"
                        onCreated={handleCreated}
                        draw={{
                            rectangle: true,
                            polyline: false,
                            polygon: false,
                            circle: false,
                            marker: false,
                            circlemarker: false,
                        }}
                    />
                </FeatureGroup>
            </MapContainer>
            {rectangleDrawn && <div style={{ position: "absolute", top: 10, left: 10, background: "white", padding: "5px" }}>Rectangle Drawn!</div>}
        </div>
    );
}
