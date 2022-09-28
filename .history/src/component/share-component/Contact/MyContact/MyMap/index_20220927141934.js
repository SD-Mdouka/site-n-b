import React, { useEffect } from "react";
// import "./myMap.css";
import L from "leaflet";

function MyMap() {
  let mapContainer;

  useEffect(() => {
    const initialState = {
      lng: 11,
      lat: 49,
      zoom: 4,
    };

    const map = L.map(mapContainer).setView(
      [initialState.lat, initialState.lng],
      initialState.zoom
    );

    var myAPIKey = "64c38751d0ed4e3b86fdb94d0e3865a6";

    var isRetina = L.Browser.retina;
    var baseUrl =
      "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey={apiKey}";
    var retinaUrl =
      "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey={apiKey}";

    L.tileLayer(isRetina ? retinaUrl : baseUrl, {
      attribution:
        'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>',
      apiKey: myAPIKey,
      maxZoom: 20,
      id: "osm-bright",
    }).addTo(map);
  }, [mapContainer]);

  return (
    <div className="map-container" ref={(el) => (mapContainer = el)}></div>
  );
}

export default MyMap;
