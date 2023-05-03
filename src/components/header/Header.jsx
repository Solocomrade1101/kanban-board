import {React, useState} from 'react';
import header from './header.module.css'
import ava from '../../images/userAva.svg'
import arrowD from '../../images/arrow-down.svg'
import arrowU from '../../images/arrow-up.svg'

function Header(props) {
   const [isActive, setIsActive] = useState(false)
   const handleClick = () => {
      setIsActive(!isActive)
   }

   return (
      <div className={header.header}>
         <div className={header.content}>
            <div className={header.header__title}>
               <h1 className={header.title}>Awesome Kanban Board</h1>
            </div>
            <div onClick={handleClick} className={header.header__user}>
               <div className={header.user}>
                  <img className={header.user__ava} src={ava} alt="avatar" />
                  <img style={{display: isActive ? 'none' : ''}} className={header.user__arrowD} src={arrowD} alt="arrow" />
                  <img style={{display: isActive ? 'block' : 'none'}} className={header.user__arrowU} src={arrowU} alt="arrow" />
               </div>
               <div style={{display: isActive ? 'flex' : 'none'}} className={header.modal}>
                  <a className={header.modal__profile} href="#">Profile</a>
                  <a className={header.modal__LogOut} href="#">Log Out</a>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Header;