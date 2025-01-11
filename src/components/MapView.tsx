import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { IBusiness } from "@/data/type";
import { Stack } from "./Stack";

interface Business {
  id: number;
  name: string;
  address: string;
  cost: string;
  location: { lat: number; lng: number };
}

interface MapViewProps {
  businesses: Business[];
  setFilteredBusinesses: React.Dispatch<React.SetStateAction<IBusiness[]>>;
  sx?: React.CSSProperties;
}

const MapBoundsListener = ({
  mapRef,
  setFilteredBusinesses,
  businesses,
}: {
  mapRef: React.RefObject<L.Map>;
  setFilteredBusinesses: React.Dispatch<React.SetStateAction<IBusiness[]>>;
  businesses: IBusiness[];
}) => {
  const map = useMap();
  useEffect(() => {
    const updateFilteredBusinesses = () => {
      if (mapRef.current) {
        const bounds = map.getBounds();
        const visibleBusinesses = businesses.filter((business) => {
          return bounds.contains([
            business.location.lat,
            business.location.lng,
          ]);
        });
        setFilteredBusinesses(visibleBusinesses);
      }
    };

    map.on("moveend", updateFilteredBusinesses); // Trigger on map move
    updateFilteredBusinesses(); // Initial call to set businesses

    return () => {
      map.off("moveend", updateFilteredBusinesses);
    };
  }, [map]);

  return null;
};

const MapView: React.FC<MapViewProps> = ({
  businesses,
  setFilteredBusinesses,
  sx,
}) => {
  const mapRef = useRef<L.Map>(null);
  const markerIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/484/484167.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <Stack
      sx={{
        border: "1px solid red",
        width: "100%",
        height: "80vh",
        ...sx,
      }}
    >
      <MapContainer
        center={[-23.5505, -46.6333]}
        zoom={17}
        style={{ height: "100%", width: "100%" }}
        ref={mapRef}
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapBoundsListener
          key={"MapBoundsListener"}
          mapRef={mapRef}
          setFilteredBusinesses={setFilteredBusinesses}
          businesses={businesses}
        />
        {businesses.map((business) => (
          <Marker
            key={business.id}
            position={business.location}
            icon={markerIcon}
          >
            <Popup>
              <h3>{business.name}</h3>
              <p>{business.address}</p>
              <p>Cost: {business.cost}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Stack>
  );
};

export default MapView;
