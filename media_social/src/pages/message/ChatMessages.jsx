import React from "react";
import { useSelector } from "react-redux";

const ChatMessages = ({ message }) => {
  const isImage = message.image ? true : false;
  const { auth } = useSelector((store) => store);
  const isCurrentUser = message.user.id === auth.user.id;

  return (
    <div
      className={`flex ${isCurrentUser ? "justify-end" : "justify-start"} mb-2`}
    >
      <div
        className={`p-1 ${
          isImage ? "rounded-md" : "px-5 rounded-full"
        } bg-[#a7b2e0] max-w-xs md:max-w-md lg:max-w-lg`}
      >
        {isImage && (
          <img
            src={message.image}
            alt=""
            className="h-[17rem] w-[15rem] object-cover rounded-md"
          />
        )}
        <p
          className={`${isImage ? "py-2" : "py-1"} ${
            isCurrentUser ? "text-right" : "text-left"
          }`}
        >
          {message.message}
        </p>
      </div>
    </div>
  );
};

export default ChatMessages;
