import React from 'react';
import './Blog.css'




const Blog = () => {

    return (
        <div id='Blog'>
            <h1 className='background p-5'><marquee behavior="" direction=""><h2 className='text-warning fw-bold'>Our Blog:</h2></marquee></h1>
            <h1 className='fw-bold text-primary'><u>Our Client Says:</u></h1>
            <div className='bloging'>
                {/* bloging */}
                <div className='border border-primary m-3 '>
                  
                    <p>Trusted results for Ambulance Services Near Me. Check Visymo Search for the best results! Unlimited Access. 100% Secure. Always Facts. Privacy Friendly. The Best Resources. Results & Answers. Types: Best Results, Explore Now, New Sources, Best in Search.</p>

                </div>
                <div  className='border border-primary m-3 '>
                    
                    <p>The law says that it is an emergency if you reasonably believe that it is an emergency. It is an emergency if waiting to get care could be dangerous to your life or a part of your body. A bad injury or a sudden serious illness can be an emergency. Severe pain and active labor are also emergencies.</p>
                </div>
                <div  className='border border-primary m-3 '>
                    
                    <p>Definitions of medical checkup. a thorough physical examination; includes a variety of tests depending on the age and sex and health of the person. synonyms: checkup, exam, examination, health check, medical, medical exam, medical examination. type of: examination, scrutiny.</p>
                </div>
                <div className='border border-primary m-3 '>
                    <p>Intensive Care Units. Intensive care units (ICUs) are areas of the hospital where seriously ill patients receive specialized care such as intensive monitoring and advanced life support. These units are also called critical care units, intensive therapy units, or intensive treatment units.</p>
                </div>

            </div>
            <div className='border border-3 p-3 m-2'>
                <input type="text" placeholder='subscribe' />
                <button className='btn btn-warning'>Subscribe</button>
            </div>
        </div>
    );
};

export default Blog;