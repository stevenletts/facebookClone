import ChatMain from "../Components/MessagePageComponents/ChatMain";
import MessageSideBar from "../Components/MessagePageComponents/MessageSideBar";

const Messages = (): JSX.Element => {
  return (
    <div className="md:w-8/12 mx-auto bg-white mt-10 ">
      <div className="grid grid-cols-3 mt-10 h-[94.5vh]">
        <MessageSideBar />

        <ChatMain />
      </div>
    </div>
  );
};

export default Messages;
