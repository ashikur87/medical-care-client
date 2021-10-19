import React from 'react';
import Expert from '../Expert/Expert';


const experts = [
    {
        img: 'http://st2.depositphotos.com/3889193/8319/i/450/depositphotos_83195332-Smiling-female-doctor-holding-medical-records.jpg',
        name: 'Kalitara Tithy',
        expertize: '-Rheumatologist specialised-'
    },
    {
        img:'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?size=626&ext=jpg',
        name: 'Arpa Saha',
        expertize: '-Cardiologist specialised-'
    },
    {
        img: 'https://us.123rf.com/450wm/andreyorlov/andreyorlov2103/andreyorlov210300012/165042449-medical-concept-of-asian-beautiful-female-doctor-in-white-coat-with-stethoscope-waist-up-medical-stu.jpg?ver=6',
        name: 'Omrin Khandaker',
        expertize: '-Brain And Mind Specialised-'
    },
    {
        img: 'https://5.imimg.com/data5/SELLER/Default/2021/5/EQ/CS/YC/124427792/hand-towels-500x500.JPG',
        name: 'Ashpriya Talukdar',
        expertize: '- Arthopedic specialist-'
    },
  ]

const Experts = () => {
    return (
<div className='container' id='Experts' >
            <marquee behavior="" direction=""><h2 className='text-primary fw-bold'>Our Experts</h2></marquee>
            <div className='row'>
                {
                    experts.map(expert=><Expert expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;