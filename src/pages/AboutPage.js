import React from 'react';

import Content from '../components/Content';
import Hero from '../components/Hero'

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title}/>

            <Content>
                <h5>I am a full-stack developer.</h5>

                <p> Pursuing my Bachelor’s Degree in Computer Science enkindled a passion for the art of software development; I strive to solve complex problems with simple, yet elegantly efficient solutions. I primarily use Java and more recently Kotlin, but picking up a new language or framework isn’t a problem--I pride myself in my flexibility and adaptability in new environments.</p>

                <h5>I am a streamer.</h5>

                <p>Video games have been a major influence in my life and was the initial driving factor in pursuing Computer Science.  Through streaming, I aim to share that love for games with my audience, and in turn, I hope to create and grow my own community--because who doesn’t love making new friends?</p>

                <h5>I am a mentor.</h5>

                <p></p>
            </Content>
        </div>
    );

}

export default AboutPage;