
import React, { useState, useRef, useEffect } from 'react';
//import Teams from '../components/sections/Teams';
//import Cta from '../components/sections/Cta';
import Image from '../elements/Image'
import { Link, useParams } from 'react-router-dom';
 //import { black } from 'color-name';

const NewsView = (props) => {

    const [isActive, setIsactive] = useState(false);

    const nav = useRef(null);
    const closeMenu = () => {
        document.body.classList.remove('off-nav-is-active');
        nav.current && (nav.current.style.maxHeight = null);
        setIsactive(false);
    }


    const linkTo = "/Article/"
    return (
        <div className=" mb-32 reveal-from-left tiles-item-inner-news" data-reveal-delay="200"   >
           
                    <Image
                        className=""
                        src={require('./../../assets/images/dhruv.jpg')}
                        alt="Unable to load image"
                        width={100}
                        height={110} />
                 
                <div classname=" imageFit" >
                    <div className="  imageFit text-color-high" >
                        <p> {props.title} </p>
                    </div>
                    <div className=" text-xs  imageFit " >
                        <p className=""> {props.preview} <span className="teams-item-link">
                            <Link to="/Stats" onClick={closeMenu}>... read more</Link>
                        </span></p>
                    </div>
                    <div className="  text-xs    " >
                        <span className="text-color-high">{props.author}</span>
                    </div>

                   
                </div>

            </div>


    );
}

export default NewsView;