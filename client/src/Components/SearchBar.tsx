import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import { useState } from "react";

const SearchBar = (): JSX.Element => {
  const [search, setSearch] = useState<string>("");

  const handleSearch = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    console.log(search);
    setSearch("");
  };

  return (
    <form className="w-9/12 flex" onSubmit={handleSearch}>
      <label className="absolute left-[10000px] hidden">Search Bar</label>
      <input
        className="bg-white w-full pl-2 "
        onChange={({ target }) => setSearch(target.value)}
        type="text"
        value={search}
      ></input>
      <button className="-ml-6" type="submit">
        <Icon path={mdiMagnify} size={1} />
      </button>
    </form>
  );
};

export default SearchBar;
