import React from 'react'
import PhoneLogo from "../assets/phone.jpg"
import GitHubLogo from "../assets/github.jpg"
import email from "../assets/email.jpg"
import linkedinLogo from "../assets/linkedin.jpg"
import location from "../assets/location.jpg"

const Contacts = () => {

    const MediaDetails = [
        {
            icon: email,
            link: "mailto:Shravani286k@gmail.com ",
            Name: "email"
        },
        {
            icon: linkedinLogo,
            link: "https://www.linkedin.com/in/bairi-shravani",
            Name: "linkedin"
        },
        {
            icon: GitHubLogo,
            link: "https://Github.com/ShravaniBairi",
            Name: "GitHub"
        },
        
        {
            icon: PhoneLogo,
            link: "tel:+49 15212407213",
            Name: "mobile"
        },
        {
            icon: location,
            link: "https://www.google.com/search?q=Nuremberg%2C+Bavaria+Germany&oq=Nuremberg%2C+Bavaria+Germany&aqs=chrome..69i57j46i512j0i22i30l7.11118j0j9&sourceid=chrome&ie=UTF-8#",
            Name: "location"
        },
    ]

    const ContactsCard = (card) => {
        return (
            <div>
                <div>
                    <div className="p-4  rounded-full shadow-md ">
                    <a href= {card.link} target='_blank' rel='noopener noreferrer'>
                    <img className="lg:h-10 lg:w-10 h-8 w-8 hover:animate-pulse  "src={card.icon} alt= {card.Name} />
                    </a>
                    </div>
                    <h2 className="text-center text-lg font-semibold">{card.Name}</h2>

                </div>
            </div>
        )
    }
  return (
    <div>
        <div className='flex flex-wrap justify-center'>

<h1 className= " text-center font-serif text-blue-900 font-bold text-4xl" > Contact Me...</h1>
<a href="#Profile" className="px-4 py-2 rounded-full shadow-md animate-pulse hover:animate-bounce bg-gradient-to-l from-blue-800 via-white to-blue-800 "> ↑ </a>
</div>
        <div className="  md:mx-40 px-10 flex justify-between flex-wrap m-6">
            {
                MediaDetails.map((card, index)=>{
                    return (
                        <ContactsCard key={index} {...card} />
                    )
                })

            }
        </div>


    </div>
  )
}

export default Contacts