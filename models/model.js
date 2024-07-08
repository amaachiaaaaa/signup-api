import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

// creating a schema for the signup api

const userSchema = new Schema({
    name: {
      type: String,
      required: true,

    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  });
  

  userSchema.plugin(toJSON);
  export const User = model('User', userSchema);