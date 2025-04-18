import { useState } from "react";
import { ChatPage } from "../components/ChatPage";
import { Toolbar } from "../components/Toolbar";
import "../styles/styles.css";
const leftElements = [
  {
    name: "Home",
    onClick: () => console.log("clicked on problems"),
    to: "/",
  },
  {
    name: "mock test",
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

export default function Mocktest() {
  const [ChatPageVisibility, setChatPageVisibility] = useState(false);
  return (
    <div>
      <Toolbar rightElements={rightElements} leftElements={leftElements} />

      <div
        className="AI-bot-btn"
        onClick={() => setChatPageVisibility(!ChatPageVisibility)}
      ></div>

      <ChatPage
        style={{
          visibility: ChatPageVisibility ? "visible" : "hidden",
          height: "80%",
          width: "50%",
          zIndex: 10, // Make sure it is on top
          position: "absolute", // Positioned above the other element
          top: "10%", // Position it above (you can adjust this)
          left: "26%",
          bottom: "100px", // Center it or adjust to your needs
          transform: "translateX(-50%)",
          borderRadius: "20px",
        }}
      ></ChatPage>
    </div>
  );
}
