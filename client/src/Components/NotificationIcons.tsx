import Icon from "@mdi/react";
import { mdiAccountMultiplePlus, mdiBell, mdiMessageBadge } from "@mdi/js";

const NotificationIcons = (): JSX.Element => {
  const size = 1.25;
  return (
    <>
      <Icon path={mdiAccountMultiplePlus} size={size} />
      <Icon path={mdiBell} size={size} />
      <Icon path={mdiMessageBadge} size={size} />
    </>
  );
};

export default NotificationIcons;
