import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Posibility from '../components/Posibility'
import Statistics from '../components/Statistics'
import ControlApp from '../components/CntrolApp'
import ChoiceUs from '../components/ChoiceUs'
import Programs from '../components/Programs'
import Clients from '../components/Clients'
import SearchApp from '../components/SearchApp'
import Footer from '../Footer'
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
            <Clients/>
            <SearchApp/>
            <Footer/>
        </>
    )
}

export default Main;