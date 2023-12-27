import React from "react";
import { useState } from "react";
import { addProject } from "../store/reducers/ProjectFormReducer";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"


function ProjectEkleme() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const navigate = useNavigate();


const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addProject({
        id: projects[projects.length - 1].id + 1, 
        // image,
        title,
        description,
        price,
      }));
      navigate('/projectlist')
  };

  return (
    <div className="p-create">
      <h3>Lütfen Proje Ekleyiniz</h3>
      <form className="p-form" onSubmit={handleSubmit}>
        {/* <input
          className="p-input"
          onChange={(event) => {
            dispatch(changeImage(event.target.value));
          }}
          type="file"
          value={image2}
        ></input> */}
        <label className="p-label">Proje Adı</label>
        <input
          className="p-input"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <label className="p-label">Açıklaması</label>
        <textarea
          className="p-input"
          rows={5}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <label className="p-label">Fiyatı</label>
        <input
          className="p-input"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <button className="p-button">Ekle</button>
      </form>
    </div>
  );
}

export default ProjectEkleme;