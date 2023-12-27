import { configureStore } from "@reduxjs/toolkit";
import ProjectFormReducer from "./reducers/ProjectFormReducer";


export const store = configureStore({
  reducer: {
    projects: ProjectFormReducer,
  },
});
