import mongoose, { InferSchemaType } from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    profilePicture: { type: String },
    bannerPicture: { type: String },
    friends: { type: [mongoose.Schema.Types.ObjectId], defaultValue: [] },
    profileDescription: { type: String, defaultValue: "" },
    birthday: { type: String, required: true },
  },
  { timestamps: true }
);

UserSchema.set("toJSON", {
  transform: (doc, returnedObj) => {
    if (typeof returnedObj.id !== "string") {
      returnedObj.id = returnedObj._id.toString();
    }
    delete returnedObj._id;
    delete returnedObj.__v;
    delete returnedObj.passwordHash;
  },
});

type User = InferSchemaType<typeof UserSchema>;

const User = mongoose.model("User", UserSchema);

export default User;
