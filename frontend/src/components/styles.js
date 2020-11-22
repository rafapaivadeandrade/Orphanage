import styled from "styled-components";

export const Aside = styled.aside`
  position: fixed;
  height: 100%;
  padding: 32px 24px;
  background: ${(props) => props.theme.colors.backgroundLanding};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  div.sidebar img {
    width: 48px;
    animation: myImage 2s linear infinite alternate;

    @keyframes myImage {
      0% {
        margin-top: 0;
      }
      10% {
        margin-top: 72.72px;
      }
      20% {
        margin-top: 145.44px;
      }
      30% {
        margin-top: 218.16px;
      }
      40% {
        margin-top: 290.88px;
      }
      50% {
        margin-top: 363.6px;
      }
      60% {
        margin-top: 436.32px;
      }
      70% {
        margin-top: 509.04px;
      }
      80% {
        margin-top: 581.76px;
      }
      85% {
        margin-top: 654.48px;
      }
      90% {
        margin-top: 727.204px;
      }
      100% {
        margin-top: 800px;
      }
    }
  }

  footer a,
  footer button {
    width: 48px;
    height: 48px;

    border: 0;

    background: #12afcb;
    border-radius: 16px;

    cursor: pointer;

    transition: background-color 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;
    animation: scaleButton 1s infinite alternate;
    @keyframes scaleButton {
      from {
        transform: scale(1.5);
      }
      to {
        transform: scale(1);
      }
    }
    svg {
      color: ${(props) => props.theme.colors.color};
    }
  }

  footer a:hover,
  footer button:hover {
    background: #17d6eb;
  }
`;
