import './HeroSection.css'

const HeroSection = () => (
        <section className="section-headstream">
        <div>
            <h1>Unlock Exclusive Benefits with Our Subscription Plan</h1>
            <p>
                Join our platform, and you’ll score the freedom to work on your terms, <br/>
                with a steady flow of jobs that let you earn what you’re worth. <br/>
                Plus, you’ll get top-notch training, a very supportive crew,<br/>
                and pay that actually reflects your hustle—what’s not to love?
            </p>
            <button>Subscribe</button>
        </div>
        <div>
            <div className="stream-container">
                <div className="circle" style={{backgroundColor: "orange"}}></div>
                    <img
                        src="https://img.freepik.com/premium-photo/portrait-young-beautiful-engineer-man-working-factory-building-generative-ai_292610-570.jpg"
                        alt=""/>
                </div>
            <div className="stream-container">
                <img
                    src="https://img.freepik.com/premium-photo/happy-asian-man-technician-portrait-city-construction-installation-inspection-rooftop-male-person-engineer-contractor-smile-architecture-career-building-maintenance_590464-213450.jpg"
                    alt=""/>
                <div className="cylinder" style={{backgroundColor: "orange"}}></div>

            </div>
            <div className="stream-container">
                <div className="cylinder" style={{backgroundColor: "#628aec"}}></div>
                            <img
                                src="https://media.istockphoto.com/id/1346124943/photo/architect-working-on-digital-tablet-at-construction-site.jpg?s=612x612&w=0&k=20&c=5QcuHtYjE7A8ldDe-JJ7uyElhHCzhtZD-2P850mHhok="
                                alt=""/>
                            <img
                                src="https://img.freepik.com/premium-photo/mixed-race-female-contractor-working-construction-site_762026-53127.jpg"
                                alt=""/>
                        </div>
            <div className="stream-container">
                <img
                    src="https://img.freepik.com/free-photo/portrait-beautiful-woman-engineer_23-2148826527.jpg"
                    alt=""/>
                <div className="cylinder" style={{backgroundColor: "#628aec"}}></div>

            </div>
            <div className="stream-container">
                <img
                    src="https://img.freepik.com/premium-photo/young-indian-engineer-showing-thumps-up_75648-13066.jpg"
                                alt=""/>
                        </div>
        </div>
    </section>
);

export default HeroSection