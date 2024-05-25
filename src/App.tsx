import './index.css'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import KnowMe from './components/KnowMe';
import Footer from './components/Footer';
import Projects from './components/Projects';
import GetInTouch from './components/GetInTouch';


function App() {

    return (
        <>
            <NavBar />
            <div className='section'>
                <Hero />
            </div>
            <div className='section'>
                <Projects />
            </div>
            <div className='section'>
                <KnowMe />
            </div>
            <div className='section'>
                <GetInTouch />
            </div>
            <div className='section'>
                <Footer />
            </div>
        </>
    );
}

export default App
