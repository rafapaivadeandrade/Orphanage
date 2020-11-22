import { useState, useEffect, useContext } from "react";
import mapMarketImg from "../../images/map-marker.svg";
import "../../styles/pages/orphanages-map.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "styled-components";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { PageMap, CreateOrphanage } from "./styles";
import mapIcon from "../../utils/mapIcon";
import api from "../../services/api";
export default function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState([]);
  useEffect(() => {
    api.get("orphanages").then((response) => {
      setOrphanages(response.data);
    });
  }, []);
  const { title } = useContext(ThemeContext);

  return (
    <PageMap>
      <aside className="map">
        <header>
          <img src={mapMarketImg} alt="Orphanage" />
          <h2>Choose an orphanage from the map</h2>
          <p>Many children are waiting for your visit :)</p>
        </header>
        <main>
          <CreateOrphanage to="/orphanages/create" className="create-orphanage">
            <FiPlus size={32} color="#FFF" />
          </CreateOrphanage>
        </main>
        <footer>
          <strong>Recife</strong>
          <span>Pernambuco</span>
        </footer>
      </aside>

      <Map
        center={[-27.2104339, -49.629111]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
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
        {orphanages.map((orphanage) => {
          return (
            <Marker
              position={[orphanage.latitude, orphanage.longitude]}
              icon={mapIcon}
              key={orphanage.id}
            >
              <Popup
                closeButton={false}
                maxWidth={240}
                minWidth={240}
                className="map-popup"
              >
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.orphanage_id}`}>
                  <FiArrowRight size={20} color="#fff" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>
    </PageMap>
  );
}
