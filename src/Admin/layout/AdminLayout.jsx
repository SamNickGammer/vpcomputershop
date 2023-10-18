import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { updateScreen } from '../../redux/reducer/screenSize/screenSizeSlice'
import DesktopModeOnly from '../components/DesktopModeOnly'

const AdminLayout = () => {
  const screenSize = useSelector((state) => state.screen)
  const dispatch = useDispatch();

  window.addEventListener('resize', () => {
    dispatch(updateScreen({
      width: window.screen.width,
      height: window.screen.height
    }))
  })

  return (
    <>
      {screenSize.width < 999 ? (
        <DesktopModeOnly />
      ) : (
        <Outlet />
      )}
    </>
  )
}

export default AdminLayout