import react from '../../../assets/reactjs.svg'
import myPhoto from '../../../assets/e9cd8fcc-57b5-45db-9fc5-92f7ac38521d.jpg'
import node from '../../../assets/nodejs.svg'
import mongo from '../../../assets/mongodb.svg'
import js from '../../../assets/java-script.png'
import { motion } from "framer-motion"
import resume from '../../../../public/sakibur resume mern stuck.pdf'
const Header = () => {

  return (
    <div className='w-full flex flex-col lg:flex-row px-4 md:px-10 gap-10 2xl:gap-20 lg:py-20'  id='header'>
      <div
        className='flex flex-col mb-20 lg:mb-0'
        data-aos='fade-down'
        data-aos-offset='100'
        data-aos-delay='50'
        data-aos-duration='1000'
        data-aos-easing='ease-in-out'>
        
        <div className='flex gap-4 items-center my-4'>
          <h1 className='text-neutral-100 text-4xl md:text-5xl 2xl:text-7xl font-bold text-center'>  Me
          </h1>
          <div className='flex items-center justify-center text-white shadow-lg bg-blue-800 rounded-full'>
            <motion.p initial={{x :'-100vw'}} animate={{x:0}} transition={{delay:0.5,duration:0.5}}className='text-4xl 2xl:text-5xl font-bold px-5 py-2 pb-2 text-center hover:animate-bounce  text-white shadow-lg bg-indigo-700 rounded-full'>
              Developer
            </motion.p>
          </div>
        </div>

        <h1 className=' text-3xl  font-extrabold text-black tracking-wider'>
        Md.SAKIBUR RAHMAN PK.

        </h1>

        <p className='text-2xl lg:w-[700px] text-white mt-5 2xl:mt-10'>
        Currently I am a student at the International University of Agriculture Business and Technology (IUBAT) Bachelor of Science (B.Sc), Informatics and Engineering .I. have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
        </p>

        <div className='mt-10 flex gap-10'>
          <motion.a animate={{ rotate:-360 }} transition={{delay:0.5,duration:1.5}} className=' bg-indigo-700 text-lg text-white font-semibold rounded-md py-3 px-5 hover:bg-cyan-500 ' href={resume} download="sakibur resume mern stuck.pdf">Download Resume
          </motion.a>

          <a href='#Projects'>
            <motion.button animate={{ rotate:-360 }} transition={{delay:0.5,duration:1.5}}  className='text-lg text-white font-semibold rounded-md py-3 px-5 bg-black'>
              Projects
            </motion.button>
          </a>
        </div>
      </div>

      <div className='w-full  flex-1 flex justify-center'>
        <div className='w-[400px] h-[400px] md:w-[400px] md:h-[400px] 2xl:w-[500px] 2xl:h-[500px]  border rounded-full border-green-600 relative  md:mt-20 lg:mt-0 flex items-center justify-center '>
          <motion.img
            src={myPhoto}
            animate={{ rotate:360 }} transition={{delay:0.5,duration:1.5}} className= 'w-[380px] h-[380px]  absolute -top-6 mt-8  rounded-full md:-top-6'
           
          />
          <motion.div initial={{x :'1vw'}} animate={{x:0}}transition={{delay:0.5,duration:0.5}}
            className='relative w-full  h-full rounded-full'
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
          >
            <img
            src={node}
              className='absolute top-7 md:top-20 left-3 md:-left-3 2xl:left-2 w-12 h-12 md:w-16 md:h-16'
            />
            <img
            src={react}
              className='absolute bottom-7 left-3 md:bottom-10 2xl:left-12 w-12 h-12 md:w-16 md:h-16'
            />
            <img
           src={js}
              className='absolute top-5 text-yellow-300 md:top-14 right-3 md:-right-3 2xl:right-2 w-12 h-12 md:w-16 md:h-16'
            />
            <img
            src={mongo}
              className='absolute bottom-7 right-3 md:bottom-10 2xl:right-12 w-12 h-12 md:w-16 md:h-16'
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};



export default Header;