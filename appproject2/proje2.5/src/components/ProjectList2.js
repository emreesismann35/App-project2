import React from "react";
import { useSelector } from "react-redux";
import ProjectItem from "./ProjectItem";

function ProjectList2() {
  const projects = useSelector((state) => state.projects);
  return (
    <>
      <div>
        <h1>INVESTATE PROJELER</h1>
      </div>
      <div className="p-list"></div>
      {projects.map((project,id) => {
        return <ProjectItem key={id} project={project} />;
      })}
    </>
  );
}

export default ProjectList2;

// import React from "react";
// import { useSelector } from "react-redux";

// function ProjectList2() {
//   const projectlist = useSelector((state) => {
//     return state.projectlist.data;
//   });
//   return (
//     <>
//       {projectlist.map((project) => {
//         return (
//           <div key={project.id}>
//             <h1>{project.image}</h1>
//             <h1>{project.title}</h1>
//             <p>{project.description}</p>
//             <p>{project.price}</p>
//             <button></button>
//           </div>
//         );
//       })}
//     </>
//   );
// }

// export default ProjectList2;
