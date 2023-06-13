'use client';
import React from 'react';
import Typewriter from 'typewriter-effect';


const About = () => {
    
    return (
        <div id='about' className='flex flex-col py-18 justify-center justify-items-center w-full'>
            <div className='flex flex-col items-center justify-center'>
            <h1 className='flex text-6xl mt-2 bg-[#35b2cc] py-4 px-8 rounded-full'>
                <Typewriter
                    options={{
                        strings: ["Hi! I'm Aashutosh.", "A Developer"],
                        autoStart: true,
                        loop: true,
                        cursor:'▍'
                    }}
                />
            </h1>
            </div>

        </div>
    );
};

export default About;