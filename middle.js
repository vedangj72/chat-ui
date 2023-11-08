import React, { useState, useEffect } from "react";
import useCallData from "../hooks/usecalldata";
import "../components/middle.css";

export default function Middle() {
  const [chats, setChats] = useState([]);
  const { data, loading, error } = useCallData(
    "https://qa.corider.in/assignment/chat?page=0"
  );

  useEffect(() => {
    if (data && data.chats) {
      setChats(data.chats);
    }
  }, [data]);

  return (
    <div className="container">
      {chats.map((chat) => {
        if (chat.sender.self) {
          return (
            <div key={chat.id} className="self">
              <p>{chat.message}</p>
              {/* <img src={chat.sender.image} /> */}
            </div>
          );
        } else {
          return (
            <div key={chat.id} className="other">
              <img src={chat.sender.image} className="image" alt="chatimg" />
              <p>{chat.message}</p>
            </div>
          );
        }
      })}
    </div>
  );
}
