import React from 'react';
import doctor from  '../../Images/Wellcome/doctor.PNG'
import './Welcome.css'

const Welcome = () => {
    return (
<div>
    <h2 className='fw-bold mt-5 mb-5'><u>Welcome to our Medical Service</u></h2>
<div className='welcome mt-5 mb-5 responsive'>
            <div >
                <img  src={doctor} alt="" />
            </div>
            <div >
                <div className=' text-center m-5 p-3' >
                <h1 className='background m-3'>Request Appointment</h1>
                <h1 className='background m-3 '>Find Doctor</h1>
                <h1 className='background m-3'>Find Location</h1>
                <h1 className='background m-3'>Emergency Contact</h1>
                </div>
                
            </div>
        </div>
</div>
    );
};

export default Welcome;