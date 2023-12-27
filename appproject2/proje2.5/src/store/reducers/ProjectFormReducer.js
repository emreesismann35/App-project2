import { createSlice } from "@reduxjs/toolkit";
import { projectList } from "./Data";

const formSlice = createSlice({
  name: "projects",
  initialState: projectList,
  reducers: {

    addProject(state, action) {
      state.push(action.payload)
    },
    updateProject: (state, action) => {
      const { id, image, title, description, price } = action.payload;
      state = state.map(project => {
        if (Number(project.id) === Number(id))  {
          project.image = image;
          project.title = title;
          project.description = description;
          project.price = price;
        }
        return project
      })
     
    },
  },
});

export const { addProject, updateProject } =
  formSlice.actions;
export default formSlice.reducer;
