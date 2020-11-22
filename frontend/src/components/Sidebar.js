import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { Aside } from "./styles";
import mapMarkerImg from "../images/map-marker.svg";

import "../styles/components/sidebar.css";

export default function Sidebar() {
  const { goBack } = useHistory();

  return (
    <Aside>
      <div className="sidebar">
        <img src={mapMarkerImg} alt="Happy" />
      </div>

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} />
        </button>
      </footer>
    </Aside>
  );
}
