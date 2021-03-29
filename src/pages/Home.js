import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Badges from '../components/Badges'
import City from '../components/City'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
    return (
        <div>
            <Header />
            <About />
            <Badges />
            <City />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
