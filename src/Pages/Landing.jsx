import { Nav } from "../Components/Nav"
import reactimage from "../images/react64.png"
import mongodb from "../images/mongodb.png"
import express from "../images/express.png"
import nodejs from "../images/nodejs.png"
import redux from "../images/redux.png"
import typescript from "../images/typescript.png"
import jest from "../images/jest64.jpg"
import js from "../images/javascript.png"
import css3 from "../images/css3.png"
import html from "../images/html5.png"
import tailwind from "../images/tailwind-css.png"
import git from "../images/git.png"
import ar from "../images/ar (1).png"
import { useNavigate } from "react-router-dom"





const Landing = () =>{
    const navigate = useNavigate();
    return(
       
        <div className="font-poppins">
        <div className="">
        <Nav/>
        <div className="relative w-96 h-96 m-auto  flex justify-center items-center bg-gradient-to-b rounded-full from-custompurple  p-5  mb-2 cb:p-4 lb:p-5 mt-5 lbr:w-80 lbr:h-80 4:pb-6  4:pt-6">
            <img src={ar} alt="icon" className="w-full h-full object-cover ml-6 " />
        </div>
       <div className=" text-center">
        <h1 className=" text-2xl cb:text-4xl font-poppins text-custompurple 4:mt-4">Shah Arsalan Hussain </h1>
        <h2 className=" text-gray-500">Mern Developer</h2>
       </div>

       <div className="text-center max-w-xl m-auto py-2 px-14 text-m font-medium text-gray-700 mb-4">
<p> Hey there! If you are looking for a MERN developer then you have come to the right place . Take a look around and if you like what you see, let's connect!</p>
       </div>
       <div className="m-auto space-x-6 space-y-2 text-xl">
     <a href="https://www.linkedin.com/in/shah-arsalan-hussain-73147021a/"> <i className="fab fa-linkedin text-custompurple hover:text-purple-900  cursor-pointer"></i></a>  
     <a href="https://twitter.com/Shah_Arsalan2">  <i className="fab fa-twitter text-custompurple hover:text-purple-900 cursor-pointer"></i></a>
      <a href="https://github.com/Shah-Arsalan"> <i  className="fab fa-github icon text-custompurple hover:text-purple-900 cursor-pointer"></i></a>
       </div>
       <div className="text-center text-custompurple p-1 flex  justify-center items-center mt-2 4:mt-6">
       <a href="#projects"><i className="fas fa-angle-double-down  hover:text-purple-900 cursor-pointer"></i></a>
       </div>
       </div>
       <h1 className=" text-custompurple text-2xl cb:text-4xl mt-7 mb-7">Tech Stack I offer</h1>
       <div className=" space-y-10 mt-10 mb-10">
       <div className="flex gap-12 justify-center items-center  lb:gap-28 cb:gap-36  4:gap-10">
        <img src={reactimage} />
        <img src={mongodb} />
        <img src={express} />
        
       </div>

       <div className="flex gap-12 justify-center items-center lb:gap-28 cb:gap-36  4:gap-10">
       <img src={nodejs}/>
        <img src={redux} />
        <img src={tailwind} />
       </div>
       <div className="flex gap-12 justify-center items-center lb:gap-28 cb:gap-36  4:gap-10">
       
        <img src={typescript} />
        <img src={jest} />
        <img src={js} />
        
       </div>
      
       <div className="flex gap-12 justify-center items-center lb:gap-28 cb:gap-36">
       <img src={git} />
       <img src={css3} />
        <img src={html} />
       </div>


       </div>
       <a name="projects"><button className="rounded bg-custompurple py-3 px-3 hover:bg-purple-900 text-white mt-8 mb-8"  onClick={() => navigate("/projects")}>Browse Projects ➲ </button></a>
        </div>
       
    )
}

export{Landing}