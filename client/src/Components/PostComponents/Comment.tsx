import Icon from "@mdi/react";
import { mdiAccountCircle } from "@mdi/js";

const Comment = (): JSX.Element => {
  return (
    <div className="mb-2 flex-col">
      <section className="flex gap-2">
        <Icon path={mdiAccountCircle} size={1} />
        <p>User name This is Some Comment</p>
      </section>
      <div className="flex gap-2 pl-1">
        <p className="text-slate-600">some time ago</p>
        <button className="text-blue-600">like</button>
      </div>
    </div>
  );
};

export default Comment;
