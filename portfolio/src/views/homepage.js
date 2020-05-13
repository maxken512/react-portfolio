import React from 'react';
import Hero from '../components/hero.js'

function HomePage(props) {
    return(
        <Hero title={props.title} />
    )
};

export default HomePage;