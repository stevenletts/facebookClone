import { Dispatch, SetStateAction, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useField";
import userService from "../../services/userService";
import { logout } from "../../reducers/authReducer";
import { clearPosts } from "../../reducers/currentPostReducer";
import TextAreaForm from "../TextAreaForm";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";
//For image upload?

interface IProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const EditProfile = ({ setOpen }: IProps) => {
  // add description, add profile image, add cover photo, and delete account
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [desc, setDesc] = useState("");

  const deleteAccount = () => {
    userService.deleteAccount(auth.id);
    dispatch(logout());
    dispatch(clearPosts(null));
  };

  const addDescription = () => {
    return;
  };

  return (
    <>
      <div className="absolute w-full h-full top-0 left-0 bg-transparent flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-slate-200 rounded-lg p-8 flex flex-col gap-4 relative">
          <button
            className="absolute top-3 right-3 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            X
          </button>
          <h2 className="font-bold text-xl">Edit Profile</h2>
          <p>Choose a new profile picture</p>

          <p>Choose a new cover photo</p>

          <p>add a new description</p>
          <TextAreaForm
            handleSubmit={addDescription}
            value={desc}
            placeholder="what's on your mind?"
            setValue={setDesc}
            buttonText="Update"
          />

          <p>Delete Account? </p>
          {auth.fullName === "Steven Spencer-Letts" ? (
            <p>You can not delete the guest account</p>
          ) : (
            <button
              className="bg-red-500 text-white py-2 rounded-full"
              onClick={deleteAccount}
            >
              Delete Account
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default EditProfile;
