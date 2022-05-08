const CharCounter = ({ characters }) => {
  let color = "#E8E8E8";
  if (280 - characters <= 0) {
    color = "red";
  } else if (280 - characters <= 55) {
    color = "yellow";
  }
  return (
    <div style={{ color: color, padding: "10px"}}>{280 - characters}</div>
  );
};

export default CharCounter;
