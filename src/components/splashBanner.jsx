import Banner from "../images/TextBanner.png";

export default function splashBanner() {
  return (
    <img
      src={Banner}
      style={{ backgroungColor: "#025778", width: "99.1vw", height: "40vh" }}
      alt="banner"
    />
  );
}
