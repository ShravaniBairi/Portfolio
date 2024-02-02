import React from 'react'

const Certifications = () => {
    const CertificationsList = [
        {
            Name:"introduction to programming using Python",
            Lisence: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShg2cCJSkb9VN78Tr2mQxrfVGArUdSLlOeIg&usqp=CAU",
            Link : "https://coursera.org/verify/JB89MH7LAZFX",
            LisenceName:"Coursera"

        },
        {
            Name:"React",
            Lisence:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSrjLBguJLYnyDsiVUCBmSfpKTX4oV2Sj6OUHDN8ITNQTw6LxKv",
            LisenceName: "NamasteDev",
            Link : "https://courses.namastedev.com/learn/certificate/8359728-142240"

        },
        {
            Name:"JavaScript",
            Lisence:"https://thesourcecode.academy/wp-content/uploads/2022/08/HackerRank2.png",
            LisenceName: "Hacker Rank",
            Link : "https://www.hackerrank.com/certificates/f9c6cca85e16"

        },
        {
            Name:"Meta Frontend Developer",
            Lisence: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/1200px-Meta-Logo.png",
            LisenceName: "Meta-Coursera",
            Link: "https://www.coursera.org/account/accomplishments/verify/SKU5RV234XZ6"
        },
        {
            Name:"Meta Frontend Developer - JavaScript",
            Lisence: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/1200px-Meta-Logo.png",
            LisenceName: "Meta-Coursera",
            Link: "https://www.coursera.org/account/accomplishments/verify/HWMZ8X6T8CAT"
        },
        {
            Name:"Meta Frontend Developer - Version Control",
            Lisence: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/1200px-Meta-Logo.png",
            LisenceName: "Meta-Coursera",
            Link: "https://www.coursera.org/account/accomplishments/verify/EB7UMN2KXLUT"
        }
    ]

    const CertificationsCard =(card) => {
        return(
            <div className="   flex flex-center p-2 border-b-2 border-blue-300 border-dotted ">
                <div>
                    <img className="rounded-full mr-2 h-16 w-16" src={card?.Lisence} alt={card?.LisenceName}/>
                </div>
                <div>
                    <h1> </h1>
                    <a className="font-bold" href={card?.Link} target="_blank" rel="noopener noreferrer"> {card?.Name} </a>
                    <div>Issued By: {card?.LisenceName}
                         
                    </div>
                </div>
            </div>
        )
    }
  return (
    <div>
        <div className='flex flex-wrap justify-center p-4'>

<h1 className= " text-center font-serif text-blue-900 font-bold  text-3xl sm:text-4xl" > Certifications  </h1>
<a href="#Profile" className="px-4 py-2 rounded-full shadow-md animate-pulse hover:animate-bounce bg-gradient-to-l from-blue-800 via-white to-blue-800 "> ↑ </a>
</div>

<div  className="mx-5 md:mx-44 rounded-lg p-4 bg-blue-100 ">
{
    
      CertificationsList.map((skill, index ) => { 
      return(
        <CertificationsCard key={skill.Name} {...skill} />

      )})
}
</div>
        



    </div>
  )
}

export default Certifications