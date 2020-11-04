import "../styles/pages/landing.css";
import { FiArrowRight } from "react-icons/fi";
import logoImg from "../images/logo.svg";
import { Link } from "react-router-dom";
export default function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="logo" />
        <main>
          <h1>Bring happiness to the world</h1>
          <p>Visit orphanages and change children's day.</p>
        </main>
        <div className="location">
          <strong>Recife</strong>
          <span>Pernambuco</span>
        </div>
        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>
      </div>
    </div>
  );
}
