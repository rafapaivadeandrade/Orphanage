import "../../styles/pages/landing.css";
import { FiArrowRight } from "react-icons/fi";
import { PageLanding, ContentWrapper, Location, EnterApp } from "./styles";

import logoImg from "../../images/logo.svg";
export default function Landing() {
  return (
    <PageLanding>
      <ContentWrapper>
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Bring happiness to the world</h1>
          <p>Visit orphanages and change children's day.</p>
        </main>

        <Location>
          <strong>Recife</strong>
          <span>Pernambuco</span>
        </Location>
        <EnterApp to="/app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </EnterApp>
      </ContentWrapper>
    </PageLanding>
  );
}
