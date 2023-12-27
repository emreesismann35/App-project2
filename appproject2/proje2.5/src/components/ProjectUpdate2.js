import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateProject } from "../store/reducers/ProjectFormReducer";

function ProjectUpdate2() {
  const { id } = useParams();
  const projects = useSelector((state) => state.projects);
  const existingProject = projects.filter((project) => Number(project.id) === Number(id));
  // const existingProject = projects.map((projects) => {
  //   return projects.id === id;
  // });
  let title, description, price;
  console.log({ projects, existingProject, id })

  if (existingProject && existingProject[0]) {
    title = existingProject[0].title;
    description = existingProject[0].description;
    price = existingProject[0].price

  }
  const [updatedTitle, setTitle] = useState(title);
  const [updatedDescription, setDescription] = useState(description);
  const [updatedPrice, setPrice] = useState(price);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateProject({
        id: id,
        // image: updatedImage,
        title: updatedTitle,
        description: updatedDescription,
        price: updatedPrice,
      })
    );
    navigate("/projectlist");
  };

  return (
    <div className="p-update p-ıtem">
      <h3>Lütfen Projeyi Güncelleyiniz</h3>
      <form className="p-form" onSubmit={handleUpdate}>
        {/* <input
          className="p-input"
          type="file"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        ></input> */}
        <label className="p-label">Proje Adı</label>
        <input
          className="p-input"
          value={updatedTitle}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label className="p-label">Açıklaması</label>
        <textarea
          className="p-input"
          rows={5}
          value={updatedDescription}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label className="p-label">Fiyatı</label>
        <input
          className="p-input"
          value={updatedPrice}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button className="p-button p-update-button">
          Değişiklikleri Kaydet
        </button>
      </form>
    </div>
  );
}

export default ProjectUpdate2;
