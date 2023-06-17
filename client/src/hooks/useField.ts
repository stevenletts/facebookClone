import { ChangeEvent, useState } from "react";

export const useField = (type: string) => {
  // can add a second param to set value?
  const [value, setValue] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const onReset = () => {
    setValue("");
  };

  return {
    type,
    value,
    onChange,
    onReset,
  };
};
