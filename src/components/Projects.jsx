import React from 'react';
import { projectData } from '@/Data/ProjectData';

const Projects = () => {
    return (
        <div id='projects' className='mt-10 py-3 w-3/5 flex flex-col justify-center'>
            <h1 className='text-4xl text-center font-black'>
                Projects
            </h1>
            <div className='flex flex-col justify-center mt-3 w-full rounded-xl bg-white drop-shadow-xl'>
                {projectData.map( (item, index) => {
                    return(
                        <div key={index} className={'flex flex-col text-center my-4 mx-4 py-3 border-2 border-[#383d41] rounded-xl'}>
                            <div className='flex flex-row justify-between mx-4'>
                                <h1 className='flex flex-row text-2xl font-bold' key={index}>{item.pname}</h1>
                                <div className='flex flex-row'>
                                    <a key={index} href={item.deploy} className={item.deploy == "NULL"? "hidden":"mr-1"}>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                            </svg>
                                        </p>    
                                    </a>
                                    <a key={index} href={item.ghLink} className={item.ghLink == "NULL"? "hidden":"mr-1"}>
                                        <p>
                                            <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-slate-900"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path></svg>
                                        </p>
                                    </a>
                                </div>
                            </div>
                            <h2 className='text-lg mx-6 text-justify py-3 font-medium text-slate-500' key={index}>{item.pdetails}</h2>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;