import React from 'react'
import htmlLogo from "../assets/htmlLogo.jpg"
import CLogo from "../assets/CLogo.jpg"
import cssLogo from "../assets/cssLogo.jpg"
import GitLogo from "../assets/GitLogo.jpg"
import JavaScriptLogo from "../assets/JavaScriptLogo.jpg"
import PythonLogo from "../assets/PythonLogo.jpg"
import ReactLogo from "../assets/ReactLogo.jpg"
import TailwindCssLogo from "../assets/TailwindCssLogo.jpg"
import javaLogo from "../assets/javaLogo.jpg"
import Vuejs from "../assets/VueJs.jpg"


const Skills = () => {

  const SkillsList = [
    {
      Icon : ReactLogo,
      Name : "React"
    },
    {
      Icon : Vuejs,
      Name : "Vue.js"
    },
    {
      Icon : JavaScriptLogo,
      Name : "JavaScript"
    },
    {
      Icon : htmlLogo,
      Name : "HTML"
    },
    {
      Icon : cssLogo,
      Name : "CSS"
    },
    {
      Icon : PythonLogo,
      Name : "Python"
    },
    {
      Icon : TailwindCssLogo,
      Name : "TailwindCSS"
    },
    {
      Icon : GitLogo,
      Name : "Git"
    },
    {
      Icon : CLogo,
      Name : "C"
    },
    {
      Icon : javaLogo,
      Name : "Java"
    }
  ]

  const SkillCard = (skill) =>
  {
    return (
      <div className=" py-2 mx-2 items-center">
        <div className="h-20  w-16 ">
          <img className="  hover:p-1 bg-transparent hover:animate-pulse  shadow-md p-2 rounded-md mx-auto h-16 w-16" src= { skill.Icon } alt="SkillLogo"/>
          <h2 className= " text-center font-serif  font-bold  text-sm sm:text-md">{skill.Name}</h2>
        </div>
        
      </div>
    )
  }


  return (
    <div className = "   bg-gradient-to-r py-4 px-2 sm:px-4 from-blue-400 via-blue-100 to-blue-400 ">
      

    <div className='flex flex-wrap justify-center'>

        <h1 className= " text-center font-serif text-blue-900 font-bold sm:text-4xl text-3xl" > Skills  </h1>
        <a href="#Profile" className="px-4 py-2 rounded-full shadow-md animate-pulse hover:animate-bounce bg-gradient-to-l from-blue-800 via-white to-blue-800 "> ↑ </a>
    </div>
    
    <div className=" xl:px-36 xl:mx-40 px-8 flex justify-between flex-wrap bg-blue-200 rounded-lg sm:m-6 m-2">
      

      {
      SkillsList.map((skill) => { 
      return(
        <SkillCard {...skill} />

      )})
}

      



</div>
        
    </div>
    
  )
}

export default Skills