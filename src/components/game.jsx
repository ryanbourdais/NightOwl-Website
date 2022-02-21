import { Card } from "@mui/material";
import ItemCardOverlay from "./ItemCardOverlay";

export default function game() {
  return (
    <Card
      style={{
        width: 550,
        height: 350,
        backgroundColor: "black",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <a href="/game1" style={{ textDecoration: "none" }}>
        <img
          src="https://cdn.dribbble.com/users/1309677/screenshots/11552154/media/66bcac1c19c4faff507966feda88aa16.png"
          alt="game"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

        <ItemCardOverlay />
      </a>
    </Card>
  );
}
