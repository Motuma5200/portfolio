import React from 'react'
import './Testimonal.css'
import { Data } from './Data'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

function Testimonal() {
  return (
    <section className="testimonal section" id="testimonal">

            <h2 className="section-tittle">My Clients Say</h2>
          <span className="section-subtittle">Testimonals</span>

          <Swiper className="testimonal__container " 
                      loop = {true}
                      spaceBetween={24}
                      autoplay = {{delay : 3000 }}
            
                       pagination={{
                        clickable: true,
                      }}
                      breakpoints={{
                        350: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 48,
                        },
                        
                      }}
                      modules={[Pagination, Autoplay]}>
             
             {Data.map(({id, image, tittle, description}) =>{
                return(
                    <SwiperSlide className="testimonal__card" key={id}>
                        <img src={image} alt="" className="testimonal__img" />
                        <h3 className="testimonal__name">{tittle}</h3>
                        <p className="testimonal__description">{description}</p>
                    </SwiperSlide>
                )
             })}

          </Swiper>
    </section>
  )
}

export default Testimonal