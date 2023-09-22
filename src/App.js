import Profile from "./Components/Profile"
import Skills from "./Components/Skills"
import Experience from "./Components/Experience";
import Certifications from "./Components/Certifications";
import Contacts from "./Components/Contacts";
import './App.css';
import Projects from "./Components/Projects";


function App() {

  
  return (
    <div className= "bg-gradient-to-r from-blue-400 via-blue-100 to-blue-400" >

      <div id="Profile">
      <Profile  />
      </div>

      

      <div>

      <div className="flex flex-wrap justify-center  xl:px-60 sm:px-10 sm:mx-10   px-4 ">

      
        <a className="m-4 font-bold h-auto sm:px-16 sm:py-10   p-2  animate-pulse hover:animate-none  rounded-lg  shadow-lg  bg-gradient-to-tr  from-blue-400 to-red-500 "  href="#Skills" > Skills </a>
      
      
        <a className=" m-4 font-bold  h-auto sm:px-16 sm:py-10 p-2  animate-pulse hover:animate-none   rounded-lg  shadow-lg  bg-gradient-to-tr  from-pink-400 to-blue-500 "  href="#Certifications"> Certifications </a>
      
      
        <a className=" m-4 font-bold  h-auto sm:px-16 sm:py-10 p-2  animate-pulse hover:animate-none   rounded-lg  shadow-lg  bg-gradient-to-tr  from-purple-600 to-red-500 "  href="#Projects"> Projects </a>
      
        <a  className=" m-4 font-bold  h-auto sm:px-16 sm:py-10 p-2  animate-pulse hover:animate-none  rounded-lg  shadow-lg  bg-gradient-to-tr  from-red-400 to-yellow-500 "  href="#Experience"> Industrial Experirence </a>
      
        <a  className=" m-4 font-bold  h-auto sm:px-16 sm:py-10 p-2  animate-pulse hover:animate-none   rounded-lg  shadow-lg  bg-gradient-to-tr  from-orange-800 to-gray-500 "  href="#Contacts"> Contact Me </a>
      
      
      
      </div>
      </div>
    
    
    <div id="Skills"> <Skills /> </div>
    
    <div id="Experience"> <Experience /> </div>
    <div id="Projects"> <Projects /> </div>
   
    <div id="Certifications">
    <Certifications />
    </div>
    <div id="Contacts">
      <Contacts />
    </div>
    
    
    </div>
  );
}

export default App;
