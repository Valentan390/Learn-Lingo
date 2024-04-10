import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User as FirebaseUser,
} from "firebase/auth";
import { auth } from "../../firebase";
import { FormData, User } from "../../helpers/InterfaceData";
import { toast } from "react-toastify";

const createUserData: (user: FirebaseUser | null) => User | null = (user) => {
  if (user) {
    return {
      userName: user.displayName || "",
      userEmail: user.email || "",
      id: user.uid || "",
      token: user.refreshToken || "",
    };
  }
  return null;
};

export const signUpUser = createAsyncThunk<
  User,
  FormData,
  { rejectValue: string }
>(
  "auth/signUpUser",
  async ({ userName, userEmail, userPassword }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );
      if (userName && auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: userName });
      }
      const data = createUserData(userCredential.user);
      if (data) {
        toast.success(`${userName}, you have successfully registered`);
        return data;
      } else {
        throw new Error("User data not available");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
        return rejectWithValue(error.message);
      }
      throw error;
    }
  }
);

export const signInUser = createAsyncThunk<
  User,
  FormData,
  { rejectValue: string }
>(
  "auth/signInUser",
  async ({ userEmail, userPassword }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );
      const data = createUserData(userCredential.user);
      if (data) {
        toast.success("Login is successful.");
        return data;
      } else {
        throw new Error("User data not available");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
        return rejectWithValue(error.message);
      }
      throw error;
    }
  }
);

export const logOutUser = createAsyncThunk<void, void, { rejectValue: string }>(
  "auth/logOutUser",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      toast.success("Logout successfully");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
        return rejectWithValue(error.message);
      }
      throw error;
    }
  }
);

export const refreshUser = createAsyncThunk<
  User,
  void,
  { rejectValue: string }
>("auth/refreshUser", async (_, { rejectWithValue }) => {
  try {
    const user = await new Promise<FirebaseUser | null>((resolve) => {
      onAuthStateChanged(auth, (user) => {
        resolve(user);
      });
    });
    const data = createUserData(user);
    if (data) {
      return data;
    } else {
      throw new Error("User data not available");
    }
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    throw error;
  }
});
