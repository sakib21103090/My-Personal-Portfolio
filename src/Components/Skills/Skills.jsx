import SkillBar from 'react-skillbars';
import development from '../../assets/skills.jpg'
import Aos from 'aos';
import { useEffect } from 'react';
import { motion } from "framer-motion"
const Skills = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);
    const skills = [
        { type: 'HTML', level: 94 },
        { type: 'CSS', level: 96 },
        { type: 'Tailwind', level: 98 },
        { type: 'Bootstrap', level: 97 },
        { type: 'Javascript ', level: 95 },
        { type: 'React.js', level: 95 },
        { type: 'Node.JS', level: 70 },
        { type: 'Express.Js', level: 90 },
        { type: 'Mongodb', level: 89 },
        { type: 'next.js', level: 40 },
    ];
    const colors = {
        bar: "	#0D52DB",
        title: {
            text: "#ffff",
            background: "#1035AC"
        }
    };
    return (
        <div className='mt-20' id='skills'>
        <motion.p initial={{x :'-100vw'}} animate={{x:0}} transition={{delay:0.5,duration:0.5}}className='text-4xl lg:mx-[460px] text-center  2xl:text-5xl font-bold px-5 py-2 mb-6 pb-2 text-center hover:animate-bounce  text-white shadow-lg bg-blue-700 rounded-full'>
              My Skills
            </motion.p>
        <div className='justify-evenly lg:flex  lg:justify-center items-center'>
            
            <div className='mx-auto items-center flex'>
            <img data-aos='fade-right' className=' h-[500px] mt-7 mr-4 rounded-full  border-red-500 hover:animate-pulse border-8' src={development} alt="" />
            </div>
            <div data-aos='fade-left' className='lg:w-[500px] w-3/4 mt-5 sm:mt-5  mx-auto items-center '>
                <SkillBar  skills={skills} colors={colors} />
            </div>
           
           
        </div>
        </div>
    );
};


export default Skills;