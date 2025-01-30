import React from 'react'
import "./PricingCard.css"


 const PricingCard = ({title, price, features1, features2, features3, features4, features5}) => {
    return (
        <div className="PricingCard">
            <header>
                <p className="card-title">{title}</p>
                <p className="card-price">{price}</p>
            </header>
            <div className="card-features">
                <div className="card-storage">{features1}</div>
                <div className="card-storage">{features2}</div>
                <div className="card-storage">{features3}</div>
                <div className="card-storage">{features4}</div>
                <div className="card-storage">{features5}</div>
            </div>
            <button className="card-btn">Subscribe</button>
        </div>
    )
 }

export default PricingCard