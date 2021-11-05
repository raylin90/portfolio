import React from 'react';
import styled from 'styled-components';

const About = props => {

    const Wrapper = styled.div`
        min-height: 94vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `

    return(
        <Wrapper>
            <h1>Ray Lin</h1>
            <p>HI, I'M A SOFTWARE DEVELOPER IN NEW YORK</p>
        </Wrapper>
    )
}

export default About;