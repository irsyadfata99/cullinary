import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './globalstyle';
import Hero from './components/Hero/IndexHero';
import Products from './components/Products/IndexPro';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature/IndexFeature';
import Footer from './components/Footer/IndexFooter';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose Your Menu' data={productData}/>
      <Feature />
      <Products heading='Choose Your Bitterness' data={productDataTwo}/>
      <Footer />
    </Router>
  );
}

export default App;
