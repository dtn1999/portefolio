import React from "react";
import { Navbar, Header } from "../components";
import { Particles } from "@blackbox-vision/react-particles";

export const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Particles
        id="simple"
        width="auto"
        height="100vh"
        style={{
          backgroundColor: "#222",
          opacity: 0.3,
        }}
        params={{
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0.5,
              },
            },
            size: {
              value: 8,
              random: true,
              animation: {
                enable: true,
                speed: 6,
                size_min: 0.1,
                sync: true,
              },
            },
            opacity: {
              value: 1,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: true,
              },
            },
          },
        }}
      />
    </React.Fragment>
  );
};
