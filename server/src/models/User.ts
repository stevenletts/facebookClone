import mongoose, { InferSchemaType } from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    secondName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String },
    bannerPicture: { type: String },
    friends: { type: [mongoose.Schema.Types.ObjectId], defaultValue: [] },
    profileDescription: { type: String },
    birthday: { type: Date, required: true },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
      },
    ],
  },
  { timestamps: true }
);

type User = InferSchemaType<typeof UserSchema>;

const User = mongoose.model("User", UserSchema);

export default User;
