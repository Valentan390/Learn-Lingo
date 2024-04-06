import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { auth, db } from "../../firebase";
import {
  equalTo,
  get,
  orderByChild,
  push,
  query,
  ref,
  remove,
  set,
} from "firebase/database";
import { Teachers } from "../../helpers/InterfaceData";

export const addFavoriteTeachers = createAsyncThunk<
  Teachers,
  Teachers,
  { rejectValue: string }
>("favorite/addTeacher", async (teacher, { rejectWithValue }) => {
  try {
    const userId = auth.currentUser?.uid;
    if (userId) {
      const postListRef = ref(db, `users/${userId}`);
      const newPostRef = push(postListRef);
      await set(newPostRef, teacher);
    }
    return teacher;
  } catch (error) {
    if (error instanceof Error) {
      toast.error(`${error.message}`);
      throw rejectWithValue(error.message);
    }
    throw error;
  }
});

export const deleteFaforiteTeachers = createAsyncThunk<
  Teachers,
  Teachers,
  { rejectValue: string }
>("favorite/deleteTeacher", async (teacher, { rejectWithValue }) => {
  try {
    const userId = auth.currentUser?.uid;
    if (userId) {
      const dbRef = ref(db, `users/${userId}`);
      const filterTeacher = query(
        dbRef,
        orderByChild("name"),
        equalTo(teacher.name)
      );
      const snapshot = await get(filterTeacher);
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childRef = ref(db, `users/${userId}/${childKey}`);
        remove(childRef);
      });
    }
    return teacher;
  } catch (error) {
    if (error instanceof Error) {
      toast.error(`${error.message}`);
      throw rejectWithValue(error.message);
    }
    throw error;
  }
});

export const getFavoriteTeachers = createAsyncThunk<
  Teachers[],
  void,
  { rejectValue: string }
>("favorite/getTeachers", async (_, { rejectWithValue }) => {
  try {
    const userId = auth.currentUser?.uid;
    if (userId) {
      const dbRef = ref(db, `users/${userId}`);
      const snapshot = await get(dbRef);
      const teachersFavotite: Teachers[] = [];
      snapshot.forEach((childSnapshot) => {
        const teacherData = childSnapshot.val();
        teachersFavotite.push(teacherData);
      });
      return teachersFavotite;
    }
    return [];
  } catch (error) {
    if (error instanceof Error) {
      toast.error(`${error.message}`);
      throw rejectWithValue(error.message);
    }
    throw error;
  }
});
