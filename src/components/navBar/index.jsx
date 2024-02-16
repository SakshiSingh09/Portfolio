import React, { useState } from 'react'
import {FaBars ,FaReact} from 'react-icons/fa'
import {HiX} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import data from '../constant';
import './styles.scss';

const Navbar = () => {
    const [toggleIcon, settoggleIcon] = useState(false);

    function handletoggleIcon(){
        settoggleIcon(!toggleIcon);
    }
   
  return (
    <div>
      <nav className='navbar'>
        <div className='navbar__container'>
            <Link to='/' className='navbar__container__logo'>
                <FaReact size={30} />
            </Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>
            {
                data.map( (item,key) => {
                    return(
                        <li key={key} className='navbar__container__menu__item'>
                            <Link className='navbar__container__menu__item__links' to={item.to}>
                                {item.label}
                            </Link> 
                        </li>
                    )
                })
            }
        </ul>
        <div className='nav-icon' onClick={handletoggleIcon}>
            { toggleIcon ? <HiX size={30}/> : <FaBars size={30}/> }
        </div>
      </nav>
    </div>
  )
}

export default Navbar
