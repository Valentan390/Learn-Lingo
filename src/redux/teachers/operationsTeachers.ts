import { createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import { db } from "../../firebase";
import { Teachers } from "../../helpers/InterfaceData";
import {
  // endBefore,
  get,
  limitToFirst,
  // onValue,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";

// export const fetchTeachers = createAsyncThunk<
//   Teachers[],
//   number,
//   { rejectValue: string }
// >("teachers/fetchTeachers", async (currentPage, { rejectWithValue }) => {
//   return new Promise<Teachers[]>((resolve, reject) => {
//     try {
//       const starCountRef = ref(db, "teachers");
//       const tiachersPerPage = 3;
//       const startIndex = currentPage * tiachersPerPage;

//       const endIndex = startIndex + tiachersPerPage;
//       const queryRef = query(
//         starCountRef,
//         orderByKey(),
//         startAt(String(startIndex)),
//         endBefore(String(endIndex))
//       );

//       onValue(queryRef, (snapshot) => {
//         const data: Teachers[] = snapshot.val();

//         resolve(data);
//       });
//     } catch (error) {
//       if (error instanceof Error) {
//         toast.error(`${error.message}`);

//         return rejectWithValue(error.message);
//       }
//       reject(error);
//     }
//   });
// });

// export const fetchTeachers = createAsyncThunk<
//   Teachers[],
//   number,
//   { rejectValue: string }
// >("teachers/fetchTeachers", async (currentPage, { rejectWithValue }) => {
//   try {
//     const starCountRef = ref(db, "teachers");
//     const tiachersPerPage = 3;
//     const startIndex = currentPage * tiachersPerPage;

//     const endIndex = startIndex + tiachersPerPage;
//     const queryRef = query(
//       starCountRef,
//       orderByKey(),
//       startAt(String(startIndex)),
//       endBefore(String(endIndex))
//     );

//     const snapshot = await get(queryRef);
//     const data: Teachers[] = snapshot.val();
//     return data;
//   } catch (error) {
//     if (error instanceof Error) {
//       toast.error(`${error.message}`);
//       throw rejectWithValue(error.message);
//     }
//     throw error;
//   }
// });

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
