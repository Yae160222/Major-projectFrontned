import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Markdown from "react-markdown";
import MarkdownRenderer from "./assets/MarkdownRenderer";
import "./ChatPage.css";

export const ChatPage = (props) => {
  const { style = {} } = props;
  const [chatList, setChatList] = useState([
    {
      sender: "BOT",
      message: "Hello How can I help you",
    },
  ]);

  const genAI = new GoogleGenerativeAI(
    "AIzaSyCA9wE5OiJknHGqywaJQldDEnikPrBXwDg"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const getResponse = async (prompt) => {
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    console.log(responseText);
    return responseText;
  };

  const updateChatList = async (newChat) => {
    if (newChat === "") return;
    setChatList([...chatList, newChat]);
    const response = await getResponse(newChat.message);
    setChatList((prevChatList) => [
      ...prevChatList,
      {
        sender: "BOT",
        message: response,
      },
    ]);
  };
  return (
    <div className="ChatPage" style={style}>
      <ChatWindow chatList={chatList}></ChatWindow>
      <TextArea updateChatList={updateChatList}></TextArea>
    </div>
  );
};

const ChatWindow = (props) => {
  return (
    <div className="ChatWindow">
      {props.chatList.map((message, index) => (
        <Message key={index} data={message}></Message>
      ))}
    </div>
  );
};

const Message = (props) => {
  if (props.data.sender === "BOT") {
    return (
      <div className="BotMessage">
        <MarkdownRenderer content={props.data.message}>
          {props.data.message}
        </MarkdownRenderer>
      </div>
    );
  } else {
    return (
      <div className="UserMessage">
        <MarkdownRenderer content={props.data.message}>
          {props.data.message}
        </MarkdownRenderer>
      </div>
    );
  }
};

const TextArea = (props) => {
  const [input, setInput] = useState("");
  return (
    <div className="TextArea">
      <input
        className="input"
        placeholder="Enter question"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button
        className="sendButton"
        onClick={async () => {
          const inputCopy = input;
          setInput("");
          await props.updateChatList({
            sender: "USER",
            message: inputCopy,
          });
        }}
      >
        {" "}
        SEND{" "}
      </button>
    </div>
  );
};
