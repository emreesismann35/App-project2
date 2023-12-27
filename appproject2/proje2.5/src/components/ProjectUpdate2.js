import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateProject } from "../store/reducers/ProjectFormReducer";

function ProjectUpdate2() {
  const { id } = useParams;
  const projects = useSelector((state) => state.projects);
  const existingProject = projects.filter((projects) => projects.id === id);
  // const existingProject = projects.map((projects) => {
  //   return projects.id === id;
  // });
  const { title, description, price } = existingProject[0];
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
