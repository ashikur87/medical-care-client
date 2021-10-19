import React from 'react';
import './Expert.css'


const Expert = (props) => {
    const {img,name,expertize}=props.expert;
    return (
<div className='col-lg-6 col-md-6 col-sm-6 col-12 px-5 my-5 ' >
            
           
<div className='bg-primary '>
                <img className='experts m-5' src={img} alt="" />
                <h2>{name}</h2>
                <p className='text-black my-3'>{expertize}</p>
</div>
            
        </div>
    );
};

export default Expert;