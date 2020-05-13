import React from 'react';
import Hero from '../components/hero.js'

function ContactPage(props) {
    return(
        <Hero title={props.title} />
    );
}

export default ContactPage