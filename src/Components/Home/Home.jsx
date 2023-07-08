import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Header from "./Header/Header";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Skills></Skills>
            <About></About>
            
            <Projects></Projects>
            <Contact></Contact>
            this is home
        </div>
    );
};

export default Home;