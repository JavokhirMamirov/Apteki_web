import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Posibility from '../components/Posibility'
import Statistics from '../components/Statistics'
import ControlApp from '../components/CntrolApp'
const Main = () =>{
    return (
        <>
            <Menu/>
            <Header/>
            <Posibility/>
            <Statistics/>
            <ControlApp/>
        </>
    )
}

export default Main;