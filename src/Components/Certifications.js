import React from 'react'

const Certifications = () => {
    const CertificationsList = [
        {
            Name:"introduction to programming using Python",
            Lisence: "https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_100_100/0/1608039227697?e=1703721600&v=beta&t=kX67arGgslU6F06se18A55Zi0quLe1FIA1ETOgiNDWM",
            Link : "https://coursera.org/verify/JB89MH7LAZFX",
            LisenceName:"Coursera"

        },
        {
            Name:"React",
            Lisence:"https://media.licdn.com/dms/image/C4D0BAQFd9H6cxFC3wQ/company-logo_100_100/0/1609757753431?e=1703721600&v=beta&t=gUhQi61igFiwTk3qyVsoXs2_v_iTkbRtKD2hfja9AN8",
            LisenceName: "NamasteDev",
            Link : "https://courses.namastedev.com/learn/certificate/8359728-142240"

        },
        {
            Name:"JavaScript",
            Lisence:"https://media.licdn.com/dms/image/C4D0BAQHYemd2p7TxeQ/company-logo_100_100/0/1673333565608?e=1703721600&v=beta&t=FIJO0vWmDu5zvPFoRoLq9Pp50CI-X3ke3435qxq25I8",
            LisenceName: "Hacker Rank",
            Link : "https://www.hackerrank.com/certificates/f9c6cca85e16"

        },
    ]

    const CertificationsCard =(card) => {
        return(
            <div className="   flex flex-center p-2 border-b-2 border-blue-300 border-dotted ">
                <div>
                    <img className="rounded-full mr-2 h-16 w-16" src={card?.Lisence} alt={card?.LisenceName}/>
                </div>
                <div>
                    <h1> </h1>
                    <a href={card?.Link} target="_blank" rel="noopener noreferrer"> {card?.Name} </a>
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