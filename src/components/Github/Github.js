import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    // const data = useLoaderData()

  return (
    


    <div className=' bg-slate-950 text-center  text-slate-100 text-3xl h-900 w-100  '>
     <div className='inline-block '>   <img className="py-2 h-screen max-w-screen-2xl"src='https://user-images.githubusercontent.com/8391493/205162876-565ca6f5-391f-4167-9752-5aa737dc4b72.gif'/></div>
       
    <div>Social media Accounts :-  </div>

<ul>
    
    <li className="mb-4">
        <a
            href="https://github.com/harsh81r"
            className="hover:underline"
            target="_blank"
            rel="noreferrer"
            >
           @ Github
        </a>
    </li>
    
    
    <li className="mb-4">
        <a
            href="https://www.linkedin.com/in/harsh-khare-1a30412a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="hover:underline"
            target="_blank"
            rel="noreferrer"
            >
           @ Linkedin

        </a>
    </li>
         <li className="mb-4">
        <a
            href="https://github.com/harsh81r"
            className="hover:underline"
            target="_blank"
            rel="noreferrer"
            >
           
        </a>
    </li>
    
    
    
    
    </ul>
    
    </div>

  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}


















// <ul>
    
// <li className="mb-4">
//     <a
//         href="https://github.com/harsh81r"
//         className="hover:underline"
//         target="_blank"
//         rel="noreferrer"
//         >
//        @ Github
//     </a>
// </li>


// <li className="mb-4">
//     <a
//         href="https://www.linkedin.com/in/harsh-khare-1a30412a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
//         className="hover:underline"
//         target="_blank"
//         rel="noreferrer"
//         >
//        @ Linkedin
//     </a>
// </li>
//      <li className="mb-4">
//     <a
//         href="https://github.com/harsh81r"
//         className="hover:underline"
//         target="_blank"
//         rel="noreferrer"
//         >
       
//     </a>
// </li>




// </ul>
