import { useEffect, useState, useContext } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ThemeContext } from "styled-components";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import { useParams } from "react-router-dom";
import mapIcon from "../../utils/mapIcon";
import api from "../../services/api";
import "../../styles/pages/orphanage.css";
import Sidebar from "../../components/Sidebar";
import {
  Container,
  OrphanageDetails,
  Images,
  OrphanageDetailsContent,
  MapContainer,
  OpenDetails,
} from "./styles";
export default function Orphanage() {
  const params = useParams();
  const [orphanages, setOrphanages] = useState([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { title } = useContext(ThemeContext);

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then((response) => {
      console.log(response);
      setOrphanages(response.data);
    });
  }, [params.id]);

  if (!orphanages[0]) {
    return <p>Loading...</p>;
  }
  return (
    <Container>
      <Sidebar />

      <main>
        <OrphanageDetails>
          <img
            src={`http://localhost:3333/uploads/${orphanages[activeImageIndex].path}`}
            alt="Lar das meninas"
          />

          <Images>
            {orphanages.map((orphanage, index) => {
              return (
                <button
                  key={orphanage.id}
                  className={activeImageIndex === index ? "active" : "inactive"}
                  type="button"
                  onClick={() => {
                    setActiveImageIndex(index);
                  }}
                >
                  <img
                    src={`http://localhost:3333/uploads/${orphanage.path}`}
                    alt={orphanage.name}
                  />
                </button>
              );
            })}
          </Images>

          <OrphanageDetailsContent>
            <h1>{orphanages[0].name}</h1>
            <p>{orphanages[0].about}</p>

            <MapContainer>
              <Map
                center={[orphanages[0].latitude, orphanages[0].longitude]}
                zoom={16}
                style={{ width: "100%", height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                {title === "dark" ? (
                  <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                  />
                ) : (
                  <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                  />
                )}
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[orphanages[0].latitude, orphanages[0].longitude]}
                />
              </Map>

              <footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanages[0].latitude},${orphanages[0].longitude}`}
                >
                  See routes on Google Maps
                </a>
              </footer>
            </MapContainer>

            <hr />

            <h2>Visit Instructions</h2>
            <p>{orphanages[0].instructions}</p>

            <OpenDetails>
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                From Monday to Friday <br />
                {orphanages[0].opening_hours}
              </div>
              {orphanages[0].open_on_weekends ? (
                <div className="open-on-weekends">
                  <FiInfo size={32} color="#39CC83" />
                  We open <br />
                  on weekends
                </div>
              ) : (
                <div className="open-on-weekends dont-open">
                  <FiInfo size={32} color="#FF669D" />
                  We do not open <br />
                  on weekends.
                </div>
              )}
            </OpenDetails>

            <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Contact
            </button>
          </OrphanageDetailsContent>
        </OrphanageDetails>
      </main>
    </Container>
  );
}
