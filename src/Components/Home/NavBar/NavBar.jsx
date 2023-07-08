
import { AiOutlineHome, AiOutlineProject, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { GiSkills} from "react-icons/gi";
const NavBar = () => {
    return (
        <div >
        <div className="navbar text-white bg-base-800 ">
            
            <div className="navbar-start"> 
                    <div className="navbar-center p-5 mb-15 text-white lg:hidden flex justify-center items-center fixed z-10 w-full  bottom-0 rounded-xl">
                    <ul className="menu menu-horizontal px-1 text-2xl text-white bg-purple-900 rounded-xl bg-opacity-30 font-bold">
                    <a className='ml-10 mt-2' href='/'><AiOutlineHome /></a>
                    <a className='ml-10 mt-2' href='#project'><AiOutlineProject /></a>
                    <a className='ml-10 mt-2' href='#mySelf'><AiOutlineUser /></a>
                    <a className='ml-10 mt-2' href='#skills'><GiSkills/></a>
                    <a className='ml-10 mr-10 mt-2 mb-2' href='#contact'> <AiOutlineMessage /></a>
                </ul>
                </div>
           
        </div>
        
       
        <div>     
        </div>
        <div className=" navbar-end">
        <div className="navbar-center mx-12 hidden lg:flex">
          <ul className="menu menu-horizontal text-2xl gap-4 px-1">
            <a className='text-white' href="/">Home </a> <hr />
             <a className='text-white' href="#skills">Skills </a><hr />
             <a className='text-white' href="#Projects">Projects </a><hr />
             <a className='text-white' href='#contact'>Contact</a>
          </ul>
        </div>
        </div>
      </div>
      </div>


    );
};

export default NavBar;