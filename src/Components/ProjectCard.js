import React from 'react'


const ProjectCard =(ProjectsList ) =>
    {
        return (

            <div className="mx-5 md:mx-40 sm:p-4 px-1 py-4 " >
            <div className=" bg-blue-100 shadow-md rounded-lg p-5 ">
                <div className="flex justify-between border-dotted border-b-4 border-white">

                    <h1 className="font-serif font-semibold text-xl my-3  text-blue-900"> {ProjectsList.Title} </h1>
                    {/* <h1>{ProjectsList.Date}</h1> */}
                </div>
                <p className="font-medium ">{ ProjectsList.Summary}</p>
            <div>
                <h1>During the Course of this Project</h1>
                {
                    ProjectsList.Implementations.map((item, index) => {
                        return <li key={index +1}>{item}</li>
                    })
                }
            </div>
            
            <ul className=' list-none flex flex-wrap  '>

                {
                    ProjectsList.Skills.map((item, index) => <li key={index+2} className="bg-slate-50 m-1 p-1 rounded-lg">{item}</li>)
                }
            </ul>
            {/* xl:mx-80 md:mx-20 mt-5 */}
            <div className="  py-2 flex justify-around">
                <a className='from-blue-300  to-blue-700 bg-gradient-to-br shadow-md hover:animate-none animate-pulse rounded-lg sm:p-2 sm:font-semibold sm:text-lg p-1 font-semibold text-sm  ' href={ProjectsList.DemoLink} target='_blank' rel="noopener noreferrer"> Demo Link🔗</a>
                

                <a className='from-blue-700 to-blue-300 bg-gradient-to-br shadow-md hover:animate-none animate-pulse rounded-lg sm:p-2 sm:font-semibold sm:text-lg p-1 font-semibold text-sm' href={ProjectsList.CodeLink} target='_blank' rel="noopener noreferrer"> Code Link🔗</a>

            </div>
            

            </div>
            </div>
    
        )

    }


export default ProjectCard