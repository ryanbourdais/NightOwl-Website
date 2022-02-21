import { Typography } from "@mui/material";
import CenterContent from "../components/CenterContent";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "Night Owl Studios | About Us";
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
              paddingBottom: "7vh",
            }}
          >
            About our team
          </Typography>
          <Typography
            style={{
              color: "#C9FBFF",
              fontFamily: "Roboto",
              fontSize: 30,
            }}
          >
            Ryan Bourdais
          </Typography>
          <Typography
            style={{
              color: "#C9FBFF",
              fontFamily: "Roboto",
              fontSize: 20,
              paddingBottom: 20,
            }}
          >
            Ryan Bourdais is a 5th year senior at LSU. Ryan has a background in
            music, photography, and 2 years of professional developer work. He
            works as our team lead, our web designer, and working hands on as a
            software developer for Night Owl Studio.
          </Typography>
          <Typography
            style={{
              color: "#C9FBFF",
              fontFamily: "Roboto",
              fontSize: 30,
            }}
          >
            Christian Cox
          </Typography>
          <Typography
            style={{
              color: "#C9FBFF",
              fontFamily: "Roboto",
              fontSize: 20,
              paddingBottom: 20,
            }}
          >
            Christian Cox is our Programming lead, as well as working on
            storyboarding for Night Owl Studio.
          </Typography>
          <Typography
            style={{
              color: "#C9FBFF",
              fontFamily: "Roboto",
              fontSize: 30,
            }}
          >
            Danielle Wilcox
          </Typography>
          <Typography
            style={{
              color: "#C9FBFF",
              fontFamily: "Roboto",
              fontSize: 20,
              paddingBottom: 20,
            }}
          >
            Danielle Wilcox is our lead artist and works hands on with level
            design for Night Owl Studio.
          </Typography>
          <Typography
            style={{
              color: "#C9FBFF",
              fontFamily: "Roboto",
              fontSize: 30,
            }}
          >
            Mark Abrahams
          </Typography>
          <Typography
            style={{
              color: "#C9FBFF",
              fontFamily: "Roboto",
              fontSize: 20,
              paddingBottom: 20,
            }}
          >
            Mark Abrahams is the UI/UX design lead and is working hands on with
            Danielle to help develop art for Night Owl Studio.
          </Typography>
          <Typography
            style={{
              color: "#C9FBFF",
              fontFamily: "Roboto",
              fontSize: 30,
            }}
          >
            Victoria Surman
          </Typography>
          <Typography
            style={{
              color: "#C9FBFF",
              fontFamily: "Roboto",
              fontSize: 20,
              paddingBottom: 20,
            }}
          >
            Vitoria Surman has a history of game development, recently she
            helped develop "Home is Where the Hearth is" for the 2019 LSU Game
            Jam. She works as Night Owl Studio's head of level design, as well
            as works on our UI/UX design.
          </Typography>
        </div>
      </CenterContent>
    </>
  );
}
