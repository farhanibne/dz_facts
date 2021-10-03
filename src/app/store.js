import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import QuestionSlice from "../features/QuestionSlice";


export default configureStore({
  reducer: {
    user: userReducer,
    question: QuestionSlice,
  },
});
