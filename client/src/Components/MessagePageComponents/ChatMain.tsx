import TextAreaForm from "../TextAreaForm";
import MessageArea from "./MessageArea";
import { useState } from "react";

const ChatMain = (): JSX.Element => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(message);
    setMessage("");
  };
  return (
    <div className="border-2 flex flex-col col-span-2">
      <h1 className="border-b-2 p-4 font-bold">
        These People are in this chat
      </h1>
      <div className="flex flex-col justify-end h-full  overflow-scroll">
        <MessageArea />
        <MessageArea />
        <MessageArea />
      </div>
      <TextAreaForm
        handleSubmit={handleSubmit}
        value={message}
        placeholder="Type reply here"
        setValue={setMessage}
        buttonText="Reply"
      />
    </div>
  );
};

export default ChatMain;
