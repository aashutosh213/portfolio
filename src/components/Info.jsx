import Image from 'next/image';
import React, {useState, useEffect} from 'react';

const manit_logo = '/assests/manit_logo.png';

const Info = () => {
//     const [image, setImage] = useState(null);

//   useEffect(() => {
//     const url = '/Images/manit_logo.png';
//     const imageRef = new Image();
//     imageRef.src = url;
//     imageRef.onload = () => {
//       setImage(imageRef);
//     };
//   }, []);
    return (
        <div id='info' className='flex flex-col justify-center my-5 w-3/5'>
            <h2 className='text-3xl font-black text-center'>Info</h2>
            <div className='flex flex-row my-4 py-4 border-2 border-[#383d41] px-3 justify-around bg-white rounded-xl drop-shadow-xl'>
            <Image className='mx-2' src={manit_logo} style={{objectFit: "contain"}} alt='MANITLogo' width={136} height={100} />
            {/* <img src="./Images/manit_logo.png" alt='manit logo' width={100} height={100}/> */}
                <h2 className='text-lg py-3 mx-2 font-medium text-slate-500 text-justify'>
                    Recently graduated from Maulana Azad National Institute of Technology, Bhopal, India, where, I earned a Bachelor of Technology in Mechanical Engineering with a GPA of 7.15.
                    I have prepared myself for a career in software engineering. I have a strong foundation in computer science, as well as experience with a variety of programming languages, 
                    including C, C++, JavaScript, SQL, JQuery, HTML, CSS, React.js, Node.js, Python, and Java(Core). I'm also experienced with a variety of platforms and tools, including git, 
                    PostgreSQL, MongoDB, and Firebase. In addition to my technical skills, I was also an active member of Aaroha(An NGO) and enjoys playing volleyball, chess, reading novels, and video games.
                </h2>
            </div>
        </div>
    );
};

export default Info;