
import React from 'react'
import { Link } from 'react-router-dom';




function Home() {
    return (
<div className='bg-neutral-500'>
        <div className="mx-auto w-full max-w-7xl ">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">

                    <img
                            src="./myph.jpg"
                            className=" h-12.4 rounded-3xl text-center"
                            alt="Logo"
                        />

                        <h2 className="text-4xl font-bold sm:text-5xl">
                            👋 Hii I'm Harsh

                         <h3 className='font-bold mt-5 text-xs sm:text-4xl'>Proficient MERN Stack Developer specializing in designing and implementing robust, scalable web applications. Expertise in MongoDB, Express.js, React.js, and Node.js, with a strong focus on creating seamless user experiences and efficient, full-stack solutions for modern businesses</h3>

                            <span className="hidden sm:block text-4xl"> Mern stack Developer</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium rounded-lg hover:opacity-75"
                            to="/"
                        >
                            
                            &nbsp; 
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    {/* <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" /> */}
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                {/* <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" /> */}
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium"></h1>
        </div>
        </div>
    );

}
export default Home;
// npx create-react-app amazon-clone
// cd amazon-clone
// npm install axios react-router-dom @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
