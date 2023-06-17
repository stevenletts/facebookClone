import MessageArea from "./MessageArea";
import { useState } from "react";

const ChatMain = (): JSX.Element => {
  const [post, setPostText] = useState("");
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
      <div className="flex flex-col h-40 gap-2 p-2">
        <textarea
          onChange={({ target }) => setPostText(target.value)}
          placeholder="what's on your mind?"
          className="bg-slate-200 rounded-lg w-full h-full pl-2 pt-2"
          value={post}
        ></textarea>
        <div className="flex justify-end">
          <button className="bg-green-500 text-white rounded-lg w-16 col-span-3 mr-2 mb-2">
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatMain;
