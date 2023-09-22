import React from 'react';
import ProfileImg from "../assets/ProfileImg.jpg"

const Profile = () => {
  return (
    <div className="md:flex justify-between pt-4 bg-gradient-to-r  from-blue-400 via-blue-100 to-blue-400 ">
      <div >
        <div className="sm:max-xl:p-10 lg:py-8 ">
            <img className=" h-32  w-32  md:h-64  md:w-64 xl:h-68 xl:w-68 md:mt-8 md:mx-12  shadow-md rounded-full mx-auto " src={ProfileImg} alt="Profile" />

        </div>
        </div>

        <div className="md:w-9/12 md:mx-5 lg:my-4 sm:my-2 sm:mx-2  w-auto mx-auto md:py-4 md:px-8 p-4" > 
            <h1 className='md:text-2xl text-xl text-center md:text-left  font-semibold md:m-4 font-serif text-gray-800 '> Hello...👋</h1>

            
            <h1 className="lg:text-4xl md:text-2xl text-center md:text-left text-2xl text-blue-900 lg:my-6 lg:mx-4  md:m-4  font-bold font-serif"> <span className="md:text-2xl text-xs font-serif font-bold">I am </span>Shravani Bairi</h1>
            <h2 className=" md:text-2xl text-center md:text-left text-md  font-serif md:m-4  text-gray-800 font-semibold ">Passionate Frontend Developer | Crafting Seamless Web Experiences</h2>
            <p className='md:text-xl text-center md:text-left  text-xs font-sans md:m-4 text-black font-semibold'> I'm thrilled to welcome you to my portfolio. As a dedicated Frontend Developer, I bring a blend of enthusiam and expertise to the world of web development.</p>

        </div>

    </div>
  )
}

export default Profile