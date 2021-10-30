import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Posibility from '../components/Posibility'
import Statistics from '../components/Statistics'
import ControlApp from '../components/CntrolApp'
import ChoiceUs from '../components/ChoiceUs'
import Programs from '../components/Programs'
const Main = () =>{
    return (
        <>
            <Menu/>
            <Header/>
            <Posibility/>
            <Statistics/>
            <ControlApp/>
            <ChoiceUs/>
            <Programs/>
        </>
    )
}

export default Main;