import Icon from "@mdi/react";
import { mdiTrendingUp } from "@mdi/js";

const RightSideBar = (): JSX.Element => {
  return (
    <aside className="flex flex-col m-4 bg-white rounded h-fit">
      <section className="p-2">
        <h1 className="font-bold">Trending</h1>
        <ul>
          <li className="flex">
            <Icon path={mdiTrendingUp} size={1} />
            <p>This is a trending news item</p>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default RightSideBar;
