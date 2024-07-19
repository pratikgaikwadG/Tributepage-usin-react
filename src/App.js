import HeaderByFunction from './components/Header'
import Navbar from './components/Navbar';
import Button from './components/Button';
import BioSection from './components/BioSection';
import Achievments from './components/Achievments';
import Timeline from './components/Timeline';

function App() {
  return (
   <>
   < HeaderByFunction name= "" />
   <Navbar />
   <BioSection/>
   <Achievments/>
   <Timeline/>  
    <div className='container'>
    
    <h1 style ={{textAlign:"center"}}></h1>
    
    </div>
   </>
  );
}

export default App;
