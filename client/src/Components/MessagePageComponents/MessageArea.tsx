import Icon from "@mdi/react";
import { mdiAccountCircle } from "@mdi/js";

const MessageArea = (): JSX.Element => {
  return (
    <div className="flex gap-4 items-center p-2">
      <Icon path={mdiAccountCircle} size={2} />
      <div className="flex flex-col">
        <h2>Name of User</h2>
        <p>this is where the message goes</p>
      </div>
    </div>
  );
};

export default MessageArea;
