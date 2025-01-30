import {React, useState}  from 'react'
import PricingCard from "../Subscribe/PricingCard"
import "../Subscribe/PricingCard.css"
import "./PricingApp.css"

const PricingApp = () => {
const [selectMonthly, setSelectMonthly] = useState(true)
    console.log(selectMonthly)
    return (
        <div className="PricingApp">
            <div className="app-container">
                <header>
                    <h1 className="header-topic">Our Pricing Plan</h1>
                    <div className="header-row">
                        <p>Annually</p>
                        <label className="price-switch">
                            <input type="checkbox"
                                   onChange={() => {
                                        setSelectMonthly((prev) => !prev);
                                   }
                            }
                                   className="price-checkbox"/>
                            <div className="switch-slider"></div>
                        </label>
                        <p>Monthly</p>
                    </div>
                </header>
                <div className="pricing-cards">
                    <PricingCard
                    title = 'Essential' price={selectMonthly ? '20.99':'189.9'}
                    features1='Display Card on Homepage'
                    features2='Service Efficiency Dashboard'
                    features3='Promoted Listings'
                    />
                    <PricingCard
                        title = 'Deluxe' price={selectMonthly ? '34.99':'349.9'}
                        features1='Display Card on Homepage'
                        features2='Faster Payment Option'
                        features3='Promoted Listings'
                        features4='Networking Events'
                    />
                    <PricingCard
                        title = 'Premium' price={selectMonthly ? '79.99':'499.9'}
                        features1='Display Card on Homepage'
                        features2='Faster Payment Option'
                        features3='Promoted Listings'
                        features4='Networking Events'
                        features5='High-Value Job Opportunities'
                    />

                </div>
            </div>
        </div>
    )
}

export default PricingApp