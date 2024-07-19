import Button from "./Button";
import '../App.css'
import virat from '../assets/download.jpeg'

function Navbar(){

    return(
        <div className="nav">
            <div className="left">
                <img src={virat} alt="logo image" className="logoimg"/>
            </div>
            <div className="right">
                <Button data ='About'></Button>
                <Button data ='Centuries'></Button>
                <Button data ='Achievments'></Button>
            </div>
        </div>
    );

}

export default Navbar