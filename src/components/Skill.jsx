import React from 'react';
import styled from 'styled-components';

const Skill = props => {

    const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
    `;
    
    const Wrapper = styled.div`
        min-height: 94vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `

    return(
    <Wrapper>
        <Title>Languages: JavaScript(ES6, Node.js), Python, Java, HTML5, CSS, SQL Frameworks/Libraries: React, Express, Mongoose, Flask, Jinja2, jQuery, Spring Boot, Bootstrap, Material-UI Databases MySQL, MongoDB Tools AJAX,  REST API,  JSON, PostMan, Socket.io, AWS(EC2), Spring Tool Suite, Git, Github</Title>
    </Wrapper>
    );
}

export default Skill;