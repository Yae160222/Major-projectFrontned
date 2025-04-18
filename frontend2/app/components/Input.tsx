import { useState } from "react";

export const Input = (props: any) => {
  const { style = {} } = props;
  const [value, setValue] = useState("");
  const updateValue = (newValue: any) => {
    setValue(newValue);
  };

  const defaultStyle = {
    height: "50px",
    width: "calc(100% - 15px)",
    marginRight: "10px",
    marginLeft: "5px",
    backgroundColor: "white",
    border: "2px solid #ccc",
    borderRadius: "10px",
    padding: "8px",
    fontSize: "16px",
    zIndex: 10,
    position: "relative",
    ...style, // allow passed styles to override defaults
  };
  return (
    <div style={style}>
      <input
        style={defaultStyle}
        value={value}
        onChange={(e) => updateValue(e.target.value)}
      ></input>
    </div>
  );
};
