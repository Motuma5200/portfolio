import React from 'react';
import { useInView } from 'react-intersection-observer';
import './ProjectCard.css';

const ProjectCard = ({ id, image, title, description, link, like, handleLike, handleDisLike }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`project__cards ${inView ? 'visible' : ''}`} key={id}>
      <img src={image} alt="" className="project__img" />
      <h3 className="project__title">{title}</h3>
      <p className="project__description">{description}</p>
      <div>
        <a href={link} target="blank" className="project__link">View More</a>
      </div>
      <div className="button__group">
        <span className="likes__button">
          <button className="like__control">
            <span onClick={() => handleLike(id)} className="like__button">like</span>
            <span className="like__button">{like}</span>
          </button>
          <button onClick={() => handleDisLike(id)} className="disLike__button">dislike</button>
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
