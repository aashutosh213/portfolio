import React from 'react';

const WorkXP = () => {
    return (
        <div id='WorkXP'  className='flex flex-col mt-12 py-3 w-3/5 text-[#383d41] '>
            <div className='text-4xl text-center font-black mb-6'> Work XP</div>
            <a href="https://katonic.ai" className='border-2 border-[#383d41] rounded-xl bg-white shadow-xl'>
                <div className='flex flex-row justify-evenly my-6 items-center '>
                    <p className='text-2xl font-bold px-2 rounded-full hover:bg-[#35b2cc]'>Katonic</p>
                    <p className='text-sm font-medium text-slate-400'>Mar,2022 - May,2022</p>
                </div>
                <div className=' px-10 mb-8 list-outside text-justify'>
                    <li className='text-base text-slate-400 font-medium'>
                        Developed and maintained the primary company website, increasing monthly traffic by 20% through regular content updates and optimizations.
                    </li>
                    <li className='text-base text-slate-400 font-medium'>
                        Utilized Docusaurus to create comprehensive documentation for company products, resulting in a 30% decrease in customer support inquiries.                    
                    </li>
                    <li className='text-base text-slate-400 font-medium'>
                        Implemented a robust CICD pipeline for the documentation site, reducing deployment time and ensuring timely updates for customers.                    
                    </li>
                </div>
            </a>
            
        </div>
    );
};

export default WorkXP;