import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { About } from "./components/About";
import { ProjectCard } from "./components/ProjectCard";
import { Home } from "./components/Home";
import ProjectCreate2 from "./components/ProjectCreate2";
import ProjectList2 from "./components/ProjectList2";
import ProjectUpdate2 from "./components/ProjectUpdate2";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/project/:id" exact element={<ProjectCard />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/projeadd" exact element={<ProjectCreate2 />} />
        <Route path="/projectupdate3/:id" exact element={<ProjectUpdate2/>} />
        <Route path="/projectlist" exact element={<ProjectList2 />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;



// // import { useEffect, useContext } from "react";
// //import ProjectsContext from "./context/project";

// function App() {
//   // const { fetchProjects } = useContext(ProjectsContext);
//   // useEffect(() => {
//   //   fetchProjects();
//   // }, []);

