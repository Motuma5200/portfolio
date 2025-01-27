import React, { useState } from 'react';
import './ProjectDescription.css';

const ProjectDescription = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    setIsExpanded((prev) => !prev); // Toggle the state
  };

  return (
    <div className="paragraph-container">
      <p className={`paragraph ${isExpanded ? 'expanded' : ''}`}>
        {description}
      </p>
      <a href="https://we.toloka.ai/" className="view-more" >
        {isExpanded ? 'View Less' : 'View More'}
      </a>
    </div>
  );
};

export default ProjectDescription;
