import { Fade, Slide, Typography } from "@mui/material";
import { useState } from "react";

export default function ItemCardOverlay() {
  const [mouseIn, setMouseIn] = useState(false);
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
      onMouseEnter={() => setMouseIn(true)}
      onMouseLeave={() => setMouseIn(false)}
    >
      <Fade in={mouseIn} timeout={350}>
        <div
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            backgroundColor: `"#025778"`,
          }}
        >
          <Slide direction="down" in={mouseIn} timeout={350}>
            <div
              style={{
                position: "absolute",
                width: "calc(100% - 32px)",
                height: 80,
                backgroundImage: `linear-gradient,#003D3C, #025778 )`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: 16,
                paddingRight: 16,
                zIndex: 1,
              }}
            >
              <Typography
                variant="h4"
                style={{
                  color: "#C9FBFF",
                  fontFamily: "Merienda",
                  fontSize: 42,
                }}
              >
                Owl
              </Typography>
            </div>
          </Slide>
          <Slide direction="up" in={mouseIn} timeout={350}>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                height: 80,
                width: "calc(100% - 96px)",
                backgroundImage: `linear-gradient(to top, #003D3C, #025778  )`,
                paddingLeft: 48,
                paddingRight: 48,
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="body1"
                style={{
                  color: "#C9FBFF",
                  fontFamily: "Roboto",
                }}
              >
                Our game will go here
              </Typography>
            </div>
          </Slide>
        </div>
      </Fade>
    </div>
  );
}
