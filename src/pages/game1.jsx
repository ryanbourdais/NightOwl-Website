import { Typography } from "@mui/material";
import CenterContent from "../components/CenterContent";
import { useEffect } from "react";
import SplashBanner from "../components/splashBanner";

export default function About() {
  useEffect(() => {
    document.title = "Night Owl Studios | Game 1";
  }, []);

  return (
    <>
      <SplashBanner />
      <CenterContent>
        <div style={{ backgroundColor: "#025778", height: "100vh" }}>
          <Typography
            variant="h2"
            style={{
              color: "#C9FBFF",
              fontFamily: "Roboto",
            }}
          >
            Mirrored
          </Typography>
          <Typography
            style={{
              color: "#C9FBFF",
              fontFamily: "Roboto",
              fontSize: 20,
            }}
          >
            Mirrored is a top down action role-playing game set in a fantastical
            universe. You will play a game that follows the journey of a man
            learning just who he is. Immerse yourself in divergent stories that
            tell a different tale with every playthrough.
          </Typography>
        </div>
      </CenterContent>
    </>
  );
}
