import React from "react"
import styled from "styled-components"
import theme from "../styles/theme"


const About = () => {
return (
    <>
        <Me>최재은</Me>
        <Job>프론트엔드 개발자</Job>
    </>
)
}

export default About


const Me = styled.h1`
    font-size: 24px;
    color: ${({ theme: { colors } }) => colors.head};
`
const Job = styled.h2`
    font-size: 18px;
    color: ${({ theme: { colors } }) => colors.subhead};
`
