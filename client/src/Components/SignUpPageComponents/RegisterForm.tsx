import { useAppDispatch, useField } from "../../hooks/useField";
import { handleRegister } from "../../reducers/authReducer";

const RegisterForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const fullName = useField("text");
  const email = useField("email");
  const password = useField("password");
  const birthday = useField("date");

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const values = [fullName, email, password, birthday];
    dispatch(
      handleRegister({
        fullName: fullName.value,
        email: email.value,
        password: password.value,
        birthday: birthday.value,
      })
    );
    values.forEach((hook) => hook.onReset());
  };

  return (
    <>
      <h1>Sign Up!</h1>
      <form
        className="flex flex-col mt-40 mr-40 items-end justify-end gap-4"
        onSubmit={handleSubmit}
      >
        <h1 className="font-bold text-2xl ">Sign Up!</h1>

        <div className="flex gap-4 pl-2">
          <label htmlFor="fullName">Full Name: </label>
          <input
            id="fullName"
            className="rounded w-[36.1rem]"
            required
            {...fullName}
          />
        </div>

        <div className="flex gap-4 pl-2">
          <label htmlFor="registerEmail">Email: </label>
          <input
            id="registerEmail"
            className="rounded w-[36.1rem]"
            required
            {...email}
          />
        </div>

        <div className="flex gap-4 pl-2">
          <label htmlFor="registerPassword">Password: </label>
          <input
            id="registerPassword"
            className="rounded w-[36.1rem]"
            required
            {...password}
            min={3}
          />
        </div>
        <div className="flex gap-4 pl-2">
          <label htmlFor="birthday">Birthday: </label>
          <input
            id="birthday"
            className="rounded w-[36.1rem] pl-2"
            required
            {...birthday}
          />
        </div>
        <button
          className="bg-green-500 text-white rounded-lg w-16"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
