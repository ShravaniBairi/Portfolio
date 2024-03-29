import React from 'react'

const Experience = () => {
const CompanyDetails = [
  {
    Name: "Infosys ",
    Role: "Systems Engineer",
    Website: "https://www.infosys.com/",
    Duration:"July 2021 - June 2023",
    Technologies: ["Reactjs",  "Javascript", "HTML5", "CSS", "react-router-dom", "Java", "TypeScript", "Vue.js", "Bootstrap", "Github",  "JSX", "Tailwind CSS", "Responsive Design", "Webpack", "Parcel", "jira", "C", "Java", "C++", "Python", "Data Structures & Algorithms", "SDLC"],
    Summary: [
      {
        Title:"Frontend Development",
        Discription:"Worked on developing web components with proficiency in React.js, Vue.js, Angular, TypeScript, JavaScript, CSS, HTML, and Tailwind CSS with a strong emphasis on creating visually appealing and user-friendly applications.",
      }
    ],
   
    Challenges: [
      
      {
        Title: "Dynamic UI Enhancement:",
        Discription: "Leveraged React.js to transform static HTML and CSS web pages into dynamic, responsive interfaces, utilizing components for seamless updates and improved user interaction."
      },
      {
        Title: "User-Focused Features:",
        Discription: "Integrated React.js to implement multi-select filters, image carousels, and conditional rendering, enhancing the overall user experience with personalized content and interactive elements."
      },
      {
        Title: "Data Persistence and Interaction:",
        Discription: "Employed React.js along with localStorage and the fetch API to persist user preferences client-side and facilitate smooth reservation form submissions, ensuring a seamless and consistent user journey."
      },
      {
        Title: "Cross-Browser Compatibility Mastery:",
        Discription: "Successfully addressed challenges to ensure consistent rendering and functionality across multiple browsers."
      },
      {
        Title: "Performance Optimization Leadership:",
        Discription: " Spearheaded Performance Optimization efforts, significantly improving page loading times and enhancing user engagement."
      },
      {
        Title: "Responsive Design Expertise:",
        Discription: "Led efforts in mastering Responsive Design techniques, developing layouts that seamlessly adapt to various screen sizes and devices."
      },
      {
        Title: "",
        Discription: "Proficient in Responsive Design, Collaborative Solution Delivery, Commitment to Innovation, and Design-Driven Approach for crafting seamless and visually appealing web experiences."
      },

    ],


  },
  {
    Name: "NamasteDev ",
    Role: "React Developer Trainee",
    Website: "https://www.NamasteDev.com",
    Duration:"June 2023 - sep 2023",
    Technologies: ["Reactjs", "Javascript", "JSX", "HTML5", "CSS", "react-router-dom", "TypeScript", "Bootstrap", "Github", "Tailwind CSS", "Responsive Design", "Webpack", "Parcel", "jira", "C", "Java", "C++", "Python", "Data Structures & Algorithms", "SDLC"],
    Summary: [
      {
        Title:"Frontend Development",
        Discription:"Developed a robust and performing food ordering application - similar to Swiggy with a focus on scalability, fast loading times, and a seamless user experience, with RESTful web services, design patterns and micro-services architecture"
      }
    ],
   
    Challenges: [
      {
        Title: "Real-time Restaurants:",
        Discription: "Integrated Swiggy API for a wide selection of restaurants, ensuring up-to-date options"
      },
      {
        Title: "Optimized Search Engine:",
        Discription: " Efficient debouncing search to improve performance and reduce network calls."
      },
      {
        Title: "Enhanced Responsiveness:",
        Discription: "Cached frequently used data in Redux store, boosting app and also Mobile-first approach allowed me to prioritize essential elements and create a solid foundation for the responsive layout."
      },

    ],


  }
]

const ExperienceCard= (item) => {
  return (
    <div className="sm:mx-5 mx-2 md:mx-40 sm:p-4 p-2 ">
      <div  className= " bg-blue-200 shadow-md rounded-lg p-5" >
      <div className="flex justify-between border-dotted border-b-4 border-white ">
        
        <div >
          
        
          <a className="font-serif font-semibold text-xl  my-3  text-blue-900" href={item.Website} target='_blank' rel="noopener noreferrer">{ item.Name}🏢  </a> <h2>{item.Role}</h2>

        </div>

        <h1 className="text-xs my-2">{item.Duration}</h1>



      </div>

      <div>

      {
      item.Summary.map((Challenge, index)=>
          {
            return(
          <div key={index}>
            <span className="font-medium">{Challenge.Title}: </span> 
            <span>{Challenge.Discription}</span>
            </div>
          )}
            )
            }

        
      </div>

      <ul className=" list-none flex flex-wrap ">
        {
          item.Technologies.map((skill, index)=><li key={index} className="bg-gradient-to-tl bg-p from-blue-300 to-blue-400 p-3 m-2 rounded-md">{skill}</li>)
        }
      </ul>
      
      <ul className=" list-disc mx-4">
        {
          item.Challenges.map((Challenge, index)=>
          {
            return(
          <li key={index}>
            <span className="font-medium">
            {Challenge?.Title}
            </span> <span>{Challenge?.Discription}</span>
            </li>
          )}
            )
            
        }
      </ul>


      </div>


    </div>
  )
}

  return (
    <div>

<div className='pt-16 flex flex-wrap justify-center'>
          <h1 className= " text-center font-serif text-blue-900 font-bold text-3xl sm:text-4xl">Experience  </h1>
          <a href="#Profile" className="px-4 py-2 rounded-full shadow-md animate-pulse hover:animate-bounce bg-gradient-to-r from-blue-800 via-white to-blue-800"> ↑ </a>
          </div>
      

      {
      CompanyDetails.map((item) => {
        return(
          <div className="bg-gradient-to-r from-blue-400 via-blue-100 to-blue-400 ">
          
          
          <ExperienceCard key={item.Name} {...item}/>
          </div>

        )
        
      })
      }
      
    </div>
  )
}

export default Experience