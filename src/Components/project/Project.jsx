import React, { useState } from 'react'
import './Project.css'

import Image1 from '../../assets/testimonal1.jpg'
import Image2 from '../../assets/testimonal2.jpg'
import Image3 from '../../assets/testimonal3.jpg'
import Image4 from '../../assets/testimonal4.jpg'

function Project() {
        const [likeNumber, setLikeNumber] = useState(0)

        const handleLike =() =>{
              setLikeNumber(likeNumber + 1);
        }

        const handleDisLike = () => {
            if(likeNumber>0){
                setLikeNumber(likeNumber - 1);
            }
        }

  return (
    <section className="section project" id="project">
        <h1 className="section-tittle">Projects</h1>
        <span className="section-subtittle">My Recent Projects</span>

        <div className="project__container">

            <div className="project__card">
                <img src={Image1}alt="" className="projet__img" />
                <h3 className="project__tittle">School Website</h3>
                <p className="project__description"></p>
                <p className="project__feedback"><span onClick={handleLike} className="project__like"><i class="uil uil-thumbs-up"></i></span>
                 <button>{likeNumber}</button>   <span onClick={handleDisLike}  className='project__dislike'> <i class="uil uil-thumbs-down"></i></span>
                 </p>
            </div>

            <div className="project__card">
                <img src={Image1}alt="" className="projet__img" />
                <h3 className="project__tittle">Mobile UI Design</h3>
                <p className="project__description"></p>
                <p className="project__feedback"><span onClick={handleLike} className="project__like"><i class="uil uil-thumbs-up"></i></span>
                 <button>{likeNumber}</button>   <span onClick={handleDisLike}  className='project__dislike'> <i class="uil uil-thumbs-down"></i></span>
                 </p>
            </div>

            <div className="project__card">
                <img src={Image1}alt="" className="projet__img" />
                <h3 className="project__tittle">Youtube Video Edit</h3>
                <p className="project__description"></p>
                <p className="project__feedback"><span onClick={handleLike} className="project__like"><i class="uil uil-thumbs-up"></i></span>
                 <button>{likeNumber}</button>   <span onClick={handleDisLike}  className='project__dislike'> <i class="uil uil-thumbs-down"></i></span>
                 </p>
            </div>

            <div className="project__card">
                <img src={Image1}alt="" className="projet__img" />
                <h3 className="project__tittle"></h3>
                <p className="project__description"></p>
                <p className="project__feedback"><span onClick={handleLike} className="project__like"><i class="uil uil-thumbs-up"></i></span>
                 <button>{likeNumber}</button>   <span onClick={handleDisLike} className='project__dislike'> <i class="uil uil-thumbs-down"></i></span>
                 </p>
            </div>

        </div>
    </section>
  )
}

export default Project