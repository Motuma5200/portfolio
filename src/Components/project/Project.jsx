import React, { useState } from 'react'
import './Project.css'

import { Projects } from './Projects'

function Project() {

        const [projects, setProjects] = useState(Projects)

        const handleLike = (id) =>{
            setProjects((prevProjects) =>
             prevProjects.map((project) =>
            project.id ===  id ? {...project, like: project.like + 1} : project
        )
    );
        };

        const handleDisLike = (id) =>{
            setProjects((prevProjects) =>
             prevProjects.map((project) =>
            project.id ===  id && project.like > 0? {...project, like: project.like - 1} : project
        )
    );
        };

       

  return (
    <section className="section project" id="project">
        <h1 className="section-tittle">Projects</h1>
        <span className="section-subtittle">My Recent Projects</span>

        <div className="project__container grid container">
            {
                projects.map(({id, image, tittle, description, link, like})=>
                (
                    <div className="project__cards" key={id}>
                        <img src= {image} alt="" className="project__img" />
                        <h3 className="project__tittle">{tittle}</h3>
                         <p className="project__description">{description}</p>
                         <div><a href={link} target='blank' className="project__link">View More</a></div>
                         
                        <div className="button__group">
                            <span className="likes__button">
                                <button className="like__control">
                                <span onClick={() =>handleLike(id)} className="like__button">like</span>
                                <span className="like__button">{like}</span>
                                </button>
                            <button onClick={ ()=> handleDisLike(id)} className="disLike__button">dislike</button>

                            </span>
                            
                        </div>


                    </div>
                )
            )
            }
       

        </div>
    </section>
  )
}

export default Project