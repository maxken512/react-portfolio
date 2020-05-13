import React from 'react';
import Hero from '../components/hero.js'

function AboutPage(props) {
    return(
        <Hero tite={props.title} />
    );
}

export default AboutPage