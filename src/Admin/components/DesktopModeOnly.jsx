import React from 'react'
import { LogoVP_BIG, LogoVP_FullNameOld } from "../../assets/index"
import { LaptopForDesktopScreen } from '../assets'

const DesktopModeOnly = () => {
    return (
        // Todo : Make the size of image little less, in loading image is not coming faster.
        <div className='dmo'>
            <div className='dmo__lgo'>
                <img src={LogoVP_BIG} alt="" />
            </div>
            <div className='dmo__mwm'>
                <img src={LaptopForDesktopScreen} alt="" className='dmo__mwm-lpi' />
                <div className='dmo__mwm-title'>Kindly Switch to Desktop Mode</div>
            </div>
            <div className='dmo__fot'>
                <div>Developed by ❤️ Sam Nick</div>
                <div>© V&P Computer || ScorpTech</div>
            </div>
        </div>
    )
}

export default DesktopModeOnly