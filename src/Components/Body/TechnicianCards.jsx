import React from 'react'
import image from '../../Assets/images.jpeg'

const TechnicianCards = () =>{
    return(
        <div className="product_box">
            <img src={image} alt=""/>
            <h2 className="name">Ibrahim Babaginda</h2>
            <p className="phoneNumber"><span>09876543213</span></p>
            <p className="location"><span>312, Herbert Macauley way,<br/> sabo yaba, Lagos</span></p>
        </div>
    )
}
export default TechnicianCards