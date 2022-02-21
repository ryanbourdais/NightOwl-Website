import AppBar from "@mui/material/AppBar";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <AppBar
        position="sticky"
        style={{
          backgroundColor: "#012840",
          height: "7vh",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Typography
            style={{
              color: "#C9FBFF",
              backgroundColor: "transparent",
              padding: 15,
              fontFamily: "Roboto",
              fontSize: 20,
            }}
          >
            |
          </Typography>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              style={{
                color: "#C9FBFF",
                backgroundColor: "transparent",
                padding: 15,
                fontFamily: "Roboto",
                fontSize: 20,
              }}
            >
              Home
            </Button>
          </Link>
          <Typography
            style={{
              color: "#C9FBFF",
              backgroundColor: "transparent",
              padding: 15,
              fontFamily: "Roboto",
              fontSize: 20,
            }}
          >
            |
          </Typography>
          <Link to="/games" style={{ textDecoration: "none" }}>
            <Button
              style={{
                color: "#C9FBFF",
                backgroundColor: "transparent",
                padding: 15,
                fontFamily: "Roboto",
                fontSize: 20,
              }}
            >
              Games
            </Button>
          </Link>
          <Typography
            style={{
              color: "#C9FBFF",
              backgroundColor: "transparent",
              padding: 15,
              fontFamily: "Roboto",
              fontSize: 20,
            }}
          >
            |
          </Typography>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Button
              style={{
                color: "#C9FBFF",
                backgroundColor: "transparent",
                padding: 15,
                fontFamily: "Roboto",
                fontSize: 20,
              }}
            >
              About Us
            </Button>
          </Link>
          <Typography
            style={{
              color: "#C9FBFF",
              backgroundColor: "transparent",
              padding: 15,
              fontFamily: "Roboto",
              fontSize: 20,
            }}
          >
            |
          </Typography>
          <Link to="/blog" style={{ textDecoration: "none" }}>
            <Button
              style={{
                color: "#C9FBFF",
                backgroundColor: "transparent",
                padding: 15,
                fontFamily: "Roboto",
                fontSize: 20,
              }}
            >
              Blog
            </Button>
          </Link>
          <Typography
            style={{
              color: "#C9FBFF",
              backgroundColor: "transparent",
              padding: 15,
              fontFamily: "Roboto",
              fontSize: 20,
            }}
          >
            |
          </Typography>
        </div>
      </AppBar>
    </>
  );
}
