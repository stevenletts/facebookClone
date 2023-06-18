import { TextAreaFormProps } from "../types";

const TextAreaForm = ({
  handleSubmit,
  setValue,
  buttonText,
  placeholder,
  value,
}: TextAreaFormProps) => {
  return (
    <form onSubmit={handleSubmit} className="col-span-3 p-2 row-span-2">
      <section>
        <textarea
          onChange={({ target }) => setValue(target.value)}
          placeholder={placeholder}
          className="bg-slate-200 rounded-lg w-full h-full pl-2 pt-2"
          value={value}
        ></textarea>
      </section>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-green-500 text-white rounded-lg w-16 col-span-3 mr-2 w-fit px-2"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
};

export default TextAreaForm;
