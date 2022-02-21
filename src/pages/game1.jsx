import { Typography } from "@mui/material";
import CenterContent from "../components/CenterContent";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "Night Owl Studios | Game 1";
  }, []);
  return (
    <>
      <CenterContent>
        <div style={{ backgroundColor: "#025778", height: "100vh" }}>
          <Typography
            variant="h2"
            style={{
              color: "#C9FBFF",
              fontFamily: "Roboto",
            }}
          >
            Game 1
          </Typography>
          <Typography
            style={{
              color: "#C9FBFF",
              fontFamily: "Roboto",
              fontSize: 20,
            }}
          >
            Game 1 is a top down action role-playing game set in the fantastical
            town of [redacted]. You will play a game that follows the journey of
            a man learning just who he is. Immerse yourself in divergent stories
            that tell a different tale with every playthrough.
          </Typography>
        </div>
      </CenterContent>
    </>
  );
}
