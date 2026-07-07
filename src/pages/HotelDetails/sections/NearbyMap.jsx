import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function NearbyMap({ hotel }) {
  return (
    <section className="rounded-3xl border bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-3xl font-bold">
        Location & Nearby Places
      </h2>

      <div className="overflow-hidden rounded-2xl">

        <MapContainer
          center={[
            hotel.coordinates.lat,
            hotel.coordinates.lng,
          ]}
          zoom={14}
          scrollWheelZoom={false}
          style={{
            height: "400px",
            width: "100%",
          }}
        >

          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker
            position={[
              hotel.coordinates.lat,
              hotel.coordinates.lng,
            ]}
          >
            <Popup>
              {hotel.name}
            </Popup>
          </Marker>

        </MapContainer>

      </div>

      <div className="mt-8">

        <h3 className="mb-4 text-xl font-semibold">
          Nearby Places
        </h3>

        <div className="space-y-4">

          {hotel.nearby.map((place) => (
            <div
              key={place.name}
              className="flex items-center justify-between rounded-xl border p-4"
            >
              <span>{place.name}</span>

              <span className="font-semibold text-blue-600">
                {place.distance}
              </span>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default NearbyMap;