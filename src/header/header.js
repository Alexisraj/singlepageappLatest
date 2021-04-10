import './header.css';
import Typed from 'react-typed';

function Header (){
return (
<div className='header'>
    <p>This is test App</p>
    <Typed 
        backDelay={200}
        strings={['We are welcoming you to','React Champianship Program']}
                    typeSpeed={200}
                    loop
    />
</div>);
}

export default Header;