import "./ToolBar.css";
import { NavLink } from "react-router";

export const Toolbar = (props: any) => {
  return (
    <div className="TopBar">
      {/* Left Elements (aligned to left) */}
      <div className="left-elements">
        {props.leftElements.map((element: any, index: any) => (
          <Element key={index} data={element} />
        ))}
      </div>

      {/* Right Elements (aligned to right) */}
      <div className="right-elements">
        <nav>
          {props.rightElements.map((element: any, index: number) => (
            <Element key={index} data={element} />
          ))}
        </nav>
      </div>
    </div>
  );
};

const Element = (props: any) => {
  return (
    <NavLink to={props.data.to}>
      <div
        className="TopBarElement"
        //onClick={props.data.onClick}
        style={props.style}
      >
        {" "}
        {props.data.name}{" "}
      </div>
    </NavLink>
  );
};
