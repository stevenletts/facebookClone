import { useAppDispatch } from "../../hooks/useField";
import { useField } from "../../hooks/useField";
import { handleLogin } from "../../reducers/authReducer";

const SignInBar = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const email = useField("email");
  const password = useField("password");

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const hooks = [email, password];
    if ((email.value && password.value) === "") {
      // guest login
      dispatch(handleLogin({ email: "email@email.com", password: "password" }));
      return;
    }
    dispatch(handleLogin({ email: email.value, password: password.value }));
    hooks.forEach((hook) => hook.onReset());
  };

  return (
    <div className="bg-blue-600 fixed w-full top-0 z-[1]">
      <form
        className="flex items-center w-11/12 mx-auto h-10 justify-end gap-2"
        onSubmit={handleSubmit}
      >
        <label className="text-white" htmlFor="signInEmail">
          Email:{" "}
        </label>
        <input {...email} id="signInEmail" className="rounded pl-2" />
        <label className="text-white" htmlFor="signInPassword">
          Password:{" "}
        </label>
        <input id="signInPassword" {...password} className="rounded pl-2" />
        <button
          className="bg-green-500 text-white rounded-lg w-16"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignInBar;
