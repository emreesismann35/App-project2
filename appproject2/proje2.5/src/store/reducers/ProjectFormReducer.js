import { createSlice } from "@reduxjs/toolkit";
import { projectList } from "./Data";

const formSlice = createSlice({
  name: "projects",
  initialState: projectList,
  reducers: {

    addProject(state,action) {
      state.push(action.payload)
    },
    updateProject: (state,action) =>{
      const {id,image,title,description,price}= action.payload;
      const updatedProject = state.find(project =>project.id === id)
      if (updatedProject) {
        updatedProject.image = image;
        updatedProject.title =title;
        updateProject.description = description;
        updateProject.price = price;
      }
    },
  },
});

export const { addProject, updateProject} =
  formSlice.actions;
export default formSlice.reducer;
