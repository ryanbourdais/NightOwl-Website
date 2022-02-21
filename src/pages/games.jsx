import { Typography } from "@mui/material";
import CenterContent from "../components/CenterContent";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "Night Owl Studios | Games";
  }, []);
  return (
    <>
      <CenterContent>
        <div style={{ backgroundColor: "#025778", height: "100vh" }}>
          <Typography
            style={{
              color: "#C9FBFF",

              fontFamily: "Roboto",
              fontSize: 20,
            }}
          >
            Here's where we'd put our games IF WE HAD THEM
          </Typography>
        </div>
      </CenterContent>
    </>
  );
}
