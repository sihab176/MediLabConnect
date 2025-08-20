import React from 'react';
import Cards from './Cards';

const allData=[
    1,2,3,4,5,6,7,8
]

const CardContainer = () => {
    return (
        <div className='my-20'>
            this is ths card container
            <section className='grid grid-cols-4 gap-8'>
                {
                    allData.map((data,index)=><Cards index={index}/>)
                }
            </section>
        </div>
    );
};

export default CardContainer;