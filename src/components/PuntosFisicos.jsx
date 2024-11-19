import React, { useEffect, useRef } from "react";
import "../styles/PuntosFisicos.css";

const PuntosFisicos = () => {
  const mapRef = useRef(null);

  const coordinates = { lat: 3.388925853565718, lng: -76.52852705610107 };

  useEffect(() => {
    // Carga el mapa utilizando Google Maps JavaScript API
    const loadMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: coordinates,
        zoom: 16,
      });

      // Agrega un marcador en las coordenadas proporcionadas
      new window.google.maps.Marker({
        position: coordinates,
        map,
        title: "Ubicación seleccionada",
      });
    };

    // Verifica si la API de Google Maps ya está cargada
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBPJPZ7cRZ5-ancrkraf6iQ_dfo0NXLUuA`;
      script.async = true;
      script.defer = true;
      script.onload = loadMap;
      document.body.appendChild(script);
    } else {
      loadMap();
    }
  }, [coordinates]);

  return (
    <div className="puntos-fisicos-container">
      <h2 className="puntos-fisicos-title">Puntos físicos<p>Direccion: Calle 16 #76-28 Cali-Colombia</p></h2>
      <div ref={mapRef} className="map-container"></div>
    </div>
  );
};

export default PuntosFisicos;
