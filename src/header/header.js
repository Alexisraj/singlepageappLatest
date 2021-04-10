import './header.css';
import Typed from 'react-typed';
import Clock from 'react-live-clock';


function Header (){
return (
   
    <div className='header'>
        <Typed 
            backDelay={200}
            strings={['We are welcoming you to','React Champianship Program']}
                        typeSpeed={200}
                        loop
        />
        <br />
        <Clock format={'h:mm:ssa'} ticking={true} />
    </div>

);
}

export default Header;