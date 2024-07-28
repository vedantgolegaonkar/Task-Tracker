import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({ title, tags, handleDelete, index, setActiveCard }) => {
  return (
    <article className="task_card" draggable onDragStart={() => setActiveCard(index)} onDragEnd={() => setActiveCard(null)}>
      <p className="task_text">{title}</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected />
          ))}
        </div>
        <div className="task_delete" onClick={() => handleDelete(index)}>
          <img className="delete_icon" src={deleteIcon} />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
