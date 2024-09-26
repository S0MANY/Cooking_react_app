// import { Link } from "react-router-dom"
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


function Swipercategory() {
    
    useEffect(()=>{
        // eslint-disable-next-line
        const swiper = new Swiper(".swiper" , {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              slidesPerView: 4,
        })  
    },[])
    
    return(
        <div className="swiper">
            <div className="swiper-wrapper">
                <div className="swiper-slide breakfast"><Link to={`category/Breakfast`}><h2>Breakfast</h2></Link></div>
                <div className="swiper-slide desert"><Link to={`category/Dessert`}><h2>Desert</h2></Link></div>
                <div className="swiper-slide beef"><Link to={`category/Beef`}><h2>Beef</h2></Link></div>
                <div className="swiper-slide pasta"><Link to={`category/Pasta`}><h2>Pasta</h2></Link></div>
                <div className="swiper-slide chicken"><Link to={`category/Chicken`}><h2>Chicken</h2></Link></div>
                <div className="swiper-slide vegan"><Link to={`category/Vegan`}><h2>Vegan</h2></Link></div>
            </div>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    )
}

export { Swipercategory }