import React from 'react';
import AddService from '../../AddService/AddService';
import Login from '../../Login/Login/Login';
import Register from '../../Login/Register/Register';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Service/Services';


const Home = () => {
    return (
        <div>
        <Navigation></Navigation>
         <Banner></Banner>
         <About></About>
        <Services></Services>
         <Login/>
         <Register/>
         <AddService/>
         <Footer></Footer>
        </div>
    );
};

export default Home;