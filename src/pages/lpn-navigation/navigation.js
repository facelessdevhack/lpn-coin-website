import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './navigation.css';
import {Button} from '@material-ui/core'

class Navbar extends React.Component {
    render() {
        return (
            <div className='navbar'>
                <div>
                    <Link id='webName'>
                        <img src={logo} />mazo
                    </Link>
                </div>
                <nav style={{width: '80vw'}}>
                    <ul className='nav-menu'>
                        <li>
                            <Link className="NavLinkers">Home</Link>
                        </li>
                        <li>
                            <Link className="NavLinkers">How It Works</Link>
                        </li>
                        <li>
                            <Link className="NavLinkers">Token Sale</Link>
                        </li>
                        <li>
                            <Link className="NavLinkers">White Paper</Link>
                        </li>
                        <li>
                            <Link className="NavLinkers">Roadmap</Link>
                        </li>
                        <li>
                        <Button variant="outlined" id='loginBtn' href='/login'>
                            Login
                        </Button>
                        </li>
                        <li>
                        {/* <Button variant="outlined" id='loginBtn'>
                            Sign Up
                        </Button> */}
                        </li>
                        {/* <li>
                            <Link className="NavLinkers">TEAM</Link>
                        </li> */}
                        {/* <li>
                            <Link className="NavLinkers">FAQ</Link>
                        </li> */}
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Navbar
// function Navbar() {
//     const [sidebar, setSidebar] = useState(false);
//     const showSidebar = () => setSidebar(!sidebar);
//     Navbar.handleClickOutside = () => setSidebar(false);
//     return (
//         <>
//             <div className='navbar'>
//                 <Link className='menu-bars'>
//                     <img alt='' src={hamburger} onClick={showSidebar} />
//                     <img alt='' src={logo} className='toplogo' />
//                     <div></div>
//                 </Link>
//             </div>
//             <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
//                 <ul className='nav-menu-items'>
//                     <li className='navbar-toggle'>
//                         <Link className='side-logo'>
//                             <img alt='' src={logo} />
//                             {/* <BiChevronLeft className='chevronleft' onClick={showSidebar} /> */}
//                         </Link>
//                         {/* <img alt='' src={hamburger} onClick={showSidebar} /> */}
//                     </li>
//                     {SidebarData.map((item, index) => {
//                         return (
//                             <li key={index} className={item.cName}>
//                                 <Link to={item.path}>
//                                     {item.icon}
//                                     <span id='navSpan'>{item.title}</span>
//                                 </Link>
//                             </li>
//                         )
//                     })}
//                 </ul>
//             </nav>
//         </>
//     )
// }