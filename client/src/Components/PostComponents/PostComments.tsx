import Icon from "@mdi/react";
import { mdiAccountCircle } from "@mdi/js";

const PostComments = (): JSX.Element => {
  return (
    <div className="bg-gray-100 w-full p-2">
      <p className="border-b border-slate-200 w-full mb-2">
        This person likes this
      </p>

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
    </div>
  );
};

export default PostComments;
