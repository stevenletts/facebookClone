import SearchBar from "../NavComponents/SearchBar";
import ChatSelect from "./ChatSelect";

const MessageSideBar = (): JSX.Element => {
  return (
    <div className="border-2 flex flex-col overflow-scroll">
      <h1 className="border-b-2 p-4 font-bold">Inbox (2)</h1>
      <div className="border-b-2 p-4">
        <SearchBar />
        {/* maybe delete this */}
      </div>
      <ChatSelect />
      <ChatSelect />
      <ChatSelect />
      <ChatSelect />
      <ChatSelect />
      <ChatSelect />
      <ChatSelect />
      <ChatSelect />
      <ChatSelect />

      <ChatSelect />
      <ChatSelect />
      <ChatSelect />
    </div>
  );
};

export default MessageSideBar;
