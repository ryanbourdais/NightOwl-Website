export default function CenterContent(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        position: "relative",
        bottom: "2.1vh",
        height: "130vh",
      }}
    >
      <div
        style={{
          flexGrow: 1,
          backgroundImage: `linear-gradient(to right, #003D3C, #025778)`,
        }}
      />
      <div
        style={{
          width: "70%",
          backgroundColor: "#025778",
          padding: 16,
          paddingLeft: 32,
          paddingRight: 32,
          paddingBottom: 80,
        }}
      >
        {props.children}
      </div>
      <div
        style={{
          flexGrow: 1,
          backgroundImage: `linear-gradient(to left, #003D3C, #025778)`,
        }}
      />
    </div>
  );
}
