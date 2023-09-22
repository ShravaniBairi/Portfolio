import React from 'react'
import ProjectCard from "./ProjectCard"

const Projects = () => {

    const ProjectsList = [
        {
            Title: "Food Ordering App",
            Date: "Aug 2023",            
            Summary: "Developed a robust and performing food ordering application, akin to Swiggy, with a focus on scalability, fast loading times, and a seamless user experience.",
            Implementations: ["Integrated Swiggy API for a wide selection of restaurants, ensuring up-to-date options", 
                            "Efficient debouncing search to improve performance and reduce network calls.",
                            "Cached frequently used data in Redux store, boosting app and also Mobile-first approach allowed me to prioritize essential elements and create a solid foundation for the responsive layout."
                            ],
            Skills: ["Deployment", "Netlify",
            "Tailwind CSS",
            "Redux",
            "React",
            "React State & Props",
            
            "Debouncing",
           "LIFECYCLE METHODS",
            "React Router",
            "Material UI",
            "Responsive Design",
            "React Hooks",
            "Angular",
            "REST",
            "JSON",
            "Error Handling",
            "Developer Tools",
            "ES6",
            "Conditional Rendering",
            "Event Handling"],
            DemoLink : "https://drive.google.com/file/d/1EDKFy4jyzZxEsxcBtvhFQy2K3-l8-kYG/view?usp=sharing",
            CodeLink : "https://github.com/ShravaniBairi",

        },
        {
            Title: "QTripDynamic",
            Date: "Jun 2023",            
            Summary: "QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities.",
            Implementations: ["Created web pages using HTML and CSS and made them dynamic using JavaScript", 
                            "Improved UX with multi-select filters, image carousels",
                            "Utilised localStorage to persist user preferences at client-side"
                            ],
            Skills: ["Netlify CLI",
            "Deployment",
            "Heroku",
            "Netlify",
            "Conditional Rendering",
            "Bootstrap Carousel",
            "Event Handling",
            "localStorage",
            "HTML",
            "CSS",
            "ES6",
            "JavaScript",
            "Developer Tools",
            "Bootstrap",
           " HTTP",
            "REST",
            "Responsive Design",
            "VS Code Live Server",
            "DOM Manipulation",
            "cURL",
           "JSON",
        ],
            DemoLink : "https://bairis-qtrip-dynamic-frontend.netlify.app/",
            CodeLink : "https://github.com/ShravaniBairi",

        },
        {
            Title: "XBoard",
            Date: "Julu 2023",            
            Summary: "XBoard is a News Feed website that will feature the latest news for select topics, from Flipboard.",
            Implementations: ["Built XBoard using HTML, CSS, Bootstrap and JavaScript from scratch", 
                            "Used Accordions and Image Carousel to improve UI",
                            "Fetched news content from flipboard's RSS feed using REST API"
                            ],
            Skills: [
            "HTML",
            "CSS",
            "Figma",
            "Bootstrap",
           "ES6",
            "JavaScript",
            "DOM Manipulation",
            "Developer Tools",
            "REST",
            "JSON",
            "Netlify",
            "Netlify CLI",
            "Deployment",
            "VS Code Live Server",
            "Bootstrap Carousel"],
            DemoLink : "https://bairi-xboard.netlify.app/",
            CodeLink : "https://github.com/ShravaniBairi",

        },
        {
            Title: "QTripStatic",
            Date: "Jun 2023",            
            Summary: "QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities. ",
            Implementations: ["Created 3 different web pages from Wireframe layout using HTML and CSS", 
                            "Utilized Bootstrap extensively for responsive design",
                            "Deployed the website to Netlify"
                            ],
            Skills: ["Bootstrap Display",
            "CSS Positioning",
            "Bootstrap Responsive Images",
            "Bootstrap Flex",
            "Bootstrap Spacing",
            "HTML",
            "CSS",
            "Developer Tools",
            "Bootstrap",
            "CSS Flexbox",
            "Responsive Design",
            "VS Code Live Server",
            "Deployment",
            "Netlify",
            "Netlify CLI"
        ],
            DemoLink : "https://bairi-rajvenkat-qtrip.netlify.app/",
            CodeLink : "https://github.com/ShravaniBairi",

        },
        {
            Title: "QKartFrontend",
            Date: "Jun 2023",            
            Summary: "QKart is an e-commerce application offering a variety of products for customers to choose from.",
            Implementations: ["Implemented the core logic for authentication, shopping cart and checkout", 
                            "Improved UI by adding responsive design elements for uniform experience across different devices",
                            "Utilized REST APIs to dynamically load and render data served by the backend server"
                            ],
            Skills: ["Deployment", "Netlify",
            "Material UI Grid",
            "Keyword Search",
            "Debouncing",
           "LIFECYCLE METHODS",
            "React Router",
            "Material UI",
            "Responsive Design",
            "localStorage",
            "React Hooks",
            "Forms",
            "Controlled Components",
            "REST",
            "JSON",
            "Error Handling",
            "Developer Tools",
            "ES6",
            "Conditional Rendering",
            "React State & Props",
            "React",
            "Event Handling"],
            DemoLink : "https://bairis-qkart-frontend.netlify.app/",
            CodeLink : "https://github.com/ShravaniBairi",

        },
    ]

    
  return (
    <div className="bg-gradient-to-r from-blue-400 via-blue-100 to-blue-400 p-4">

        <div className='flex flex-wrap justify-center'>
        <h1 className= " text-center font-serif text-blue-900 font-bold text-4xl" > Projects  </h1>
        <a href="#Profile" className="px-4 py-2 rounded-full shadow-md animate-pulse hover:animate-bounce bg-gradient-to-r from-blue-800 via-white to-blue-800 "> ↑ </a>
        </div>

       

       { ProjectsList.map((Project) => {
        return (
            <div>
                {
                    <ProjectCard key={Project.Title} {...Project} />
                }
            </div>
        )
       })
    }

       




    </div>
  )
}

export default Projects