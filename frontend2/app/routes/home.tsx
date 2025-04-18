import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { NavLink } from "react-router";
import { Toolbar } from "../components/Toolbar";
import { Input } from "~/components/Input";
import "../styles/styles.css";
import { Button } from "~/components/Button";
import { ChatPage } from "../components/ChatPage";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

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
  {
    name: "test",
    onClick: () => console.log("clicked on dashboard"),
    to: "/test",
  },
];

const rightElements = [
  {
    name: "Log in",
    onClick: () => console.log("clicked on signUp"),
    to: "/Login",
  },
];

export default function Home() {
  const [ChatPageVisibility, setChatPageVisibility] = useState(false);
  const [AppPostVisibility, setAppPostVisibility] = useState(false);
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "burlywood",
        height: "100%",
      }}
    >
      <Toolbar rightElements={rightElements} leftElements={leftElements} />
      <Welcome />
      <div
        className="AI-bot-btn"
        onClick={() => setChatPageVisibility(!ChatPageVisibility)}
      ></div>

      <div
        className="AddPostButton"
        onClick={() => setAppPostVisibility(!AppPostVisibility)}
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

      <div
        className="Card"
        style={{
          visibility: AppPostVisibility ? "visible" : "hidden",
          height: "80%",
          width: "50%",
          zIndex: 10, // Make sure it is on top
          position: "absolute", // Positioned above the other element
          top: "10%", // Position it above (you can adjust this)
          left: "50%",
          bottom: "100px", // Center it or adjust to your needs
          transform: "translateX(-50%)",
          borderRadius: "20px",
        }}
      >
        <h3>Company</h3>
        <Input></Input>
        <h3>Question</h3>
        <Input></Input>
        <h3>Tag</h3>
        <Input></Input>

        <h3>Stage</h3>
        <Input></Input>

        <h3>Subject</h3>
        <Input></Input>

        <Button
          text="Submit "
          style={{ width: "200px" }}
          onClick={async () => {
            await fetch(`http//:localhost:8080/student/new-post/save`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                company: "Modak",
                stage: "Interview",
                tage: "Technical",
                subject: "sql",
                question: "How to remove duplicates ?",
              }),
            });
          }}
        ></Button>
      </div>
    </div>
  );
}
