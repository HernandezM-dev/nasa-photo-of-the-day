import React from "react";
import styled from 'styled-components'

const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    background-color: midnightblue;
   

`


const Header = props =>{

    return(
        <StyledHeader>
            <h1>NASA Photo of The Day!</h1>
            <h3>by Michael Hernandez</h3>
        </StyledHeader>
    )

}

export default Header;

