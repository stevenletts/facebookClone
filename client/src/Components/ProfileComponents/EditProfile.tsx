import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useField";
import userService from "../../services/userService";
import { handleUpdateProfile, logout } from "../../reducers/authReducer";
import { clearPosts } from "../../reducers/currentPostReducer";
import TextAreaForm from "../TextAreaForm";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import app from "../../firebase";

interface IProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  setProDesc: Dispatch<SetStateAction<string>>;
}

const EditProfile = ({ setOpen, setProDesc }: IProps) => {
  // add description, add profile image, add cover photo, and delete account
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [desc, setDesc] = useState("");
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [bannerImage, setBannerImage] = useState<File | null>(null);
  const [profileImgUpProg, setProfileImgUpProg] = useState(0);
  const [bannerImgUpProg, setBannerImgUpProg] = useState(0);

  const deleteAccount = () => {
    userService.deleteAccount(auth.id);
    dispatch(logout());
    dispatch(clearPosts(null));
  };

  const addDescription = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(handleUpdateProfile(auth.id, { profileDescription: desc }));
    setProDesc(desc);
    setDesc("");
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const uploadImage = (file: any, updatedPicture: string) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (updatedPicture === "profile") {
          setProfileImgUpProg(Math.round(progress));
        }
        setBannerImgUpProg(Math.round(progress));

        switch (snapshot.state) {
          case "paused":
            break;
          case "running":
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;
          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log(downloadURL);
          if (updatedPicture === "profile") {
            dispatch(
              handleUpdateProfile(auth.id, { profilePicture: downloadURL })
            );
          }
          dispatch(
            handleUpdateProfile(auth.id, { bannerPicture: downloadURL })
          );
        });
      }
    );
  };

  useEffect(() => {
    profileImage && uploadImage(profileImage, "profile");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileImage]);

  useEffect(() => {
    bannerImage && uploadImage(bannerImage, "banner");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bannerImage]);

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
          {profileImgUpProg > 0 ? "Uploading " + profileImgUpProg + "%" : null}
          <input
            type="file"
            className="bg-transparent bordeer border-slate-500 rounded p-2"
            accept="image/*"
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            onChange={(e) => setProfileImage(e.target.files![0])}
          />
          <p>Choose a new cover photo</p>
          {bannerImgUpProg > 0 ? "Uploading " + bannerImgUpProg + "%" : null}
          <input
            type="file"
            className="bg-transparent bordeer border-slate-500 rounded p-2"
            accept="image/*"
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            onChange={(e) => setBannerImage(e.target.files![0])}
          />

          <p>add a new description</p>
          <TextAreaForm
            handleSubmit={addDescription}
            value={desc}
            placeholder="Add a description"
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
