import React from 'react';
import ProfileImg from "../assets/ProfileImg.jpg"

const Profile = () => {
  return (
    <div className=" flex justify-between p-4 m-8 bg-gray-200">
        <div>
            <img className=" h-96 w-96 my-8 mx-12  shadow-md rounded-full place-content-center" src={ProfileImg} alt="Profile" />

        </div>

        <div className="w-9/12 py-20 px-8" > 
            <h1 className='text-2xl font-semibold m-4 font-serif text-gray-800'> Hello...👋</h1>

            
            <h1 className=" text-5xl text-blue-800 my-8 mx-4 font-bold font-serif"> <span className="text-2xl text-gray-500 font-serif font-bold">I am </span>Bairi Shravani</h1>
            <h2 className=" text-2xl font-serif m-4  text-gray-800 font-semibold">Passionate Frontend Developer | Crafting Seamless Web Experiences</h2>
            <p className='text-xl font-sans m-4 text-black font-semibold'> I'm thrilled to welcome you to my portfolio. As a dedicated Frontend Developer, I bring a blend of enthusiasm and expertise to the world of web development.</p>

        </div>

    </div>
  )
}

export default Profile