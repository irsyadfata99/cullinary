import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Hero from '../components/Hero/IndexHero'
import { GlobalStyle } from '../globalstyle'
import Feature from '../components/Feature/IndexFeature'
import Footer from '../components/Footer/IndexFooter'
import Division from '../components/Division/IndexDiv'
import Product from '../components/Products/IndexPro'
import {productData } from '../components/Products/data'

const Home = () => {
    return (
        <Router>
            <GlobalStyle />
            <Hero />
            <Feature />
            <Division />
            <Product heading='Check out our lastest gallery' data={productData}/>
            <Footer />
        </Router>
    )
}

export default Home
