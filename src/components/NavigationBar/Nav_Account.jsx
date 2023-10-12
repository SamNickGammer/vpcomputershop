import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { Random_User_Image } from '../../assets';

const Nav_Account = () => {
    const [toggleAccounts, setToggleAccounts] = React.useState(false)
    const menuRef = React.useRef();

    const toggleOpenCloseAccount = () => {
        setToggleAccounts(!toggleAccounts)
    }

    React.useEffect(() => {
        const handleClickOutside = (event) => {
          if (menuRef.current && !menuRef.current.contains(event.target)) {
            setToggleAccounts(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    return (
        <div className="nav__accounts" ref={menuRef}>
            <div className="nav__accounts_user" onClick={toggleOpenCloseAccount} >
                <img src={Random_User_Image} alt="User" />
            </div>
            {
                toggleAccounts && <div className='nav__accounts_dock'>
                    <div className='nav__accounts_dock_users'>
                        <div className='nav__accounts_dock_users-name'>Sam Nick Gammer</div>
                        <span className='nav__accounts_dock_users-email'>omprakash121samuni@gmail.com</span>
                    </div>
                </div>
            }
            <div className="nav__accounts_cart">
                <FiShoppingCart style={{ height: "25px", width: "25px" }} />
            </div>
            <div className="nav__accounts_admin">Admin</div>
        </div>
    )
}

export default Nav_Account