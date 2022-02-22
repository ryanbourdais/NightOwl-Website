import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div
        position="sticky"
        style={{
          backgroundColor: "#012840",
          height: "7vh",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              style={{
                color: "#C9FBFF",
                backgroundColor: "transparent",
                padding: 15,
                paddingLeft: 30,
                paddingRight: 30,
                fontFamily: "Roboto",
                fontSize: 20,
              }}
            >
              Home
            </Button>
          </Link>

          <Link to="/about" style={{ textDecoration: "none" }}>
            <Button
              style={{
                color: "#C9FBFF",
                backgroundColor: "transparent",
                padding: 15,
                paddingLeft: 30,
                paddingRight: 30,
                fontFamily: "Roboto",
                fontSize: 20,
              }}
            >
              About us
            </Button>
          </Link>
          {/* <Link to="/about" style={{ textDecoration: "none" }}>
            <Button
              style={{
                color: "#C9FBFF",
                backgroundColor: "transparent",
                padding: 15,
                paddingLeft: 30,
                paddingRight: 30,
                fontFamily: "Roboto",
                fontSize: 20,
              }}
            >
              Games
            </Button>
          </Link> */}
          <Link to="/blog" style={{ textDecoration: "none" }}>
            <Button
              style={{
                color: "#C9FBFF",
                backgroundColor: "transparent",
                paddingLeft: 30,
                paddingRight: 30,
                padding: 15,
                fontFamily: "Roboto",
                fontSize: 20,
              }}
            >
              Blog
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
