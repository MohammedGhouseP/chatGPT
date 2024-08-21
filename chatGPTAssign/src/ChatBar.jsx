import React, { useState } from "react";
import { sendMessage, sendFile } from "./assets/openai.js";
import "./ChatBar.css";

const ChatBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectFile, setSelectFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [message, setMessage] = useState([
    {
      text: "Hi, I am ChatGPT. How can I help you?",
      isBot: true,
    },
  ]);

  const handleSend = async () => {
    if (inputValue.trim()) {
      // Add user's message to the chat
      setMessage([...message, { text: inputValue, isBot: false }]);

      try {
        const res = await sendMessage(inputValue);

        // Add ChatGPT's response to the chat
        setMessage((prevMessages) => [
          ...prevMessages,
          { text: res, isBot: true },
        ]);
      } catch (error) {
        console.error("Error sending message:", error);
      }

      // Clear the input field
      setInputValue("");
    }
  };

  const handleFileUpload = async () => {
    if (selectFile) {
      setMessage([...message, { text: "Uploading file...", isBot: false }]);

      try {
        const res = await sendFile(selectFile); // Assuming sendFile sends the file and returns a response

        // Add ChatGPT's response to the chat
        setMessage((prevMessages) => [
          ...prevMessages,
          { text: res, isBot: true },
        ]);
      } catch (error) {
        console.error("Error uploading file:", error);
      }

      // Clear the file selection and preview
      setSelectFile(null);
      setImagePreview(null);
    } else {
      console.log("Please select a file");
    }
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setSelectFile(file);
    setImagePreview(URL.createObjectURL(file)); // Generate image preview URL
    console.log("File selected:", file);
  };

  return (
    <div className="center">
      <div className="vstack">
        <img className="image" src="link of image" alt="ChatGPT Image" />

        <div className="vstack">
          <div className="chat-container">
            {message.map((messages, i) => (
              <div
                key={i}
                className={`message-bubble ${messages.isBot ? 'bot-message' : 'user-message'}`}
              >
                {messages.text}
              </div>
            ))}
            
            {/* {imagePreview && (    // Add image preview on chat screen
              <div className="image-preview-container">
                <img className="image-preview" src={imagePreview} alt="Selected Upload" />
              </div>
            )} */}
          </div>
        </div>

        <div className="form-container">
          <div className="hstack">
            <form action="" onSubmit={(e) => { e.preventDefault(); handleFileUpload(); }}>
              <input
                className="file-input"
                type="file"
                onChange={handleUpload}
              />
              <input
                className="input"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Message ChatGPT"
              />
              <img
                className="icon"
                src="https://img.icons8.com/?size=100&id=93339&format=png&color=000000"
                alt="Send Icon"
                onClick={handleSend}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
