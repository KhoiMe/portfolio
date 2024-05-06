import './index.css'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import KnowMe from './components/KnowMe';


function App() {

    return (
        <>

            <NavBar />
            <div className='section'>
                <Hero />
            </div>
            <div className='section'>
                <KnowMe />
            </div>
        </>
    );
}

export default App
