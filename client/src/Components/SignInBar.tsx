import { useState } from "react";

const SignInBar = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="bg-blue-600 fixed w-full top-0 z-[1]">
      <form className="flex items-center w-11/12 mx-auto h-10 justify-end gap-2">
        <label className="text-white">Email: </label>
        <input
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          className="rounded pl-2"
        />
        <label className="text-white">Password: </label>
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          className="rounded pl-2"
        />
        <button className="bg-green-500 text-white rounded-lg w-16">
          Login
        </button>
      </form>
    </div>
  );
};

export default SignInBar;
