import "./Map.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <>
      <div className="mapContainer">
        <div className="mapTitle">
          <h2>Our Location</h2>
        </div>
        <div className="mapView">
          <MapContainer
            center={[33.508905, 36.302493]}
            zoom={17}
            scrollWheelZoom={false}
            style={{ height: "500px", width: "100%" }}
            attributionControl={false}
          >
            <TileLayer
              attribution="&copy; CartoDB"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[33.508905, 36.302493]}>
              <Popup>
                AlFarra Cargo <br /> Near Al Andalus Hotel
              </Popup>
            </Marker>
          </MapContainer>{" "}
        </div>
      </div>
    </>
  );
};

export default Map;
