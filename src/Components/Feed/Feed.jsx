import React from 'react'
import './Feed.css'
import thumbnail1 from '../../Assets/happy-solar-panel-installer-666x479.png'
import { Link } from 'react-router-dom';

// import thumbnail2 from '../../Assets/Solar_energy_technician.jpg'
// import thumbnail3 from 'https://img.freepik.com/free-photo/man-with-white-helmet-near-solar-panel_1157-29981.jpg'
// import thumbnail4 from 'https://media.istockphoto.com/id/1379762822/photo/african-man-engineer-using-digital-tablet-maintaining-solar-cell-panels-on-building-rooftop.jpg?s=612x612&w=0&k=20&c=XaLaE2ZbHhnQghQnPhkzeSa8jLW51Echthi0FS5D5Ls='
// import thumbnail5 from 'https://cdn.corporatefinanceinstitute.com/assets/customer-satisfaction.jpeg'
// import thumbnail6 from 'https://media.istockphoto.com/id/1391173662/vector/customer-feedback-giving-rating-based-on-experience-or-quality-from-product-and-service.jpg?s=612x612&w=0&k=20&c=x6OHZBPU6cDbMU2N_I4LOIN8MzDLjjJKs_IgTxg4FDc='



const Feed = () =>{
    return(
        <div className="feed">
            <a href="https://youtu.be/9rwDepuj39o?si=kML4LQUZUQQW4R1K" className="card" target="_blank"
               rel="noopener noreferrer"> <img src={"https://img.youtube.com/vi/9rwDepuj39o/hqdefault.jpg"} alt=""/>
                <h2>Training on solar and inverter Installation</h2>
                <h3>SolCon</h3>
                <p>30K views &bull; 2 days ago</p>
            </a>
            <a href="https://youtu.be/HQ4SfbeGg5s?si=RDt4ELDcfUQmA3C9" className="card" target="_blank"
               rel="noopener noreferrer">
                <img src={"https://img.youtube.com/vi/HQ4SfbeGg5s/hqdefault.jpg"} alt=""/>
                <h2>Complete Solar Panel Connection with Solar Charge Controller and Inverter </h2>
                <h3>SolCon</h3>
                <p>30K views &bull; 2 days ago</p>
            </a>
            <a href="https://youtu.be/Yxt72aDjFgY?si=-IMOa0-BMdsGTJrC" className="card" target="_blank"
               rel="noopener noreferrer">
                <img src={"https://img.youtube.com/vi/Yxt72aDjFgY/hqdefault.jpg\n"} alt=""/>
                <h2>Generate Electricity - How Solar Panels Work!</h2>
                <h3>SolCon</h3>
                <p>30K views &bull; 2 days ago</p>
            </a>
            <a href="https://youtu.be/khYZTmm7S5I?si=k7nqWIRCB2ULHQTs" className="card" target="_blank"
               rel="noopener noreferrer">
                <img src={"https://img.youtube.com/vi/khYZTmm7S5I/hqdefault.jpg\n"} alt=""/>
                <h2>SOLAR POWER: The Ultimate Beginner's Guide / How To</h2>
                <h3>SolCon</h3>
                <p>30K views &bull; 2 days ago</p>
            </a>
            <a href="https://youtu.be/nZQP-0axwHE?si=Nchx2oHJSPoyidZH" className="card" target="_blank"
               rel="noopener noreferrer">
                <img src={"https://img.youtube.com/vi/nZQP-0axwHE/hqdefault.jpg\n"} alt=""/>
                <h2>3 Strategies to Increase Customer Satisfaction | Brian Tracy</h2>
                <h3>SolCon</h3>
                <p>30K views &bull; 2 days ago</p>
        </a>
            <a href="https://youtu.be/x6aiRiK_jWo?si=1rhV0iZINTwyXzIN" className="card" target="_blank"
               rel="noopener noreferrer">
                <img src={"https://img.youtube.com/vi/x6aiRiK_jWo/hqdefault.jpg\n"} alt=""/>
                <h2>How to repair solar charge controller</h2>
                <h3>SolCon</h3>
                <p>30K views &bull; 2 days ago</p>
        </a>
</div>
)
}
export default Feed