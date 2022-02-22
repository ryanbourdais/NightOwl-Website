import { Typography } from "@mui/material";
import CenterContent from "../components/CenterContent";
import Game from "../components/game";
import { useEffect } from "react";
import SplashBanner from "../components/splashBanner";

export default function Home() {
  useEffect(() => {
    document.title = "Night Owl Studios";
  }, []);
  return (
    <>
      <SplashBanner />
      <CenterContent>
        <div
          style={{
            backgroundColor: "#025778",
            height: "100vh",
          }}
        >
          <Typography
            variant="h2"
            style={{
              color: "#C9FBFF",
              fontFamily: "Roboto",
            }}
          >
            Games
          </Typography>
          <Game />
          <Typography
            variant="h2"
            style={{
              color: "#C9FBFF",
              fontFamily: "Roboto",
              paddingTop: 50,
            }}
          >
            Latest News
          </Typography>
          <Typography
            style={{
              color: "#C9FBFF",
              paddingTop: 25,
              fontFamily: "Roboto",
              fontSize: 15,
            }}
          >
            February 20, 2022
          </Typography>
          <Typography
            style={{
              color: "#C9FBFF",
              fontFamily: "Roboto",
              fontSize: 60,
            }}
          >
            Development Started!
          </Typography>
          <Typography
            style={{
              color: "#C9FBFF",
              fontFamily: "Roboto",
              letterSpacing: 2,
              fontSize: 30,
            }}
          >
            Today marks the end of our first milestone in the development of our
            first game! [Redacted] is going to be a top-down action role-playing
            game based in the fantastical town of [Redacted]. Stay tuned for
            art, demos, and more to come. We are excited for the development
            cycle of this game and cannot wait to show what we can do.
          </Typography>
        </div>
      </CenterContent>
    </>
  );
}
