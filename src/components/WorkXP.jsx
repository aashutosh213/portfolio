import React from 'react';
import { workXpData } from '@/Data/WorkXpData';

const WorkXP = () => {
    return (
        <div id='WorkXP'  className='flex flex-col mt-12 py-3 w-3/5 text-[#383d41] '>
            <div className='text-4xl text-center font-black mb-6'> Work XP</div>
            <div className='flex flex-col justify-center mt-3 w-full rounded-xl bg-white drop-shadow-xl'>
                {workXpData.map( (item, index) => {
                    return(
                        <div key={index} className={'flex flex-col text-center my-4 mx-4 py-3 border-2 border-[#383d41] rounded-xl'}>
                            <a href={item.link}>
                <div className='flex flex-row justify-evenly my-6 items-center '>
                    <p className='text-2xl font-bold px-2 rounded-full hover:bg-[#35b2cc]'>{item.title}</p>
                    <p className='text-lg font-medium text-black-400'>{item.duration}</p>
                </div>
                <p className='text-lg text-left px-10 font-medium text-black-550'>{item.designation}</p>
                <div className=' px-10 mb-8 list-outside text-justify'>
                {item.workedOn.map((itm, idx)=>{
                    return (<li key={idx} className='text-base text-black-400 font-medium'>{itm}</li>);
                })}
                </div>
                
                        </a>
                        </div>
                    );
                })}
            </div>            
        </div>
    );
};

export default WorkXP;