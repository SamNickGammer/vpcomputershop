import React from 'react'
import { LogoVP_BIG_Black } from "../../assets/index.js"
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
// import { useSelector } from 'react-redux';

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const [clicked, setClicked] = React.useState(false)

    const toggleMenu = () => {
        if (isMenuOpen) {
            setClicked(true)
        } else {
            setClicked(false)
        }

        setTimeout(() => {
            setIsMenuOpen(!isMenuOpen)
        }, 200)
    }
    return (
        <div className='nav'>
            <div className='nav_wrapper'>
                <div onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <>
                            <FiX style={{ height: "20px", width: "20px" }} />
                            <div className={clicked ? "drw__mobile drw__close" : "drw__mobile"} style={{ top: "50px", height: "calc(100vh - 50px)" }}>
                                <div className='drw__container'>

                                </div>
                            </div>
                        </>

                    ) : (
                        <FiMenu style={{ height: "20px", width: "20px" }} />
                    )}
                </div>

                <div className="nav__title">
                    <div className="nav__title_logo">
                        <img src={LogoVP_BIG_Black} alt="Logo" />
                    </div>
                    <div className="nav__title_name">Computer Shop</div>
                </div>

                <div className='nav__account'>
                    {/* Todo : Make Sure Name is not greater than 9 letters. */}
                    {/* Todo : Make Sure that name only appear when user is logged-in */}
                    <div className='nav__account_users-name'>Hello Bro</div>
                    <FiShoppingCart style={{ height: "20px", width: "20px" }} />
                    <div className='nav__account_cart-count'>9</div>
                    {/* Todo : add If the count exceed 9 then need to show +9 only */}
                </div>
            </div>
        </div>
    )
}

export default NavigationBar