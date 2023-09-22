
import React from 'react'


const ProjectsList = () => {

    const ProjectsList = [
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
    <div>{ProjectsList}</div>
  )
}

export default ProjectsList


