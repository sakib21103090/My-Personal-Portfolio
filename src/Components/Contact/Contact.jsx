import { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import Aos from 'aos';
import { motion } from "framer-motion"
import bgc from '../../../src/assets/bge.png'


const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    const form = useRef();
    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_m45m7qy', 'template_844xcoo', form.current, 'U7JVUVd2_FGgPJMVt')
            .then((result) => {
                console.log(result.text);
                toast.success("Successfully Sent Email")
            }, (error) => {
                console.log(error.text);
            });
            event.target.reset();
    };

    return (
        <div data-aos='fade-up' id='contact' className='lg:p-15 p-4 mt-12'>
        <motion.p initial={{x :'-100vw'}} animate={{x:0}} transition={{delay:0.5,duration:0.5}}className='text-4xl mx-[460px] 2xl:text-5xl font-bold px-5 py-2 mb-6 pb-2 text-center hover:animate-bounce  text-white shadow-lg bg-blue-700 rounded-full'>
              Contact Me
            </motion.p>
        <div className='lg:flex justify-evenly p-14 mb-10'>
            <img className=' rounded-2xl hover:animate-spin' src={bgc} alt="" />
            <div data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500" className='rounded-xl lg:mt-0 mt-12 lg:p-8 shadow-2xl'>
                <h1 className='title text-center text-white text-3xl font-bold mb-8'>Text Me</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='login-form flex justify-evenly'>
                        <label htmlFor="name" className='text-xl  text-white '>Name : </label>
                        <input type="text" className='p-2 lg:w-80 bg-purple-200 text-white rounded-xl' name='name' id='' placeholder='Enter Your Name' required/>
                    </div>
                    <br />
                    <div className='login-form flex justify-evenly'>
                        <label htmlFor="email" className='text-xl  text-white '>Email : </label>
                         <input type="email" className='p-2 lg:w-80  bg-purple-200 text-black rounded-xl' name='email' id='' placeholder='Your Email Address' required />
                    </div>
                    <br />
                    
                    <textarea  name='message' className="textarea textarea-success text-black bg-purple-200 lg:w-96 w-96 h-50 mb-5 ml-3" placeholder="Send Message...." required></textarea> <br />
                    <button type='submit' className='btn bg-indigo-700 btn-neutral ml-3 mb-5'>Submit</button>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Contact;