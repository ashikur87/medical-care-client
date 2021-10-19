
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const Booking = () => {
 
    const {serviceId}=useParams();

    const [services, setServices] = useState([])
    const [serviceDetails, setServiceDetails] = useState("");

    useEffect(() => {
        fetch('../Services.json')
            .then(res => res.json())
            .then(data => setServices(data));

        let selectedService = services.find(service => service.id === parseInt(serviceId))
        setServiceDetails(selectedService);
    }, [services, serviceId]);

    return (
        <div className='bookResponsive'>
            <h2 className='text-primary'><u>Our Services Details Here</u></h2>
           
    <div className=' m-5  '>
        <div>
           <img className='book' src={serviceDetails?.img} alt="" />
        </div>
        <div className='bg-primary mx-2 '>
           <h1>id:{serviceId}</h1> <br />
           <h3>Name:{serviceDetails?.name}</h3><br />
           <h1 className='bg-danger'>Description:</h1>
           <h3>{serviceDetails?.description}</h3>
        </div>
      
    </div>
</div>
    );
};

export default Booking;