import React from 'react'
import htmlLogo from "../assets/htmlLogo.jpg"
import CLogo from "../assets/CLogo.jpg"
import cssLogo from "../assets/cssLogo.jpg"
import GitLogo from "../assets/GitLogo.jpg"
import JavaScriptLogo from "../assets/JavaScriptLogo.jpg"
import PythonLogo from "../assets/PythonLogo.jpg"
import ReactLogo from "../assets/ReactLogo.jpg"
import TailwindCssLogo from "../assets/TailwindCssLogo.jpg"
import App from "../App"

const Skills = () => {

  const SkillsList = [
    {
      Icon : ReactLogo,
      Name : "React"
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
    }
  ]

  const SkillCard = (skill) =>
  {
    return (
      <div className="p-3  items-center">
        <div className="h-20  w-20 ">
          <img className="  hover:p-1 bg-transparent hover:animate-pulse  shadow-md p-2 rounded-md mx-auto h-16 w-16" src= { skill.Icon } alt="SkillLogo"/>
          <h2 className= " text-center font-serif  font-bold text-md">{skill.Name}</h2>
        </div>
        
      </div>
    )
  }


  return (
    <div className = "   bg-gradient-to-r p-4 from-blue-400 via-blue-100 to-blue-400 ">
      

    <div className='flex flex-wrap justify-center'>

        <h1 className= " text-center font-serif text-blue-900 font-bold text-4xl" > Skills  </h1>
        <a href="#Profile" className="px-4 py-2 rounded-full shadow-md animate-pulse hover:animate-bounce bg-gradient-to-l from-blue-800 via-white to-blue-800 "> ↑ </a>
    </div>
    
    <div className=" md:px-40 md:mx-40 px-10 flex justify-between flex-wrap bg-blue-200 rounded-lg m-6">
      

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