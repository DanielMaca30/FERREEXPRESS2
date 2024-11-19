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
        styles: [
          { elementType: 'geometry', stylers: [{ color: '#212121' }] },
          { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
          { elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
          { elementType: 'labels.text.stroke', stylers: [{ color: '#212121' }] },
          { featureType: 'administrative.locality', elementType: 'labels.text.fill', stylers: [{ color: '#9e9e9e' }] },
          { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#9e9e9e' }] },
          { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#181818' }] },
          { featureType: 'poi.park', elementType: 'labels.text.fill', stylers: [{ color: '#616161' }] },
          { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#2c2c2c' }] },
          { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#373737' }] },
          { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#3c3c3c' }] },
          { featureType: 'road.local', elementType: 'geometry', stylers: [{ color: '#3e3e3e' }] },
          { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#2f2f2f' }] },
          { featureType: 'transit.station', elementType: 'labels.text.fill', stylers: [{ color: '#8a8a8a' }] },
          { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#000000' }] },
          { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#3d3d3d' }] }
        ],
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
      <h2 className="puntos-fisicos-title">Puntos físicos</h2>
      <p className="puntos-fisicos-direccion">Dirección: Calle 16 #76-28 Cali-Colombia</p>
      <div ref={mapRef} className="map-container"></div>
    </div>
  );
};

export default PuntosFisicos;
