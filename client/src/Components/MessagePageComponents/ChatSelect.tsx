import Icon from "@mdi/react";
import { mdiAccountCircle } from "@mdi/js";

const ChatSelect = (): JSX.Element => {
  return (
    <div className="flex gap-4 items-center p-2 cursor-pointer active:bg-blue-400">
      <Icon path={mdiAccountCircle} size={2} />
      <h2>Name of User</h2>
    </div>
  );
};

export default ChatSelect;
