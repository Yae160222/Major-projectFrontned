export const Button = (props: any) => {
  const { text = "", onClick = () => {}, style = {} } = props;
  const defaultStyle = {
    height: "20px",
    width: "40px",
    borderRadius: "5px",
    border: "2px solid black",
    color: "green",
  };
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "rgb(144, 235, 125)",
        borderRadius: "5px",
        border: "2px solid grey",
        margin: "10px",
        padding: "10px",
        ...style,
      }}
    >
      {text}
    </button>
  );
};
