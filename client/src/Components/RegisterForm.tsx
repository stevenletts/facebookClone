const RegisterForm = (): JSX.Element => {
  return (
    <>
      <h1>Sign Up!</h1>
      <form className="flex flex-col mt-40 mr-40 items-end justify-end gap-4 ">
        <h1 className="font-bold text-2xl pr-[49%]">Sign Up!</h1>
        <div className="flex gap-4 pl-2 ">
          <label>First Name: </label>
          <input type="text" className="rounded" />
          <label>Last Name: </label>
          <input type="text" className="rounded" />
        </div>
        <div className="flex gap-4 pl-2">
          <label>Email: </label>
          <input type="email" className="rounded w-[36.1rem]" />
        </div>
        <div className="flex gap-4 pl-2">
          <label>Re-type your Email: </label>
          <input type="email" className="rounded w-[36.1rem]" />
        </div>
        <div className="flex gap-4 pl-2">
          <label>Password: </label>
          <input type="password" className="rounded w-[36.1rem]" />
        </div>
        <div className="flex gap-4 pl-2">
          <label>Birthday: </label>
          <input type="date" className="rounded w-[36.1rem] pl-2" />
        </div>
        <button className="bg-green-500 text-white rounded-lg w-16">
          Submit
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
