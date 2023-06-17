import Icon from "@mdi/react";
import { mdiAccountMultiplePlus, mdiMessageBadge } from "@mdi/js";
import { Link } from "react-router-dom";

const NotificationIcons = (): JSX.Element => {
  const size = 1.25;
  return (
    <>
      {/* friend requests modal here */}
      <Icon path={mdiAccountMultiplePlus} size={size} />

      <Link to="/messages">
        <Icon path={mdiMessageBadge} size={size} />
      </Link>
    </>
  );
};

export default NotificationIcons;
