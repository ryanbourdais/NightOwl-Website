import AppBar from "@mui/material/AppBar";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Logo1 from "../images/Logo1.svg";

export default function NavBar() {
  return (
    <>
      <AppBar
        position="sticky"
        style={{
          backgroundColor: "#012840",
          height: "7vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Link to="/">
            <img
              src={Logo1}
              style={{
                transform: "scale(.5)",
                position: "relative",
                bottom: "9vh",
                right: "10vh",
              }}
              alt="logo"
            />
          </Link>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginLeft: "47vw",
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
        </div>
      </AppBar>
    </>
  );
}
