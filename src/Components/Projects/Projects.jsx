import './Projects.css'

import { BsGithub, BsEye } from "react-icons/bs";
import toy1 from '../../../src/assets/Toy image/toy1.png'
import toy2 from '../../../src/assets/Toy image/toy2.png'
import toy3 from '../../../src/assets/Toy image/toy3.png'
import toy4 from '../../../src/assets/Toy image/toy4.png'
import toy5 from '../../../src/assets/Toy image/toy5.png'
import toy6 from '../../../src/assets/Toy image/toy6.png'
import toy7 from '../../../src/assets/Toy image/toy7.png'
import toy8 from '../../../src/assets/Toy image/toy8.png'
import toy9 from '../../../src/assets/Toy image/toy9.png'
import toy10 from '../../../src/assets/Toy image/10.png'
import toy11 from '../../../src/assets/Toy image/toy11.png'
import toy12 from '../../../src/assets/Toy image/toy12.png'

import sp1 from '../../../src/assets/sp/sp1.png'
import sp2 from '../../../src/assets/sp/sp2.png'
import sp3 from '../../../src/assets/sp/sp3.png'
import sp4 from '../../../src/assets/sp/sp4.png'
import sp5 from '../../../src/assets/sp/sp5.png'
import sp6 from '../../../src/assets/sp/sp6.png'
import sp7 from '../../../src/assets/sp/sp7.png'
import sp8 from '../../../src/assets/sp/sp8.png'
import sp9 from '../../../src/assets/sp/sp9.png'
import sp10 from '../../../src/assets/sp/sp10.png'
import sp11 from '../../../src/assets/sp/last.png'


import c1 from '../../../src/assets/chines/c1.png'
import c2 from '../../../src/assets/chines/c2.png'
import c3 from '../../../src/assets/chines/c3.png'
import c4 from '../../../src/assets/chines/c4.png'
import c5 from '../../../src/assets/chines/c5.png'
import c6 from '../../../src/assets/chines/c6.png'
import c7 from '../../../src/assets/chines/clast.png'
import Aos from 'aos';
import { useEffect } from 'react';
import { motion } from "framer-motion"

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
}, []);

    return (
<div id='projects' className='mt-12' data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500">
    <>
    <motion.p initial={{x :'-100vw'}} animate={{x:0}} transition={{delay:0.5,duration:0.5}}className='text-4xl lg:mx-[460px] text-center 2xl:text-5xl font-bold px-5 py-2 mb-6 pb-2 text-center hover:animate-bounce  text-white shadow-lg bg-blue-700 rounded-full'>
              My Projects
            </motion.p>
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  justify-center mt-5'>
      

      {/* Card 1 */}
      <div className='justify-center items-center flex'>
      <div className="card w-96  text-black shadow-xl">
        <div className="card-body">

      <div className="h-96 carousel carousel-vertical rounded-box">
  
  <div className="carousel-item h-full">
  <img src={sp1}></img>
  </div> 
  <div className="carousel-item h-full">
  <img src={sp2}></img>
  </div> 
  <div className="carousel-item h-full">
  <img src={sp3}></img>
  </div> 
  <div className="carousel-item h-full">
  <img src={sp4}></img>
  </div> 
  <div className="carousel-item h-full">
  <img src={sp5}></img>
  </div> 
  <div className="carousel-item h-full">
  <img src={sp6}></img>
  </div> 
  <div className="carousel-item h-full">
  <img src={sp7}></img>
  </div>
  <div className="carousel-item h-full">
  <img src={sp8}></img>
  </div>
  <div className="carousel-item h-full">
  <img src={sp9}></img>
  </div>
  <div className="carousel-item h-full">
  <img src={sp10}></img>
  </div>
  <div className="carousel-item h-full">
  <img src={sp11}></img>
  </div>
</div>

          <h2 className="card-title font-bold text-2xl">sport-academ</h2>
          <p className='text-lg'>Technologies </p>

          {/* Technology */}
          <div className='flex text-white '>
          <div className="card-actions justify-end">
            <p className='bg-indigo-700 rounded-xl p-3 hover:bg-indigo-950'>React</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-indigo-700 rounded-xl p-3 ml-2 hover:bg-indigo-950'>Tailwind</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-indigo-700 rounded-xl p-3 ml-2 hover:bg-indigo-950'>daisyUi</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-indigo-700 rounded-xl p-3 ml-2 hover:bg-indigo-950'>Firebase</p>
          </div>
          </div>
          <div className='flex text-white '>
          <div className="card-actions justify-end">
            <p className='bg-indigo-700 rounded-xl p-3 hover:bg-indigo-950'>Node JS</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-indigo-700 rounded-xl p-3 ml-2 hover:bg-indigo-950'>Express JS</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-indigo-700 rounded-xl p-3 ml-2 hover:bg-indigo-950'>MongoDB</p>
          </div>
          </div>
         
         {/* Link */}
          <div className="flex justify-between mt-5">
                    <a href='https://sport-academy-ae8ef.web.app/' className="card-link flex" target='blank'><BsEye className='mr-2 mt-1'></BsEye> Live Site</a>
                    <a href='https://github.com/sakib21103090/Sports-academies-Client' className="card-link flex"><BsGithub className='mr-2 mt-1' target='_blank'></BsGithub> Client Code</a>
                    <a href='https://github.com/sakib21103090/Sports-academies-Server' className="card-link flex"><BsGithub className='mr-2 mt-1' target='_blank'></BsGithub> Server Code</a>
                </div>
        </div>
      </div>
      </div>


      {/* Card 2 */}
      <div className='justify-center items-center flex'>
      <div className="card w-96  text-black shadow-2xl">
        <div className="card-body">
         
        <div className="h-96 carousel carousel-vertical rounded-box">
  <div className="carousel-item h-full">
  <img src={toy1}></img>
  </div> 
  <div className="carousel-item h-full">
  <img src={toy2}></img>
  </div> 
  <div className="carousel-item h-full">
  <img src={toy3}></img>
  </div> 
  <div className="carousel-item h-full">
  <img src={toy4}></img>
  </div> 
  <div className="carousel-item h-full">
  <img src={toy5}></img>
  </div> 
  <div className="carousel-item h-full">
  <img src={toy6}></img>
  </div> 
  <div className="carousel-item h-full">
  <img src={toy7}></img>
  </div>
  <div className="carousel-item h-full">
  <img src={toy8}></img>
  </div>
  <div className="carousel-item h-full">
  <img src={toy9}></img>
  </div>
  <div className="carousel-item h-full">
  <img src={toy10}></img>
  </div>
  <div className="carousel-item h-full">
  <img src={toy11}></img>
  </div>
  <div className="carousel-item h-full">
  <img src={toy12}></img>
  </div>
  
</div>

           
         
          <h2 className="card-title font-bold text-2xl">Animal-Toys-Planet</h2>
          <p className='text-lg'>Technologies </p>

         {/* Technology */}
         <div className='flex text-white '>
          <div className="card-actions justify-end">
            <p className='bg-indigo-700 rounded-xl p-3 hover:bg-indigo-950'>React</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-indigo-700 rounded-xl p-3 ml-2 hover:bg-indigo-950'>Tailwind</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-indigo-700 rounded-xl p-3 ml-2 hover:bg-indigo-950'>daisyUi</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-indigo-700 rounded-xl p-3 ml-2 hover:bg-indigo-950'>Firebase</p>
          </div>
          </div>
          <div className='flex text-white '>
          <div className="card-actions justify-end">
            <p className='bg-indigo-700 rounded-xl p-3 hover:bg-indigo-950'>Node JS</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-indigo-700 rounded-xl p-3 ml-2 hover:bg-indigo-950'>Express JS</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-indigo-700 rounded-xl p-3 ml-2 hover:bg-indigo-950'>MongoDB</p>
          </div>
          </div>
         {/* Link */}
          <div className="flex justify-between text-white mt-5">
                    <a href='https://animal-toys-planet.web.app/' className="card-link flex" target='blank'><BsEye className='mr-2 mt-1'></BsEye> Live Site</a>
                    <a href='https://github.com/sakib21103090/Animal-Toys-Planet-Client' className="card-link flex"><BsGithub className='mr-2 mt-1' target='_blank'></BsGithub> Client Code</a>
                    <a href='https://github.com/sakib21103090/Animal-Toys-Planet-Server' className="card-link flex"><BsGithub className='mr-2 mt-1' target='_blank'></BsGithub> Server Code</a>
                </div>
        </div>
      </div>
      </div>

      {/* Card 3 */}
      <div className='justify-center items-center flex'>
      <div className="card w-96  text-white shadow-2xl">
        <div className="card-body">
        <div className="h-96 carousel carousel-vertical rounded-box">
  <div className="carousel-item h-full img-fluid">
  <img src={c1}></img>
  </div> 
  <div className="carousel-item h-full">
  <img src={c2}></img>
  </div> 
  <div className="carousel-item h-full">
  <img src={c3}></img>
  </div> 
  <div className="carousel-item h-full">
  <img src={c4}></img>
  </div> 
  <div className="carousel-item h-full">
  <img src={c5}></img>
  </div> 
  <div className="carousel-item h-full">
  <img src={c6}></img>
  </div> 
  <div className="carousel-item h-full">
  <img src={c7}></img>
  </div>
  
</div>


      
          <h2 className="card-title font-bold text-black text-2xl">Chinese-Food-Dishes
</h2>
          <p className='text-lg text-black '>Technologies</p>

          {/* Technology */}
          <div className='flex text-white '>
          <div className="card-actions justify-end">
            <p className='bg-indigo-700 rounded-xl p-3 hover:bg-indigo-950'>React</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-indigo-700 rounded-xl p-3 ml-2 hover:bg-indigo-950'>Tailwind</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-indigo-700 rounded-xl p-3 ml-2 hover:bg-indigo-950'>daisyUi</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-indigo-700 rounded-xl p-3 ml-2 hover:bg-indigo-950'>Firebase</p>
          </div>
          </div>
          <div className='flex text-white '>
          <div className="card-actions justify-end">
            <p className='bg-indigo-700 rounded-xl p-3 hover:bg-indigo-950'>Node JS</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-indigo-700 rounded-xl p-3 ml-2 hover:bg-indigo-950'>Express JS</p>
          </div>
          <div className="card-actions justify-end">
            <p className='bg-indigo-700 rounded-xl p-3 ml-2 hover:bg-indigo-950'>MongoDB</p>
          </div>
          </div>
         {/* Link */}
          <div className="flex justify-between text-white   mt-5">
                    <a href='https://chinese-food-dishes.web.app/' className="card-link flex" target='blank'><BsEye className='mr-2 mt-1'></BsEye> Live Site</a>
                    <a href='https://github.com/sakib21103090/Sports-academies-Client' className="card-link flex"><BsGithub className='mr-2 mt-1' target='_blank'></BsGithub> Client Code</a>
                    <a href='https://github.com/sakib21103090/Chinese-Food-dishes-server' className="card-link flex"><BsGithub className='mr-2 mt-1' target='_blank'></BsGithub>Server Code</a>
                </div>
                </div>
        </div>
      </div>

    </div>
  
  </>
  </div>
   
  );
};
 
export default Projects;