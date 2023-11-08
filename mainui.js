import React, { useState, useEffect } from "react";
import useCallData from "../hooks/usecalldata";
import Middle from "../components/middle";
import "../components/mainui.css";
import Dpimg from "../components/dp.jpg";

export default function Main() {
  const [showOptions, setShowOptions] = useState(false);
  const [showAttachments, setShowAttachments] = useState(false);
  const { data, loading, error } = useCallData(
    "https://qa.corider.in/assignment/chat?page=0"
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Something went wrong</h1>;
  }

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const showOptionsOnHover = () => {
    setShowOptions(true);
  };

  const hideOptionsOnHover = () => {
    setShowOptions(false);
  };

  const showAttachmentsOnHover = () => {
    setShowAttachments(true);
  };

  const hideAttachmentsOnHover = () => {
    setShowAttachments(false);
  };

  return (
    <div className="container-fluid" style={{ position: "absolute" }}>
      <header className="container text-start" style={{ position: "relative" }}>
        <h1 style={{ display: "inline" }}>
          <span className="bi bi-arrow-left-short"></span> Trip1
        </h1>
        <span
          className="bi bi-three-dots-vertical"
          style={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
          onClick={toggleOptions}
        >
          {showOptions && (
            <div
              style={{
                position: "fixed",
                top: 0,
                right: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: "10px",
                border: "1px solid black",
                backgroundColor: "white",
                width: "300px",
              }}
            >
              <p>
                <span className="bi bi-people-fill m-3"></span>Members
              </p>
              <hr />
              <p>
                <span className="bi bi-telephone-fill m-3"></span>Share Numbers
              </p>
              <hr />
              <p>
                <span className="bi bi-backspace-fill m-3"></span>Report
              </p>
            </div>
          )}
        </span>
        <div className="m-2 col d-flex p-3 ">
          {data && (
            <>
              <img src={Dpimg} className="img p" alt="profile" />{" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "5px",
                }}
              >
                <p className="m-0">
                  From:{" "}
                  <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                    {data.from}
                  </span>
                </p>
                <p className="m-0">
                  To:{" "}
                  <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                    {data.to}
                  </span>
                </p>
              </div>
            </>
          )}
        </div>

        <hr />
      </header>
      <main>
        <Middle />
      </main>
      <div className="container">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Type your message..."
          />
          <div className="input-group-append">
            <div
              className="btn-group"
              onMouseEnter={showAttachmentsOnHover}
              onMouseLeave={hideAttachmentsOnHover}
            >
              <button
                className="btn btn-outline-secondary bi bi-paperclip"
                type="button"
              ></button>
              {showAttachments && (
                <div
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "0",
                    display: "flex",
                    borderRadius: "10px",
                    border: "1px solid black",
                    // backgroundColor: "light-green",
                    width: "150px",
                  }}
                  className="attachment"
                >
                  <p className="m-3">
                    <span className="bi bi-camera"></span>
                  </p>
                  <p className="m-3">
                    <span className="bi bi-telephone-fill"></span>
                  </p>
                  <p className="m-3">
                    <span className="bi bi-file-earmark-text"></span>
                  </p>
                </div>
              )}
            </div>
            <button
              className="btn btn-outline-secondary bi bi-telegram"
              type="button"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
