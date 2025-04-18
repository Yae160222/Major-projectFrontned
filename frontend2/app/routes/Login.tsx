import { Toolbar } from "../components/Toolbar";
import { Input } from "../components/Input";
//import { ChatPage } from "../components/ChatPage";
import "../styles/Dashboard.css";
import { useState } from "react";
import { Button } from "~/components/Button";
const leftElements = [
  {
    name: "Home",
    onClick: () => console.log("clicked on problems"),
    to: "/",
  },
  {
    name: "Mock test",
    onClick: () => console.log("clicked on mock interviews"),
    to: "/Mocktest",
  },
  {
    name: "Dashboard",
    onClick: () => console.log("clicked on dashboard"),
    to: "/Dashboard",
  },
];

const rightElements = [
  {
    name: "Log in",
    onClick: () => console.log("clicked on signUp"),
    to: "/Login",
  },
];

export default function Login() {
  const [signIn, setSignIn] = useState(true);
  if (!signIn) {
    return (
      <div>
        <Toolbar rightElements={rightElements} leftElements={leftElements} />
        <div
          className="Card"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            position: "absolute",
            top: "30%",
            left: "30%",
            alignContent: "space-evenly",
            justifyContent: "space-evenly",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <h3> Email</h3>
          <Input
            style={{
              height: "50px",
              width: "calc(100% - 15px)",
              marginRight: "10px",
              marginLeft: "5px",
            }}
          ></Input>
          <h3> Username</h3>
          <Input
            style={{
              height: "50px",
              width: "calc(100% - 15px)",
              marginRight: "10px",
              marginLeft: "5px",
            }}
          ></Input>
          <h3>Password</h3>
          <Input
            style={{
              height: "50px",
              width: "calc(100% - 15px)",
              marginRight: "10px",
              marginLeft: "5px",
            }}
          ></Input>

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Button
              text="signUp"
              style={{ width: "150px" }}
              onClick={() => setSignIn(false)}
            />
            <Button
              text="signIn"
              style={{ width: "150px" }}
              onClick={() => setSignIn(true)}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Toolbar rightElements={rightElements} leftElements={leftElements} />
        <div
          className="Card"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            position: "absolute",
            top: "30%",
            left: "30%",
            alignContent: "space-evenly",
            justifyContent: "space-evenly",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <h3> Username</h3>
          <Input
            style={{
              height: "50px",
              width: "calc(100% - 15px)",
              marginRight: "10px",
              marginLeft: "5px",
            }}
          ></Input>
          <h3>Password</h3>
          <Input
            style={{
              height: "50px",
              width: "calc(100% - 15px)",
              marginRight: "10px",
              marginLeft: "5px",
            }}
          ></Input>

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Button
              text="signUp"
              style={{ width: "150px" }}
              onClick={() => setSignIn(false)}
            />
            <Button
              text="signIn"
              style={{ width: "150px" }}
              onClick={() => setSignIn(true)}
            />
          </div>
        </div>
      </div>
    );
  }
}
