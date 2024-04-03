import { createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import { db } from "../../firebase";
import { Teachers } from "../../helpers/InterfaceData";
import {
  get,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";

export const fetchTeachers = createAsyncThunk<
  Teachers[],
  number,
  { rejectValue: string }
>("teachers/fetchTeachers", async (currentPage, { rejectWithValue }) => {
  try {
    const teachersPerPage = 3;
    const startKey = currentPage * teachersPerPage;
    const starCountRef = ref(db, "teachers");
    const queryRef = query(
      starCountRef,
      orderByKey(),
      startAt(String(startKey)),
      limitToFirst(teachersPerPage)
    );
    const snapshot = await get(queryRef);
    const teachers: Teachers[] = [];
    snapshot.forEach((childSnapshot) => {
      const teacherData = childSnapshot.val();
      teachers.push(teacherData);
    });
    return teachers;
  } catch (error) {
    if (error instanceof Error) {
      toast.error(`${error.message}`);
      throw rejectWithValue(error.message);
    }
    throw error;
  }
});
