import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar/NavigationBar'

function AppLayout() {
    return (
        <>
            <NavigationBar />
            <Outlet />

        </>
    )
}

export default AppLayout