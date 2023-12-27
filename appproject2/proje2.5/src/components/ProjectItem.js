import React from "react";
import { Link } from "react-router-dom";

function ProjectList2({ project }) {

  return (
    <div className="p-ıtem">
      {/* <img src={project.image} alt="" /> */}
      <img src={`projectPhotos/${project.image}`} alt="1" />
      <h2 className="p-title">{project.title}</h2>
      <h4 className="p-title">Proje Açıklaması</h4>
      <p>{project.description}</p>
      <h4 className="p-title">Proje Fiyatı</h4>
      <p>{project.price}</p>
      <div>
        <button className="p-delete">Sil</button>
        <Link to={`/projectupdate3/${project.id}`} className="p-edit">
          Güncelle
        </Link>
        <Link target="_blank" to={`/project/${project.id}`}>
          <button className="p-more">More Info</button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectList2;